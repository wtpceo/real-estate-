import { NextResponse } from 'next/server';

export async function GET() {
  const emailTo = process.env.EMAIL_TO;
  const recipients = emailTo?.split(',').map(email => email.trim()) || [];

  return NextResponse.json({
    EMAIL_TO: emailTo,
    recipients: recipients,
    recipientCount: recipients.length,
    hasResendKey: !!process.env.RESEND_API_KEY,
    emailFrom: process.env.EMAIL_FROM
  });
}
