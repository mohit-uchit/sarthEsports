import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPlayerSchema } from "@shared/schema";
import { ZodError } from "zod";
import fs from "fs";
import path from "path";

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
      
      res.status(201).json({ 
        message: "Registration successful", 
        player 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({ 
          message: "Registration failed" 
        });
      }
    }
  });

  // Get all registered players (admin access)
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
