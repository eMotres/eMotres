import React from 'react';
import FaqItem from '@/components/FaqItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '常见问题 — 无人机与航空电机',
  description: '关于我们 AeroStator Core™ 电机的常见问题——生产、付款、配送、保修、技术、定制设计与交期。',
  alternates: {
    canonical: '/zh/faq',
    languages: { en: '/faq', 'zh-CN': '/zh/faq' },
  },
};

const faqs = [
  {
    question: "你们的电机在哪里生产？",
    answer: "我们的电机在中国生产，并可应要求在欧盟进行最终组装与测试。",
  },
  {
    question: "我如何付款？",
    answer: "目前通过发票付款。直接通过我们在线商店购买的选项即将上线。",
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
    answer: "我们所有电机均基于专利的 AeroStator Core™ 架构打造——切向磁体极化、扁平铜线绕组与定子直接散热——共同实现同级别中最高的扭矩密度与效率。",
  },
  {
    question: "你们的电机与轴向磁通电机相比如何？",
    answer: "在相同重量和 KV 值下，AeroStator Core 电机相比现有轴向磁通电机具有更高的扭矩密度、更高的效率和更低的成本。",
  },
  {
    question: "你们推荐为电机搭配什么控制器？",
    answer: "我们推荐使用磁场定向控制（FOC）控制器，因为它们比梯形波无刷直流（BLDC）控制器更高效。",
  },
  {
    question: "你们使用什么位置传感器？",
    answer: "风冷电机采用无传感器模式运行；液冷电机使用磁编码器传感器。",
  },
  {
    question: "你们能开发定制电机设计吗？",
    answer: "可以——我们开发功率从 0.5 kW 到 1 MW 的定制电机，针对高扭矩密度或高功率密度进行优化，并配以满足您需求的散热系统、电压与电流。",
  },
  {
    question: "完成一个订单需要多长时间？",
    answer: "生产周期为 1.3 至 3 个月，具体取决于电机型号与订购数量。",
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
            常见问题
          </h1>
          <p className="text-lg text-text-secondary">
            付款、交期、保修、技术与定制设计。
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
