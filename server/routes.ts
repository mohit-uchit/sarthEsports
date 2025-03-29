import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPlayerSchema } from "@shared/schema";
import { ZodError } from "zod";
import fs from "fs";
import path from "path";
import { sendRegistrationConfirmation } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for player registration
  app.post("/api/players/register", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertPlayerSchema.parse(req.body);
      
      // Store player data
      const player = await storage.registerPlayer(validatedData);
      
      // Attempt to save to JSON file
      try {
        const dataDir = path.join(process.cwd(), "data");
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }
        
        const filePath = path.join(dataDir, "players.json");
        
        // Read existing data if file exists
        let players = [];
        if (fs.existsSync(filePath)) {
          const data = fs.readFileSync(filePath, "utf8");
          players = JSON.parse(data);
        }
        
        // Add new player and save
        players.push(player);
        fs.writeFileSync(filePath, JSON.stringify(players, null, 2));
      } catch (fileError) {
        console.error("Error saving to JSON file:", fileError);
        // Continue even if file save fails - we still have in-memory data
      }
      
      // Send confirmation email
      let emailSent = false;
      try {
        if (process.env.SMTP_HOST && process.env.SMTP_USER) {
          emailSent = await sendRegistrationConfirmation(player);
        } else {
          console.log("SMTP environment variables not configured, skipping email");
        }
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
      
      res.status(201).json({ 
        message: "Registration successful", 
        player,
        emailSent
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else if (error instanceof Error) {
        console.error("Registration error:", error.message);
        res.status(400).json({ 
          message: error.message 
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({ 
          message: "Registration failed" 
        });
      }
    }
  });

  // Check if player with UID exists
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

  // Check if player with email exists
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

  // Get tournament registration status
  app.get("/api/tournament/status", async (_req, res) => {
    try {
      const registeredCount = await storage.getRegisteredPlayersCount();
      const maxPlayers = storage.getMaxPlayers();
      const availableSlots = maxPlayers - registeredCount;
      
      res.json({
        registeredCount,
        maxPlayers,
        availableSlots,
        isFull: registeredCount >= maxPlayers,
      });
    } catch (error) {
      console.error("Error fetching tournament status:", error);
      res.status(500).json({ message: "Error fetching tournament status" });
    }
  });

  // Get all registered players
  app.get("/api/players", async (_req, res) => {
    try {
      const players = await storage.getAllPlayers();
      res.json(players);
    } catch (error) {
      console.error("Error fetching players:", error);
      res.status(500).json({ message: "Error fetching players" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
