// ─────────────────────────────────────────────────────────────────────────────
// Simplified-Chinese content overlay for the product catalogue.
//
// English (src/lib/products.ts) stays the single source of truth for all data:
// numbers, SKUs, prices, images, dyno points, competitor curves. This file only
// carries translated *text* keyed by product slug, and is merged over the
// English product at render time by the /zh/shop/[slug] route.
//
// Nothing here is imported by the English pages, so their output is unchanged.
// ─────────────────────────────────────────────────────────────────────────────

import { DynoTest, MotorComparison, Product, getProductBySlug } from './products';

/** Everything in a dyno test except the measured points (which are language-neutral). */
export type DynoTestZh = Omit<DynoTest, 'points'>;

/** Everything in a comparison except the competitor's measured curve. */
export type MotorComparisonZh = Omit<MotorComparison, 'theirsPoints'>;

export interface ProductZh {
  title: string;
  /**
   * Price shown on the Chinese pages, in RMB. Indicative conversion of the
   * canonical EUR price at 7.7 CNY/EUR, rounded up to the nearest ¥100 — the
   * store is quote-only, so this is a guide figure, not a checkout amount.
   * The EUR value in src/lib/products.ts stays the source of truth.
   */
  priceZh: string;
  description: string;
  applications: string;
  status: string;
  keyClaim?: string;
  priceBadge?: string;
  priceNote?: string;
  priceComingSoon?: string;
  specs: { label: string; value: string }[];
  dynoTest?: DynoTestZh;
  dynoTestFoc?: DynoTestZh;
  comparison?: MotorComparisonZh;
}

export const productsZh: Record<string, ProductZh> = {
  'ciano-40-12': {
    title: 'CIANO14 40_12 — 紧凑型高扭矩电机',
    priceZh: '¥2,400',
    priceBadge: '工程样机',
    priceNote: '手工制造，逐台台架测试。',
    priceComingSoon: '量产价 ¥500 —— 达到量产规模后推出。',
    keyClaim: '6 kW/kg —— 持续功率与推力超过同级别任何 3115 级电机的 2.5 倍。',
    status: '工程样机 —— 按订单生产（约 1.5 个月）',
    description:
      'CIANO14 40_12 是基于 AeroStator Core 平台打造的紧凑型精密电机。切向磁体磁化在极小的体积内实现出色的扭矩密度 —— 是竞速无人机与精密空中系统的理想选择。',
    applications: '竞速无人机、精密 UAV、轻型空中机器人。适配 10″–12″ 螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIANO14 40_12' },
      { label: '槽极配置', value: '14 极 / 12 槽' },
      { label: 'KV 值', value: '约 850 rpm/V' },
      { label: '扭矩常数 (Kt)', value: '0.011 Nm/A' },
      { label: '电压', value: '15–25 V（6S 锂聚合物电池）' },
      { label: '冷却方式', value: '风冷' },
      { label: '防护形式', value: '开放式结构' },
      { label: '外形尺寸（直径×长度）', value: '40 × 47 mm' },
      { label: '重量', value: '0.125 kg' },
      { label: '最高温度', value: '150 °C' },
      { label: '质保', value: '1 年' },
    ],
    dynoTest: {
      title: 'BLDC 控制器（梯形波）',
      intro:
        'CIANO14 40_12 的首次螺旋桨测功台扫描测试，采用三叶 10.5×5（HQ1050）螺旋桨、24 V 母线（2026-06-16）—— 系统效率（电机 + 控制器）在直至量程顶端的范围内始终保持 75–77 % 的平台区，同时绕组温升极低。',
      conditions: '10.5×5（HQ1050）· 三叶螺旋桨 · 24 V 母线 · 环境温度 31.3 °C',
      date: '2026-06-16',
      note: '温度数据来自自动爬升过程（瞬态，非稳态）。',
      setup: [
        { label: '测试台架', value: 'LY-10KGF 测功台' },
        { label: '螺旋桨', value: '10.5×5（HQ1050）· 三叶' },
        { label: '电调', value: '80 A' },
        { label: '母线电压', value: '24 V' },
        { label: '环境', value: '31.3 °C / 74.7 % 相对湿度' },
        { label: '大气压', value: '100.70 kPa' },
      ],
      highlights: [
        { label: '系统效率峰值', value: '76.9 %', sub: '80 % 油门时' },
        { label: '最大推力', value: '4304 g', sub: '14,524 rpm @ 24 V' },
        { label: '最大推力时的功率', value: '1402 W', sub: '电流 61.9 A' },
      ],
    },
    dynoTestFoc: {
      title: 'FOC 控制器（正弦波）',
      intro:
        '同一台 CIANO14 40_12 改由磁场定向（FOC / 正弦波）控制器驱动，采用双叶 10×4.5 螺旋桨、22 V 母线（2026-07-09）。从梯形波 BLDC 换成 FOC 后，系统效率峰值提升至 84.2 % —— 约高出 7 个百分点，整条曲线也更为平滑。',
      conditions: '10×4.5（1045）· 双叶螺旋桨 · 22 V 母线 · FOC 控制器',
      date: '2026-07-09',
      note: '此处效率为系统效率（电机 + 控制器）= 轴功率 / 电功率。本次控制器日志没有温度通道。本次测试与 BLDC 测试的差异不止于控制器 —— 测功台不同（DET G10-10KGF 对比 LY-10KGF）、螺旋桨不同（双叶 10×4.5 对比三叶 10.5×5）、母线电压也不同（22 V 对比 24 V）。因此两者是相互独立的数据点，而非受控的 A/B 对比：无论推力还是效率的差异，都不能仅归因于控制器。',
      setup: [
        { label: '测试台架', value: 'DET G10-10KGF 测功台' },
        { label: '螺旋桨', value: '10×4.5（1045）· 双叶' },
        { label: '控制器', value: 'FOC（正弦波）' },
        { label: '母线电压', value: '22 V' },
        { label: '信号', value: '50 Hz PWM 扫描' },
      ],
      highlights: [
        { label: '系统效率峰值', value: '84.2 %', sub: '约 8,500 rpm / 1,579 g 时' },
        { label: '相比 BLDC 的效率提升', value: '+7 pp', sub: '84.2 % 对比 76.9 %（梯形波）' },
        { label: '最大推力', value: '3622 g', sub: '12,606 rpm @ 21.2 V' },
      ],
    },
    comparison: {
      ourName: 'CIANO14 40_12',
      competitor: 'T-Motor V3115 KV900',
      intro:
        '在完全相同的螺旋桨（HQ1050-3）和相同的 24 V 母线下，与市售 T-Motor V3115 KV900 进行实测对比 —— 条件完全匹配，因此优势来自电机本身，而非螺旋桨。',
      highlights: [
        { value: '+12–13 pp', label: '大推力工况下的系统效率' },
        { value: '−15 %', label: '同等推力下的电流消耗' },
        { value: '−16 %', label: '同等推力下的电功率' },
        { value: '+15–20 %', label: '推力效率 → 续航时间' },
      ],
      rows: [
        { label: '绕组导线', ours: '扁平矩形线', theirs: '圆线', win: 'ours' },
        { label: '线圈数量', ours: '6 个线圈', theirs: '12 个线圈', win: 'ours' },
        { label: '铜槽满率', ours: '约 75 %', theirs: '约 35 %', win: 'ours' },
        { label: '线间电阻', ours: '19.1 mΩ', theirs: '约 76 mΩ', win: 'ours' },
        { label: 'R·KV²（铜质量指标，↓ 越低越好）', ours: '14,097', theirs: '约 61,560', win: 'ours' },
        { label: 'KV 值', ours: '858 rpm/V', theirs: '900 rpm/V', win: 'tie' },
        { label: '重量', ours: '125 g', theirs: '115 g', win: 'theirs' },
        { label: '系统效率峰值', ours: '76.9 %', theirs: '约 71 %', win: 'ours' },
        { label: '大推力工况下的效率', ours: '76.0 %', theirs: '62–64 %', win: 'ours' },
        { label: '约 4,300 g 推力时的电流', ours: '61.9 A', theirs: '约 72 A', win: 'ours' },
        { label: '约 4,300 g 推力时的电功率', ours: '1,402 W', theirs: '约 1,662 W', win: 'ours' },
        { label: '最大推力（HQ1050-3，24 V）', ours: '4,304 g', theirs: '4,605 g', win: 'theirs' },
      ],
      note:
        'T-Motor 的数据为厂商公布的推力测试数据；其系统效率由公布的电压、电流、转速和扭矩计算得出。两只螺旋桨经验证在气动上完全一致（±1 %），因此效率优势来自扁平铜线绕组更高的槽满率与更低的电阻。T-Motor 通过消耗更大电流取得约 7 % 更高的峰值推力；CIANO 运行温度更低且仍留有电流余量，预计在更大直径或更大螺距的螺旋桨上可以补上这一差距。R·KV² 是归一化的铜质量指标（数值越低越好）。',
    },
  },

  'ciano-150-30': {
    title: 'CIANO28 150_30 — 中功率航空电机',
    priceZh: '¥7,700',
    status: '按订单生产（约 2 个月）',
    description:
      'CIANO28 150_30 以开放式结构提供 8 kW 持续功率（峰值 14.4 kW），并可选配 IP65 密封。它基于 AeroStator Core 平台并采用扁平铜线绕组，实现同级最高的扭矩重量比 —— 专为高要求的无人机与轻型航空应用打造。',
    applications: '重载无人机、轻型载人飞机、船舶推进。适配 55″–65″ 螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIANO28 150_30' },
      { label: '槽极配置', value: '42 极 / 36 槽' },
      { label: 'KV 值', value: '43 rpm/V' },
      { label: '扭矩常数 (Kt)', value: '0.22 Nm/A' },
      { label: '电压', value: '47–76 V（18S 锂聚合物电池）' },
      { label: '冷却方式', value: '风冷' },
      { label: '防护形式', value: '开放式结构' },
      { label: '外形尺寸（直径×长度）', value: '150 × 64 mm' },
      { label: '重量', value: '3 kg' },
      { label: '最高温度', value: '150 °C' },
      { label: '质保', value: '1 年' },
    ],
    dynoTest: {
      intro:
        'CIANO28 150_30 搭配 56″ 螺旋桨的测功台扫描测试 —— 在 8.1 kW 下持续输出约 49 kg 推力，系统效率（电机 + 控制器）峰值达 86.6 %，电机单体效率峰值达 92.3 %。',
      conditions: '56″ 螺旋桨 · 高压母线 · 环境温度 26 °C',
      note: '表中的系统效率为电功率 → 轴功率（整个驱动系统，含控制器）；电机单体效率峰值为 92.3 %。持续工作点（约 49 kg @ 8.1 kW）在 74.9 V 下测得。',
      setup: [
        { label: '螺旋桨', value: '56″' },
        { label: '母线电压', value: '扫描约 70 V / 持续 74.9 V' },
        { label: '环境', value: '26 °C / 56 % 相对湿度' },
        { label: '电机重量', value: '3.0 kg' },
      ],
      highlights: [
        { label: '持续推力', value: '48.8 kg', sub: '8.1 kW · 2,293 rpm · 电机效率 90.3 %' },
        { label: '峰值推力', value: '67.2 kg', sub: '14.4 kW · 2,700 rpm' },
        { label: '系统效率峰值', value: '86.6 %', sub: '电机单体 92.3 %' },
      ],
    },
  },

  '5-kw-air-cooled-electric-motor': {
    title: '5 kW 风冷电机 CIAG 125_25',
    priceZh: '¥11,600',
    status: '按订单生产（约 2 个月）',
    description:
      '紧凑型 5 kW 持续功率全密封 IP65 永磁同步电机，采用风冷。专利结构为轻型无人机与 UAV 应用带来出色的扭矩密度。',
    applications: '适用于无人机应用。适配中小尺寸螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIAG 125_25' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '5 kW @ 4000 rpm' },
      { label: '峰值功率', value: '8 kW @ 5000 rpm' },
      { label: 'KV 值', value: '36 / 74 rpm/V' },
      { label: '直流电压', value: '50V – 120V' },
      { label: '重量', value: '2.2 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '风冷' },
      { label: '传感器', value: 'PT1000' },
      { label: '质保', value: '1 年' },
    ],
  },

  '12-kw-air-cooled-electric-motor': {
    title: '12 kW 风冷电机',
    priceZh: '¥15,400',
    status: '现货供应（斯洛文尼亚仓库）',
    description:
      '12 kW 持续功率全密封 IP65 永磁同步电机，采用风冷。使用取向硅钢与扁平铜线，效率更为出色。',
    applications: '专为大型无人机应用设计。适配 60″–63″ 螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIAG 150_40' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '12 kW @ 2000 rpm' },
      { label: '峰值功率', value: '15 kW @ 2500 rpm' },
      { label: '持续扭矩', value: '58 Nm' },
      { label: '峰值扭矩', value: '95 Nm' },
      { label: 'KV 值', value: '8.5 / 17 / 34 rpm/V' },
      { label: '直流电压', value: '100V / 200V / 400V' },
      { label: '重量', value: '4.9 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '风冷' },
      { label: '传感器', value: '无传感器' },
      { label: '质保', value: '1 年' },
    ],
  },

  '13-kw-air-cooled-electric-motor': {
    title: '13 kW 风冷电机',
    priceZh: '¥19,300',
    status: '按订单生产（约 2 个月）',
    description:
      '13 kW 持续功率全密封 IP65 永磁同步电机，采用风冷。高效率设计，电压范围可定制，适用于重载无人机应用。',
    applications: '适用于追求高效率的大型无人机应用。适配 65″–73″ 螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIAG 200_30' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '13 kW @ 1600 rpm' },
      { label: '峰值功率', value: '20 kW @ 2000 rpm' },
      { label: '持续扭矩', value: '78 Nm' },
      { label: '峰值扭矩', value: '96 Nm' },
      { label: 'KV 值', value: '4 / 8 rpm/V' },
      { label: '直流电压', value: '400V / 800V' },
      { label: '重量', value: '7 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '风冷' },
      { label: '传感器', value: '无传感器' },
      { label: '质保', value: '1 年' },
    ],
  },

  '20-kw-air-cooled-electric-motor': {
    title: '20 kW 风冷电机',
    priceZh: '¥23,100',
    status: '按订单生产（约 2 个月）',
    description:
      '20 kW 持续功率全密封 IP65 永磁同步电机，采用风冷。结构坚固、峰值扭矩输出大，适用于高要求的航空与无人机应用。',
    applications: '适用于大型无人机应用。适配 70″–73″ 螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIAG 200_45' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '20 kW @ 2000 rpm' },
      { label: '峰值功率', value: '40 kW @ 2400 rpm' },
      { label: '持续扭矩', value: '96 Nm' },
      { label: '峰值扭矩', value: '160 Nm' },
      { label: 'KV 值', value: '5 / 10 rpm/V' },
      { label: '直流电压', value: '400V / 800V' },
      { label: '重量', value: '10 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '风冷' },
      { label: '传感器', value: '无传感器' },
      { label: '质保', value: '1 年' },
    ],
  },

  '50-kw-air-cooled-electric-motor': {
    title: '50 kW 风冷电机',
    priceZh: '¥30,800',
    status: '按订单生产（约 2 个月）',
    description:
      '50 kW 持续功率全密封 IP65 永磁同步电机，采用风冷。面向大型 UAV 与小型飞机的大功率方案，扭矩密度出色。',
    applications: '适用于大型无人机与小型飞机应用。适配 70″–82″ 螺旋桨。',
    specs: [
      { label: 'SKU', value: 'CIAG 250_50' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '50 kW @ 2000 rpm' },
      { label: '峰值功率', value: '75 kW @ 2400 rpm' },
      { label: '持续扭矩', value: '239 Nm' },
      { label: '峰值扭矩', value: '298 Nm' },
      { label: 'KV 值', value: '4.3 / 8.6 rpm/V' },
      { label: '直流电压', value: '400V / 800V' },
      { label: '重量', value: '18 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '风冷' },
      { label: '传感器', value: '无传感器' },
      { label: '质保', value: '1 年' },
    ],
  },

  'liquid-cooled-50-kw-electric-motor': {
    title: '50 kW 液冷电机',
    priceZh: '¥38,500',
    status: '按订单生产（约 2 个月）',
    description:
      '50 kW 持续功率全密封 IP65 永磁同步电机，配备液冷系统。采用磁编码器实现精确的 FOC 控制，是持续重载工况的理想选择。',
    applications: '适用于大型无人机与船舶应用。电压可在 200V 至 400V 之间定制。',
    specs: [
      { label: 'SKU', value: 'CILG 200_50' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '50 kW @ 4000 rpm' },
      { label: '峰值功率', value: '75 kW @ 4000 rpm' },
      { label: '持续扭矩', value: '120 Nm' },
      { label: '峰值扭矩', value: '180 Nm' },
      { label: 'KV 值', value: '11 / 22 rpm/V' },
      { label: '直流电压', value: '200V / 400V' },
      { label: '重量', value: '12 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '液冷' },
      { label: '传感器', value: '编码器' },
      { label: '质保', value: '1 年' },
    ],
  },

  '110-kw-liquid-cooled-electric-motor': {
    title: '110 kW 液冷电机',
    priceZh: '¥53,900',
    status: '按订单生产（约 2 个月）',
    description:
      '110 kW 持续功率全密封 IP65 永磁同步电机，采用液冷。工业级性能，适用于大功率飞行器与重型船舶。',
    applications: '适用于大型无人机与船舶应用。电压可在 400V 至 800V 之间配置。',
    specs: [
      { label: 'SKU', value: 'CILG 250_50' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '110 kW @ 4000 rpm' },
      { label: '峰值功率', value: '150 kW @ 4000 rpm' },
      { label: '持续扭矩', value: '350 Nm' },
      { label: '峰值扭矩', value: '400 Nm' },
      { label: 'KV 值', value: '7 / 14 rpm/V' },
      { label: '直流电压', value: '400V / 800V' },
      { label: '重量', value: '20 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '液冷' },
      { label: '传感器', value: '编码器' },
      { label: '质保', value: '1 年' },
    ],
  },

  '170-kw-liquid-cooled-electric-motor': {
    title: '170 kW 液冷电机',
    priceZh: '¥84,700',
    status: '按订单生产（约 2 个月）',
    description:
      '170 kW 持续功率全密封 IP65 永磁同步电机，采用液冷。这是我们功率最大的电机 —— eMotres 工程实力的巅峰之作，适用于全尺寸电动飞机与重型船舶推进。',
    applications: '适用于大型无人机与船舶应用。电压可在 400V 至 800V 之间配置。',
    specs: [
      { label: 'SKU', value: 'CILG 300_70' },
      { label: '电机类型', value: 'PMSM 永磁同步电机' },
      { label: '持续功率', value: '170 kW @ 4000 rpm' },
      { label: '峰值功率', value: '250 kW @ 4000 rpm' },
      { label: '持续扭矩', value: '670 Nm' },
      { label: '峰值扭矩', value: '700 Nm' },
      { label: 'KV 值', value: '6 / 12 rpm/V' },
      { label: '直流电压', value: '400V / 800V' },
      { label: '重量', value: '38 kg' },
      { label: '防护等级', value: 'IP65' },
      { label: '冷却方式', value: '液冷' },
      { label: '传感器', value: '编码器' },
      { label: '质保', value: '1 年' },
    ],
  },
};

/** Localised category badge. */
export const categoryZh: Record<Product['category'], string> = {
  'Air-cooled': '风冷',
  'Liquid-cooled': '液冷',
};

/** The Chinese product title (falls back to the English one). */
export function productTitleZh(slug: string, fallback: string): string {
  return productsZh[slug]?.title ?? fallback;
}

/** The RMB price string (falls back to the canonical EUR one). */
export function productPriceZh(slug: string, fallback: string): string {
  return productsZh[slug]?.priceZh ?? fallback;
}

/**
 * The English product with its Chinese text merged in. All numeric data
 * (specs values that are pure numbers, dyno points, competitor curves,
 * price, image) comes straight from the English source of truth.
 */
export function getProductZhBySlug(slug: string): Product | undefined {
  const en = getProductBySlug(slug);
  if (!en) return undefined;
  const zh = productsZh[slug];
  if (!zh) return en;

  return {
    ...en,
    title: zh.title,
    price: zh.priceZh,
    description: zh.description,
    applications: zh.applications,
    status: zh.status,
    keyClaim: zh.keyClaim ?? en.keyClaim,
    priceBadge: zh.priceBadge ?? en.priceBadge,
    priceNote: zh.priceNote ?? en.priceNote,
    priceComingSoon: zh.priceComingSoon ?? en.priceComingSoon,
    specs: zh.specs,
    dynoTest:
      en.dynoTest && zh.dynoTest ? { ...zh.dynoTest, points: en.dynoTest.points } : en.dynoTest,
    dynoTestFoc:
      en.dynoTestFoc && zh.dynoTestFoc
        ? { ...zh.dynoTestFoc, points: en.dynoTestFoc.points }
        : en.dynoTestFoc,
    comparison:
      en.comparison && zh.comparison
        ? { ...zh.comparison, theirsPoints: en.comparison.theirsPoints }
        : en.comparison,
  };
}
