import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '技术博客',
  description:
    '关于电机设计的技术文章——AeroStator Core™ 架构、切向磁化、扁平铜线绕组、散热与扭矩密度。',
  alternates: {
    canonical: '/zh/blog/',
    languages: { en: '/blog/', 'zh-CN': '/zh/blog/' },
  },
};

export default function ZhBlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
