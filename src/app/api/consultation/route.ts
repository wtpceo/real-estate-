import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, region, message } = body;

    // Validation
    if (!name || !phone || !region) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // Email recipients - trim whitespace from each email
    const recipients = process.env.EMAIL_TO?.split(',').map(email => email.trim()) || ['ceo@wiztheplanning.com'];

    // Email HTML template
    const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0f1729 0%, #1a2332 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-row {
                background: white;
                padding: 15px;
                margin-bottom: 10px;
                border-radius: 5px;
                border-left: 4px solid #ff6b35;
              }
              .label {
                font-weight: bold;
                color: #0f1729;
                display: inline-block;
                min-width: 100px;
              }
              .value {
                color: #333;
              }
              .message-box {
                background: white;
                padding: 20px;
                margin-top: 20px;
                border-radius: 5px;
                border: 1px solid #e0e0e0;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🎯 새로운 상담 신청</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">👤 이름:</span>
                <span class="value">${name}</span>
              </div>
              <div class="info-row">
                <span class="label">📱 연락처:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="info-row">
                <span class="label">📍 지역/아파트:</span>
                <span class="value">${region}</span>
              </div>
              ${message ? `
                <div class="message-box">
                  <div class="label">💬 문의사항:</div>
                  <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>이 메일은 위즈더플래닝 랜딩페이지에서 자동으로 발송되었습니다.</p>
              <p>© ${new Date().getFullYear()} Wiz The Planning. All rights reserved.</p>
            </div>
          </body>
        </html>
      `;

    // Send email to each recipient individually
    const emailPromises = recipients.map(recipient =>
      resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: recipient,
        subject: `[위즈더플래닝] 새로운 상담 신청 - ${name}님`,
        html: emailHtml,
      })
    );

    // Wait for all emails to be sent
    const results = await Promise.all(emailPromises);

    return NextResponse.json({
      success: true,
      message: '상담 신청이 완료되었습니다.',
      emailsSent: results.length,
      recipients: recipients
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
