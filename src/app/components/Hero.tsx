// 'use client';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="text-center pt-20 pb-10">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
//       >
//        Geraladine Ngozi Nnamdi
//       </motion.h1>
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="mt-4 text-lg md:text-2xl font-semibold text-gray-300"
//       >
//         A Full-Stack Developer Specializing in Building AI-Powered Web Applications.
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="mt-6 max-w-2xl mx-auto text-gray-400"
//       >
//         I transform complex problems into elegant, user-centric solutions. With a passion for learning and a deep expertise in modern web technologies, I build applications that are not just functional, but intelligent.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.8 }}
//         className="mt-8 flex justify-center space-x-4"
//       >
//         <a href="#projects">
//           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-600 transition-colors">
//             View My Work
//           </motion.button>
//         </a>
//         <a href="#contact">
//           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors">
//             Get In Touch
//           </motion.button>
//         </a>
//       </motion.div>
//     </section>
//   );
// }



'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  // --- Animation Hooks for 3D Tilt Effect ---
  const x = useMotionValue(200); // Initialize x to center of a 400px container
  const y = useMotionValue(200); // Initialize y to center

  const rotateX = useTransform(y, [0, 400], [10, -10]); // Map y-motion to x-rotation
  const rotateY = useTransform(x, [0, 400], [-10, 10]); // Map x-motion to y-rotation

  function handleMouseMove(event: React.MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    // Animate back to center
    animate(x, 200, { duration: 0.3 });
    animate(y, 200, { duration: 0.3 });
  }

  return (
    <section className="pt-20 pb-16 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Column 1: Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text pb-2"
          >
            Nnamdi, Geraldine Ngozi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl font-medium text-gray-500 max-w-lg mx-auto md:mx-0"
          >
            A Full-Stack Developer building intelligent, AI-powered web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex justify-center md:justify-between"
          >
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
              >
                View My Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors">
                Get In Touch
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Column 2: Interactive Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            style={{
              perspective: '1200px',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* The 3D tilting card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl flex items-center justify-center"
            >
              {/* The Image Itself */}
              <div
                style={{ transform: "translateZ(50px)" }} // Make the image "pop out" a bit
                className="relative w-[260px] h-[260px] md:w-[350px] md:h-[350px]"
              >
                <Image
                  src="/pix2.jpg"
                  alt="A professional headshot of Your Name"
                  fill
                  quality={95}
                  priority={true}
                  className="rounded-full object-cover"
                />
                {/* The glowing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 shadow-[0_0_20px_theme(colors.cyan.400)]"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}