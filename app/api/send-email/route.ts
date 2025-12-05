import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimiter } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // 1. Rate Limiting Check (Limits to 3 requests per hour per IP)
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  
  // Rate Limit: 3 requests per 60 minutes
  const isAllowed = rateLimiter(req, { limit: 3, window: 60 * 60 * 1000 });
  
  if (!isAllowed) {
    console.warn("[API] Rate limit exceeded for IP:", ip);
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.text();
    console.log("[API] Raw request body:", body);
    let name, email, message, honey;
    try {
      ({ name, email, message, honey } = JSON.parse(body));
    } catch (parseError) {
      console.error("[API] JSON parse error:", parseError);
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // 2. Honeypot Check
    // If 'honey' field is populated, it's a bot.
    if (honey) {
      console.warn("[API] Bot detected (honeypot filled):", { ip, honey });
      // Return success to fool the bot, but don't send email
      return NextResponse.json({ success: true });
    }

    // 3. Simple manual Rate Limiter (since we can't easily rely on global state in serverless without Redis)
    // We will just proceed with basic validation for now. 
    // Ideally we would check a DB or Redis here. 
    // Given the constraints, we rely on the honeypot primarily.
    // However, we can check basic headers or adding a timestamp token from client could help.
    
    // For now, let's stick to honeypot as it's very effective against generic spam bots.
    
    if (!name || !email || !message) {
      console.warn("[API] Missing fields:", { name, email, message });
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("[API] Sending email with:", { name, email, message });
    const sendResult = await resend.emails.send({
      from: "Portfolio Contact <noreply@muhammedgumus.com>", // doğrulanmış domain ile geçerli email formatı
      to: "mgumus4102@gmail.com",
      subject: `📨 New Portfolio Contact from ${name}`,
      text: `New contact message from your portfolio website:

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              📨 New Portfolio Contact Message
            </h2>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #555; margin-bottom: 15px;">Contact Details:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 5px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form at 
                <a href="https://muhammedgumus.com" style="color: #007bff; text-decoration: none;">muhammedgumus.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });
    console.log("[API] Resend send result:", sendResult);

    if (sendResult.error) {
      console.error("[API] Resend error:", sendResult.error);
      return NextResponse.json(
        { error: sendResult.error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API] Unexpected error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
