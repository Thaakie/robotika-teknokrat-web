import { ACHIEVEMENTS } from "../data/achievements";
import { Container } from "../components/ui/Container";
import { motion } from "framer-motion";
import { Award, Calendar, ChevronRight, Trophy, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const AchievementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight">
              Our <span className="text-brand-primary">Legacy</span>
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mt-6">
              A comprehensive record of Robotika Teknokrat's excellence in national and regional robotics competitions.
            </p>
          </motion.div>
        </div>

        {/* Timeline of Achievements */}
        <div className="space-y-24">
          {ACHIEVEMENTS.map((yearData, yearIdx) => (
            <div key={yearData.year} className="relative">
              {/* Year Marker */}
              <div className="flex items-center gap-6 mb-12">
                <div className="px-6 py-2 rounded-2xl bg-brand-primary text-white font-black text-2xl shadow-[0_0_30px_rgba(27,31,138,0.3)]">
                  {yearData.year}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-primary/50 to-transparent" />
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {yearData.categories.map((cat, catIdx) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 }}
                    className="glass p-8 rounded-[20px] border-white/5 hover:border-brand-primary/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-[15px] bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                      {cat.id === 'KRI' ? <Trophy size={24} /> : cat.id === 'KRTI' ? <Star size={24} /> : <Award size={24} />}
                    </div>
                    <h3 className="text-brand-yellow font-black text-xs uppercase tracking-[0.3em] mb-2">{cat.id} DIVISION</h3>
                    <h4 className="text-xl font-bold text-white mb-6 leading-tight min-h-[3.5rem] flex items-center">{cat.name}</h4>
                    
                    <div className="space-y-6">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="p-5 rounded-[20px] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all flex flex-col h-full">
                          {item.image && (
                            <div className="mb-4 rounded-[15px] overflow-hidden aspect-[16/9] border border-white/10 flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                              />
                            </div>
                          )}
                          <p className="text-white font-bold mb-2 flex items-center gap-2">
                             <ChevronRight size={14} className="text-brand-primary" />
                             {item.title}
                          </p>
                          <p className="text-xs text-brand-gray leading-relaxed pl-5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
