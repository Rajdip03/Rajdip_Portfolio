import SectionWrapper from "../components/SectionWrapper";
import TimelineItem from "../components/TimelineItem";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        My professional journey and the milestones along the way.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Vertical line */}
        <div className="timeline-line" />

        {/* Timeline items */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Responsive override for mobile */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 24px !important;
          }
          .timeline-dot {
            left: 24px !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
