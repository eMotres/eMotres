import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Blog',
  description:
    'Technical articles on electric motor design — the AeroStator Core™ architecture, tangential magnet polarization, rectangular copper windings, cooling and torque density.',
  alternates: { canonical: '/blog/' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
