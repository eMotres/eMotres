'use client';

import { useActionState } from 'react';
import { submitQuote } from '@/app/actions';

const initialState = {
  success: false,
  message: '',
  errors: {},
};

const QuoteForm = () => {
  const [state, formAction, isPending] = useActionState(submitQuote, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {state.success && (
        <div className="p-4 rounded-md bg-green-50 border border-green-200 text-green-700 animate-fade-in">
          <p className="font-medium">Request Sent!</p>
          <p className="text-sm mt-1">{state.message}</p>
        </div>
      )}

      {!state.success && state.message && (
        <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700 animate-fade-in">
          <p className="font-medium">Error</p>
          <p className="text-sm mt-1">{state.message}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full shadow-sm py-4 px-4 bg-surface-secondary placeholder-text-secondary focus:ring-brand focus:border-brand border-surface-tertiary rounded-xl transition-colors"
          placeholder="Name"
          required
        />
        {state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full shadow-sm py-4 px-4 bg-surface-secondary placeholder-text-secondary focus:ring-brand focus:border-brand border-surface-tertiary rounded-xl transition-colors"
          placeholder="E-mail"
          required
        />
        {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full shadow-sm py-4 px-4 bg-surface-secondary placeholder-text-secondary focus:ring-brand focus:border-brand border-surface-tertiary rounded-xl transition-colors resize-none"
          placeholder="Hi! If possible, please specify: Continuous Power, RPM, Voltage, etc."
          required
        ></textarea>
        {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            className="h-5 w-5 text-brand focus:ring-brand border-gray-300 rounded cursor-pointer"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="agree" className="text-text-secondary">
            I consent to processing my data in accordance with the Privacy Policy.
          </label>
          {state.errors?.agree && <p className="mt-1 text-sm text-red-600">{state.errors.agree}</p>}
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
