import { NextRequest, NextResponse } from 'next/server';
import { parseTime } from '@/lib/time';

export const runtime = 'edge';
export const maxDuration = 300;

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { time, data, url } = body;

    if (!time) {
      return NextResponse.json(
        { error: 'Missing required parameter: time' },
        { status: 400 }
      );
    }

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
        success: false
      },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const time = searchParams.get('time');

  if (!time) {
    return NextResponse.json(
      {
        error: 'Missing required parameter: time',
        example: '/api/delay?time=5s'
      },
      { status: 400 }
    );
  }

  try {
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
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Invalid request',
        success: false
      },
      { status: 400 }
    );
  }
}
