import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiUser } from "react-icons/fi";

export default function PortfolioWebsiteCard({ project, index }) {
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
        background: "#ffffff",
        color: "#1e293b",
        display: "flex",
        flexDirection: "column",
      }}
      className="card-hover"
    >
      {/* Mini Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          zIndex: 2,
        }}
      >
        {/* Logo and Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 800, fontSize: "1rem", color: "#1e293b" }}>Rajdip</span>
          <div style={{ width: 24, height: 12, borderRadius: 12, border: "1px solid #f59e0b", display: "flex", alignItems: "center", padding: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", marginLeft: "auto" }}></div>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "10px", fontSize: "0.55rem", fontWeight: 500, color: "#475569" }}>
          <span>Home</span>
          <span>Skills</span>
          <span>Experience</span>
          <span>Projects</span>
        </div>

        {/* Contact Button */}
        <span style={{ fontSize: "0.55rem", background: "linear-gradient(90deg, #f59e0b, #fbbf24)", color: "white", padding: "4px 12px", borderRadius: 12, fontWeight: 600 }}>
          Contact
        </span>
      </div>

      {/* Main Hero Layout */}
      <div
        style={{
          flex: 1,
          display: "flex",
          padding: "0 24px 24px",
          position: "relative",
        }}
      >
        {/* Left Side (Text) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.1, color: "#1e293b", marginBottom: 4 }}>
            Hi I Am <br />
            <span style={{ color: "#f59e0b" }}>Rajdip Mondal</span>
          </h3>
          <p style={{ fontSize: "0.6rem", color: "#94a3b8", marginBottom: 16 }}>Full Stack Developer</p>

          <span style={{ alignSelf: "flex-start", fontSize: "0.55rem", background: "linear-gradient(90deg, #f59e0b, #fbbf24)", color: "white", padding: "6px 16px", borderRadius: 16, fontWeight: 600, marginBottom: 20 }}>
            Hire me
          </span>

          <div style={{ display: "flex", gap: 10, color: "#f59e0b", fontSize: "1rem" }}>
            <FiGithub />
            <div style={{ fontWeight: 800, fontSize: "0.9rem", lineHeight: 1 }}>in</div>
          </div>
        </div>

        {/* Right Side (Graphics) */}
        <div style={{ flex: 1.2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Blobs */}
          <div style={{ position: "absolute", width: "90%", height: "90%", background: "#facc15", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", right: "-10%", top: 0 }}></div>
          <div style={{ position: "absolute", width: "60%", height: "60%", background: "#3b82f6", borderRadius: "50% 40% 30% 70% / 60% 40% 70% 40%", left: "-10%", bottom: "10%" }}></div>

          {/* User Placeholder */}
          <div style={{ zIndex: 2, position: "relative", width: "60%", height: "90%", borderRadius: "40px 40px 0 0", alignSelf: "flex-end", display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <img src="/profile.jpg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "40px 40px 0 0" }} />
          </div>

          {/* Floating Elements */}
          <div style={{ position: "absolute", top: "10%", right: "-10%", background: "white", padding: "6px 10px", borderRadius: 8, display: "flex", alignItems: "center", gap: 6, boxShadow: "0 4px 10px rgba(0,0,0,0.1)", zIndex: 3 }}>
            <div style={{ width: 16, height: 16, background: "#fb7185", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.5rem", color: "white" }}>👑</div>
            <span style={{ fontSize: "0.45rem", fontWeight: 600, color: "#1e293b" }}>Web<br />Developer</span>
          </div>

          <div style={{ position: "absolute", bottom: "10%", left: "-15%", background: "white", padding: "6px 10px", borderRadius: 8, display: "flex", alignItems: "center", gap: 6, boxShadow: "0 4px 10px rgba(0,0,0,0.1)", zIndex: 3 }}>
            <div style={{ width: 16, height: 16, background: "#f59e0b", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.5rem", color: "white" }}>👍</div>
            <span style={{ fontSize: "0.45rem", fontWeight: 600, color: "#1e293b" }}>Best Unique<br />Design</span>
          </div>

          <div style={{ position: "absolute", top: "20%", left: "0%", fontSize: "1.5rem", zIndex: 3, filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.2))" }}>
            😎
          </div>
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
          zIndex: 10,
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
                background: "rgba(245, 158, 11, 0.2)",
                color: "#f59e0b",
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
                background: "#f59e0b",
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
