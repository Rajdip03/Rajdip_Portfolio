import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnterClickable = () => setIsHovering(true);
    const handleMouseLeaveClickable = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const addClickableListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .clickable'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterClickable);
        el.addEventListener("mouseleave", handleMouseLeaveClickable);
      });
      return clickables;
    };

    // Initial + observe for dynamic elements
    let clickables = addClickableListeners();
    const observer = new MutationObserver(() => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterClickable);
        el.removeEventListener("mouseleave", handleMouseLeaveClickable);
      });
      clickables = addClickableListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterClickable);
        el.removeEventListener("mouseleave", handleMouseLeaveClickable);
      });
      observer.disconnect();
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? 50 : 36,
          height: isHovering ? 50 : 36,
          borderRadius: "50%",
          border: `2px solid ${isHovering ? "#6366f1" : "rgba(99, 102, 241, 0.5)"}`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, opacity 0.3s",
          opacity: isVisible ? 1 : 0,
          background: isHovering ? "rgba(99, 102, 241, 0.06)" : "transparent",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.15s, height 0.15s, opacity 0.3s",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
