import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const Button = ({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  ...props 
}) => {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-opacity-90 shadow-lg shadow-brand-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-80",
    outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    ghost: "text-brand-gray hover:text-white hover:bg-white/5",
    accent: "bg-brand-yellow text-brand-navy hover:bg-opacity-90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
