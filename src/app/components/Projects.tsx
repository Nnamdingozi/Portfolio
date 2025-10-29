// import { AnimatedSection } from './animations/AnimatedSection';
// import Image from 'next/image';

// const projects = [
//   {
//     title: 'AI Video Generation Agent',
//     description: 'A full-stack system that programmatically generates educational videos from text notes. Built as a decoupled microservice with Node.js/Express, deployed on Render, and integrated into a Next.js frontend. It leverages AI APIs for voice synthesis (ElevenLabs), image generation (Hugging Face), and FFmpeg for video assembly.',
//     image: '/project-video.gif', // Make sure you create this GIF
//     stack: ['Next.js', 'Node.js', 'Supabase', 'Docker', 'AI APIs', 'FFmpeg', 'Typescript'],
//     liveLink: 'https://video-agent.onrender.com',
//     repoLink: 'https://github.com/Nnamdingozi/Video-Agent.git'
//   },
//   {
//     title: 'AI-Powered Online School Project',
//     description: 'A full-stack, AI-enhanced e-learning platform built with Next.js and Supabase. The application delivers dynamic educational content, including lesson notes, interactive quizzes, and on-demand AI-generated tutorial videos. The architecture features a decoupled AI microservice for heavy processing, a robust PostgreSQL database with custom triggers for progress tracking, and a performant, server-rendered frontend with SWR for real-time data fetching and caching. Built as a decoupled microservice with Node.js/Express, deployed on Render, and integrated into a Next.js frontend. It leverages AI APIs for voice synthesis (ElevenLabs), image generation (Hugging Face), and FFmpeg for video assembly.',
//     image: '/onlineSchool.jpg', 
//     stack: [
//       'Next.js',
//       'React',
//       'TypeScript',
//       'SWR',
//       'Tailwind CSS',
//       'Node.js',
//       'Express.js',
//       'PostgreSQL',
//       'Supabase',
//       'Docker',
//       'Vercel',
//       'Render',
//       'Gemini API',
//       'ElevenLabs',
//       'Hugging Face',
//       'FFmpeg'
//     ],
//     liveLink: 'onlineschool-9ke5.vercel.app',
//     repoLink: 'https://github.com/Nnamdingozi/onlineschool.git'
//   },

//   {
//     title: 'Full-Stack E-commerce Platform',
//     description: 'A secure and scalable e-commerce website built with a custom Node.js and Express.js backend. Features include user authentication with Passport.js, product management, a shopping cart, and secure payment processing via the Paystack API. The robust backend uses Sequelize ORM which was later upgraded to Prism ORM for PostgreSQL database on interactions on Supabase and Zod for comprehensive data validation.',
//     image: '/Screenshot.jpg', 
//     stack: [
//       'Node.js',
//       'Express.js',
//       'PostgreSQL',
//       'Sequelize',
//       'Passport.js',
//       'Paystack API',
//       'TypeScript',
//       'Zod'
//     ],
//     liveLink: 'https://myecommerce-frontend.onrender.com',
//     repoLink: 'https://github.com/Nnamdingozi/myEcommerce.git'
//   },
  
// ];

// export default function Projects() {
//   return (
//     <AnimatedSection className="scroll-mt-20" id="projects">
//       <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
//       <div className="space-y-16">
//         {projects.map((project, index) => (
//           <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
//             <div className="md:w-1/2">
//               <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
//               <p className="text-gray-500 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.stack.map((tech) => (
//                   <span key={tech} className="bg-gray-800 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-bold hover:underline">Live Demo</a>
//                 <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-bold hover:underline">GitHub</a>
//               </div>
//             </div>
//             <div className="md:w-1/2 h-1/2">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={1280}
//                 height={720}
//                 className="rounded-lg shadow-xl h-full w-full"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </AnimatedSection>
//   );
// }"

import { AnimatedSection } from './animations/AnimatedSection';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Video Generation Agent',
    description: 'A full-stack system that programmatically generates educational videos from text notes. Built as a decoupled microservice with Node.js/Express, deployed on Render, and integrated into a Next.js frontend. It leverages AI APIs for voice synthesis (ElevenLabs), image generation (Hugging Face), and FFmpeg for video assembly.',
    image: '/project-video.gif',
    stack: ['Next.js', 'Node.js', 'Supabase', 'Docker', 'AI APIs', 'FFmpeg', 'Typescript'],
    liveLink: 'https://video-agent.onrender.com',
    repoLink: 'https://github.com/Nnamdingozi/Video-Agent.git'
  },
  {
    title: 'AI-Powered Online School Project',
    description: 'A full-stack, AI-enhanced e-learning platform built with Next.js and Supabase. The application delivers dynamic educational content, including lesson notes, interactive quizzes, and on-demand AI-generated tutorial videos. The architecture features a decoupled AI microservice for heavy processing, a robust PostgreSQL database with custom triggers for progress tracking, and a performant, server-rendered frontend with SWR for real-time data fetching and caching. Built as a decoupled microservice with Node.js/Express, deployed on Render, and integrated into a Next.js frontend. It leverages AI APIs for voice synthesis (ElevenLabs), image generation (Hugging Face), and FFmpeg for video assembly.',
    image: '/onlineSchool.jpg', 
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'SWR',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Supabase',
      'Docker',
      'Vercel',
      'Render',
      'Gemini API',
      'ElevenLabs',
      'Hugging Face',
      'FFmpeg'
    ],
    liveLink: 'onlineschool-9ke5.vercel.app',
    repoLink: 'https://github.com/Nnamdingozi/onlineschool.git'
  },

  {
    title: 'Full-Stack E-commerce Platform',
    description: 'A secure and scalable e-commerce website built with a custom Node.js and Express.js backend. Features include user authentication with Passport.js, product management, a shopping cart, and secure payment processing via the Paystack API. The robust backend uses Sequelize ORM which was later upgraded to Prism ORM for PostgreSQL database on interactions on Supabase and Zod for comprehensive data validation.',
    image: '/Screenshot.jpg', 
    stack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'Passport.js',
      'Paystack API',
      'TypeScript',
      'Zod'
    ],
    liveLink: 'https://myecommerce-frontend.onrender.com',
    repoLink: 'https://github.com/Nnamdingozi/myEcommerce.git'
  },
  
];

export default function Projects() {
  return (
    <AnimatedSection className="scroll-mt-20" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          // CHANGE 1: Main project container
          // - Removed `items-center` to allow children to stretch to full height.
          // - Added conditional logic to apply `md:flex-row-reverse` to every odd-indexed project.
          <div 
            key={index} 
            className={`flex flex-col md:flex-row gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* The text content div. No changes needed here. It will now stretch vertically. */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-auto pt-4"> {/* mt-auto pushes links to the bottom */}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-bold hover:underline">Live Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-bold hover:underline">GitHub</a>
              </div>
            </div>

            {/* CHANGE 2: Image container */}
            {/* - Removed the problematic `h-1/2` class. */}
            <div className="md:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                // CHANGE 3: Added `object-cover` to the Image component
                // This makes the image fill the container without distortion.
                className="rounded-lg shadow-xl h-full w-full object-fit"
              />
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
