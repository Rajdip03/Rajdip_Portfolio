import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function SectionWrapper({ children, id, className = "" }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.section>
  );
}
