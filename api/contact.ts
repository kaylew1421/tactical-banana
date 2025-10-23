// api/contact.ts
import nodemailer from 'nodemailer';

// --- Config from Vercel env vars ---
const { MAIL_USER, MAIL_PASS } = process.env;
if (!MAIL_USER || !MAIL_PASS) {
  // Fail fast if secrets aren't configured on Vercel
  throw new Error('Missing MAIL_USER or MAIL_PASS environment variable');
}

// --- SMTP transporter (Gmail via App Password) ---
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

// --- Helpers ---
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const escapeHtml = (s: string) =>
  s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));

export default async function handler(req: any, res: any) {
  // --- CORS (OK for dev; replace "*" with your domain in production) ---
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // --- Parse body (supports JSON strings or parsed objects) ---
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { /* ignore */ }
  }

  const codename = (body?.codename ?? '').toString().slice(0, 120);
  const email    = (body?.email ?? '').toString().trim();
  const message  = (body?.message ?? '').toString().slice(0, 5000);

  // --- Basic validation ---
  if (!email || !isEmail(email) || !message) {
    return res.status(400).json({ error: 'email and message required' });
  }

  try {
    // --- Send mail ---
    await transporter.sendMail({
      from: `Tactical Banana Comms <${MAIL_USER}>`,   // must be your Gmail to satisfy DMARC
      to: 'tacticalbanana2025@gmail.com',             // where you want to receive messages
      replyTo: email,                                 // replies go to sender
      subject: `Secure Comms from ${codename || 'Anonymous'}`,
      text: `From: ${codename || 'Anonymous'} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(codename || 'Anonymous')}
        &lt;${escapeHtml(email)}&gt;</p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace">
${escapeHtml(message)}
        </pre>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error('MAIL_ERROR', e);
    return res.status(500).json({ error: 'send_failed', detail: e?.message });
  }
}
