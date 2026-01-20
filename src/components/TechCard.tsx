import React from 'react';

interface TechCardProps {
  title: string;
  description: string;
}

const TechCard: React.FC<TechCardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TechCard;
