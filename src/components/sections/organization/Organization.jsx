import { useState, useEffect } from "react";
import { ORG_STRUCTURE } from "../../../data/organization";
import { sanityClient, urlFor } from "../../../lib/sanity";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { AnimatedSection } from "../../common/AnimatedSection";
import { motion } from "framer-motion";
import { Users, Globe, BookOpen, Camera, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

const iconMap = {
  Users: Users,
  Globe: Globe,
  BookOpen: BookOpen,
  Camera: Camera,
};

export const Organization = () => {
  const [coreLeaders, setCoreLeaders] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Ambil data Pengurus Inti dari Sanity
    const fetchCoreLeaders = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "coreLeader"] | order(order asc) {
            role,
            name,
            image
          }`
        );
        setCoreLeaders(data);
      } catch (error) {
        console.error("Gagal mengambil data core leader dari Sanity:", error);
      }
    };

    // Ambil data Divisi Utama dari Sanity
    const fetchDivisions = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "division"] | order(_createdAt asc) {
            "id": idName,
            name,
            head,
            icon,
            description,
            members
          }`
        );
        setDivisions(data);
      } catch (error) {
        console.error("Gagal mengambil data divisi dari Sanity:", error);
      }
    };

    // Ambil data Departemen dari Sanity
    const fetchDepartments = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "department"] | order(_createdAt asc) {
            "id": idName,
            name,
            head,
            subs[]{name, desc}
          }`
        );
        setDepartments(data);
      } catch (error) {
        console.error("Gagal mengambil data departemen dari Sanity:", error);
      }
    };

    fetchCoreLeaders();
    fetchDivisions();
    fetchDepartments();
  }, []);

  // Menggabungkan data CMS dengan Dummy (agar tidak kosong jika CMS baru diisi sebagian)
  const displayLeaders = [...ORG_STRUCTURE.core];
  coreLeaders.forEach((cmsMember) => {
    const matchIndex = displayLeaders.findIndex((dummy) => 
      dummy.role.toLowerCase() === (cmsMember.role || "").toLowerCase()
    );
    if (matchIndex >= 0) displayLeaders[matchIndex] = { ...displayLeaders[matchIndex], ...cmsMember };
    else displayLeaders.push(cmsMember);
  });

  const displayDivisions = [...ORG_STRUCTURE.divisions];
  divisions.forEach((cmsDiv) => {
    const matchIndex = displayDivisions.findIndex((dummy) => 
      dummy.id === cmsDiv.id || dummy.name.toLowerCase() === (cmsDiv.name || "").toLowerCase()
    );
    if (matchIndex >= 0) displayDivisions[matchIndex] = { ...displayDivisions[matchIndex], ...cmsDiv };
    else displayDivisions.push(cmsDiv);
  });

  const displayDepartments = [...ORG_STRUCTURE.departments];
  departments.forEach((cmsDept) => {
    const matchIndex = displayDepartments.findIndex((dummy) => 
      dummy.id.toLowerCase() === (cmsDept.id || "").toLowerCase() ||
      dummy.name.toLowerCase() === (cmsDept.name || "").toLowerCase()
    );
    if (matchIndex >= 0) displayDepartments[matchIndex] = { ...displayDepartments[matchIndex], ...cmsDept };
    else displayDepartments.push(cmsDept);
  });

  return (
    <AnimatedSection id="organization" className="py-24 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-0 w-full h-px bg-brand-primary" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-brand-primary" />
      </div>

      <Container>
        <SectionTitle 
          title="Organizational Flow" 
          subtitle="Our structure is designed for maximum efficiency and clear communication between divisions."
          center
        />

        {/* Core Leadership */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {displayLeaders.map((member, idx) => (
              <motion.div
                key={member.role || idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-primary/10 border border-brand-primary/20 p-6 rounded-2xl text-center hover:bg-brand-primary/20 transition-all flex flex-col items-center"
              >
                {/* Tambahan: Menampilkan Foto Pengurus */}
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-brand-primary/20 border-2 border-brand-primary/50">
                  <img 
                    src={member.image?.asset ? urlFor(member.image).width(200).height(200).url() : (member.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback")} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] font-bold text-brand-yellow uppercase tracking-[0.2em] mb-1">{member.role}</p>
                <p className="text-white font-bold">{member.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divisions & Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Divisions */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-navy">
                <Users size={16} />
              </span>
              Main Divisions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayDivisions.map((div, idx) => {
                const Icon = iconMap[div.icon] || Users;
                return (
                  <motion.div
                    key={div.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-4 rounded-xl flex items-center gap-4 hover:border-brand-primary/30 transition-all"
                  >
                    <div className="text-brand-yellow">
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-semibold text-white">{div.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Department Hierarchy */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white">
                <Globe size={16} />
              </span>
              Department Hierarchy
            </h4>
            <div className="space-y-4">
               {displayDepartments.map((dept, idx) => (
                 <motion.div
                  key={dept.id || dept.name || idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-2xl"
                 >
                    <div className="flex items-center justify-between">
                      <p className="text-brand-yellow font-bold text-lg">{dept.id?.toUpperCase() || ""}</p>
                      <div className="flex items-center gap-2">
                        {dept.subs?.map(sub => (
                          <span key={sub.name} className="text-[10px] bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full font-bold">
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* View Full Button */}
        <div className="mt-20 text-center">
           <Link to="/organization">
             <Button variant="outline" size="lg" className="group hover:-translate-y-0.5 hover:border-brand-yellow/40 hover:shadow-[0_0_20px_rgba(255,204,0,0.15)] transition-all duration-300">
               View Full Management Structure
               <ChevronRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
             </Button>
           </Link>
        </div>
      </Container>
    </AnimatedSection>
  );
};
