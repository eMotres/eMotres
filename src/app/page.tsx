import Navbar from "@/components/Navbar";
import PropulsionMatrix from "@/components/PropulsionMatrix";
import Footer from "@/components/Footer";

export default function Home() {
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
          {/* {technologies.map((tech) => ( */}
          {/*   <TechCard key={tech.title} title={tech.title} description={tech.description} /> */}
          {/* ))} */}
        </div>
      </div>
      <PropulsionMatrix />
      <Footer />
    </main>
  );
}
