// components/SecureCommsForm.tsx
import React, { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function SecureCommsForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    // Honeypot: bots often fill hidden fields
    const honeypot = String(fd.get('website') || '');
    if (honeypot) {
      setStatus('ok'); // pretend success; do nothing
      (e.currentTarget as HTMLFormElement).reset();
      return;
    }

    const payload = {
      codename: String(fd.get('codename') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      message: String(fd.get('message') || '').trim(),
    };

    if (!payload.email || !isEmail(payload.email) || !payload.message) {
      setStatus('error');
      setError('Please provide a valid email and a message.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Send failed');
      }

      setStatus('ok');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Send failed');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl w-full">
      {/* Codename */}
      <label className="block">
        <span className="block mb-1 text-sm text-zinc-300">Codename (optional)</span>
        <input
          name="codename"
          placeholder="Agent Peel"
          className="w-full rounded-lg p-3 bg-black/30 border border-yellow-400/30 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        />
      </label>

      {/* Email */}
      <label className="block">
        <span className="block mb-1 text-sm text-zinc-300">Email</span>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="w-full rounded-lg p-3 bg-black/30 border border-yellow-400/30 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        />
      </label>

      {/* Message */}
      <label className="block">
        <span className="block mb-1 text-sm text-zinc-300">Message</span>
        <textarea
          name="message"
          placeholder="Report your intel..."
          required
          rows={5}
          className="w-full rounded-lg p-3 bg-black/30 border border-yellow-400/30 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        />
      </label>

      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-5 py-3 rounded-xl bg-yellow-400 text-black font-bold shadow hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'SENDING…' : 'TRANSMIT MESSAGE'}
      </button>

      {/* Status messages */}
      <div aria-live="polite" className="min-h-[1.25rem]">
        {status === 'ok' && (
          <p className="text-green-400 text-sm mt-1">Message sent ✅</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-1">
            {error || 'Send failed. Please try again.'}
          </p>
        )}
      </div>
    </form>
  );
}
