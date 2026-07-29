'use client';

import { useState } from 'react';
import { trackLead } from '@/lib/gtag';
import type { Locale } from '@/i18n/dictionaries';

// Same Formspree form ID as ContactForm
const FORMSPREE_ID = 'xbddrvlr';

// User-visible copy only. Backend-facing values (Formspree field names and
// the _subject line) stay English on purpose.
const strings = {
  en: {
    errName: 'Name is required',
    errEmail: 'Valid email required',
    errMessage: 'Please write a message',
    errAgree: 'Please accept the privacy policy',
    successTitle: 'Request received!',
    successBody: "We'll calculate an approximate cost within 2 business days.",
    sendAnother: 'Send another request',
    phName: 'Name',
    phEmail: 'E-mail',
    phMessage: 'Hi! If possible, please specify: Continuous Power, RPM, Voltage, etc.',
    consent: 'I consent to processing my data in accordance with the Privacy Policy.',
    errorBefore: 'Something went wrong. Email us directly: ',
    sending: 'Sending…',
    submit: 'Send Request',
  },
  zh: {
    errName: '请填写姓名',
    errEmail: '请输入有效的电子邮箱',
    errMessage: '请填写留言内容',
    errAgree: '请同意隐私政策',
    successTitle: '申请已收到！',
    successBody: '我们将在 2 个工作日内为您估算大致成本。',
    sendAnother: '再提交一份申请',
    phName: '姓名',
    phEmail: '电子邮箱',
    phMessage: '您好！如有可能，请说明：持续功率、转速、电压等参数。',
    consent: '我同意依据隐私政策处理我的个人数据。',
    errorBefore: '发生错误，请直接发送邮件至：',
    sending: '发送中…',
    submit: '提交申请',
  },
} as const;

const QuoteForm = ({ locale = 'en' }: { locale?: Locale }) => {
  const t = strings[locale];
  const [form, setForm] = useState({ name: '', email: '', message: '', agree: false });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.errName;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.errEmail;
    if (!form.message.trim()) e.message = t.errMessage;
    if (!form.agree) e.agree = t.errAgree;
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
        <h3 className="text-lg font-bold text-text-primary mb-2">{t.successTitle}</h3>
        <p className="text-text-secondary text-sm">{t.successBody}</p>
        <button onClick={() => setStatus('idle')} className="mt-5 text-sm text-brand font-semibold hover:underline">
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <input
          type="text"
          placeholder={t.phName}
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder={t.phEmail}
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <textarea
          rows={4}
          placeholder={t.phMessage}
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
          {t.consent}
        </label>
      </div>
      {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}

      {status === 'error' && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {t.errorBefore}
          <a href="mailto:sales@emotres.com" className="underline font-semibold">sales@emotres.com</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex justify-center py-4 px-6 text-base font-bold rounded-xl text-white bg-brand hover:bg-brand-dark disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>
    </form>
  );
};

export default QuoteForm;
