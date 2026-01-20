import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MOTRES D.O.O</h3>
            <p className="text-sm">Reg. No.: 7255691000<br />VAT: SI22399933</p>
            <p className="text-sm mt-4">Kotnikova 34<br />Ljubljana 1000, Slovenia</p>
            <p className="text-sm mt-4">Email: <a href="mailto:sales@emotres.com" className="hover:text-gray-300">sales@emotres.com</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="text-sm">
              <li><a href="/motor-development-services" className="hover:text-gray-300">Service</a></li>
              <li><a href="/blog" className="hover:text-gray-300">Technology</a></li>
              <li><a href="/contact-us" className="hover:text-gray-300">Contacts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="text-sm">
              <li><a href="/term-conditions" className="hover:text-gray-300">Term & Conditions</a></li>
              <li><a href="/refund_returns-2" className="hover:text-gray-300">Delivery & Returns</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/cookie-policy-eu" className="hover:text-gray-300">Cookies</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <a href="https://www.linkedin.com/company/motres/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} All rights reserved. Use of any content is permitted with an active link to our website. Created by <a href="https://sitein.eu/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Sitein</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
