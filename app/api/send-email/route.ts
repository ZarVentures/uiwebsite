import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message, projectTitle } = await req.json();

        // Hardcoded fallback values in case environment variables are not set
        const FALLBACK_GMAIL_USER = "Urbaninnovationllc@gmail.com";
        const FALLBACK_GMAIL_APP_PASSWORD = "bxearfyedcwamquf";
        const FALLBACK_CONTACT_RECEIVER_EMAIL = "Urbaninnovationllc@gmail.com";

        // Use environment variables with fallback to hardcoded values
        const gmailUser = process.env.GMAIL_USER || FALLBACK_GMAIL_USER;
        const gmailPassword = process.env.GMAIL_APP_PASSWORD || FALLBACK_GMAIL_APP_PASSWORD;
        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || FALLBACK_CONTACT_RECEIVER_EMAIL;

        // 1. Create a Transporter
        const transporter = nodemailer.createTransporter({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailPassword,
            },
        });

        // 2. Define the email options
        const mailOptions = {
            from: gmailUser,
            to: receiverEmail,
            subject: `New Contact Form Message: ${subject || projectTitle || "No Subject"}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #b8860b;">New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject/Project:</strong> ${subject || projectTitle || "N/A"}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #666;">
            <strong>Configuration:</strong> Using ${process.env.GMAIL_USER ? 'environment variables' : 'fallback values'}
          </p>
        </div>
      `,
        };

        // 3. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { message: "Failed to send email", error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}