import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPlayerSchema } from "@shared/schema";
import { ZodError, z } from "zod";
import { sendRegistrationConfirmation } from "./emailService";
import { sendCertificate } from "./certificateService";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/players/register", async (req, res) => {
    try {
      const validatedData = insertPlayerSchema.parse(req.body);
      const player = await storage.registerPlayer(validatedData);
      let notificationSent = false;
      
      try {
        // Use Telegram notification instead of email
        notificationSent = await sendRegistrationConfirmation(player);
        if (!notificationSent) {
          console.log("Failed to send Telegram notification, but registration was successful");
        }
      } catch (notificationError) {
        console.error("Failed to send Telegram notification:", notificationError);
      }
      
      res.status(201).json({ 
        message: "Registration successful", 
        player, 
        notificationSent // renamed from emailSent to reflect the change
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else if (error instanceof Error) {
        console.error("Registration error:", error.message);
        res.status(400).json({ message: error.message });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Registration failed" });
      }
    }
  });

  app.get("/api/players/check-uid/:uid", async (req, res) => {
    try {
      const { uid } = req.params;
      const player = await storage.getPlayerByUID(uid);
      res.json({ exists: !!player });
    } catch (error) {
      console.error("Error checking UID:", error);
      res.status(500).json({ message: "Error checking UID" });
    }
  });

  app.get("/api/players/check-email/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const player = await storage.getPlayerByEmail(email);
      res.json({ exists: !!player });
    } catch (error) {
      console.error("Error checking email:", error);
      res.status(500).json({ message: "Error checking email" });
    }
  });

  app.get("/api/tournament/status", async (_req, res) => {
    try {
      const registeredCount = await storage.getRegisteredPlayersCount();
      const maxPlayers = storage.getMaxPlayers();
      const availableSlots = maxPlayers - registeredCount;
      res.json({ registeredCount, maxPlayers, availableSlots, isFull: registeredCount >= maxPlayers });
    } catch (error) {
      console.error("Error fetching tournament status:", error);
      res.status(500).json({ message: "Error fetching tournament status" });
    }
  });

  app.get("/api/players", async (_req, res) => {
    try {
      const players = await storage.getAllPlayers();
      const playersWithIds = players.map(player => ({
        ...player,
        registrationId: `FF-${player.id.toString().padStart(4, '0')}`
      }));
      res.json(playersWithIds);
    } catch (error) {
      console.error("Error fetching players:", error);
      res.status(500).json({ message: "Error fetching players" });
    }
  });

  app.post("/api/certificate/send", async (req, res) => {
    try {
      const certificateSchema = z.object({
        email: z.string().email("Invalid email address"),
        fullName: z.string().min(2, "Full name is required"),
        inGameName: z.string().min(2, "In-game name is required"),
        certificatePdf: z.string().min(100, "Certificate PDF is required"),
      });

      const result = certificateSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid certificate data", errors: result.error.errors });
      }

      const { email, fullName, inGameName, certificatePdf } = req.body;

      if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
        console.log("SMTP environment variables not configured, skipping certificate email");
        return res.status(500).json({ message: "Email service not configured", emailSent: false });
      }

      const emailSent = await sendCertificate(email, fullName, inGameName, certificatePdf);

      if (emailSent) {
        res.status(200).json({ message: "Certificate sent successfully", emailSent: true });
      } else {
        res.status(500).json({ message: "Failed to send certificate email", emailSent: false });
      }
    } catch (error: any) {
      console.error("Certificate email error:", error);
      res.status(500).json({ 
        message: "Failed to send certificate", 
        error: error.message || "Unknown error", 
        smtpResponse: error.response || "No SMTP response" 
      });
    }
  });

  app.post("/api/admin/normalize-data", async (_req, res) => {
    try {
      // @ts-ignore - Call the method we added
      await storage.normalizeExistingData();
      res.json({ message: "Player data normalized successfully" });
    } catch (error) {
      console.error("Error normalizing data:", error);
      res.status(500).json({ message: "Error normalizing data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}