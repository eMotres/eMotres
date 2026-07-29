import type { Metadata } from 'next';
import ZhLang from './ZhLang';

export const metadata: Metadata = {
  description:
    'eMotres 设计并制造基于专利 AeroStator Core™ 架构的高性能电机——切向磁化与扁平铜线绕组，实现市场领先的扭矩密度。适用于无人机、UAV、航空与船舶应用。',
  keywords: [
    '电机',
    '无人机电机',
    'UAV 电机',
    '航空电机',
    '高扭矩密度',
    'AeroStator Core',
    '切向磁化',
    '内转子电机',
    '无刷直流电机',
    '定制电机设计',
  ],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'eMotres',
    title: 'eMotres | 高性能电机',
    description:
      '基于专利 AeroStator Core™ 架构的高性能电机——市场领先的扭矩密度，适用于无人机、UAV 与航空应用。',
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ZhLang />
      {children}
    </>
  );
}
