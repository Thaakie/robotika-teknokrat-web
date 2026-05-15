import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/sections/footer/Footer";
import { HomePage } from "./pages/HomePage";
import { DivisionPage } from "./pages/DivisionPage";
import { SubDivisionPage } from "./pages/SubDivisionPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { OrganizationPage } from "./pages/OrganizationPage";
import { RobotDetailPage } from "./pages/RobotDetailPage";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Preloader } from "./components/common/Preloader";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for window.onload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 2.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
      });

      window.lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      <div className="relative min-h-screen bg-brand-navy selection:bg-brand-primary selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/division/:id" element={<DivisionPage />} />
            <Route path="/division/:id/:subId" element={<SubDivisionPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/organization" element={<OrganizationPage />} />
            <Route path="/robot/:id" element={<RobotDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
