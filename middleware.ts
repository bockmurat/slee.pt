import { NextRequest, NextResponse } from 'next/server';
import { parseTime } from '@/lib/time';

export const config = {
  matcher: '/:time*',
};

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip non-POST requests and special paths
  if (
    request.method !== 'POST' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Extract time from pathname (e.g., /5s -> 5s)
  const time = pathname.slice(1);

  if (!time) {
    return NextResponse.next();
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { data, url } = body;

    const delayMs = parseTime(time);

    if (delayMs > 300000) {
      return NextResponse.json(
        { error: 'Maximum delay is 5 minutes (300s)' },
        { status: 400 }
      );
    }

    await delay(delayMs);

    return NextResponse.json({
      success: true,
      delayed_by: delayMs,
      requested_delay: time,
      timestamp: new Date().toISOString(),
      data: data || null,
      url: url || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Invalid request',
        success: false,
      },
      { status: 400 }
    );
  }
}
