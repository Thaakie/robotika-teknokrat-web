import { useParams, Link } from "react-router-dom";
import { ROBOTS } from "../data/robots";
import { Container } from "../components/ui/Container";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Settings, Zap, Shield, Target } from "lucide-react";
import { useEffect } from "react";

export const RobotDetailPage = () => {
  const { id } = useParams();
  const robot = ROBOTS.find(r => r.id === parseInt(id));

  if (!robot) return <div className="min-h-screen bg-brand-navy flex items-center justify-center text-white font-black uppercase tracking-widest">Robot Not Found</div>;

  return (
    <div className="min-h-screen bg-brand-navy pt-32 pb-20 overflow-hidden">
      <Container>
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors group mb-12 font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-yellow text-xs font-black uppercase tracking-widest">
                <Shield size={14} />
                Project ID: RT-{robot.id}00
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight">
                {robot.name.split(' ')[0]}<br />
                <span className="text-brand-primary">{robot.name.split(' ').slice(1).join(' ') || 'PROTO'}</span>
              </h1>

              <div className="flex items-center gap-4 py-6 border-y border-white/5">
                 <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary">
                    <Target size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">Division Assignment</p>
                    <p className="text-white font-bold">{robot.division}</p>
                 </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Cpu size={20} className="text-brand-yellow" />
                  Development Story
                </h3>
                <p className="text-xl text-brand-gray leading-relaxed text-justify">
                  {robot.description} This project was initiated to solve specific challenges in {robot.division.toLowerCase()} environments. Our team focused on creating a robust architecture that balances performance with high-speed telemetry processing.
                </p>
                <p className="text-brand-gray leading-relaxed text-justify">
                  Throughout the development phase, we implemented several iterations of {robot.tech[0]} and optimized the overall power distribution. The result is a highly capable platform that serves as a benchmark for our future innovations in autonomous robotics.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Media & Specs Column */}
          <div className="lg:col-span-5 space-y-8">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="rounded-[30px] overflow-hidden aspect-square border border-white/10 relative group shadow-2xl shadow-brand-primary/20"
             >
               <img 
                 src={robot.image} 
                 alt={robot.name} 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-60" />
               <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border-white/10 backdrop-blur-xl">
                  <p className="text-brand-yellow font-black text-xs uppercase tracking-widest mb-1">Current Status</p>
                  <p className="text-white font-bold text-lg">Active Testing / Prototype V1.2</p>
               </div>
             </motion.div>

             <div className="glass-card p-10 rounded-[30px] border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Settings size={120} className="animate-spin-slow" />
                </div>
                <h4 className="text-white font-bold mb-8 flex items-center gap-3">
                  <Zap size={20} className="text-brand-primary" />
                  Core Technologies
                </h4>
                <div className="space-y-4 relative z-10">
                   {robot.tech.map((t, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all">
                        <span className="text-brand-gray font-medium">{t}</span>
                        <div className="w-2 h-2 rounded-full bg-brand-primary" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
