import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqItem from '@/components/FaqItem';

const faqs = [
  {
    question: "Where are your motors produced?",
    answer: "Our motors are assembled and tested in Slovenia (EU), with some parts ordered from China.",
  },
  {
    question: "How can I make a payment?",
    answer: "Currently, payment can only be made via invoice. However, an option to purchase through our online shop will be available soon",
  },
  {
    question: "How do you handle shipment?",
    answer: "Shipments within the EU are handled by GLS, and shipments outside the EU are managed by DHL.",
  },
  {
    question: "What warranty do you offer?",
    answer: "We offer a 1-year warranty on all our motors.",
  },
  {
    question: "Why are your motors more efficient than others?",
    answer: "Our motors are more efficient due to advanced technologies like tangential magnet polarization, grain-oriented (GO) steel, rectangular copper wire, and direct stator cooling.",
  },
  {
    question: "How do your motors compare with axial flux motors?",
    answer: "Our motors provide higher torque density, greater efficiency, and lower cost compared to any existing axial flux motors of the same weight and KV rating.",
  },
  {
    question: "What controller do you recommend for your motors?",
    answer: "We recommend using Field-Oriented Control (FOC) controllers, as they are more efficient than Brushless DC (BLDC) controllers.",
  },
  {
    question: "What position sensors do you use?",
    answer: "For our air-cooled motors, we operate in sensorless mode. For liquid-cooled motors, we use magnetic encoder sensors.",
  },
  {
    question: "Can you develop a custom motor design?",
    answer: "Yes, we can develop custom motor designs ranging from 0.5 kW to 1 MW. We can tailor the design for high torque density or high power density, with different cooling systems, voltages, and currents to meet your specific requirements.",
  },
  {
    question: "How long does it take to fulfill an order?",
    answer: "Standard order production takes approximately two months from the time payment is received. However, some of our most popular motor models are in stock and available for quicker shipment.",
  },
  {
    question: "Is it possible to get a discount on your motors?",
    answer: "Yes, discounts are possible depending on the quantity ordered and for certain non-commercial projects.",
  },
];

const FaqPage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h1>
          <p className="text-center text-lg text-gray-600 mb-12">about payment methods, custom manufacturing lead times, warranties, etc.</p>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FaqPage;
