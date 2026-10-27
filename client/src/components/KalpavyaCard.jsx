import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiShoppingCart } from "react-icons/fi";
import kalpavyaImg from "../assets/kalpavya.png";

export default function KalpavyaCard({ project, index }) {
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
        width: "min(520px, 85vw)",
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        border: "1px solid var(--border-color)",
        background: "var(--bg-card)",
      }}
      className="card-hover"
    >
      {/* Top gradient bar */}
      <div
        style={{
          height: 4,
          background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}88)`,
        }}
      />

      {/* Project Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 220,
          overflow: "hidden",
        }}
      >
        <motion.img
          src={kalpavyaImg}
          alt="Kalpavya e-commerce platform screenshot"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />

        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${project.accentColor}cc, #1a0a2e99)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
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
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "none",
              backdropFilter: "blur(8px)",
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
                background: "#fff",
                color: project.accentColor,
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "none",
              }}
            >
              <FiExternalLink /> Live
            </a>
          )}
        </motion.div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 12px",
            borderRadius: 20,
            background: `${project.accentColor}`,
            color: "#fff",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <FiShoppingCart size={11} /> E-Commerce
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "24px 28px 28px",
        }}
      >
        {/* Subtle gradient bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${project.accentColor}10, transparent 60%)`,
            opacity: isHovered ? 1 : 0.5,
            transition: "opacity 0.4s",
            pointerEvents: "none",
          }}
        />

        {/* Project number */}
        <span
          style={{
            fontSize: "3.5rem",
            fontWeight: 900,
            lineHeight: 1,
            background: `linear-gradient(135deg, ${project.accentColor}30, transparent)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "absolute",
            top: 16,
            right: 22,
          }}
        >
          0{index + 1}
        </span>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: 10,
            letterSpacing: "-0.02em",
            maxWidth: "75%",
            position: "relative",
          }}
        >
          {project.title}
        </h3>

        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            marginBottom: 18,
            position: "relative",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </motion.p>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            position: "relative",
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "4px 11px",
                borderRadius: 8,
                fontSize: "0.77rem",
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
      </div>
    </motion.div>
  );
}
