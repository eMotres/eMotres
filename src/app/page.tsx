import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const CategoryCard = ({ imageUrl, title }: { imageUrl: string, title: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <Image src={imageUrl} alt={title} width={128} height={128} />
    <h3 className="text-xl font-bold mt-4">{title}</h3>
  </div>
);

const FeatureSection = ({ title, description, imageUrl, imageAlt, reverse = false }: { title: string, description: string, imageUrl: string, imageAlt: string, reverse?: boolean }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="w-full md:w-1/2">
      <Image src={imageUrl} alt={imageAlt} width={500} height={400} className="rounded-lg shadow-md" />
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <div className="relative bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto text-center py-40 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold">Innovative High-Performance <br/> Electric Motors</h1>
            <p className="text-lg md:text-xl mt-4">for Drones and Aviation</p>
            <p className="mt-4">Developing and producing top-tier electric motors specifically designed for drone and aviation applications.</p>
            <div className="mt-8">
              <a href="#" className="bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">View all motors</a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src="https://emotres.com/wp-content/uploads/2024/08/electric-motor.webp" alt="Electric Motor" width={600} height={540} />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Select the desired application area for the electric motor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard imageUrl="https://emotres.com/wp-content/uploads/2024/08/2713646_aviation_aeroplane_airport_fly_jet_icon.png" title="Aviation" />
          <CategoryCard imageUrl="https://emotres.com/wp-content/uploads/2024/08/marine_icon.png" title="Marine" />
          <CategoryCard imageUrl="https://emotres.com/wp-content/uploads/2024/08/automotive_icon.png" title="Automotive" />
        </div>
      </div>

      <div className="container mx-auto my-20 px-4 sm:px-6 lg:px-8 space-y-20">
        <FeatureSection
          title="High-Performance Motors with Patented Construction"
          description="Our motors, leveraging an original patented construction, deliver outstanding performance and achieve the highest torque density available on the market. This ensures superior power and efficiency for your drones and aircraft."
          imageUrl="https://emotres.com/wp-content/uploads/2024/08/electric-motor.webp"
          imageAlt="Patented Motor Construction"
        />
        <FeatureSection
          title="Fully Sealed IP65 Design"
          description="Our products are built to withstand harsh environments with a fully sealed IP65 design, protecting against dust and water ingress."
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

      <div id="get-quote" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Get a quote</h2>
          <p className="text-gray-600 mt-4 mb-8">Didn’t find a suitable motor and need a custom-made motor to your specifications? Fill out this application form and we will calculate an approximate cost for you.</p>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="E-mail" className="w-full p-3 rounded-lg border" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Hi! If possible, please specify the following parameters: Continuous Power, Continuous RPM, Peak Power, Peak RPM, Voltage, Cooling System, Required Weight, Required Efficiency. This will allow us to more accurately calculate the cost of manufacturing your custom motor." rows={7} className="w-full p-3 rounded-lg border"></textarea>
            </div>
            <button type="submit" className="bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">Send Request</button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
