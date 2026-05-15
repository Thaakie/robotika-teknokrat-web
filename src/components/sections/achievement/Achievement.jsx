import { ACHIEVEMENTS } from "../../../data/achievements";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { AnimatedSection } from "../../common/AnimatedSection";
import { Trophy, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

export const Achievement = () => {
  return (
    <AnimatedSection id="achievement" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Section Transitions */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-brand-navy to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-brand-navy to-transparent z-0 pointer-events-none" />
      <Container>
        <SectionTitle 
          title="National Excellence" 
          subtitle="Our track record in Indonesia's most prestigious robotics competitions (KRI, KRTI, KKI)."
          center
        />

        <div className="space-y-16">
          {ACHIEVEMENTS.map((yearGroup, yearIdx) => (
            <div key={yearGroup.year} className="relative">
              {/* Year Indicator */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-primary/30" />
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary text-white font-bold">
                  <Calendar size={16} />
                  {yearGroup.year}
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-primary/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearGroup.categories.map((category, catIdx) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 }}
                    className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                       <Trophy size={80} className="text-brand-yellow" />
                    </div>
                    
                    <h4 className="text-brand-yellow font-bold text-sm mb-4 tracking-widest uppercase">
                      {category.name}
                    </h4>
                    
                    <ul className="space-y-4">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="group/item">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                               <Star size={14} className="text-brand-primary" />
                            </div>
                            <div>
                              <p className="text-white font-semibold leading-tight group-hover/item:text-brand-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-brand-gray mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};
