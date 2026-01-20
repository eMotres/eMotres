'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand focus:border-brand border-gray-300 rounded-md"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand focus:border-brand border-gray-300 rounded-md"
            placeholder="E-mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand focus:border-brand border-gray-300 rounded-md"
          placeholder="Subject *"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand focus:border-brand border-gray-300 rounded-md"
          placeholder="Write Your Message *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="flex items-center">
        <input
          id="agree"
          name="agree"
          type="checkbox"
          className="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          required
        />
        <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
          By clicking the &quot;Submit&quot; button, you consent to Motres doo processing your data in accordance with GDPR and our Privacy Policy.
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
