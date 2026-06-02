import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="clickable"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "1px solid var(--border-color)",
        background: "var(--bg-glass)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-primary)",
        fontSize: "1.2rem",
        cursor: "none",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, background 0.3s",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: "absolute" }}
      >
        <FiMoon />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? -180 : 0, opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ position: "absolute" }}
      >
        <FiSun />
      </motion.div>
    </motion.button>
  );
}
