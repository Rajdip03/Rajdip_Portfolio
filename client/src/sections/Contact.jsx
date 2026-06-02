import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import ContactForm from "../components/ContactForm";
import Toast from "../components/Toast";

export default function Contact() {
  const [toast, setToast] = useState(null);

  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a project in mind or just want to say hello? I'd love to hear from you.
      </p>

      <div
        style={{
          display: "flex",
          gap: 48,
          maxWidth: 1000,
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* Info side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1 1 300px",
            maxWidth: 380,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              padding: 28,
              borderRadius: 16,
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Let's Connect
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(99, 102, 241, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6366f1",
                    flexShrink: 0,
                  }}
                >
                  <FiMail />
                </div>
                <span>rajdipmondal03@gmail.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(6, 182, 212, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#06b6d4",
                    flexShrink: 0,
                  }}
                >
                  <FiMapPin />
                </div>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div
            style={{
              padding: 20,
              borderRadius: 12,
              background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.08))",
              border: "1px solid var(--border-color)",
              textAlign: "center",
            }}
          >
            <FiSend
              style={{
                fontSize: "1.5rem",
                color: "#6366f1",
                marginBottom: 8,
              }}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}
            >
              Response within <strong style={{ color: "var(--text-secondary)" }}>24 hours</strong>
            </p>
          </div>
        </motion.div>

        {/* Form side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            flex: "1 1 400px",
            maxWidth: 520,
            padding: 32,
            borderRadius: 20,
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
          }}
        >
          <ContactForm
            onSuccess={(msg) => setToast({ message: msg, type: "success" })}
            onError={(msg) => setToast({ message: msg, type: "error" })}
          />
        </motion.div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </SectionWrapper>
  );
}
