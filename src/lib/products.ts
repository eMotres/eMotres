export interface PerformanceSpecs {
  continuous: {
    power: string;
    torque: string;
    speed: string;
    current: string;
    efficiency: string;
    thrust?: string;
  };
  peak: {
    power: string;
    torque: string;
    speed: string;
    current: string;
    efficiency?: string;
    thrust?: string;
  };
}

/** One operating point from a propeller-dynamometer sweep. */
export interface DynoPoint {
  throttle?: number; // % (optional — some sweeps are stepped by power/RPM, not throttle)
  rpm: number;
  voltage: number; // V
  current: number; // A
  thrust: number; // gram-force
  torque: number; // N·m
  temp: number; // °C
  pElec: number; // electric power, W
  pShaft: number; // shaft (mechanical) power, W
  elecEff: number; // electrical efficiency, %
  sysEff: number; // system efficiency, gf/W
}

export interface DynoTest {
  intro: string;
  conditions?: string;
  date?: string;
  note?: string;
  setup: { label: string; value: string }[];
  highlights: { label: string; value: string; sub?: string }[];
  points: DynoPoint[];
}

export interface Product {
  slug: string;
  sku: string;
  title: string;
  price: string;
  imageUrl: string;
  category: 'Air-cooled' | 'Liquid-cooled';
  technology: 'AeroStator Core' | 'Classic';
  power: string;
  status: string;
  description: string;
  applications: string;
  kvOptions: string[];
  voltageOptions: string[];
  specs: { label: string; value: string }[];
  performanceSpecs?: PerformanceSpecs;
  dynoTest?: DynoTest;
}

export const products: Product[] = [
  {
    slug: 'ciano-40-12',
    sku: 'CIANO14 40_12',
    title: 'CIANO14 40_12 — Compact High-Torque Motor',
    price: '€100.00',
    imageUrl: '/ciano14-40-12.png',
    category: 'Air-cooled',
    technology: 'AeroStator Core',
    power: '4 kW',
    status: 'Made to order (~2 months)',
    description: 'The CIANO14 40_12 is a compact precision motor built on the AeroStator Core platform. Tangential magnet polarization delivers exceptional torque density in a minimal footprint — ideal for racing UAVs and precision aerial systems.',
    applications: 'Racing drones, precision UAVs, light aerial robotics. Compatible with 18″–24″ propellers.',
    kvOptions: ['KV 850'],
    voltageOptions: ['15–25 V (6S LiPo)'],
    specs: [
      { label: 'SKU', value: 'CIANO14 40_12' },
      { label: 'Configuration', value: '14 Poles / 12 Slots' },
      { label: 'KV', value: '~850 rpm/V' },
      { label: 'Torque Constant (Kt)', value: '0.011 Nm/A' },
      { label: 'Voltage', value: '15–25 V (6S LiPo)' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Protection', value: 'Open frame' },
      { label: 'Dimensions (D×L)', value: '40 × 47 mm' },
      { label: 'Weight', value: '0.125 kg' },
      { label: 'Max Temperature', value: '150 °C' },
      { label: 'Warranty', value: '1 year' },
    ],
    performanceSpecs: {
      continuous: {
        power: '800 W',
        torque: '0.48 Nm',
        speed: '12,234 rpm',
        current: '35 A',
        efficiency: '76.5%',
        thrust: '2,980 g',
      },
      peak: {
        power: '1,402 W',
        torque: '0.70 Nm',
        speed: '14,524 rpm',
        current: '62 A',
        efficiency: '76.9%',
        thrust: '4,304 g',
      },
    },
    dynoTest: {
      intro: 'First propeller-dynamometer sweep of the CIANO14 40_12 flat-wire winding on an HQ1050-class propeller at 24 V (2026-06-16) — electrical efficiency holds a 75–77 % plateau to the top of the range while the winding stays cool.',
      conditions: 'HQ1050-class propeller · 24 V bus · ambient 31.3 °C',
      date: '2026-06-16',
      note: 'Temperatures are from an automatic ramp (transient, not steady-state).',
      setup: [
        { label: 'Test bench', value: 'LY-10KGF dynamometer' },
        { label: 'Propeller', value: '1050 (HQ1050 class)' },
        { label: 'ESC', value: '80 A' },
        { label: 'Bus voltage', value: '24 V' },
        { label: 'Ambient', value: '31.3 °C / 74.7 % RH' },
        { label: 'Air pressure', value: '100.70 kPa' },
      ],
      highlights: [
        { label: 'Peak electrical efficiency', value: '76.9 %', sub: 'at 80 % throttle' },
        { label: 'Max thrust', value: '4304 g', sub: '14,524 rpm @ 24 V' },
        { label: 'Power at max thrust', value: '1402 W', sub: 'at 61.9 A' },
      ],
      points: [
        { throttle: 10, rpm: 1871, voltage: 24.28, current: 0.33, thrust: 48, torque: 0.011, temp: 29.4, pElec: 8.0, pShaft: 2.2, elecEff: 26.8, sysEff: 5.97 },
        { throttle: 20, rpm: 4006, voltage: 24.26, current: 1.65, thrust: 252, torque: 0.047, temp: 29.4, pElec: 40.1, pShaft: 19.7, elecEff: 49.2, sysEff: 6.29 },
        { throttle: 30, rpm: 5533, voltage: 24.19, current: 3.64, thrust: 528, torque: 0.093, temp: 29.6, pElec: 87.9, pShaft: 53.9, elecEff: 61.3, sysEff: 6.01 },
        { throttle: 40, rpm: 7040, voltage: 24.05, current: 6.81, thrust: 911, torque: 0.151, temp: 30.0, pElec: 163.7, pShaft: 111.3, elecEff: 68.0, sysEff: 5.57 },
        { throttle: 50, rpm: 8719, voltage: 23.82, current: 12.19, thrust: 1438, torque: 0.231, temp: 30.6, pElec: 290.2, pShaft: 210.9, elecEff: 72.7, sysEff: 4.96 },
        { throttle: 60, rpm: 10222, voltage: 23.59, current: 19.32, thrust: 1993, torque: 0.317, temp: 31.5, pElec: 455.8, pShaft: 339.3, elecEff: 74.4, sysEff: 4.37 },
        { throttle: 70, rpm: 11557, voltage: 23.29, current: 28.31, thrust: 2605, torque: 0.414, temp: 32.5, pElec: 659.5, pShaft: 501.0, elecEff: 76.0, sysEff: 3.95 },
        { throttle: 80, rpm: 12819, voltage: 23.06, current: 39.96, thrust: 3305, torque: 0.528, temp: 33.8, pElec: 921.4, pShaft: 708.8, elecEff: 76.9, sysEff: 3.59 },
        { throttle: 90, rpm: 13990, voltage: 22.80, current: 54.00, thrust: 3976, torque: 0.639, temp: 35.6, pElec: 1231.2, pShaft: 936.2, elecEff: 76.0, sysEff: 3.23 },
        { throttle: 100, rpm: 14524, voltage: 22.66, current: 61.89, thrust: 4304, torque: 0.696, temp: 38.0, pElec: 1402.2, pShaft: 1058.6, elecEff: 75.5, sysEff: 3.07 },
      ],
    },
  },
  {
    slug: 'ciano-150-30',
    sku: 'CIANO28 150_30',
    title: 'CIANO28 150_30 — Mid-Range Aviation Motor',
    price: '€1,000.00',
    imageUrl: '/ciano28-150-30.png',
    category: 'Air-cooled',
    technology: 'AeroStator Core',
    power: '15 kW',
    status: 'Made to order (~2 months)',
    description: 'The CIANO28 150_30 delivers 8 kW of continuous power (14.4 kW peak) in an open-frame construction, with IP65 sealing available as an option. Built on the AeroStator Core platform with rectangular copper windings, it achieves the highest torque-to-weight ratio in its class — purpose-built for demanding UAV and light aviation applications.',
    applications: 'Heavy-lift UAVs, light manned aircraft, marine propulsion. Compatible with 55″–65″ propellers.',
    kvOptions: ['KV 43'],
    voltageOptions: ['47–76 V (18S LiPo)'],
    specs: [
      { label: 'SKU', value: 'CIANO28 150_30' },
      { label: 'Configuration', value: '42 Poles / 36 Slots' },
      { label: 'KV', value: '43 rpm/V' },
      { label: 'Torque Constant (Kt)', value: '0.22 Nm/A' },
      { label: 'Voltage', value: '47–76 V (18S LiPo)' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Protection', value: 'Open frame' },
      { label: 'Dimensions (D×L)', value: '150 × 64 mm' },
      { label: 'Weight', value: '3 kg' },
      { label: 'Max Temperature', value: '150 °C' },
      { label: 'Warranty', value: '1 year' },
    ],
    performanceSpecs: {
      continuous: {
        power: '8,104 W',
        torque: '29 Nm',
        speed: '2,293 rpm',
        current: '108 A',
        efficiency: '90.3%',
        thrust: '48.8 kg',
      },
      peak: {
        power: '14,405 W',
        torque: '43.4 Nm',
        speed: '2,700 rpm',
        current: '211 A',
        efficiency: '92.3%',
        thrust: '67.2 kg',
      },
    },
    dynoTest: {
      intro: 'Propeller-dynamometer sweep of the CIANO28 150_30 on a 56″ propeller — sustaining ~49 kg of continuous thrust at 8.1 kW, with the motor peaking near 92 % efficiency.',
      conditions: '56″ propeller · high-voltage bus · ambient 26 °C',
      note: 'Electrical efficiency in the table is electric → shaft (drive, includes the controller); the motor alone peaks at 92.3 %. The continuous point (≈49 kg @ 8.1 kW) was measured at 74.9 V.',
      setup: [
        { label: 'Propeller', value: '56″' },
        { label: 'Bus voltage', value: '~70 V sweep / 74.9 V continuous' },
        { label: 'Ambient', value: '26 °C / 56 % RH' },
        { label: 'Motor weight', value: '3.0 kg' },
      ],
      highlights: [
        { label: 'Continuous thrust', value: '48.8 kg', sub: '8.1 kW · 2,293 rpm · 90.3 % motor η' },
        { label: 'Peak thrust', value: '67.2 kg', sub: '14.4 kW · 2,700 rpm' },
        { label: 'Peak motor efficiency', value: '92.3 %', sub: 'electric → shaft 86.6 %' },
      ],
      points: [
        { rpm: 1200, voltage: 70.2, current: 19.09, thrust: 12604, torque: 8.54, temp: 25.5, pElec: 1340.1, pShaft: 1073.2, elecEff: 80.1, sysEff: 9.40 },
        { rpm: 1470, voltage: 70.1, current: 34.40, thrust: 19474, torque: 13.18, temp: 27.0, pElec: 2411.4, pShaft: 2028.9, elecEff: 84.1, sysEff: 8.10 },
        { rpm: 1680, voltage: 69.8, current: 49.59, thrust: 25824, torque: 16.68, temp: 29.3, pElec: 3461.4, pShaft: 2934.5, elecEff: 84.8, sysEff: 7.50 },
        { rpm: 1860, voltage: 69.7, current: 67.74, thrust: 33150, torque: 20.71, temp: 33.0, pElec: 4721.5, pShaft: 4033.9, elecEff: 85.4, sysEff: 7.00 },
        { rpm: 2010, voltage: 69.5, current: 87.27, thrust: 39189, torque: 24.96, temp: 37.5, pElec: 6065.3, pShaft: 5253.7, elecEff: 86.6, sysEff: 6.50 },
        { rpm: 2220, voltage: 68.7, current: 115.93, thrust: 45660, torque: 29.49, temp: 41.4, pElec: 7964.4, pShaft: 6855.8, elecEff: 86.1, sysEff: 5.70 },
        { rpm: 2400, voltage: 68.4, current: 150.24, thrust: 54736, torque: 35.10, temp: 47.8, pElec: 10276.4, pShaft: 8821.6, elecEff: 85.8, sysEff: 5.30 },
        { rpm: 2640, voltage: 67.4, current: 208.72, thrust: 66254, torque: 42.84, temp: 56.4, pElec: 14067.7, pShaft: 11843.6, elecEff: 84.2, sysEff: 4.70 },
        { rpm: 2700, voltage: 68.3, current: 210.91, thrust: 67174, torque: 43.43, temp: 57.1, pElec: 14405.2, pShaft: 12279.5, elecEff: 85.2, sysEff: 4.70 },
      ],
    },
  },
  {
    slug: '5-kw-air-cooled-electric-motor',
    sku: 'CIAG 125_25',
    title: '5 kW air-cooled electric motor CIAG 125_25',
    price: '€1,500.00',
    imageUrl: '/CIAG_125_25_2025-Apr-17_04-52-17PM-000_CustomizedView3927969501-768x576.png',
    category: 'Air-cooled',
    technology: 'Classic',
    power: '5 kW',
    status: 'Made to order (~2 months)',
    description: 'Compact 5 kW continuous power fully sealed IP65 PMSM motor with air cooling. Patented construction delivers outstanding torque density for lightweight drone and UAV applications.',
    applications: 'Ideal for drone applications. Compatible with small to mid-size propellers.',
    kvOptions: ['KV 37', 'KV 74'],
    voltageOptions: ['50V–120V'],
    specs: [
      { label: 'SKU', value: 'CIAG 125_25' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '5 kW @ 4000 rpm' },
      { label: 'Peak Power', value: '8 kW @ 5000 rpm' },
      { label: 'KV', value: '36 / 74 rpm/V' },
      { label: 'DC Voltage', value: '50V – 120V' },
      { label: 'Weight', value: '2.2 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Sensor', value: 'PT1000' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: '12-kw-air-cooled-electric-motor',
    sku: 'CIAG 150_40',
    title: '12 kW air-cooled electric motor',
    price: '€2,000.00',
    imageUrl: '/12-kW-electric-motor-150-40-600x600-1-300x300.webp',
    category: 'Air-cooled',
    technology: 'Classic',
    power: '12 kW',
    status: 'In stock (Slovenia warehouse)',
    description: '12 kW continuous power fully sealed IP65 PMSM motor with air cooling. Utilizes grain-oriented steel and rectangular copper wire for superior efficiency.',
    applications: 'Designed for large drone applications. Compatible with 60″–63″ propellers.',
    kvOptions: ['KV 8.5', 'KV 17', 'KV 34'],
    voltageOptions: ['100V', '200V', '400V'],
    specs: [
      { label: 'SKU', value: 'CIAG 150_40' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '12 kW @ 2000 rpm' },
      { label: 'Peak Power', value: '15 kW @ 2500 rpm' },
      { label: 'Continuous Torque', value: '58 Nm' },
      { label: 'Peak Torque', value: '95 Nm' },
      { label: 'KV', value: '8.5 / 17 / 34 rpm/V' },
      { label: 'DC Voltage', value: '100V / 200V / 400V' },
      { label: 'Weight', value: '4.9 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Sensor', value: 'Sensorless' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: '13-kw-air-cooled-electric-motor',
    sku: 'CIAG 200_30',
    title: '13 kW air-cooled electric motor',
    price: '€2,500.00',
    imageUrl: '/20-kW-electric-motor-200-30-600x600-1-300x300.webp',
    category: 'Air-cooled',
    technology: 'Classic',
    power: '13 kW',
    status: 'Made to order (~2 months)',
    description: '13 kW continuous power fully sealed IP65 PMSM motor with air cooling. High efficiency design with customizable voltage range for heavy drone applications.',
    applications: 'Ideal for high efficiency big drone applications. Compatible with 65″–73″ propellers.',
    kvOptions: ['KV 4', 'KV 8'],
    voltageOptions: ['400V', '800V'],
    specs: [
      { label: 'SKU', value: 'CIAG 200_30' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '13 kW @ 1600 rpm' },
      { label: 'Peak Power', value: '20 kW @ 2000 rpm' },
      { label: 'Continuous Torque', value: '78 Nm' },
      { label: 'Peak Torque', value: '96 Nm' },
      { label: 'KV', value: '4 / 8 rpm/V' },
      { label: 'DC Voltage', value: '400V / 800V' },
      { label: 'Weight', value: '7 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Sensor', value: 'Sensorless' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: '20-kw-air-cooled-electric-motor',
    sku: 'CIAG 200_45',
    title: '20 kW air-cooled electric motor',
    price: '€3,000.00',
    imageUrl: '/20-kW-electric-motor-200-45-600x600-1-300x300.webp',
    category: 'Air-cooled',
    technology: 'Classic',
    power: '20 kW',
    status: 'Made to order (~2 months)',
    description: '20 kW continuous power fully sealed IP65 PMSM motor with air cooling. Robust design for demanding aviation and drone applications with high peak torque output.',
    applications: 'Ideal for big drone applications. Compatible with 70″–73″ propellers.',
    kvOptions: ['KV 5', 'KV 10'],
    voltageOptions: ['400V', '800V'],
    specs: [
      { label: 'SKU', value: 'CIAG 200_45' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '20 kW @ 2000 rpm' },
      { label: 'Peak Power', value: '40 kW @ 2400 rpm' },
      { label: 'Continuous Torque', value: '96 Nm' },
      { label: 'Peak Torque', value: '160 Nm' },
      { label: 'KV', value: '5 / 10 rpm/V' },
      { label: 'DC Voltage', value: '400V / 800V' },
      { label: 'Weight', value: '10 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Sensor', value: 'Sensorless' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: '50-kw-air-cooled-electric-motor',
    sku: 'CIAG 250_50',
    title: '50 kW air-cooled electric motor',
    price: '€4,000.00',
    imageUrl: '/50-kW-electric-motor-200-50-600x600-1-300x300.webp',
    category: 'Air-cooled',
    technology: 'Classic',
    power: '50 kW',
    status: 'Made to order (~2 months)',
    description: '50 kW continuous power fully sealed IP65 PMSM motor with air cooling. High-power solution for large UAVs and small aircraft with exceptional torque density.',
    applications: 'Ideal for big drone and small aircraft applications. Compatible with 70″–82″ propellers.',
    kvOptions: ['KV 4.3', 'KV 8.6'],
    voltageOptions: ['400V', '800V'],
    specs: [
      { label: 'SKU', value: 'CIAG 250_50' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '50 kW @ 2000 rpm' },
      { label: 'Peak Power', value: '75 kW @ 2400 rpm' },
      { label: 'Continuous Torque', value: '239 Nm' },
      { label: 'Peak Torque', value: '298 Nm' },
      { label: 'KV', value: '4.3 / 8.6 rpm/V' },
      { label: 'DC Voltage', value: '400V / 800V' },
      { label: 'Weight', value: '18 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Air' },
      { label: 'Sensor', value: 'Sensorless' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: 'liquid-cooled-50-kw-electric-motor',
    sku: 'CILG 200_50',
    title: '50 kW liquid-cooled electric motor',
    price: '€5,000.00',
    imageUrl: '/Liquid-cooled-50-kW-electric-motor-600x600-1-300x300.webp',
    category: 'Liquid-cooled',
    technology: 'Classic',
    power: '50 kW',
    status: 'Made to order (~2 months)',
    description: '50 kW continuous power fully sealed IP65 PMSM motor with liquid cooling system. Magnetic encoder for precise FOC control. Ideal for continuous heavy-duty operations.',
    applications: 'Ideal for big drone and marine applications. Customizable voltage from 200V to 400V.',
    kvOptions: ['KV 11', 'KV 22'],
    voltageOptions: ['200V', '400V'],
    specs: [
      { label: 'SKU', value: 'CILG 200_50' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '50 kW @ 4000 rpm' },
      { label: 'Peak Power', value: '75 kW @ 4000 rpm' },
      { label: 'Continuous Torque', value: '120 Nm' },
      { label: 'Peak Torque', value: '180 Nm' },
      { label: 'KV', value: '11 / 22 rpm/V' },
      { label: 'DC Voltage', value: '200V / 400V' },
      { label: 'Weight', value: '12 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Liquid' },
      { label: 'Sensor', value: 'Encoder' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: '110-kw-liquid-cooled-electric-motor',
    sku: 'CILG 250_50',
    title: '110 kW liquid-cooled electric motor',
    price: '€7,000.00',
    imageUrl: '/110-kW-liquid-cooled-electric-motor-250-50-600x600-1-300x300.webp',
    category: 'Liquid-cooled',
    technology: 'Classic',
    power: '110 kW',
    status: 'Made to order (~2 months)',
    description: '110 kW continuous power fully sealed IP65 PMSM motor with liquid cooling. Industrial-grade performance for high-power aircraft and heavy marine vessels.',
    applications: 'Ideal for big drone and marine applications. Voltage configurable from 400V to 800V.',
    kvOptions: ['KV 7', 'KV 14'],
    voltageOptions: ['400V', '800V'],
    specs: [
      { label: 'SKU', value: 'CILG 250_50' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '110 kW @ 4000 rpm' },
      { label: 'Peak Power', value: '150 kW @ 4000 rpm' },
      { label: 'Continuous Torque', value: '350 Nm' },
      { label: 'Peak Torque', value: '400 Nm' },
      { label: 'KV', value: '7 / 14 rpm/V' },
      { label: 'DC Voltage', value: '400V / 800V' },
      { label: 'Weight', value: '20 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Liquid' },
      { label: 'Sensor', value: 'Encoder' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
  {
    slug: '170-kw-liquid-cooled-electric-motor',
    sku: 'CILG 300_70',
    title: '170 kW liquid-cooled electric motor',
    price: '€11,000.00',
    imageUrl: '/170-kW-liquid-cooled-electric-motor-300-70-600x600-1-300x300.webp',
    category: 'Liquid-cooled',
    technology: 'Classic',
    power: '170 kW',
    status: 'Made to order (~2 months)',
    description: '170 kW continuous power fully sealed IP65 PMSM motor with liquid cooling. Our most powerful motor — the pinnacle of eMotres engineering for full-scale electric aircraft and heavy marine propulsion.',
    applications: 'Ideal for big drone and marine applications. Voltage configurable from 400V to 800V.',
    kvOptions: ['KV 6', 'KV 12'],
    voltageOptions: ['400V', '800V'],
    specs: [
      { label: 'SKU', value: 'CILG 300_70' },
      { label: 'Motor Type', value: 'PMSM' },
      { label: 'Continuous Power', value: '170 kW @ 4000 rpm' },
      { label: 'Peak Power', value: '250 kW @ 4000 rpm' },
      { label: 'Continuous Torque', value: '670 Nm' },
      { label: 'Peak Torque', value: '700 Nm' },
      { label: 'KV', value: '6 / 12 rpm/V' },
      { label: 'DC Voltage', value: '400V / 800V' },
      { label: 'Weight', value: '38 kg' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Cooling', value: 'Liquid' },
      { label: 'Sensor', value: 'Encoder' },
      { label: 'Warranty', value: '1 year' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
