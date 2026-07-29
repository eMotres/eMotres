import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们',
  alternates: {
    canonical: '/zh/contact-us/',
    languages: { en: '/contact-us/', 'zh-CN': '/zh/contact-us/' },
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
              <ContactForm locale="zh" />
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
                  <p>微信：xst_ish</p>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6 text-center max-w-sm">
                <h3 className="text-xl font-bold mb-4">微信联系</h3>
                <img
                  src="/images/wechat-qr.jpg"
                  alt="微信二维码：xst_ish — 扫码添加好友"
                  loading="lazy"
                  className="w-full max-w-xs mx-auto rounded-xl"
                />
                <p className="mt-4 text-gray-500">扫二维码，添加我为朋友</p>
              </div>
            </div>
          </div>
        </div>
      </div>    </main>
  );
};

export default ContactPage;
