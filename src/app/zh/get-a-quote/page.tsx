import React from 'react';
import QuoteForm from '@/components/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '定制电机获取报价',
  alternates: {
    canonical: '/zh/get-a-quote',
    languages: { en: '/get-a-quote', 'zh-CN': '/zh/get-a-quote' },
  },
  description: '为定制电机申请报价。请说明您对持续功率、转速、电压、散热等方面的要求，我们将为您估算大致成本。',
};

const GetAQuotePage = () => {
  return (
    <main>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-4">获取报价</h1>
            <p className="text-center text-lg text-gray-600 mb-12">没有找到合适的电机，需要按您的规格定制电机吗？请填写此申请表，我们将为您估算大致成本。</p>
            <QuoteForm />
          </div>
        </div>
      </div>    </main>
  );
};

export default GetAQuotePage;
