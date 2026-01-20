import React from 'react';

interface TechCardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="text-brand mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

export default TechCard;
