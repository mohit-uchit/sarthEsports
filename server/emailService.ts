import nodemailer from "nodemailer";
import mjml2html from "mjml";
import { Player } from "@shared/schema";
import { generateRegistrationId } from "../client/src/lib/utils";

// Create a reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

export async function sendRegistrationConfirmation(player: Player): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
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

    // MJML Template with Blue Theme
    const mjmlTemplate = `
    <mjml>
  <mj-head>
    <mj-preview>FreeFire Bermuda Solo Tournament - Registration Confirmed</mj-preview>
    <mj-style inline="inline">
      .title { color: #0056b3; font-size: 24px; font-weight: bold; text-align: center; }
      .subtitle { color: #333333; font-size: 18px; text-align: center; }
      .details { color: #0056b3; font-weight: bold; font-size: 16px; }
      .content { color: #333333; font-size: 14px; }
      .highlight { background-color: #E3F2FD; border: 2px dashed #0056b3; padding: 12px; text-align: center; font-family: monospace; font-size: 18px; color: #0056b3; }
    </mj-style>
  </mj-head>
  <mj-body background-color="#F5F5F5">
    <mj-section background-color="#FFFFFF" padding="20px" border-bottom="2px solid #0056b3">
      <mj-column>
        <mj-text class="title">SARTH ESPORTS</mj-text>
        <mj-text class="subtitle">FREEFIRE BERMUDA SOLO TOURNAMENT</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#FFFFFF" padding="30px" border-radius="8px" border="1px solid #E0E0E0">
      <mj-column>
        <mj-text class="title">🎉 Registration Confirmed!</mj-text>
        <mj-text class="content">Hello <strong style="color:#0056b3;">${player.fullName}</strong>,</mj-text>
        <mj-text class="content">Your registration for the FreeFire Bermuda Solo Tournament has been successfully confirmed. We're excited to have you join us!</mj-text>
        <mj-text class="details">
          🎮 In-Game Name: <span class="content">${player.inGameName}</span> <br>
          🔢 FreeFire UID: <span class="content">${player.uid ?? "N/A"}</span> <br>
          📅 Tournament Date: <span class="content">${formattedDate}</span> <br>
          ⏰ Tournament Time: <span class="content">${formattedTime} IST</span> <br>
          📱 Platform: <span class="content">FreeFire (Mobile)</span>
        </mj-text>
        <mj-text class="highlight">
          <strong>🎟 Your Registration ID:</strong> <br> ${playerWithId.registrationId}
        </mj-text>
        <mj-text class="title">⚠️ Important Reminders</mj-text>
        <mj-text class="content">
          ✅ Be online at least 15 minutes before your match <br>
          ✅ Keep your device fully charged <br>
          ✅ Ensure you have a stable internet connection <br>
          ✅ Follow all tournament rules to avoid disqualification <br>
          ✅ Join our WhatsApp group for tournament updates
        </mj-text>
        <mj-button background-color="#25D366" color="white" href="https://chat.whatsapp.com/LXE4wwZ9cwlEsvsP4i1ZoY" border-radius="4px">
          💬 Join WhatsApp Group
        </mj-button>
        <mj-button background-color="#0056b3" color="white" href="http://sarthesports.games" border-radius="4px">
          🎮 Visit Tournament Page
        </mj-button>
      </mj-column>
    </mj-section>
    <mj-section padding="20px" background-color="#FAFAFA">
      <mj-column>
        <mj-text align="center" font-size="12px" color="#777777">© 2025 Sarth Esports. All rights reserved.</mj-text>
        <mj-text align="center" font-size="12px" color="#777777">This email was sent to ${player.email} because you registered for our tournament.</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlTemplate);

    // Send email with HTML content
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: player.email,
      subject: "Your FreeFire Tournament Registration is Confirmed!",
      html // Send the converted HTML
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}