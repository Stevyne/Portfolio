import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Analytics />
    </main>
  );
}
