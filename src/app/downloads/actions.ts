"use server";

import clientPromise from "@/lib/mongodb";
import { RELEASE } from "@/lib/releases";

export async function saveDownloadLead(email: string, platform: string) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!["windows", "macos", "linux"].includes(platform)) {
    return { success: false, message: "Invalid platform." };
  }

  try {
    if (clientPromise) {
      const client = await clientPromise;
      const db = client.db("manthan");

      await db.collection("downloads").insertOne({
        email: email.toLowerCase().trim(),
        product: "UniLink",
        platform,
        version: RELEASE.version,
        createdAt: new Date(),
      });
    } else {
      console.log("[download-lead] MONGODB_URI not set. Lead:", {
        email: email.toLowerCase().trim(),
        platform,
      });
    }

    return { success: true, message: "" };
  } catch (err) {
    console.error("[download-lead] Failed to save:", err);
    return { success: true, message: "" };
  }
}
