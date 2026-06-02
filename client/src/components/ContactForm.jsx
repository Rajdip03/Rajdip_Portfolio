import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactForm({ onSuccess, onError }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      errs.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        onSuccess(data.message || "Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        onError(data.message || "Something went wrong.");
      }
    } catch (err) {
      onError("Could not connect to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "14px 16px 14px 44px",
    borderRadius: 12,
    border: `1px solid ${errors[field] ? "#ef4444" : "var(--border-color)"}`,
    background: "var(--bg-card)",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.3s",
    cursor: "none",
    fontFamily: "inherit",
  });

  const iconStyle = {
    position: "absolute",
    left: 14,
    top: "50%",
    transform: "translateY(-50%)",
    color: "var(--text-muted)",
    fontSize: "1rem",
    pointerEvents: "none",
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 520 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Name */}
        <div style={{ position: "relative" }}>
          <FiUser style={iconStyle} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle("name")}
            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.name
                ? "#ef4444"
                : "var(--border-color)")
            }
          />
          {errors.name && (
            <span
              style={{
                fontSize: "0.78rem",
                color: "#ef4444",
                marginTop: 4,
                display: "block",
              }}
            >
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div style={{ position: "relative" }}>
          <FiMail style={iconStyle} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle("email")}
            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.email
                ? "#ef4444"
                : "var(--border-color)")
            }
          />
          {errors.email && (
            <span
              style={{
                fontSize: "0.78rem",
                color: "#ef4444",
                marginTop: 4,
                display: "block",
              }}
            >
              {errors.email}
            </span>
          )}
        </div>

        {/* Message */}
        <div style={{ position: "relative" }}>
          <FiMessageSquare
            style={{ ...iconStyle, top: 18, transform: "none" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            style={{
              ...inputStyle("message"),
              resize: "vertical",
              minHeight: 120,
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.message
                ? "#ef4444"
                : "var(--border-color)")
            }
          />
          {errors.message && (
            <span
              style={{
                fontSize: "0.78rem",
                color: "#ef4444",
                marginTop: 4,
                display: "block",
              }}
            >
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="clickable"
          style={{
            width: "100%",
            padding: "16px 24px",
            borderRadius: 12,
            border: "none",
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            opacity: isSubmitting ? 0.7 : 1,
            transition: "all 0.3s",
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
          }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  width: 18,
                  height: 18,
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                }}
              />
              Sending...
            </>
          ) : (
            <>
              Send Message <FiSend />
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
}
