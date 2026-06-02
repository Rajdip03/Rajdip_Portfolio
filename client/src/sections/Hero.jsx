import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";
import TypingAnimation from "../components/TypingAnimation";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const nameLetters = personalInfo.name.split("");

  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0 24px",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "1rem",
          color: "var(--text-muted)",
          marginBottom: 16,
          fontWeight: 400,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Hello, I'm
      </motion.p>

      {/* Name with stagger animation */}
      <motion.h1
        style={{
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 20,
          letterSpacing: "-0.03em",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {nameLetters.map((letter, i) => (
          <motion.span
            key={i}
            className="gradient-text"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.04,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              display: "inline-block",
              whiteSpace: letter === " " ? "pre" : "normal",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Typing animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          color: "var(--text-secondary)",
          fontWeight: 500,
          marginBottom: 40,
          minHeight: "2em",
        }}
      >
        <TypingAnimation
          strings={personalInfo.descriptors}
          speed={80}
          deleteSpeed={40}
          pauseTime={2200}
        />
      </motion.div>

      {/* Social buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 60,
        }}
      >
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
            fontSize: "1.4rem",
            textDecoration: "none",
            cursor: "none",
            transition: "all 0.3s",
            boxShadow: "var(--shadow-card)",
          }}
          aria-label="GitHub Profile"
        >
          <FiGithub />
        </motion.a>

        <motion.a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            border: "none",
            color: "#fff",
            fontSize: "1.4rem",
            textDecoration: "none",
            cursor: "none",
            transition: "all 0.3s",
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
          }}
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToSkills}
        className="clickable"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          bottom: 40,
          background: "none",
          border: "none",
          color: "var(--text-muted)",
          fontSize: "1.5rem",
          cursor: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll Down
        </span>
        <FiChevronDown />
      </motion.button>
    </section>
  );
}
