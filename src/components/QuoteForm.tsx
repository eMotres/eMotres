'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
  agree: boolean;
}

interface SubmitState {
  status: 'idle' | 'success' | 'error';
  message: string;
}

const QuoteForm = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', agree: false });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle', message: '' });
  const [isPending, setIsPending] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email is required';
    if (form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    if (!form.agree) newErrors.agree = 'You must agree to the privacy policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPending(true);

    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:sales@emotres.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsPending(false);
      setSubmitState({
        status: 'success',
        message: 'Thank you! Your quote request has been sent. We will contact you soon.',
      });
      setForm({ name: '', email: '', message: '', agree: false });
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {submitState.status === 'success' && (
        <div className="p-4 rounded-md bg-green-50 border border-green-200 text-green-700 animate-fade-in">
          <p className="font-medium">Request Sent!</p>
          <p className="text-sm mt-1">{submitState.message}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="block w-full shadow-sm py-4 px-4 bg-surface-secondary placeholder-text-secondary focus:ring-brand focus:border-brand border border-surface-tertiary rounded-xl transition-colors"
          placeholder="Name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="block w-full shadow-sm py-4 px-4 bg-surface-secondary placeholder-text-secondary focus:ring-brand focus:border-brand border border-surface-tertiary rounded-xl transition-colors"
          placeholder="E-mail"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="block w-full shadow-sm py-4 px-4 bg-surface-secondary placeholder-text-secondary focus:ring-brand focus:border-brand border border-surface-tertiary rounded-xl transition-colors resize-none"
          placeholder="Hi! If possible, please specify: Continuous Power, RPM, Voltage, etc."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={e => setForm(f => ({ ...f, agree: e.target.checked }))}
            className="h-5 w-5 text-brand focus:ring-brand border-gray-300 rounded cursor-pointer"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="agree" className="text-text-secondary">
            I consent to processing my data in accordance with the Privacy Policy.
          </label>
          {errors.agree && <p className="mt-1 text-sm text-red-500">{errors.agree}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full flex justify-center py-4 px-6 border border-transparent shadow-lg text-base font-bold rounded-xl text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-1"
        >
          {isPending ? 'Sending...' : 'Send Request'}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
