import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '定制电机研发服务',
  description: 'eMotres 提供从概念设计到量产的全方位电机研发服务。我们专注于定制电机和发电机（0.5 kW 至 1 MW），运用先进的电磁、机械和热仿真技术。',
  alternates: {
    canonical: '/zh/motor-development-services/',
    languages: {
      en: '/motor-development-services/',
      'zh-CN': '/zh/motor-development-services/',
    },
  },
};

const ServicePage = () => {
  return (
    <main>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">电机研发服务</h1>
          <div className="prose lg:prose-xl max-w-none">
            <p>在 Motres，我们专注于根据您的独特需求和规格设计与研发定制电机和发电机。无论您需要为当前项目量身打造的解决方案，还是从零开始，我们的团队都能协助您研发适用于各种应用场景的推进系统。我们拥有为不同应用研发 0.5 kW 至 1 MW 电机和发电机的经验。</p>
            <h2>我们全方位的电机研发流程：</h2>
            <h3>1. 从概念设计到原型制作：</h3>
            <p>我们提供完整的电机研发周期，将您最初的想法转化为可运行的原型。我们的方法确保流程每个阶段的精确性、效率和有效性。</p>
            <h3>2. 先进的仿真能力：</h3>
            <p><strong>电磁仿真：</strong> 我们使用 Ansys Maxwell 进行详细的电磁仿真，以优化电机的效率和性能。</p>
            <p><strong>机械仿真：</strong> 我们的团队使用 Fusion 360 进行机械仿真，确保电机在不同工况下的结构完整性和耐用性。</p>
            <p><strong>热仿真：</strong> 我们借助 Fusion 360 进行热仿真，以有效管理散热，确保长期的可靠性和性能。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
              <Image src="/images/elect2.webp" alt="电磁仿真" width={500} height={300} className="rounded-lg shadow-md" />
              <Image src="/images/mech2-993x1024.webp" alt="机械仿真" width={500} height={300} className="rounded-lg shadow-md" />
              <Image src="/images/therm1.webp" alt="热仿真" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <h3>3. 详细图纸：</h3>
            <p>我们在 Fusion 360 方面的专长使我们能够创建精确的机械图纸，为电机设计提供准确的呈现，从而实现无缝生产。</p>
            <h3>4. 原型制作与验证：</h3>
            <p>我们协助生产样品，随后进行严格的测试和验证流程，以确认电机的性能和可靠性。</p>
            <h3>5. 量产：</h3>
            <p>设计经过验证后，我们支持向量产的过渡，确保每台电机都符合我们的高质量标准。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                <Image src="/images/motor4.png" alt="电机 4" width={500} height={300} className="rounded-lg shadow-md" />
                <Image src="/images/motor2-1011x1024.png" alt="电机 2" width={500} height={300} className="rounded-lg shadow-md" />
                <Image src="/images/motor1.png" alt="电机 1" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <h3>合作伙伴关系：</h3>
            <p>我们以协作的方式为荣，在整个研发过程中与客户紧密合作，确保最终产品满足他们的具体需求。我们的团队致力于在电机研发生命周期的每个阶段提供创新的解决方案和卓越的服务。</p>
            <div className="my-12">
              <Image src="/images/Many1-1024x794.png" alt="合作伙伴关系" width={1024} height={794} className="rounded-lg shadow-md mx-auto" />
            </div>
          </div>
        </div>
      </div>    </main>
  );
};

export default ServicePage;
