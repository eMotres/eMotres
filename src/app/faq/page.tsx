import React from 'react';
import FaqItem from '@/components/FaqItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Electric Motors for Drones & Aviation',
  alternates: {
    canonical: '/faq/',
    languages: { en: '/faq/', 'zh-CN': '/zh/faq/' },
  },
  description: 'Answers to common questions about our AeroStator Core™ electric motors — production, payment, shipping, warranty, technology, custom design and lead times.',
};

const faqs = [
  {
    question: "Where are your motors produced?",
    answer: "Our motors are manufactured in China, with final assembly and testing available in the EU on request.",
  },
  {
    question: "How can I make a payment?",
    answer: "Payment is currently made by invoice. An option to buy directly through our online shop is coming soon.",
  },
  {
    question: "How do you handle shipment?",
    answer: "Shipments within the EU are handled by GLS; shipments outside the EU are handled by DHL.",
  },
  {
    question: "What warranty do you offer?",
    answer: "We offer a 1-year warranty on all our motors.",
  },
  {
    question: "Why are your motors more efficient than others?",
    answer: "All our motors are built on our patented AeroStator Core™ architecture — tangential magnet polarization, rectangular copper windings and direct stator cooling — which together deliver the highest torque density and efficiency in their class.",
  },
  {
    question: "How do your motors compare with axial flux motors?",
    answer: "At the same weight and KV rating, AeroStator Core motors offer higher torque density, greater efficiency and lower cost than existing axial-flux motors.",
  },
  {
    question: "What controller do you recommend for your motors?",
    answer: "We recommend Field-Oriented Control (FOC) controllers, as they are more efficient than trapezoidal BLDC controllers.",
  },
  {
    question: "What position sensors do you use?",
    answer: "Air-cooled motors run in sensorless mode; liquid-cooled motors use magnetic encoder sensors.",
  },
  {
    question: "Can you develop a custom motor design?",
    answer: "Yes — we develop custom motors from 0.5 kW to 1 MW, optimized for high torque density or high power density, with the cooling system, voltage and current to match your requirements.",
  },
  {
    question: "How long does it take to fulfill an order?",
    answer: "Production takes 1.3 to 3 months, depending on the motor and the quantity ordered.",
  },
];

const FaqPage = () => {
  return (
    <main className="min-h-screen bg-surface-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <header className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand bg-blue-50 px-3 py-1 rounded-full">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text-secondary">
            Payment, lead times, warranty, technology and custom design.
          </p>
        </header>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
