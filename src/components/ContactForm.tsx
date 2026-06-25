'use client';

import React, { useState } from 'react';
import { trackLead } from '@/lib/gtag';

// 1. Go to https://formspree.io → sign up free
// 2. Create a new form → copy the form ID (e.g. "xpwzgkla")
// 3. Replace YOUR_FORM_ID below
const FORMSPREE_ID = 'xbddrvlr';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    if (!agree) e.agree = 'Please accept the privacy policy';
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
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setAgree(false);
        trackLead('contact');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'block w-full py-3 px-4 bg-surface-secondary border border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors';

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">Message sent!</h3>
        <p className="text-text-secondary text-sm">We&apos;ll get back to you within 1–2 business days.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-brand font-semibold hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="Name *"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={inputClass}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail *"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <input
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
        className={inputClass}
      />

      <div>
        <textarea
          rows={5}
          placeholder="Write your message *"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agree-contact"
          checked={agree}
          onChange={e => setAgree(e.target.checked)}
          className="mt-0.5 h-4 w-4 text-brand border-border rounded cursor-pointer"
        />
        <label htmlFor="agree-contact" className="text-sm text-text-secondary cursor-pointer">
          By clicking &quot;Send Message&quot; you consent to Motres d.o.o. processing your data in accordance with GDPR and our Privacy Policy.
        </label>
      </div>
      {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}

      {status === 'error' && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:sales@emotres.com" className="underline">sales@emotres.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 px-6 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
