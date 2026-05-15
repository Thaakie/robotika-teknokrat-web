import { ACTIVE_DIVISIONS, INACTIVE_DIVISIONS } from "../../../data/divisions";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { AnimatedSection } from "../../common/AnimatedSection";
import { motion } from "framer-motion";
import { Shield, Plane, Waves, Anchor } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";

const DivisionIcon = ({ name, size = 24 }) => {
  if (name.includes("LAND")) return <Shield size={size} />;
  if (name.includes("AIR")) return <Plane size={size} />;
  if (name.includes("WATER")) return <Waves size={size} />;
  return <Anchor size={size} />;
};

export const Division = () => {
  return (
    <AnimatedSection id="division" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 hero-gradient -z-10" />
      {/* Section Transitions */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-brand-navy to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-brand-navy to-transparent z-0 pointer-events-none" />
      <Container>
        <SectionTitle 
          title="Operation Divisions" 
          subtitle="Our organization is divided into three main strategic domains: Land, Air, and Water."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ACTIVE_DIVISIONS.map((div, idx) => (
            <Link key={div.id} to={`/division/${div.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="h-full glass p-8 rounded-3xl border border-white/5 relative group hover:border-brand-primary/30 transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <DivisionIcon name={div.name} size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{div.name}</h3>
                
                <div className="space-y-6">
                  {div.subdivisions.map(sub => (
                    <div key={sub.id} className="relative pl-4 border-l-2 border-brand-primary/20">
                      <p className="text-brand-yellow text-sm font-bold uppercase tracking-wider mb-2">{sub.name}</p>
                      {sub.teams && (
                        <div className="flex flex-wrap gap-2">
                          {sub.teams.map(team => (
                            <span key={team.id} className="text-xs bg-white/5 px-3 py-1 rounded-full text-brand-gray border border-white/5">
                              {team.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Inactive Divisions */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-brand-gray/40 uppercase tracking-[0.2em] mb-6">Inactive/Legacy Divisions</p>
          <div className="flex flex-wrap justify-center gap-4">
            {INACTIVE_DIVISIONS.map(div => (
              <Link key={div.id} to={`/division/${div.id}`}>
                <div className="bg-white/[0.02] border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-4 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                   <DivisionIcon name={div.name} size={18} className="text-brand-gray" />
                   <div className="text-left">
                     <p className="text-sm font-bold text-brand-gray">{div.name}</p>
                     <p className="text-[10px] text-brand-gray/60">{div.subdivisions[0].name}</p>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};
