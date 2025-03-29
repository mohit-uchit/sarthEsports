import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define player schema for tournament registration
export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  inGameName: text("in_game_name").notNull(),
  uid: text("uid").notNull().unique(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  registeredAt: text("registered_at").notNull().default(new Date().toISOString()),
  agreement: boolean("agreement").notNull().default(false),
});

// Create insert schema with validation rules
export const insertPlayerSchema = createInsertSchema(players)
  .pick({
    fullName: true,
    inGameName: true,
    uid: true,
    email: true,
    phone: true,
    agreement: true,
  })
  .extend({
    fullName: z
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
    email: z
      .string()
      .email("Please enter a valid email address"),
    phone: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
    agreement: z
      .boolean()
      .refine((val) => val === true, {
        message: "You must agree to the tournament rules",
      }),
  });

// Type definitions
export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;
