import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { AnimatedSection } from "../../common/AnimatedSection";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { sanityClient, urlFor } from "../../../lib/sanity";

const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", size: "large" },
  { url: "https://images.unsplash.com/photo-1561144443-0558f29bf5e1?auto=format&fit=crop&q=80&w=800", size: "small" },
  { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800", size: "small" },
  { url: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?auto=format&fit=crop&q=80&w=800", size: "tall" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", size: "small" },
  { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", size: "large" },
];

export const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "gallery"] | order(_createdAt desc) {
            title,
            image,
            size
          }`
        );
        setGalleryImages(data);
      } catch (error) {
        console.error("Gagal mengambil data gallery dari Sanity:", error);
      }
    };

    fetchGallery();
  }, []);

  const displayImages = galleryImages.length > 0 ? galleryImages : GALLERY_IMAGES;

  return (
    <AnimatedSection id="gallery" className="py-24 bg-brand-navy">
      <Container>
        <SectionTitle 
          title="Captured Moments" 
          subtitle="Behind the scenes of our workshops and the thrill of national competitions."
          center
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {displayImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative overflow-hidden rounded-2xl group",
                img.size === "large" && "md:col-span-2 md:row-span-2",
                img.size === "tall" && "md:row-span-2",
                img.size === "small" && "md:col-span-1"
              )}
            >
              <img 
                src={img.image?.asset ? urlFor(img.image).url() : img.url} 
                alt={img.title || "Gallery"} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                   +
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

// Helper for classes (since I can't import cn here easily without relative path issues if I forget)
import { cn } from "../../../lib/utils";
