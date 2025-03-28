import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define player schema for tournament registration
export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  playerName: text("player_name").notNull(),
  inGameName: text("in_game_name").notNull(),
  uid: text("uid").notNull().unique(),
  rulesAgreement: boolean("rules_agreement").notNull().default(false),
});

// Create insert schema with validation rules
export const insertPlayerSchema = createInsertSchema(players)
  .pick({
    playerName: true,
    inGameName: true,
    uid: true,
    rulesAgreement: true,
  })
  .extend({
    playerName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters"),
    inGameName: z
      .string()
      .min(2, "In-game name must be at least 2 characters")
      .max(30, "In-game name must be at most 30 characters"),
    uid: z
      .string()
      .regex(/^\d{9,12}$/, "Enter a valid Free Fire UID (9-12 digits)"),
    rulesAgreement: z
      .boolean()
      .refine((val) => val === true, {
        message: "You must agree to the tournament rules",
      }),
  });

// Type definitions
export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;
