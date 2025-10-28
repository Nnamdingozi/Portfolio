
'use client'
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}