export interface Product {
  slug: string;
  title: string;
  price: string;
  imageUrl: string;
  category: 'Air-cooled' | 'Liquid-cooled';
  power: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: '5-kw-air-cooled-ciag-125-25',
    title: '5 kW air-cooled electric motor CIAG 125_25',
    price: '€1,500.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/CIAG_125_25_2025-Apr-17_04-52-17PM-000_CustomizedView3927969501-e1744956980369-300x300.png',
    category: 'Air-cooled',
    power: '5 kW',
    description: 'Compact air-cooled motor with patented construction, ideal for lightweight drones and UAV applications. Delivers outstanding torque density in a sealed IP65 housing.',
    specs: [
      { label: 'Continuous Power', value: '5 kW' },
      { label: 'Cooling', value: 'Air-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Drones / Aviation' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Sensorless' },
    ],
  },
  {
    slug: '12-kw-air-cooled',
    title: '12 kW air-cooled electric motor',
    price: '€2,000.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/12-kW-electric-motor-150-40-600x600-1-300x300.webp',
    category: 'Air-cooled',
    power: '12 kW',
    description: 'High-performance 12 kW air-cooled motor utilizing grain-oriented steel and rectangular copper wire for superior efficiency in aviation and marine applications.',
    specs: [
      { label: 'Continuous Power', value: '12 kW' },
      { label: 'Cooling', value: 'Air-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Marine' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Sensorless' },
    ],
  },
  {
    slug: '13-kw-air-cooled',
    title: '13 kW air-cooled electric motor',
    price: '€2,500.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/20-kW-electric-motor-200-30-600x600-1-300x300.webp',
    category: 'Air-cooled',
    power: '13 kW',
    description: 'Versatile 13 kW air-cooled motor with tangential magnet polarization technology for maximum torque density. Perfect for hybrid aircraft and industrial drones.',
    specs: [
      { label: 'Continuous Power', value: '13 kW' },
      { label: 'Cooling', value: 'Air-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Industrial' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Sensorless' },
    ],
  },
  {
    slug: '20-kw-air-cooled',
    title: '20 kW air-cooled electric motor',
    price: '€3,000.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/20-kW-electric-motor-200-45-600x600-1-300x300.webp',
    category: 'Air-cooled',
    power: '20 kW',
    description: 'Robust 20 kW air-cooled motor designed for demanding aviation and automotive applications. Features direct stator cooling and patented construction for peak efficiency.',
    specs: [
      { label: 'Continuous Power', value: '20 kW' },
      { label: 'Cooling', value: 'Air-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Automotive' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Sensorless' },
    ],
  },
  {
    slug: '50-kw-air-cooled',
    title: '50 kW air-cooled electric motor',
    price: '€4,000.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/50-kW-electric-motor-200-50-600x600-1-300x300.webp',
    category: 'Air-cooled',
    power: '50 kW',
    description: 'High-power 50 kW air-cooled motor for large UAVs, light aircraft, and marine propulsion. Achieves higher torque density than any comparable axial flux motor.',
    specs: [
      { label: 'Continuous Power', value: '50 kW' },
      { label: 'Cooling', value: 'Air-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Marine' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Sensorless' },
    ],
  },
  {
    slug: '50-kw-liquid-cooled',
    title: '50 kW liquid-cooled electric motor',
    price: '€5,000.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/Liquid-cooled-50-kW-electric-motor-600x600-1-300x300.webp',
    category: 'Liquid-cooled',
    power: '50 kW',
    description: 'Premium 50 kW liquid-cooled motor for continuous heavy-duty operation. Magnetic encoder sensor ensures precise FOC control. Ideal for manned aviation and high-performance marine.',
    specs: [
      { label: 'Continuous Power', value: '50 kW' },
      { label: 'Cooling', value: 'Liquid-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Marine' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Magnetic encoder' },
    ],
  },
  {
    slug: '110-kw-liquid-cooled',
    title: '110 kW liquid-cooled electric motor',
    price: '€7,000.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/110-kW-liquid-cooled-electric-motor-250-50-600x600-1-300x300.webp',
    category: 'Liquid-cooled',
    power: '110 kW',
    description: 'Industrial-grade 110 kW liquid-cooled motor for high-performance aircraft and heavy marine vessels. Delivers sustained power with exceptional thermal management.',
    specs: [
      { label: 'Continuous Power', value: '110 kW' },
      { label: 'Cooling', value: 'Liquid-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Marine / Automotive' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Magnetic encoder' },
    ],
  },
  {
    slug: '170-kw-liquid-cooled',
    title: '170 kW liquid-cooled electric motor',
    price: '€11,000.00',
    imageUrl: 'https://emotres.com/wp-content/uploads/2024/08/170-kW-liquid-cooled-electric-motor-300-70-600x600-1-300x300.webp',
    category: 'Liquid-cooled',
    power: '170 kW',
    description: 'Our most powerful motor — 170 kW liquid-cooled for full-scale electric aircraft, heavy marine propulsion, and high-performance automotive applications. The pinnacle of eMotres engineering.',
    specs: [
      { label: 'Continuous Power', value: '170 kW' },
      { label: 'Cooling', value: 'Liquid-cooled' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Application', value: 'Aviation / Marine / Automotive' },
      { label: 'Controller', value: 'FOC recommended' },
      { label: 'Position Sensor', value: 'Magnetic encoder' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
