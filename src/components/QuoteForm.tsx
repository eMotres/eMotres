'use client';

import { useState } from 'react';
import { trackLead } from '@/lib/gtag';

// Same Formspree form ID as ContactForm
const FORMSPREE_ID = 'xbddrvlr';

const QuoteForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', agree: false });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Please write a message';
    if (!form.agree) e.agree = 'Please accept the privacy policy';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Quote request from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', agree: false });
        trackLead('get-a-quote');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'block w-full py-4 px-4 bg-surface-secondary placeholder-text-secondary border border-surface-tertiary rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent';

  if (status === 'success') {
    return (
      <div className="py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">Request received!</h3>
        <p className="text-text-secondary text-sm">We&apos;ll calculate an approximate cost within 2 business days.</p>
        <button onClick={() => setStatus('idle')} className="mt-5 text-sm text-brand font-semibold hover:underline">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <textarea
          rows={4}
          placeholder="Hi! If possible, please specify: Continuous Power, RPM, Voltage, etc."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="agree-quote"
          type="checkbox"
          checked={form.agree}
          onChange={e => setForm(f => ({ ...f, agree: e.target.checked }))}
          className="mt-0.5 h-5 w-5 text-brand border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="agree-quote" className="text-sm text-text-secondary cursor-pointer">
          I consent to processing my data in accordance with the Privacy Policy.
        </label>
      </div>
      {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}

      {status === 'error' && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Email us directly:{' '}
          <a href="mailto:sales@emotres.com" className="underline font-semibold">sales@emotres.com</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex justify-center py-4 px-6 text-base font-bold rounded-xl text-white bg-brand hover:bg-brand-dark disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'sending' ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  );
};

export default QuoteForm;
