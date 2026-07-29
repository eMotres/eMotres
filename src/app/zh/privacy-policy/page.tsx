import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策',
  alternates: {
    canonical: '/zh/privacy-policy/',
    languages: { en: '/privacy-policy/', 'zh-CN': '/zh/privacy-policy/' },
  },
  description: 'MOTRES D.O.O. 隐私政策——我们如何依据 GDPR（通用数据保护条例）收集、使用并保护您的个人数据。',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-surface-primary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-primary mb-2">隐私政策</h1>
        <p className="text-sm text-text-secondary mb-10">最后更新：2025 年 5 月</p>

        <div className="prose prose-sm max-w-none space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. 数据控制者</h2>
            <p>
              您的个人数据由 <strong className="text-text-primary">MOTRES D.O.O.</strong> 处理，
              地址：Kotnikova 34, Ljubljana 1000, Slovenia（欧盟）。<br />
              注册号：7255691000 · 增值税号：SI22399933<br />
              电子邮箱：<a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. 我们收集的数据</h2>
            <p>当您使用我们的网站或与我们联系时，我们可能收集以下个人数据：</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>姓名与电子邮箱地址（联系表单与询价表单）</li>
              <li>公司名称与电话号码（如已提供）</li>
              <li>通过表单提交的留言内容</li>
              <li>技术数据：IP 地址、浏览器类型、访问页面（通过服务器日志）</li>
            </ul>
            <p className="mt-3">我们<strong className="text-text-primary">不会</strong>将 Cookie 用于跟踪或广告。我们不使用 Google Analytics 或类似的第三方跟踪服务。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. 处理目的与法律依据</h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary">回复咨询与报价请求</p>
                <p>法律依据：合法利益（GDPR 第 6(1)(f) 条）以及订立合同前的必要措施（GDPR 第 6(1)(b) 条）。</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">订单履行与开具发票</p>
                <p>法律依据：合同的履行（GDPR 第 6(1)(b) 条）以及法定义务（GDPR 第 6(1)(c) 条）。</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">营销通讯</p>
                <p>法律依据：您的明示同意（GDPR 第 6(1)(a) 条）。您可随时撤回同意。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. 数据保存期限</h2>
            <p>
              联系与询价咨询数据自最后一次联系起最长保存 <strong className="text-text-primary">3 年</strong>。
              发票与订单数据依据斯洛文尼亚会计法规保存 <strong className="text-text-primary">10 年</strong>。
              除法律要求继续保存外，我们将依您的请求删除相关数据。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. 数据共享</h2>
            <p>我们不会出售或出租您的个人数据。我们可能与以下方共享数据：</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>物流合作伙伴（GLS、DHL）——仅用于订单配送</li>
              <li>会计与法律服务提供商——在严格保密的前提下</li>
              <li>Firebase（Google LLC）——网站托管；数据可能依据标准合同条款（Standard Contractual Clauses）在欧盟/美国境内处理</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. 您的权利（GDPR）</h2>
            <p>根据 GDPR，您享有以下权利：</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-text-primary">访问权</strong>——请求获取您个人数据的副本</li>
              <li><strong className="text-text-primary">更正权</strong>——更正不准确的数据</li>
              <li><strong className="text-text-primary">删除权</strong>——请求删除数据（“被遗忘权”）</li>
              <li><strong className="text-text-primary">限制处理权</strong>——限制我们处理您数据的方式</li>
              <li><strong className="text-text-primary">可携带权</strong>——以机器可读格式获取您的数据</li>
              <li><strong className="text-text-primary">反对权</strong>——反对基于合法利益进行的处理</li>
              <li><strong className="text-text-primary">撤回同意</strong>——随时撤回对基于同意的处理的授权</li>
            </ul>
            <p className="mt-3">
              如需行使任何权利，请发送邮件至 <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>。
              您也有权向斯洛文尼亚信息专员公署
              （<a href="https://www.ip-rs.si" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">ip-rs.si</a>）提出投诉。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. 安全</h2>
            <p>
              我们采用行业标准措施保护您的数据，包括 HTTPS 加密与访问控制。
              互联网上的任何传输方式都无法做到 100% 安全，因此我们无法保证绝对的安全性。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. 本政策的变更</h2>
            <p>
              我们可能不时更新本隐私政策。本页顶部的“最后更新”日期表示最近一次修订的时间。
              在变更后继续使用我们的网站即视为接受更新后的政策。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">9. 联系方式</h2>
            <p>
              如有任何与隐私相关的问题或请求，请联系：<br />
              <strong className="text-text-primary">MOTRES D.O.O.</strong><br />
              Kotnikova 34, Ljubljana 1000, Slovenia<br />
              <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
