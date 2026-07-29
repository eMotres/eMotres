import React from 'react';
import QuoteForm from '@/components/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Quote for Custom Electric Motors',
  alternates: {
    canonical: '/get-a-quote/',
    languages: { en: '/get-a-quote/', 'zh-CN': '/zh/get-a-quote/' },
  },
  description: 'Request a quote for a custom-made electric motor. Specify your requirements for continuous power, RPM, voltage, cooling, and more, and we will calculate the approximate cost.',
};

const GetAQuotePage = () => {
  return (
    <main>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-4">Get a Quote</h1>
            <p className="text-center text-lg text-gray-600 mb-12">Didn’t find a suitable motor and need a custom-made motor to your specifications? Fill out this application form and we will calculate an approximate cost for you.</p>
            <QuoteForm />
          </div>
        </div>
      </div>    </main>
  );
};

export default GetAQuotePage;
