import Navbar from "@/components/Navbar";
import PropulsionMatrix from "@/components/PropulsionMatrix";
import Footer from "@/components/Footer";
import TechCard from "@/components/TechCard";
import { Aperture, Shield, Zap, RefreshCw, Droplet, Layers, GitCommit, Feather } from 'lucide-react';

const technologies = [
  { title: "Tangential Polarization", description: "Enhanced magnetic flux for superior torque density.", icon: <Aperture size={48} /> },
  { title: "IP65 Rating", description: "Dust and water resistance for harsh environments.", icon: <Shield size={48} /> },
  { title: "Direct Drive", description: "Eliminates gearbox for higher efficiency and lower maintenance.", icon: <Zap size={48} /> },
  { title: "Redundant Windings", description: "Ensures reliability and fault tolerance.", icon: <RefreshCw size={48} /> },
  { title: "Liquid Cooling", description: "Advanced thermal management for sustained peak performance.", icon: <Droplet size={48} /> },
  { title: "Modular Design", description: "Scalable and customizable for various applications.", icon: <Layers size={48} /> },
  { title: "Sensorless Control", description: "Optimized for smooth and precise motor control.", icon: <GitCommit size={48} /> },
  { title: "Lightweight Materials", description: "Maximizes power-to-weight ratio for aviation.", icon: <Feather size={48} /> },
];

export default function Home() {
  return (
    <main>
      <div className="relative bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto text-center py-40 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold">Next-Gen Axial Flux Electric Propulsion</h1>
          <p className="text-xl mt-4">Custom axial flux motor design and production for aerospace and marine applications.</p>
          <div className="mt-8">
            <a href="#" className="bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">Get Started</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <TechCard key={tech.title} title={tech.title} icon={tech.icon}>{tech.description}</TechCard>
          ))}
        </div>
      </div>
      <PropulsionMatrix />
      <Footer />
    </main>
  );
}
