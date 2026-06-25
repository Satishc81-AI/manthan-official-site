import { NextRequest, NextResponse } from "next/server";
import { RELEASE, type PlatformId } from "@/lib/releases";

export async function GET(
  _request: NextRequest,
  ctx: { params: Promise<{ platform: string }> }
) {
  const { platform } = await ctx.params;
  const info = RELEASE.platforms[platform as PlatformId];

  if (!info) {
    return NextResponse.json(
      { error: "Invalid platform. Use: windows, macos, or linux" },
      { status: 404 }
    );
  }

  return NextResponse.redirect(info.url);
}
