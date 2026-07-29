import React from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '无人机、UAV 与航空用电机',
  description: '探索我们的高性能电机系列。我们提供从 5 kW 到 170 kW 的风冷和液冷电机，专为无人机、航空及其他高要求应用而设计。',
  alternates: {
    canonical: '/zh/shop/',
    languages: { en: '/shop/', 'zh-CN': '/zh/shop/' },
  },
};

const coreProducts = products.filter(p => p.technology === 'AeroStator Core');
const classicProducts = products.filter(p => p.technology === 'Classic');

const ShopPage = () => {
  return (
    <main>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold text-center mb-3 text-text-primary">电机</h1>
          <p className="text-center text-text-secondary mb-16">面向无人机、航空、船舶和汽车应用的高性能电机</p>

          {/* ── AeroStator Core Section ── */}
          <div className="mb-16" style={{ isolation: 'isolate' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-brand/20" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand">新一代</span>
              <div className="h-px flex-1 bg-brand/20" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-text-primary">AeroStator Core</h2>
              <p className="text-sm text-text-secondary mt-1 max-w-xl mx-auto">
                专利定子架构 —— 切向磁体、扁平铜线绕组、同级最佳散热。市场上最高的扭矩密度。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {coreProducts.map(product => (
                <ProductCard
                  key={product.slug}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                  priceTag={product.priceBadge ? '样品' : undefined}
                  productUrl={`/shop/${product.slug}`}
                  locale="zh"
                />
              ))}
            </div>
          </div>

          {/* ── Classic Line Section ── */}
          <div style={{ isolation: 'isolate' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">经典系列</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-text-primary">旧款电机结构</h2>
              <p className="text-sm text-text-secondary mt-1 max-w-xl mx-auto">
                已停产。可采用全新的 AeroStator Core 技术提供定制订单。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {classicProducts.map(product => (
                <ProductCard
                  key={product.slug}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                  priceTag={product.priceBadge ? '样品' : undefined}
                  productUrl={`/shop/${product.slug}`}
                  locale="zh"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ShopPage;
