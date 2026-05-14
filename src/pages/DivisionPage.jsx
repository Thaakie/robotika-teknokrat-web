import { useParams, Link, useNavigate } from "react-router-dom";
import { ALL_DIVISIONS } from "../data/divisions";
import { Container } from "../components/ui/Container";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Shield, Target, Cpu, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/Button";

export const DivisionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const division = ALL_DIVISIONS.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [division]);

  if (!division) return <div className="min-h-screen bg-brand-navy flex items-center justify-center text-white">Division not found</div>;

  return (
    <div className="min-h-screen bg-brand-navy pt-32 pb-20 overflow-hidden">
      <Container>
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
          {!division.active && (
            <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <Shield size={14} />
              Legacy Division / Inactive
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Info & Sub-divisions */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">
                {division.name.split(' ')[0]}<br />
                <span className="text-brand-primary">{division.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-brand-gray leading-relaxed max-w-2xl text-justify">
                {division.description}
              </p>
            </motion.div>

            {/* Sub-division Selectors */}
            <div className="space-y-8">
              <h3 className="text-xs font-black text-brand-primary uppercase tracking-[0.3em] flex items-center gap-2">
                <Target size={14} />
                Explore Tactical Units
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {division.subdivisions.map((sub, idx) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={`/division/${division.id}/${sub.id}`}
                      className="flex flex-col justify-between p-6 rounded-[20px] bg-white/5 border border-white/10 hover:border-brand-primary hover:bg-brand-primary/10 transition-all group h-full"
                    >
                      <div className="mb-4">
                        <p className="text-white font-black text-lg uppercase tracking-tight mb-1">{sub.name}</p>
                        <p className="text-xs text-brand-gray font-medium leading-relaxed">{sub.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all self-end">
                        <ChevronRight size={18} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Gallery/Visuals */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {division.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className={cn(
                    "rounded-[20px] overflow-hidden aspect-square border border-white/5",
                    idx === 0 ? "col-span-2 aspect-[16/10]" : ""
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </motion.div>
              ))}
            </div>

            {/* Division CTA */}
            <div className="glass p-8 rounded-[20px] text-center border-brand-primary/10">
               <h4 className="text-xl font-bold text-white mb-4">Want to Join?</h4>
               <p className="text-sm text-brand-gray mb-8">
                 We are always looking for passionate engineers and innovators to join our tactical units.
               </p>
               <Button className="w-full" variant={division.active ? "primary" : "outline"}>
                 {division.active ? "Apply for Recruitment" : "Legacy Archive"}
               </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
