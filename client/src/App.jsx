import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
