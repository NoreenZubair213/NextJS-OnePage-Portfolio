import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Education from "@/components/Education";  


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education /> 
      <Experience />
      <Projects /> 
      <Contact />
    </main>
  );
}
