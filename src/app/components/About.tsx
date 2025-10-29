import { AnimatedSection } from './animations/AnimatedSection';
import Image from 'next/image';

export default function About() {
  return (
    <AnimatedSection className="scroll-mt-20" id="about">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <Image
            src="/pix2.jpg" 
            alt="Geraldine Ngozi Nnamdi"
            width={300}
            height={300}
            className="rounded-full shadow-lg mx-auto"
          />
        </div>
        <div className="md:w-2/3 text-lg text-gray-500 space-y-4">
          <p>
            I am a results-driven Full-Stack Developer with a deep passion for building intelligent and scalable web applications. My journey into technology was fueled by a curiosity for how complex systems work, and it has evolved into a career dedicated to solving real-world problems through code.
          </p>
          <p>
            Recently, I dove headfirst into the world of AI, successfully building an end-to-end video generation agent that transforms text into dynamic educational content. This project taught me not only about AI integration but also about robust system design, microservice architecture, and persistent debugging.
          </p>
          <p>
            When I&apos;m not coding, I enjoy teaching and reading. I believe in continuous learning and am always excited to take on the next challenge.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}