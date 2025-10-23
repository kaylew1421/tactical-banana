// api/contact.ts
import nodemailer from 'nodemailer';

const { MAIL_USER, MAIL_PASS } = process.env;
if (!MAIL_USER || !MAIL_PASS) throw new Error('Missing MAIL_USER or MAIL_PASS');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const escapeHtml = (s: string) =>
  s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch {} }
  const { codename, email, message } = body ?? {};

  if (!email || !isEmail(email) || !message) {
    return res.status(400).json({ error: 'email and message required' });
  }

  try {
    await transporter.sendMail({
      from: `Tactical Banana Comms <${MAIL_USER}>`,   // sender must match your Gmail
      to: 'tacticalbanana2025@gmail.com',            // ✅ corrected recipient
      replyTo: email,
      subject: `Secure Comms from ${codename || 'Anonymous'}`,
      text: `From: ${codename || 'Anonymous'} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(codename || 'Anonymous')}
             &lt;${escapeHtml(email)}&gt;</p>
             <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace">${escapeHtml(message)}</pre>`,
    });

    res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error('MAIL_ERROR', e);
    res.status(500).json({ error: 'send_failed', detail: e?.message });
  }
}
