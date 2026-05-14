import React from "react";
import Card from "../ui/Card";

const robots = [
  {
    image: "https://via.placeholder.com/300",
    title: "Robot A",
    division: "Land Division",
    description: "A robot designed for land exploration.",
    technologies: ["AI", "Machine Learning", "Sensors"],
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Robot B",
    division: "Air Division",
    description: "An aerial robot for surveillance.",
    technologies: ["Drones", "GPS", "Cameras"],
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Robot C",
    division: "Water Division",
    description: "A robot for underwater research.",
    technologies: ["Sonar", "Waterproof Design", "Hydraulics"],
  },
];

const Creativity = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-blue text-center mb-8">Our Creativity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {robots.map((robot, index) => (
            <Card key={index} {...robot} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creativity;
