import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiVideo, FiArrowRight } from "react-icons/fi";

export default function AiResumeBuilderCard({ project, index }) {
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
        background: "#ffffff", // Enforce white background for this specific card
        color: "#1a1a1a", // Enforce dark text
        display: "flex",
        flexDirection: "column",
      }}
      className="card-hover"
    >
      {/* Top Banner */}
      <div
        style={{
          background: "#ccffcc",
          color: "#008000",
          fontSize: "0.55rem",
          fontWeight: 600,
          textAlign: "center",
          padding: "4px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <span style={{ background: "#00cc66", color: "white", padding: "2px 6px", borderRadius: 4 }}>New</span>
        AI Feature Added
      </div>

      {/* Mini Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.5px" }}>
          resume<span style={{ color: "#00cc66" }}>.</span>
        </div>

        {/* Links (Hidden on very small screens, visible as tiny text) */}
        <div style={{ display: "flex", gap: "10px", fontSize: "0.55rem", fontWeight: 500, color: "#666" }}>
          <span>Home</span>
          <span>Features</span>
          <span>Testimonials</span>
          <span>Contact</span>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ fontSize: "0.55rem", background: "#00cc66", color: "white", padding: "4px 8px", borderRadius: 12, fontWeight: 600 }}>Get started</span>
          <span style={{ fontSize: "0.55rem", border: "1px solid #ccc", padding: "4px 8px", borderRadius: 12, fontWeight: 500 }}>Login</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 20px",
          textAlign: "center",
          background: "radial-gradient(circle at center, #e6ffe6 0%, #ffffff 70%)",
        }}
      >
        {/* Social Proof */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          {/* Fake avatars */}
          <div style={{ display: "flex" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ width: 16, height: 16, borderRadius: "50%", background: "#ccc", marginLeft: i !== 1 ? -6 : 0, border: "1px solid white" }}></div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
             <div style={{ display: "flex", color: "#00cc66", fontSize: "0.5rem" }}>★★★★★</div>
             <span style={{ fontSize: "0.5rem", color: "#666" }}>Used by 10,000+ users</span>
          </div>
        </div>

        {/* Headline */}
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 12,
            letterSpacing: "-0.5px",
          }}
        >
          Get your dream job with <br />
          <span style={{ color: "#00cc66" }}>AI-powered</span> Resume.
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "0.7rem",
            color: "#666",
            maxWidth: "80%",
            marginBottom: 20,
            lineHeight: 1.4,
          }}
        >
          Create, edit and download professional resume with AI-powered assistance.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4, background: "#00cc66", color: "white", padding: "8px 16px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600 }}>
            Get started <FiArrowRight />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, border: "1px solid #ddd", background: "white", color: "#333", padding: "8px 16px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 500 }}>
            <FiVideo /> Try demo
          </span>
        </div>
        
        {/* Trust Logos (Simplified) */}
        <div style={{ fontSize: "0.5rem", color: "#999", marginBottom: 6 }}>Trusting by leading brands, including</div>
        <div style={{ display: "flex", gap: 12, opacity: 0.5 }}>
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} style={{ fontSize: "0.6rem", fontWeight: 700, color: "#666" }}>logo</div>
           ))}
        </div>
      </div>

      {/* Hover Overlay for actual project links/info */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 10, 26, 0.9)",
          backdropFilter: "blur(4px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 32,
          color: "white",
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12, color: "white" }}>{project.title}</h4>
        
        <p style={{ fontSize: "0.85rem", color: "#ccc", marginBottom: 20, lineHeight: 1.6, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "4px 10px",
                borderRadius: 6,
                fontSize: "0.7rem",
                fontWeight: 500,
                background: "rgba(0, 204, 102, 0.2)",
                color: "#00cc66",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
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
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "none",
              transition: "background 0.3s",
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
                background: "#00cc66",
                color: "white",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "none",
                transition: "background 0.3s",
              }}
            >
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
