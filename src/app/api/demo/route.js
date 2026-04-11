import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { businessName, name, email, phone, businessType, message, smsConsent } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Ligado AI <onboarding@resend.dev>',
      to: 'jordan@fractionaldemand.com',
      subject: `New Demo Request: ${name} - ${businessName || 'No business name'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background: #0A0F1E; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #2DD4BF; font-size: 20px; margin: 0;">New Demo Request</h1>
            <p style="color: #8a8f98; font-size: 13px; margin: 4px 0 0;">from getligado.com</p>
          </div>
          <div style="background: #ffffff; padding: 24px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Business</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${businessName || '--'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Trade</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${businessType || '--'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">
                  <a href="mailto:${email}" style="color: #2DD4BF; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">
                  <a href="tel:${phone}" style="color: #2DD4BF; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">SMS Consent</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${smsConsent ? 'Yes' : 'No'}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #111827;">${message}</td>
              </tr>
              ` : ''}
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[DEMO FORM]', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
