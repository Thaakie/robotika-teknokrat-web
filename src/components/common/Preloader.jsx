import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Circle properties
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#02041a] flex flex-col items-center justify-center"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          {/* Background Track */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-white/5"
          />
          {/* Progress Indicator */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.2, ease: "linear" }}
            strokeLinecap="round"
            className="text-brand-primary"
          />
        </svg>

        {/* Logo */}
        <img src="/RoboticLogo.png" alt="Loading" className="w-16 h-16 object-contain relative z-10" />
      </div>
    </motion.div>
  );
};
