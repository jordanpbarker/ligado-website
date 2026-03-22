import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();

  // Log for now — wire to Resend/Supabase later
  console.log('Demo request:', data);

  return NextResponse.json({ success: true });
}
