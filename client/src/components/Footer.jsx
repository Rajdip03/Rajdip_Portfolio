import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 24px",
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-secondary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        transition: "background 0.5s, border-color 0.5s",
      }}
    >
      {/* Social links */}
      <div style={{ display: "flex", gap: 16 }}>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            textDecoration: "none",
            cursor: "none",
            transition: "all 0.3s",
          }}
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            textDecoration: "none",
            cursor: "none",
            transition: "all 0.3s",
          }}
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
      </div>

      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--text-muted)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        Built with <FiHeart style={{ color: "#ef4444", fontSize: "0.9rem" }} /> by{" "}
        <span className="gradient-text" style={{ fontWeight: 600 }}>
          {personalInfo.name}
        </span>
      </p>

      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
