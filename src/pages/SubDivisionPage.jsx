import { useParams, Link } from "react-router-dom";
import { ALL_DIVISIONS } from "../data/divisions";
import { Container } from "../components/ui/Container";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Target, Layers, Shield, Box } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../components/ui/Button";

export const SubDivisionPage = () => {
  const { id, subId } = useParams();
  const division = ALL_DIVISIONS.find(d => d.id === id);
  const subDivision = division?.subdivisions.find(s => s.id === subId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!division || !subDivision) return <div className="min-h-screen bg-brand-navy flex items-center justify-center text-white">Sub-division not found</div>;

  return (
    <div className="min-h-screen bg-brand-navy pt-32 pb-20">
      <Container>
        {/* Breadcrumbs / Back */}
        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-gray mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <Link to={`/division/${division.id}`} className="hover:text-white transition-colors">{division.name}</Link>
          <span className="opacity-30">/</span>
          <span className="text-brand-primary">{subDivision.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-yellow text-xs font-black uppercase tracking-widest">
                <Target size={14} />
                Tactical Unit ID: {subDivision.id.toUpperCase()}
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight">
                {subDivision.name}
              </h1>

              <div className="flex flex-col gap-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Shield size={20} className="text-brand-primary" />
                    Unit Definition
                  </h3>
                  <p className="text-xl text-brand-gray leading-relaxed text-justify">
                    {subDivision.detail || subDivision.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass p-8 rounded-[20px] border-brand-primary/10">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-[15px] flex items-center justify-center text-brand-primary mb-6">
                      <Cpu size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Technical Specs</h4>
                    <p className="text-sm text-brand-gray">Advanced sensor integration, real-time telemetry, and custom carbon-fiber chassis optimization.</p>
                  </div>
                  <div className="glass p-8 rounded-[20px] border-brand-primary/10">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-[15px] flex items-center justify-center text-brand-primary mb-6">
                      <Layers size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Mission Ready</h4>
                    <p className="text-sm text-brand-gray">Designed for national level competition environments with high-stress performance thresholds.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Visuals */}
          <div className="lg:col-span-4 space-y-8">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="rounded-[20px] overflow-hidden aspect-[4/5] border border-white/10 group relative"
             >
               <img 
                 src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800`} 
                 alt="Robot Spec" 
                 className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-60" />
               <div className="absolute bottom-8 left-8">
                  <p className="text-brand-yellow font-black text-xs uppercase tracking-widest mb-1">Prototype V1.0</p>
                  <p className="text-white font-bold">Standard Unit Assembly</p>
               </div>
             </motion.div>

             <div className="glass p-8 rounded-[20px] border-white/5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Box size={18} className="text-brand-primary" />
                  Key Projects
                </h4>
                <ul className="space-y-3">
                  {['National Competition 2024', 'Regional Finals', 'Internal Prototype Testing'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-brand-gray">
                      <div className="w-1 h-1 rounded-full bg-brand-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>

        {/* Teams Section if available */}
        {subDivision.teams && (
          <div className="mt-32">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12">
              Division <span className="text-brand-primary">Teams</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subDivision.teams.map((team, idx) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-10 rounded-[20px] border-white/5 hover:border-brand-primary/30 transition-all group"
                >
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-primary transition-colors">{team.name}</h3>
                  <p className="text-brand-gray leading-relaxed mb-6">{team.detail}</p>
                  <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs uppercase tracking-widest">
                    Status: <span className="text-green-400">Competition Ready</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
