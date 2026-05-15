import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { ACTIVE_DIVISIONS, INACTIVE_DIVISIONS } from "../../data/divisions";
import { ACHIEVEMENTS } from "../../data/achievements";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Achievement", dropdown: true, data: ACHIEVEMENTS, href: "#achievement" },
    { name: "Division", dropdown: true, data: ACTIVE_DIVISIONS, href: "#division" },
    { name: "About", dropdown: true, data: [
      { name: "Organization Structure", href: "/organization", isPage: true },
      { name: "Creativity", href: "#creativity" },
      { name: "Gallery", href: "#gallery" },
    ], href: "#" },
  ];

  const scrollToSection = (e, link) => {
    if (link.isPage) {
      setIsMobileMenuOpen(false);
      return;
    }
    
    e.preventDefault();
    const targetId = link.href.replace("#", "");
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "glass border-b border-white/10" : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden p-1.5 border border-white/5">
              <img src="/TeknokratLogo.png" alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-[10px] hidden lg:block text-brand-gray font-bold uppercase tracking-widest leading-tight">Universitas Teknokrat<br/>Indonesia</p>
          </div>
          <div className="h-8 w-px bg-white/10 mx-2" />
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform overflow-hidden p-1.5 border border-white/5">
              <img src="/RoboticLogo.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-white uppercase">Robotika</p>
              <p className="text-[10px] text-brand-gray uppercase tracking-widest font-bold">Teknokrat</p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex flex-row items-center gap-6 ml-auto">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full py-2"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <a 
                href={link.href || "#"} 
                onClick={(e) => scrollToSection(e, link)}
                className="text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={12} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
              </a>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={cn(
                        "absolute top-full right-0 mt-2 glass rounded-[20px] p-6 shadow-2xl overflow-hidden",
                        link.name === "Achievement" ? "w-[480px]" : "w-64"
                      )}
                    >
                      {link.name === "About" ? (
                        <div className="space-y-4">
                          {link.data.map((item) => (
                            item.isPage ? (
                              <Link key={item.name} to={item.href} className="block text-sm font-bold text-brand-gray hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                                {item.name}
                              </Link>
                            ) : (
                              <a key={item.name} href={item.href} onClick={(e) => { scrollToSection(e, item); setActiveDropdown(null); }} className="block text-sm font-bold text-brand-gray hover:text-white transition-colors">
                                {item.name}
                              </a>
                            )
                          ))}
                        </div>
                      ) : link.name === "Division" ? (
                        <div className="space-y-4">
                          <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Active Divisions</p>
                          {ACTIVE_DIVISIONS.map(div => (
                            <Link key={div.id} to={`/division/${div.id}`} className="group/item block" onClick={() => setActiveDropdown(null)}>
                              <p className="text-sm font-semibold text-white group-hover/item:text-brand-primary transition-colors cursor-pointer">{div.name}</p>
                            </Link>
                          ))}
                          <div className="pt-2 border-t border-white/5">
                             <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2">Inactive</p>
                             {INACTIVE_DIVISIONS.map(div => (
                               <Link key={div.id} to={`/division/${div.id}`} className="block py-1" onClick={() => setActiveDropdown(null)}>
                                 <p className="text-xs text-brand-gray/50 line-through hover:text-brand-gray transition-colors">{div.name}</p>
                               </Link>
                             ))}
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                          {link.data && link.data.map((yearGroup) => (
                            <div key={yearGroup.year} className="space-y-4">
                              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                                <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                                <p className="text-sm font-black text-white tracking-widest">{yearGroup.year} WINNERS</p>
                              </div>
                              <div className="space-y-4 pl-4 border-l border-brand-primary/20">
                                {yearGroup.categories.map((cat) => (
                                  <div key={cat.id} className="group/ach">
                                    <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-1.5">{cat.id}</p>
                                    <div className="space-y-1">
                                      {cat.items.map((item, idx) => (
                                        <p key={idx} className="text-[11px] font-bold text-brand-gray leading-tight group-hover/ach:text-white transition-colors">{item.title}</p>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {link.name === "Achievement" && (
                        <div className="mt-8 pt-4 border-t border-white/5">
                          <Link to="/achievements" className="flex items-center justify-between p-4 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 hover:bg-brand-primary/20 transition-all group" onClick={() => setActiveDropdown(null)}>
                            <span className="text-sm font-black text-white uppercase tracking-widest">See More Achievements</span>
                            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                              <ChevronRight size={16} />
                            </div>
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-brand-navy lg:hidden p-8 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-4">
                  <button onClick={(e) => link.dropdown ? null : scrollToSection(e, link)} className="text-2xl font-black text-white uppercase tracking-tighter text-left w-full">
                    {link.name}
                  </button>
                  
                  {link.dropdown && (
                    <div className="pl-6 border-l-2 border-brand-primary/20 space-y-4">
                       {link.name === "About" ? (
                         link.data.map(item => (
                           item.isPage ? (
                             <Link key={item.name} to={item.href} className="block text-brand-gray font-bold" onClick={() => setIsMobileMenuOpen(false)}>{item.name}</Link>
                           ) : (
                             <a key={item.name} href={item.href} className="block text-brand-gray font-bold" onClick={(e) => { scrollToSection(e, item); setIsMobileMenuOpen(false); }}>{item.name}</a>
                           )
                         ))
                       ) : link.name === "Division" ? (
                         ACTIVE_DIVISIONS.map(div => (
                           <Link key={div.id} to={`/division/${div.id}`} className="block text-brand-gray font-bold" onClick={() => setIsMobileMenuOpen(false)}>{div.name}</Link>
                         ))
                       ) : (
                         ACHIEVEMENTS.map(yearGroup => (
                           <div key={yearGroup.year} className="space-y-2">
                              <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{yearGroup.year} WINNERS</p>
                              <div className="space-y-1">
                                {yearGroup.categories.map(cat => (
                                  <div key={cat.id}>
                                    <p className="text-[9px] font-bold text-white/50">{cat.id}</p>
                                    {cat.items.map((item, idx) => (
                                      <p key={idx} className="text-xs text-brand-gray">{item.title}</p>
                                    ))}
                                  </div>
                                ))}
                              </div>
                           </div>
                         ))
                       )}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
