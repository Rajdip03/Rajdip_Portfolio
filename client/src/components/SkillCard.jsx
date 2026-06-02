import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  const isSoft = skill.category === "soft";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card-hover gradient-border"
      style={{
        background: "var(--bg-card)",
        borderRadius: 16,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "1px solid var(--border-color)",
        cursor: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient accent top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: isSoft
            ? "linear-gradient(90deg, #06b6d4, #10b981)"
            : "linear-gradient(90deg, #6366f1, #818cf8)",
          opacity: 0.8,
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: isSoft
            ? "rgba(6, 182, 212, 0.1)"
            : "rgba(99, 102, 241, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        {skill.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.01em",
        }}
      >
        {skill.title}
      </h3>

      {/* Category tag */}
      <span
        style={{
          display: "inline-block",
          width: "fit-content",
          padding: "4px 10px",
          borderRadius: 6,
          fontSize: "0.7rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          background: isSoft
            ? "rgba(6, 182, 212, 0.1)"
            : "rgba(99, 102, 241, 0.1)",
          color: isSoft ? "#06b6d4" : "#6366f1",
        }}
      >
        {isSoft ? "Soft Skill" : "Technical"}
      </span>

      {/* Description */}
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
        }}
      >
        {skill.description}
      </p>
    </motion.div>
  );
}
