import nodemailer from "nodemailer";
import { Player } from "@shared/schema";
import { generateRegistrationId } from "../client/src/lib/utils";

// Create a reusable transporter
const createTransporter = () => {
  // Use environment variables for SMTP configuration
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
    
    // Format the tournament date
    const tournamentDate = new Date("2025-04-15T15:00:00");
    const formattedDate = tournamentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    
    const formattedTime = tournamentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });

    // Email HTML template with gaming theme
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmation</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #121212;
            color: #E0E0E0;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            padding: 20px;
            background: linear-gradient(135deg, #181818 0%, #222222 100%);
            border-bottom: 2px solid #FF5722;
          }
          .logo {
            max-width: 150px;
            margin-bottom: 15px;
          }
          .content {
            padding: 30px 20px;
            background-color: #1E1E1E;
            border: 1px solid rgba(0, 229, 255, 0.3);
            border-radius: 8px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #AAAAAA;
            padding: 20px;
          }
          h1 {
            color: #FF5722;
            margin: 0;
            padding: 0;
            font-size: 24px;
          }
          h2 {
            color: #00E5FF;
            font-size: 20px;
          }
          .highlight {
            color: #00E5FF;
            font-weight: bold;
          }
          .details {
            background-color: rgba(0, 229, 255, 0.1);
            border-left: 3px solid #00E5FF;
            padding: 15px;
            margin: 20px 0;
          }
          .registration-id {
            background-color: rgba(255, 87, 34, 0.1);
            border: 1px dashed #FF5722;
            padding: 10px;
            text-align: center;
            font-family: monospace;
            font-size: 16px;
            margin: 20px 0;
          }
          .button {
            display: inline-block;
            padding: 12px 25px;
            background: linear-gradient(to right, #FF5722, #FF8A65);
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SARTH ESPORTS</h1>
            <p>FREE FIRE BERMUDA SOLO TOURNAMENT</p>
          </div>
          
          <div class="content">
            <h2>Registration Confirmed!</h2>
            <p>Hello <span class="highlight">${player.fullName}</span>,</p>
            <p>Your registration for the Free Fire Bermuda Solo Tournament has been successfully confirmed. We're excited to have you join us!</p>
            
            <div class="details">
              <p><strong>In-Game Name:</strong> ${player.inGameName}</p>
              <p><strong>Free Fire UID:</strong> ${player.uid}</p>
              <p><strong>Tournament Date:</strong> ${formattedDate}</p>
              <p><strong>Tournament Time:</strong> ${formattedTime}</p>
              <p><strong>Platform:</strong> Free Fire (Mobile)</p>
            </div>
            
            <div class="registration-id">
              <p style="margin: 0;">Your Registration ID</p>
              <strong>${playerWithId.registrationId}</strong>
            </div>
            
            <h2>Important Reminders</h2>
            <ul>
              <li>Be online at least 15 minutes before your match</li>
              <li>Keep your device fully charged</li>
              <li>Ensure you have a stable internet connection</li>
              <li>Follow all tournament rules to avoid disqualification</li>
              <li>Join our WhatsApp group for tournament updates</li>
            </ul>
            
            <p>For any questions or assistance, reply to this email or contact our tournament support on WhatsApp.</p>
            
            <div style="text-align: center;">
              <a href="http://sarthesports.com" class="button">Visit Tournament Page</a>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2025 Sarth Esports. All rights reserved.</p>
            <p>This email was sent to ${player.email} because you registered for our tournament.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Send email
    const info = await transporter.sendMail({
      from: `"Sarth Esports" <${process.env.SMTP_FROM}>`,
      to: player.email,
      subject: "Your Free Fire Tournament Registration is Confirmed!",
      html: htmlTemplate
    });
    
    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}