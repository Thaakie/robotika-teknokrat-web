import { Hero } from "../components/sections/hero/Hero";
import { About } from "../components/sections/about/About";
import { Achievement } from "../components/sections/achievement/Achievement";
import { Division } from "../components/sections/division/Division";
import { Creativity } from "../components/sections/creativity/Creativity";
import { Gallery } from "../components/sections/gallery/Gallery";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Achievement />
      <Division />
      <Creativity />
      <Gallery />
    </>
  );
};
