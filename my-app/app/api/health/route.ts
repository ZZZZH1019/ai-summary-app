import { NextResponse } from 'next/server';

// Vercel需要这些配置
export const dynamic = 'force-dynamic';
export const runtime = 'edge';  // 使用edge runtime在Vercel上更好

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Next.js backend is running on Vercel",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    deployed: true,
    version: "1.0.0"
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json',
    }
  });
}
