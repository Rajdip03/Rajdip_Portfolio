import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: "0 0 auto",
        width: "min(480px, 85vw)",
        minHeight: 380,
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        border: "1px solid var(--border-color)",
        background: "var(--bg-card)",
      }}
      className="card-hover"
    >
      {/* Gradient background effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${project.accentColor}15, transparent 60%)`,
          opacity: isHovered ? 1 : 0.5,
          transition: "opacity 0.4s",
        }}
      />

      {/* Top gradient bar */}
      <div
        style={{
          height: 4,
          background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}88)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 4px)",
        }}
      >
        {/* Project number */}
        <span
          style={{
            fontSize: "4rem",
            fontWeight: 900,
            lineHeight: 1,
            background: `linear-gradient(135deg, ${project.accentColor}30, transparent)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "absolute",
            top: 20,
            right: 28,
          }}
        >
          0{index + 1}
        </span>

        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: 16,
            letterSpacing: "-0.02em",
            maxWidth: "75%",
          }}
        >
          {project.title}
        </h3>

        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            marginBottom: 20,
            flex: 1,
          }}
        >
          {project.description}
        </motion.p>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: "0.78rem",
                fontWeight: 500,
                background: `${project.accentColor}15`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="clickable"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 10,
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              color: project.accentColor,
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "none",
              transition: "all 0.3s",
            }}
          >
            <FiGithub /> Code
          </a>
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 10,
                background: project.accentColor,
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "none",
                transition: "all 0.3s",
              }}
            >
              <FiExternalLink /> Live
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
