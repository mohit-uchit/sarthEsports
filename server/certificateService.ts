import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { storage } from "./storage";
import { log } from "./vite";

/**
 * Sends a participation certificate to the player
 */
export async function sendCertificate(
  email: string,
  fullName: string,
  inGameName: string,
  certificateImage: string
): Promise<boolean> {
  try {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    } as SMTPTransport.Options);

    // Convert the base64 image to an attachment (remove data:image/png;base64, prefix)
    const base64Data = certificateImage.replace(/^data:image\/png;base64,/, "");
    
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Sarth Esports" <noreply@sarthesports.games>',
      to: email,
      subject: `🏆 Your Free Fire Tournament Certificate - Sarth Esports`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: linear-gradient(to right, #000000, #1a1a1a); padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center; border: 1px solid #00E5FF;">
            <h1 style="color: #00E5FF; margin: 0;">SARTH <span style="color: #FF5722;">ESPORTS</span></h1>
            <p style="color: #ccc; margin-top: 5px;">Free Fire Bermuda Solo Tournament</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #ddd;">
            <h2 style="color: #333; margin-top: 0;">Hello ${fullName} ("${inGameName}"),</h2>
            
            <p>Congratulations on your participation in the Free Fire Bermuda Solo Tournament organized by Sarth Esports!</p>
            
            <p>We're pleased to attach your official tournament participation certificate. This certificate recognizes your skills and dedication during the tournament.</p>
            
            <p>Your certificate has been customized with your performance details and is attached to this email as a PDF file.</p>
            
            <p>Thank you for being part of our gaming community. We hope to see you in future tournaments!</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 15px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <p style="color: #ccc; margin: 0; font-size: 14px;">Below is a preview of your certificate:</p>
          </div>
          
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:certificate" alt="Tournament Certificate" style="max-width: 100%; border-radius: 5px; border: 1px solid #00E5FF; box-shadow: 0 0 15px rgba(0,229,255,0.3);" />
          </div>
          
          <div style="text-align: center; font-size: 12px; color: #777; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p>© ${new Date().getFullYear()} Sarth Esports. All rights reserved.</p>
            <p>Sushant Lok III, A-4B, Sector 57, Gurugram, Haryana 122003</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `${fullName}_${inGameName}_Certificate.png`,
          content: base64Data,
          encoding: 'base64',
          cid: 'certificate' // Same cid value as in the html img src
        }
      ]
    });

    log(`Certificate email sent: ${info.messageId}`, "emailService");
    return true;
  } catch (error) {
    log(`Error sending certificate email: ${error}`, "emailService");
    console.error("Email sending error:", error);
    return false;
  }
}