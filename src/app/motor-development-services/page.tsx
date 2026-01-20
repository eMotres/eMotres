import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Motor Development Services | eMotres',
  description: 'eMotres offers comprehensive motor development services, from conceptualization to mass production. We specialize in custom motors and generators (0.5 kW to 800 kW) using advanced electromagnetic, mechanical, and thermal simulations.',
};

const ServicePage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">Motor Development Services</h1>
          <div className="prose lg:prose-xl max-w-none">
            <p>At Motres, we specialize in the design and development of custom motors and generators tailored to meet your unique requirements and specifications. Whether you need a bespoke solution for your current project or are starting from scratch, our team is equipped to assist you with developing propulsion systems across various applications. We have experience for development motors and generators from 0.5 kW to 800kW for the different application.</p>
            <h2>Our Comprehensive Motor Development Process:</h2>
            <h3>1. Conceptualization to Prototyping:</h3>
            <p>We offer a complete cycle of motor development, transforming your initial idea into a functional prototype. Our approach ensures precision, efficiency, and effectiveness at every stage of the process.</p>
            <h3>2. Advanced Simulation Capabilities:</h3>
            <p><strong>Electromagnetic Simulation:</strong> Utilizing Ansys Maxwell, we perform detailed electromagnetic simulations to optimize motor efficiency and performance.</p>
            <p><strong>Mechanical Simulation:</strong> Our team uses Fusion 360 for mechanical simulations, ensuring the structural integrity and durability of the motor under different operating conditions.</p>
            <p><strong>Thermal Simulation:</strong> With Fusion 360, we conduct thermal simulations to manage heat dissipation effectively, ensuring long-term reliability and performance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
              <Image src="https://emotres.com/wp-content/uploads/2024/08/elect2.webp" alt="Electromagnetic Simulation" width={500} height={300} className="rounded-lg shadow-md" />
              <Image src="https://emotres.com/wp-content/uploads/2024/08/mech2-993x1024.webp" alt="Mechanical Simulation" width={500} height={300} className="rounded-lg shadow-md" />
              <Image src="https://emotres.com/wp-content/uploads/2024/08/therm1.webp" alt="Thermal Simulation" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <h3>3. Detailed Drawings:</h3>
            <p>Our expertise in Fusion 360 enables us to create precise mechanical drawings, offering an accurate representation of the motor design for seamless production.</p>
            <h3>4. Prototyping and Validation:</h3>
            <p>We facilitate the production of samples, followed by rigorous testing and validation processes to confirm the performance and reliability of the motor.</p>
            <h3>5. Mass Production:</h3>
            <p>Once the design is validated, we support the transition to mass production, ensuring that every motor meets our high-quality standards.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                <Image src="https://emotres.com/wp-content/uploads/2024/08/motor4.png" alt="Motor 4" width={500} height={300} className="rounded-lg shadow-md" />
                <Image src="https://emotres.com/wp-content/uploads/2024/08/motor2-1011x1024.png" alt="Motor 2" width={500} height={300} className="rounded-lg shadow-md" />
                <Image src="https://emotres.com/wp-content/uploads/2024/08/motor1.png" alt="Motor 1" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <h3>Collaborative Partnerships:</h3>
            <p>We pride ourselves on our collaborative approach, working closely with clients throughout the development process to ensure the final product meets their specific needs. Our team is committed to providing innovative solutions and exceptional service at every stage of the motor development lifecycle.</p>
            <div className="my-12">
              <Image src="https://emotres.com/wp-content/uploads/2025/05/Many1-1024x794.png" alt="Collaborative Partnerships" width={1024} height={794} className="rounded-lg shadow-md mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ServicePage;
