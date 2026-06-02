import { motion } from "framer-motion";

export default function TimelineItem({ experience, index, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className={`timeline-item ${isLeft ? "left" : "right"}`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="timeline-dot"
        style={{ top: 20 }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="card-hover"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          borderRadius: 16,
          padding: 24,
          maxWidth: 420,
          width: "100%",
          cursor: "none",
          position: "relative",
        }}
      >
        {/* Duration badge */}
        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: "0.75rem",
            fontWeight: 600,
            background: "rgba(99, 102, 241, 0.1)",
            color: "#6366f1",
            marginBottom: 12,
          }}
        >
          {experience.duration}
        </span>

        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 4,
          }}
        >
          {experience.role}
        </h3>

        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "#6366f1",
            marginBottom: 12,
          }}
        >
          {experience.company}
        </p>

        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: 16,
          }}
        >
          {experience.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                fontSize: "0.72rem",
                fontWeight: 500,
                background: "rgba(6, 182, 212, 0.1)",
                color: "#06b6d4",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
