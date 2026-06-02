import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import AiResumeBuilderCard from "../components/AiResumeBuilderCard";
import PortfolioWebsiteCard from "../components/PortfolioWebsiteCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.firstChild?.offsetWidth || 480;
    const gap = 32;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.firstChild?.offsetWidth || 480;
    const gap = 32;
    const idx = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(idx);
  };

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A showcase of my recent work — real-world applications built with modern technologies.
      </p>

      {/* Carousel container */}
      <div style={{ position: "relative", width: "100%", maxWidth: 1100 }}>
        {/* Scroll container */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            gap: 32,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "20px 0",
            justifyContent: projects.length <= 2 ? "center" : "flex-start",
          }}
        >
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>
        {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ scrollSnapAlign: "center", flexShrink: 0 }}
            >
              {project.shortTitle === "AI Resume Builder" ? (
                <AiResumeBuilderCard project={project} index={index} />
              ) : project.shortTitle === "Portfolio Website" ? (
                <PortfolioWebsiteCard project={project} index={index} />
              ) : (
                <ProjectCard project={project} index={index} />
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {projects.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              className="clickable"
              style={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--border-color)",
                background: "var(--bg-glass)",
                backdropFilter: "blur(12px)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                cursor: "none",
                opacity: activeIndex === 0 ? 0.3 : 1,
              }}
              disabled={activeIndex === 0}
            >
              <FiChevronLeft />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                scrollToIndex(Math.min(projects.length - 1, activeIndex + 1))
              }
              className="clickable"
              style={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--border-color)",
                background: "var(--bg-glass)",
                backdropFilter: "blur(12px)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                cursor: "none",
                opacity: activeIndex === projects.length - 1 ? 0.3 : 1,
              }}
              disabled={activeIndex === projects.length - 1}
            >
              <FiChevronRight />
            </motion.button>
          </>
        )}

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => scrollToIndex(i)}
              className="clickable"
              whileHover={{ scale: 1.2 }}
              style={{
                width: activeIndex === i ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background:
                  activeIndex === i
                    ? "linear-gradient(90deg, #6366f1, #06b6d4)"
                    : "var(--text-muted)",
                opacity: activeIndex === i ? 1 : 0.3,
                cursor: "none",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
