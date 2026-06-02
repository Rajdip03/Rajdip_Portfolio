import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
          background: isScrolled ? "var(--bg-glass)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="clickable"
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="gradient-text">RM</span>
            <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "1rem", marginLeft: 4 }}>.</span>
          </motion.button>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="clickable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: activeSection === link.id
                    ? "rgba(99, 102, 241, 0.1)"
                    : "transparent",
                  border: "none",
                  color: activeSection === link.id
                    ? "#6366f1"
                    : "var(--text-secondary)",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: "none",
                  transition: "all 0.3s",
                  position: "relative",
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navIndicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 2,
                      background: "linear-gradient(90deg, #6366f1, #06b6d4)",
                      borderRadius: 1,
                    }}
                  />
                )}
              </motion.button>
            ))}
            <div style={{ marginLeft: 8 }}>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="nav-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="clickable"
              style={{
                background: "none",
                border: "1px solid var(--border-color)",
                borderRadius: 8,
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                fontSize: "1.2rem",
                cursor: "none",
              }}
            >
              {isMobileOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              zIndex: 999,
              background: "var(--bg-glass)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border-color)",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.id)}
                className="clickable"
                style={{
                  background: activeSection === link.id
                    ? "rgba(99, 102, 241, 0.1)"
                    : "transparent",
                  border: "none",
                  color: activeSection === link.id
                    ? "#6366f1"
                    : "var(--text-secondary)",
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: "none",
                  textAlign: "left",
                  transition: "all 0.3s",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS */}
      <style>{`
        .nav-mobile { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
