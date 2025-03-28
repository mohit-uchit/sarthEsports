import { z } from "zod";

// Basic validation patterns
export const patterns = {
  uid: /^\d{9,12}$/, // 9-12 digit Free Fire UID
};

// Error messages
export const errorMessages = {
  playerName: {
    required: "Please enter your real name",
    min: "Name must be at least 2 characters",
    max: "Name must be at most 50 characters",
  },
  inGameName: {
    required: "Please enter your in-game name",
    min: "In-game name must be at least 2 characters",
    max: "In-game name must be at most 30 characters",
  },
  uid: {
    required: "Please enter your Free Fire UID",
    pattern: "Enter a valid Free Fire UID (9-12 digits)",
  },
  rulesAgreement: {
    required: "You must agree to the tournament rules",
  },
};

// Validation schema for player registration
export const playerValidationSchema = z.object({
  playerName: z
    .string()
    .min(2, errorMessages.playerName.min)
    .max(50, errorMessages.playerName.max)
    .nonempty(errorMessages.playerName.required),
  inGameName: z
    .string()
    .min(2, errorMessages.inGameName.min)
    .max(30, errorMessages.inGameName.max)
    .nonempty(errorMessages.inGameName.required),
  uid: z
    .string()
    .nonempty(errorMessages.uid.required)
    .regex(patterns.uid, errorMessages.uid.pattern),
  rulesAgreement: z
    .boolean()
    .refine((val) => val === true, {
      message: errorMessages.rulesAgreement.required,
    }),
});
