import { Container } from "../components/ui/Container";
import { ORG_STRUCTURE } from "../data/organization";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, BookOpen, Camera, ChevronRight, ArrowLeft, Shield, Award, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const iconMap = {
  Users: Users,
  Globe: Globe,
  BookOpen: BookOpen,
  Camera: Camera,
};

export const OrganizationPage = () => {
  const [expandedDiv, setExpandedDiv] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy pt-32 pb-20 overflow-hidden">
      <Container>
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Shield size={14} />
            Robotika Teknokrat
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Structure & <span className="text-brand-primary">Leadership</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Our organizational structure is built on a foundation of collaboration, expertise, and a shared passion for robotic excellence.
          </p>
        </div>

        {/* 1. Core Leadership (BPH) */}
        <div className="mb-32 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent -z-10" />
          <div className="text-center mb-16">
             <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] inline-block px-8 py-2 bg-brand-navy border border-white/5 rounded-full">
               Core Executive Board
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ORG_STRUCTURE.core.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card p-8 rounded-[20px] text-center relative hover:border-brand-primary/40 transition-all"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-primary/20 group-hover:border-brand-primary/50 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover bg-brand-navy" />
                </div>
                <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-2">{member.role}</p>
                <p className="text-xl font-bold text-white mb-1">{member.name}</p>
                <div className="w-8 h-1 bg-brand-yellow mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Sekbid (Divisions) - Interactive */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
             <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em]">Seksi Bidang</h2>
             <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {ORG_STRUCTURE.divisions.map((div, idx) => {
              const Icon = iconMap[div.icon];
              const isExpanded = expandedDiv === div.id;
              
              return (
                <motion.div
                  key={div.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "glass rounded-[20px] overflow-hidden transition-all duration-500",
                    isExpanded ? "ring-2 ring-brand-primary/50" : "hover:bg-white/[0.02]"
                  )}
                >
                  <div 
                    className="p-8 flex flex-col md:flex-row items-center gap-8 cursor-pointer"
                    onClick={() => setExpandedDiv(isExpanded ? null : div.id)}
                  >
                    <div className={cn(
                      "w-20 h-20 rounded-[15px] flex items-center justify-center transition-all duration-500",
                      isExpanded ? "bg-brand-primary text-white scale-110" : "bg-brand-primary/10 text-brand-primary"
                    )}>
                      <Icon size={32} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-2xl font-black text-white uppercase tracking-tight mb-1">{div.name}</p>
                      <p className="text-brand-yellow text-sm font-bold tracking-widest">Head: {div.head}</p>
                    </div>
                    <motion.div 
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      className="text-brand-gray"
                    >
                      <ChevronRight size={28} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-white/5 bg-brand-primary/[0.02]">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                               <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-4">Division Goal</p>
                               <p className="text-brand-gray leading-relaxed text-lg italic">"{div.description}"</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-6">Key Members</p>
                               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                  {div.members.map((member, mIdx) => (
                                    <div key={mIdx} className="flex items-center gap-3 p-3 rounded-[15px] bg-white/5 border border-white/5">
                                       <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                          <User size={14} />
                                       </div>
                                       <span className="text-sm font-bold text-white/80">{member}</span>
                                    </div>
                                  ))}
                               </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Departments Hierarchy */}
        <div>
           <div className="flex items-center gap-6 mb-16">
             <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em]">Kepala Departemen</h2>
             <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ORG_STRUCTURE.departments.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[20px] border border-white/5 hover:border-brand-primary/20 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <Award size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{dept.id.toUpperCase()}</h3>
                </div>
                
                <div className="mb-8 p-4 rounded-[15px] bg-white/5 border border-white/5">
                   <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">Department Head</p>
                   <p className="text-white font-bold">{dept.head}</p>
                </div>

                <div className="space-y-4 flex-1">
                   <p className="text-[10px] font-black text-brand-gray uppercase tracking-[0.2em] mb-4">Sub-Hierarchy</p>
                   {dept.subs.map((sub, i) => (
                     <div key={i} className="flex items-start gap-4 p-4 rounded-[15px] hover:bg-white/5 transition-all">
                       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                       <div>
                         <p className="text-white font-bold text-sm mb-1">{sub.name}</p>
                         <p className="text-xs text-brand-gray">{sub.desc}</p>
                       </div>
                     </div>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-20 border-t border-white/5 text-center">
           <p className="text-brand-gray text-sm italic">
             Our structure is dynamic and evolves with the needs of each competition year. <br />
             Values of integrity, innovation, and teamwork are at the core of our management.
           </p>
        </div>
      </Container>
    </div>
  );
};
