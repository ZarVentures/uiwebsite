import { NextResponse } from "next/server";

export async function GET() {
    console.log("=== TEST API CALLED ===");
    
    try {
        const envCheck = {
            GMAIL_USER: process.env.GMAIL_USER ? "SET" : "NOT SET",
            GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? "SET" : "NOT SET", 
            CONTACT_RECEIVER_EMAIL: process.env.CONTACT_RECEIVER_EMAIL ? "SET" : "NOT SET",
            NODE_ENV: process.env.NODE_ENV,
            timestamp: new Date().toISOString()
        };
        
        console.log("Environment check:", envCheck);
        
        return NextResponse.json({
            message: "Test API working!",
            environment: envCheck,
            success: true
        });
    } catch (error) {
        console.error("Test API error:", error);
        return NextResponse.json({
            message: "Test API failed",
            error: error instanceof Error ? error.message : "Unknown error",
            success: false
        }, { status: 500 });
    }
}

export async function POST() {
    return NextResponse.json({
        message: "POST method works too!",
        timestamp: new Date().toISOString()
    });
}