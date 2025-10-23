// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

/** DO NOT COMMIT REAL SECRETS.
 *  These fallbacks make it work immediately.
 *  Prefer setting MAIL_USER / MAIL_PASS in Vercel → Env Vars,
 *  then remove these two lines.
 */
const FALLBACK_USER = 'tacticalbanana2025@gmail.com';
const FALLBACK_PASS = 'pwivoqijpoovwbad'; // (Google shows spaces; remove them)

const MAIL_USER = process.env.MAIL_USER || FALLBACK_USER;
const MAIL_PASS = process.env.MAIL_PASS || FALLBACK_PASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const escapeHtml = (s: string) =>
  s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { codename, email, message } = (req.body ?? {}) as {
    codename?: string;
    email?: string;
    message?: string;
  };

  if (!email || !isEmail(email) || !message) {
    return res.status(400).json({ error: 'email and message required' });
  }

  try {
    await transporter.sendMail({
      from: `Tactical Banana Comms <${MAIL_USER}>`, // must be your Gmail (DMARC)
      to: 'jamesrlewis1991@gmail.com',             // destination inbox
      replyTo: email,                               // reply goes to the sender
      subject: `Secure Comms from ${codename || 'Anonymous'}`,
      text: `From: ${codename || 'Anonymous'} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(codename || 'Anonymous')} &lt;${escapeHtml(email)}&gt;</p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace">
${escapeHtml(message)}
        </pre>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('MAIL_ERROR', err);
    return res.status(500).json({ error: 'send_failed', detail: err?.message });
  }
}
