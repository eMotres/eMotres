import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">Get in Touch with Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Have A Question?</h2>
              <ContactForm />
            </div>
            <div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Company data</h3>
                  <p>MOTRES d.o.o.</p>
                  <p>Reg. No.: 7255691000</p>
                  <p>VAT: SI22399933</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Address:</h3>
                  <p>Kotnikova 34, <br />Ljubljana 1000, <br />Slovenia</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Contact us</h3>
                  <p>sales@emotres.com</p>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://maps.google.com/maps?q=Kotnikova%2034%2C%20Ljubljana%201000%2C%20Slovenia&t=m&z=12&output=embed&iwloc=near"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
