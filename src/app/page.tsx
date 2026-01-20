import Navbar from '../components/Navbar';
import TechCard from '../components/TechCard';
import PropulsionMatrix from '../components/PropulsionMatrix';
import Footer from '../components/Footer';

export default function Home() {
  const technologies = [
    { title: 'Direct Drive', description: 'Eliminates the need for a gearbox, reducing weight and complexity.' },
    { title: 'Liquid Cooling', description: 'Ensures optimal thermal performance for sustained high-power output.' },
    { title: 'Redundant Windings', description: 'Increases reliability and fault tolerance for mission-critical applications.' },
    { title: 'High-Torque Density', description: 'Maximizes power in a compact and lightweight package.' },
  ];

  return (
    <main>
      <div className="relative bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto text-center py-24">
          <h1 className="text-5xl md:text-7xl font-bold">Industrial Propulsion</h1>
          <p className="text-xl md:text-2xl mt-4">Powering the future of heavy-lift drones and eVTOLs</p>
        </div>
      </div>
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <TechCard key={tech.title} title={tech.title} description={tech.description} />
          ))}
        </div>
      </div>
      <PropulsionMatrix />
      <Footer />
    </main>
  );
}
