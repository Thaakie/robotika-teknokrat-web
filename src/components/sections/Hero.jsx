import React from "react";
import heroImg from "../../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-primary-blue text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy to-transparent opacity-80"></div>
      <img src={heroImg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
      <motion.div className="relative z-10 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl font-bold mb-4">Robotika Teknokrat</h1>
        <p className="text-lg mb-6">Innovating robotics and leading national competitions.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-accent-yellow text-dark-navy px-6 py-2 rounded-md font-medium hover:bg-yellow-500">Explore Division</button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-dark-navy">View Achievement</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
