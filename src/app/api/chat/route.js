import { NextResponse } from 'next/server';

const LIGADO_APP_URL = process.env.NEXT_PUBLIC_LIGADO_APP_URL || 'https://ligado-ai-app.netlify.app';

export async function POST(request) {
  try {
    const body = await request.json();

    const res = await fetch(`${LIGADO_APP_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('[CHAT PROXY]', err);
    return NextResponse.json({ error: 'Failed to reach chat API' }, { status: 502 });
  }
}
