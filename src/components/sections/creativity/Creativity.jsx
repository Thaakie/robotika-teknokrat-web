import { ROBOTS } from "../../../data/robots";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { AnimatedSection } from "../../common/AnimatedSection";
import { motion } from "framer-motion";
import { Cpu, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Creativity = () => {
  return (
    <AnimatedSection id="creativity" className="py-24 bg-brand-navy/50 relative overflow-hidden">
      {/* Section Transitions */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-brand-navy to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-brand-navy to-transparent z-0 pointer-events-none" />
      <Container>
        <SectionTitle 
          title="Our Creativity" 
          subtitle="Innovative robotic systems designed and built from scratch by our members."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROBOTS.map((robot, idx) => (
            <motion.div
              key={robot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={robot.image} 
                  alt={robot.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                   <span className="text-[10px] font-bold bg-brand-primary text-white px-3 py-1 rounded-full uppercase tracking-widest">
                     {robot.division.split(' (')[0]}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">{robot.name}</h3>
                  <Cpu className="text-brand-yellow" size={20} />
                </div>
                
                <p className="text-brand-gray text-sm mb-6 leading-relaxed flex-1">
                  {robot.description}
                </p>

                <div className="space-y-4">
                   <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider">
                     <Settings size={14} />
                     Technologies Used
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {robot.tech.map((t, i) => (
                       <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-brand-gray">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                   <Link to={robot.href} className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                     Technical Details <Zap size={14} className="text-brand-yellow" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};
