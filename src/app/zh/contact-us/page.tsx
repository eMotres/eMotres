import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们',
  alternates: {
    canonical: '/zh/contact-us',
    languages: { en: '/contact-us', 'zh-CN': '/zh/contact-us' },
  },
  description: '如对我们的高性能电机有任何疑问，欢迎与 eMotres 联系。查看我们位于斯洛文尼亚卢布尔雅那的地址，并通过邮箱与我们联系。',
};

const ContactPage = () => {
  return (
    <main>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">与我们联系</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">有疑问吗？</h2>
              <ContactForm />
            </div>
            <div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">公司信息</h3>
                  <p>MOTRES d.o.o.</p>
                  <p>注册号：7255691000</p>
                  <p>增值税号：SI22399933</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">地址：</h3>
                  <p>Kotnikova 34, <br />Ljubljana 1000, <br />Slovenia</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">联系我们</h3>
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
      </div>    </main>
  );
};

export default ContactPage;
