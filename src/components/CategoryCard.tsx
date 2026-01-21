import Image from 'next/image';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
}

const CategoryCard = ({ title, imageUrl }: CategoryCardProps) => {
    return (
        <div className="group bg-surface-primary rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-white/10 hover:-translate-y-1">
            <div className="relative w-32 h-32 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={128}
                    height={128}
                    className="object-contain" // improved fitting
                />
            </div>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors duration-200">{title}</h3>
        </div>
    );
};

export default CategoryCard;
