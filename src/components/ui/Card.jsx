import React from "react";

const Card = ({ image, title, division, description, technologies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary-blue mb-2">{title}</h3>
        <p className="text-sm text-dark-navy mb-2">Division: {division}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-accent-yellow text-dark-navy text-xs font-medium px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
