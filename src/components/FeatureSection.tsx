import Image from 'next/image';

interface FeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
}

const FeatureSection = ({ title, description, imageUrl, imageAlt, reverse = false }: FeatureSectionProps) => {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}>
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">{title}</h2>
                <p className="text-lg text-text-secondary leading-relaxed">{description}</p>
            </div>
            <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={600}
                        height={480}
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
