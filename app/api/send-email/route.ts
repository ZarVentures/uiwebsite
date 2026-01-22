import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    console.log("=== EMAIL API CALLED ===");
    
    try {
        const body = await req.json();
        console.log("Request body received:", JSON.stringify(body, null, 2));
        
        const { name, email, subject, message, projectTitle } = body;

        // Hardcoded fallback values in case environment variables are not set
        const FALLBACK_GMAIL_USER = "Urbaninnovationllc@gmail.com";
        const FALLBACK_GMAIL_APP_PASSWORD = "bxearfyedcwamquf";
        const FALLBACK_CONTACT_RECEIVER_EMAIL = "Urbaninnovationllc@gmail.com";

        // Use environment variables with fallback to hardcoded values
        const gmailUser = process.env.GMAIL_USER || FALLBACK_GMAIL_USER;
        const gmailPassword = process.env.GMAIL_APP_PASSWORD || FALLBACK_GMAIL_APP_PASSWORD;
        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || FALLBACK_CONTACT_RECEIVER_EMAIL;

        console.log("Email configuration:");
        console.log("- Gmail User:", gmailUser);
        console.log("- Using env vars:", !!process.env.GMAIL_USER);
        console.log("- Receiver:", receiverEmail);

        // 1. Create a Transporter
        console.log("Creating nodemailer transporter...");
        const transporter = nodemailer.createTransporter({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailPassword,
            },
        });

        // Test the connection
        console.log("Testing SMTP connection...");
        await transporter.verify();
        console.log("SMTP connection successful!");

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

        console.log("Mail options prepared:", {
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject
        });

        // 3. Send the email
        console.log("Sending email...");
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!", result.messageId);

        return NextResponse.json(
            { 
                message: "Email sent successfully",
                messageId: result.messageId,
                usingEnvVars: !!process.env.GMAIL_USER
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("=== EMAIL ERROR ===");
        console.error("Error type:", error?.constructor?.name);
        console.error("Error message:", error instanceof Error ? error.message : "Unknown error");
        console.error("Full error:", error);
        console.error("Stack trace:", error instanceof Error ? error.stack : "No stack trace");
        
        return NextResponse.json(
            { 
                message: "Failed to send email", 
                error: error instanceof Error ? error.message : "Unknown error",
                errorType: error?.constructor?.name || "Unknown"
            },
            { status: 500 }
        );
    }
}