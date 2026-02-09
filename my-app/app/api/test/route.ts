import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({
    status: "online",
    api: "test",
    time: new Date().toISOString(),
    deployment: "vercel-edge"
  });
}
