import { useState, useEffect } from "react";

export default function TypingAnimation({ strings, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[currentStringIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setCurrentText(current.slice(0, currentText.length + 1));
          if (currentText.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          setCurrentText(current.slice(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {currentText}
      <span className="typing-cursor" />
    </span>
  );
}
