import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX, FiAlertCircle } from "react-icons/fi";

export default function Toast({ message, type = "success", onClose, duration = 4000 }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <FiCheck />,
    error: <FiAlertCircle />,
  };

  const colors = {
    success: { bg: "rgba(16, 185, 129, 0.15)", border: "#10b981", text: "#10b981" },
    error: { bg: "rgba(239, 68, 68, 0.15)", border: "#ef4444", text: "#ef4444" },
  };

  const c = colors[type];

  return (
    <div
      className={isExiting ? "toast-exit" : "toast-enter"}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 24px",
        borderRadius: 12,
        background: c.bg,
        backdropFilter: "blur(16px)",
        border: `1px solid ${c.border}`,
        color: "var(--text-primary)",
        fontSize: "0.95rem",
        fontWeight: 500,
        maxWidth: 400,
        boxShadow: `0 8px 32px rgba(0,0,0,0.2)`,
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: c.border,
          color: "#fff",
          fontSize: "0.85rem",
          flexShrink: 0,
        }}
      >
        {icons[type]}
      </span>
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(onClose, 300);
        }}
        style={{
          background: "none",
          border: "none",
          color: "var(--text-muted)",
          cursor: "none",
          padding: 4,
          display: "flex",
          fontSize: "1.1rem",
        }}
      >
        <FiX />
      </button>
    </div>
  );
}
