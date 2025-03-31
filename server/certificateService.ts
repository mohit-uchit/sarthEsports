import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { log } from "./vite";

export async function sendCertificate(
  email: string,
  fullName: string,
  inGameName: string,
  certificatePdf: string // Base64-encoded PDF
): Promise<boolean> {
  try {
    const fileName = `${inGameName}_Certificate.pdf`;
    const pdfBuffer = Buffer.from(certificatePdf, "base64");
    console.log(`PDF buffer size: ${pdfBuffer.length} bytes`); // Debug size before sending

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    } as SMTPTransport.Options);

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Sarth Esports" <admin@sarthesports.games>',
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
            <p>We're pleased to attach your official tournament participation certificate.</p>
            <p>Your certificate has been customized with your performance details and is attached as a PDF file.</p>
            <p>Thank you for being part of our gaming community. We hope to see you in future tournaments!</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: fileName,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    log(`Certificate email sent: ${info.messageId}`, "emailService");
    return true;
  } catch (error) {
    log(`Error sending certificate email: ${error}`, "emailService");
    console.error("Email sending error:", error);
    return false;
  }
}