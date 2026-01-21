import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import FeatureSection from "@/components/FeatureSection";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link"; // Use Link for navigation
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Performance Electric Motors for Drones & Aviation | eMotres',
  description: 'eMotres specializes in developing and producing top-tier, high-performance electric motors with patented construction for drones, aviation, marine, and automotive applications. Custom motor design available.',
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-surface-primary text-text-primary">
      <div className="relative bg-surface-secondary text-text-primary overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-brand-light rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Innovative <span className="text-brand">High-Performance</span> <br /> Electric Motors
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary font-medium mb-2">
                for Drones and Aviation
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-lg">
                Developing and producing top-tier electric motors specifically designed for drone and aviation applications, pushing the boundaries of efficiency and power.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop" className="bg-brand text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-brand/25">
                  View all motors
                </Link>
                <Link href="#get-quote" className="bg-surface-primary text-text-primary border border-gray-200 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-sm">
                  Request Custom
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 w-full animate-fade-in delay-100 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Placeholder for hero image if specific one isn't perfect, but keeping existing link */}
                <Image
                  src="https://emotres.com/wp-content/uploads/2024/08/electric-motor.webp"
                  alt="High Performance Electric Motor"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-32 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-primary">
          Powering the Future of Transport
          <span className="block text-lg font-normal text-text-secondary mt-4">Select your application area</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard imageUrl="https://emotres.com/wp-content/uploads/2024/08/2713646_aviation_aeroplane_airport_fly_jet_icon.png" title="Aviation" />
          <CategoryCard imageUrl="https://emotres.com/wp-content/uploads/2024/08/marine_icon.png" title="Marine" />
          <CategoryCard imageUrl="https://emotres.com/wp-content/uploads/2024/08/automotive_icon.png" title="Automotive" />
        </div>
      </div>

      <div className="container mx-auto my-32 px-4 sm:px-6 lg:px-8 space-y-32">
        <FeatureSection
          title="High-Performance Motors with Patented Construction"
          description="Our motors, leveraging an original patented construction, deliver outstanding performance and achieve the highest torque density available on the market. This ensures superior power and efficiency for your drones and aircraft."
          imageUrl="https://emotres.com/wp-content/uploads/2024/08/electric-motor.webp"
          imageAlt="Patented Motor Construction"
        />
        <FeatureSection
          title="Fully Sealed IP65 Design"
          description="Our products are built to withstand harsh environments with a fully sealed IP65 design, protecting against dust and water ingress. Reliability you can trust in any condition."
          imageUrl="https://emotres.com/wp-content/uploads/2024/08/IP65-designe-1-1.webp"
          imageAlt="IP65 Sealed Design"
          reverse
        />
        <FeatureSection
          title="Custom Motor Design"
          description="We offer individual motor solutions tailored to meet your specific requirements and specifications. Whether you need a unique size, power output, or special features, our team is here to help you with customized designs."
          imageUrl="https://emotres.com/wp-content/uploads/2024/08/aviation-motor.webp"
          imageAlt="Custom Motor Design"
        />
      </div>

      <div id="get-quote" className="bg-surface-secondary py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">Get a custom quote</h2>
            <p className="text-lg text-text-secondary">
              Didn’t find a suitable motor? We specialize in custom solutions.
              Fill out the form below and our engineers will calculate an approximate cost for your specific requirements.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-surface-primary p-8 md:p-12 rounded-2xl shadow-xl">
            <QuoteForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
