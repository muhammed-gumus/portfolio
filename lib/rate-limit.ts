import { NextRequest, NextResponse } from "next/server";

// Simple in-memory storage for rate limiting
// In a production environment with multiple server instances, use Redis or similar
const rateLimitMap = new Map();

interface RateLimitConfig {
  limit: number; // Max requests
  window: number; // Time window in milliseconds
}

export function rateLimiter(req: NextRequest, config: RateLimitConfig = { limit: 2, window: 60 * 60 * 1000 }) {
  // Get IP address
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
  
  const now = Date.now();
  const windowStart = now - config.window;

  // Clean up old entries
  // This is a simple cleanup strategy. For high traffic, careful memory management needed
  Array.from(rateLimitMap.entries()).forEach(([key, value]) => {
      // In a real implementation we would remove old keys here
      // rateLimitMap.delete(key);
  });

  const requestData = rateLimitMap.get(ip) || { count: 0, startTime: now };

  // Generate unique key if IP isn't available or for stricter checking? No, IP is best bet server-side.

  // Check if window has passed, reset if necessary
  if (now - requestData.startTime > config.window) {
    requestData.count = 0;
    requestData.startTime = now;
  }

  // Check limit
  if (requestData.count >= config.limit) {
    return false; // Limit exceeded
  }

  // Increment count
  requestData.count++;
  rateLimitMap.set(ip, requestData);

  return true; // Allowed
}
