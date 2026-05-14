import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { Cpu, Rocket } from "lucide-react";
import { useRef } from "react";

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background color transition from Navy (#0B1026) to a slightly lighter Blue (#1B1F8A/10)
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#0B1026", "#0f172a", "#0B1026"]
  );

  return (
    <motion.section 
      ref={containerRef}
      style={{ background }}
      className="py-32 relative overflow-hidden transition-colors duration-1000"
    >
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#0B1026] to-transparent z-0 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Section 1: Robotic Itu Apa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-brand-primary">
              <div className="p-3 bg-brand-primary/10 rounded-2xl">
                <Cpu size={28} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Robotic Itu Apa?</h2>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-brand-primary/30 rounded-full" />
              <p className="text-lg text-brand-gray leading-relaxed text-justify">
                Robotic atau robotika adalah ilmu yang mempelajari tentang desain, pembuatan, dan penggunaan robot atau mesin yang dapat melakukan tugas-tugas tertentu secara otomatis dengan mengikuti instruksi yang telah diprogram sebelumnya. Robot atau mesin tersebut dilengkapi dengan sensor, motor, dan kontroler yang memungkinkan mereka untuk berinteraksi dengan lingkungan sekitarnya dan melakukan tugas-tugas yang kompleks seperti pengelasan, pengeboran, dan bahkan penerbangan.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed text-justify mt-6">
                Robotik sering digunakan dalam berbagai industri seperti manufaktur, pertanian, kesehatan, dan transportasi, serta dalam eksplorasi luar angkasa dan lingkungan yang tidak bersahabat dengan manusia. Dalam perkembangannya, robotik terus berkembang dan menjadi semakin canggih, terutama dengan adanya perkembangan teknologi seperti kecerdasan buatan (AI), sensorik, dan pemrosesan data yang lebih cepat.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Alasan Teknokrat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-brand-yellow">
              <div className="p-3 bg-brand-yellow/10 rounded-2xl">
                <Rocket size={28} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Kampus Pelopor</h2>
            </div>
            <div className="glass p-8 rounded-[2.5rem] border-brand-yellow/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-brand-yellow/5 opacity-20 group-hover:opacity-40 transition-opacity">
                 <Rocket size={120} />
              </div>
              <h3 className="text-xl font-bold text-brand-yellow mb-6">Alasan Teknokrat Menjadi Pelopor Robotic di Lampung</h3>
              <p className="text-brand-gray leading-relaxed text-justify relative z-10">
                Universitas Teknokrat Indonesia (UTI) diakui sebagai kampus pelopor robotic di Lampung, Indonesia. Hal ini dapat disebabkan oleh beberapa faktor. Pertama, UTI memiliki Program Studi Informatika dan Teknik Elektro yang secara khusus memfokuskan pada pengembangan teknologi robotika.
              </p>
              <p className="text-brand-gray leading-relaxed text-justify mt-6 relative z-10">
                Kurikulum yang ditawarkan telah disusun dengan cermat memperhatikan perkembangan terbaru, didukung oleh laboratorium robotik yang lengkap dan memadai. UTI juga memiliki Pusat Penelitian dan Pengembangan yang berfokus pada inovasi yang berdampak positif bagi masyarakat. Seluruh faktor ini menghasilkan lulusan UTI yang berkualitas dan siap untuk bersaing di dunia kerja, khususnya di industri robotika dan teknologi informasi.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};
