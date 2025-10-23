// components/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',   // codename
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Map your "name" field to API's expected "codename"
        body: JSON.stringify({
          codename: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Send failed');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err?.message || 'Send failed');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-4">
            Secure Comms Channel
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Need to contact the operative? Use this encrypted channel. Messages self-destruct upon reading (probably).
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-900/50 text-center p-8 rounded-lg border border-green-700">
              <h3 className="text-2xl font-bold text-green-300 mb-4">Transmission Successful</h3>
              <p className="text-green-200">Message received by HQ. Stand by for extraction.</p>
              <button
                onClick={handleReset}
                className="mt-6 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300 uppercase tracking-wider"
              >
                Open New Channel
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-lg shadow-2xl space-y-6">
              {error && (
                <div
                  className="bg-red-900/50 border border-red-700 text-red-200 p-3 rounded"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Codename
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="e.g., Agent Peel"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Secure Channel (Email)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="your-secure-address@domain.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Encrypted Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="Report your intel here..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-600 transition-colors duration-300 uppercase tracking-wider text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Transmitting…' : 'Transmit Message'}
                </button>
              </div>

              {/* polite live region for screen readers */}
              <p className="sr-only" aria-live="polite">
                {sending ? 'Sending' : submitted ? 'Sent' : error ? 'Error' : ''}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
