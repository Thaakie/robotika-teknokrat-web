import { motion } from "framer-motion";
import { Container } from "../../ui/Container";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-navy">
      {/* Full-Screen Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
          alt="Team Background" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-transparent to-brand-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,8,123,0.2)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="hero-title text-[14vw] lg:text-[10vw] font-[1000] italic leading-[0.75] tracking-tighter text-white uppercase flex flex-col items-center">
              <span className="block translate-x-[-5%]">Teknokrat</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white translate-x-[5%] pr-4">KRAKATAU</span>
              <span className="block translate-x-[-2%]">TEAM</span>
            </h1>
          </motion.div>

          {/* Sub-description Capsule (Maryland Style) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-20 glass px-10 py-6 rounded-3xl border border-white/10 max-w-2xl mx-auto text-center backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />
            <p className="text-sm md:text-lg font-medium text-brand-gray tracking-wide relative z-10 leading-relaxed">
              Leading student robotics organization at Universitas Teknokrat Indonesia, 
              building future engineers through innovation and competition.
            </p>
            <div className="mt-6 flex justify-center">
               <motion.div 
                 animate={{ y: [0, 5, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <ChevronDown className="text-brand-yellow/50" size={24} />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Bottom Gradient for section transition */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent z-20" />
    </section>
  );
};
