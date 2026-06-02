import SectionWrapper from "../components/SectionWrapper";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">
        Technologies and principles I work with to build robust, scalable applications.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1000,
          width: "100%",
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
