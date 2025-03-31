import axios from "axios";
import { Player } from "@shared/schema";
import { generateRegistrationId } from "../client/src/lib/utils";

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = "7704214320:AAFqbIVIR8FbwZiRI-_eFpsqILqRYli4JzY";
const TELEGRAM_CHAT_ID = "6588896137";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Sends registration confirmation via Telegram
 * @param player Player information
 * @returns Promise resolving to boolean indicating success
 */
export async function sendRegistrationConfirmation(player: Player): Promise<boolean> {
  try {
    // Generate a registration ID for tracking
    const playerWithId = generateRegistrationId(player);
    
    // Format tournament details
    const tournamentDate = new Date("2025-04-05T19:00:00+05:30");
    const formattedDate = tournamentDate.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const formattedTime = tournamentDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata"
    });

    // Create a structured message for Telegram
    // Note: Telegram supports basic HTML formatting
    const message = `
<b>🎮 SARTH ESPORTS - FREEFIRE BERMUDA SOLO TOURNAMENT 🎮</b>

<b>🎉 Registration Confirmed!</b>

Hello <b>${player.fullName}</b>,

Your registration for the FreeFire Bermuda Solo Tournament has been successfully confirmed. We're excited to have you join us!

<b>Player Details:</b>
🎮 In-Game Name: ${player.inGameName}
🔢 FreeFire UID: ${player.uid ?? "N/A"}
📅 Tournament Date: ${formattedDate}
⏰ Tournament Time: ${formattedTime} IST
📱 Platform: FreeFire (Mobile)

<b>🎟 Your Registration ID: ${playerWithId.registrationId}</b>

<b>⚠️ Important Reminders:</b>
✅ Be online at least 15 minutes before your match
✅ Keep your device fully charged
✅ Ensure you have a stable internet connection
✅ Follow all tournament rules to avoid disqualification
✅ Join our WhatsApp group for tournament updates

WhatsApp Group: https://chat.whatsapp.com/LXE4wwZ9cwlEsvsP4i1ZoY
Tournament Page: http://sarthesports.games

© 2025 Sarth Esports. All rights reserved.
`;

    // Send message via Telegram Bot API
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML"
    });

    if (response.data.ok) {
      console.log("Telegram notification sent successfully:", response.data.result.message_id);
      return true;
    } else {
      console.error("Failed to send Telegram notification:", response.data);
      return false;
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    return false;
  }
}

/**
 * Sends certificate via Telegram
 * @param email Recipient email (kept for compatibility)
 * @param fullName Full name of the player
 * @param inGameName In-game name of the player
 * @param certificatePdf Base64 encoded PDF data
 * @returns Promise resolving to boolean indicating success
 */
export async function sendCertificate(
  email: string,
  fullName: string,
  inGameName: string,
  certificatePdf: string
): Promise<boolean> {
  try {
    // For certificates, since they contain PDF data, we'll send a message
    // informing about the certificate and noting that it's available in the system
    const message = `
<b>🏆 TOURNAMENT CERTIFICATE NOTIFICATION 🏆</b>

Hello <b>${fullName}</b>,

A certificate has been generated for your participation in the FreeFire Bermuda Solo Tournament.

<b>Player Details:</b>
🎮 In-Game Name: ${inGameName}
📧 Email: ${email}

Your certificate is ready and available in our system. You can download it from your player dashboard at http://sarthesports.games/dashboard

© 2025 Sarth Esports. All rights reserved.
`;

    // Send message via Telegram Bot API
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML"
    });

    if (response.data.ok) {
      console.log("Certificate notification sent via Telegram:", response.data.result.message_id);
      return true;
    } else {
      console.error("Failed to send certificate notification:", response.data);
      return false;
    }
  } catch (error) {
    console.error("Error sending certificate notification via Telegram:", error);
    return false;
  }
}