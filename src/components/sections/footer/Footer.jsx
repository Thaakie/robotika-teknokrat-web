import { Container } from "../../ui/Container";
import { Cpu, Mail, MapPin, Phone, Globe, MessageSquare, Share2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden p-1 border border-white/5">
                  <img src="/TeknokratLogo.png" alt="Teknokrat" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden p-1 border border-white/5">
                  <img src="/RoboticLogo.png" alt="Robotic" className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="text-lg font-black text-white leading-tight uppercase">ROBOTIKA<br/><span className="text-brand-primary text-xs">TEKNOKRAT</span></h3>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Leading the innovation in competitive robotics and autonomous systems at Universitas Teknokrat Indonesia.
            </p>
            <div className="flex gap-4">
               {[Globe, MessageSquare, Share2].map((Icon, i) => (
                 <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-gray hover:text-brand-primary hover:bg-white/10 transition-all">
                   <Icon size={16} />
                 </a>
               ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Achievement", "Division", "Our Creativity", "Organization", "Gallery"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-brand-gray text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                 <div className="mt-1 text-brand-primary"><MapPin size={18} /></div>
                 <div>
                   <p className="text-white font-semibold text-sm mb-1">Laboratory</p>
                   <p className="text-brand-gray text-xs leading-relaxed">
                     Universitas Teknokrat Indonesia <br />
                     Lab. Robotics & Aerospace, Gedung FSIP
                   </p>
                 </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Mail size={18} className="text-brand-primary" />
                  <p className="text-brand-gray text-sm">robotika@teknokrat.ac.id</p>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-brand-primary" />
                  <p className="text-brand-gray text-sm">+62 812-XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-brand-gray text-xs">
             &copy; {new Date().getFullYear()} Robotika Teknokrat. All rights reserved.
           </p>
           <p className="text-brand-gray text-[10px] tracking-widest uppercase">
             Designed for <span className="text-white font-bold">Champions</span>
           </p>
        </div>
      </Container>
    </footer>
  );
};
