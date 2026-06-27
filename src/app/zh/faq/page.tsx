import React from 'react';
import FaqItem from '@/components/FaqItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '常见问题 — 无人机与航空电机',
  description: '查找有关我们电机的常见问题解答，涵盖生产、付款、配送、保修、技术、定制设计以及订单交付等方面。',
  alternates: {
    canonical: '/zh/faq',
    languages: { en: '/faq', 'zh-CN': '/zh/faq' },
  },
};

const faqs = [
  {
    question: "你们的电机在哪里生产？",
    answer: "我们的电机在斯洛文尼亚（欧盟）进行组装和测试，部分零部件从中国采购。",
  },
  {
    question: "我如何付款？",
    answer: "目前仅支持通过发票付款。不过，通过我们在线商店购买的选项即将上线",
  },
  {
    question: "你们如何处理发货？",
    answer: "欧盟境内的发货由 GLS 负责，欧盟境外的发货由 DHL 负责。",
  },
  {
    question: "你们提供怎样的保修？",
    answer: "我们为所有电机提供 1 年保修。",
  },
  {
    question: "为什么你们的电机比其他产品更高效？",
    answer: "得益于切向磁体极化、取向（GO）钢、矩形铜线以及定子直接散热等先进技术，我们的电机效率更高。",
  },
  {
    question: "你们的电机与轴向磁通电机相比如何？",
    answer: "在相同重量和 KV 值的条件下，与任何现有的轴向磁通电机相比，我们的电机具有更高的扭矩密度、更高的效率和更低的成本。",
  },
  {
    question: "你们推荐为电机搭配什么控制器？",
    answer: "我们推荐使用磁场定向控制（FOC）控制器，因为它们比无刷直流（BLDC）控制器更高效。",
  },
  {
    question: "你们使用什么位置传感器？",
    answer: "对于风冷电机，我们采用无传感器模式运行。对于液冷电机，我们使用磁编码器传感器。",
  },
  {
    question: "你们能开发定制电机设计吗？",
    answer: "可以，我们能够开发功率范围从 0.5 kW 到 1 MW 的定制电机设计。我们可以针对高扭矩密度或高功率密度进行定制，并采用不同的散热系统、电压和电流，以满足您的特定需求。",
  },
  {
    question: "完成一个订单需要多长时间？",
    answer: "标准订单在收到付款后大约需要两个月进行生产。不过，我们部分最受欢迎的电机型号有现货，可更快发货。",
  },
  {
    question: "你们的电机有可能享受折扣吗？",
    answer: "可以，折扣视订购数量而定，某些非商业项目也可享受折扣。",
  },
];

const FaqPage = () => {
  return (
    <main>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">常见问题</h1>
          <p className="text-center text-lg text-gray-600 mb-12">关于付款方式、定制生产交期、保修等</p>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>    </main>
  );
};

export default FaqPage;
