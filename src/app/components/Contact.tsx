// 'use-client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
// import { AnimatedSection } from './animations/AnimatedSection';

// export default function Contact() {
//   const [isCopied, setIsCopied] = useState(false);
//   const email = "ngozika1105@gmail.com"; 

//   const handleCopy = () => {
//     navigator.clipboard.writeText(email).then(() => {
//       setIsCopied(true);
//       // Reset the "Copied!" message after 2 seconds
//       setTimeout(() => setIsCopied(false), 2000);
//     });
//   };

//   return (
//     <AnimatedSection className="py-20 text-center scroll-mt-20" id="contact">
//       <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
//       <p className="text-gray-500 max-w-xl mx-auto mb-12">
//         I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out. I'm always excited to discuss how we can bring innovative ideas to life.
//       </p>

//       <motion.div
//         className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         {/* Email with Copy Button */}
//         <div className="relative group">
//           <a
//             href={`mailto:${email}`}
//             className="flex items-center gap-3 px-6 py-3 bg-cyan-300 border border-gray-700 rounded-lg text-lg  text-gray-700 font-semibold"
//           >
//             <Mail className="w-5 h-5 text-cyan-700" />
//             <span>{email}</span>
//           </a>
//           <button
//             onClick={handleCopy}
//             className="absolute -top-3 -right-3 p-2 bg-gray-700 rounded-full text-white hover:bg-cyan-500 transition-all opacity-0 group-hover:opacity-100"
//             aria-label="Copy email"
//           >
//             {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
//           </button>
//         </div>

//         {/* Social Links */}
//         <div className="flex items-center gap-4">
//           <motion.a
//             href="https://www.linkedin.com/in/geraldine-nnamdi-b58a25220" 
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn Profile"
//             whileHover={{ scale: 1.1, rotate: -5 }}
//             className="p-3 bg-cyan-300  border border-gray-700 rounded-full  text-gray-700 hover:text-white hover:bg-blue-600 transition-colors"
           
//           >
//             <Linkedin className="w-6 h-6" />
//           </motion.a>
//           <motion.a
//             href="https://github.com/Nnamdingozi" 
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub Profile"
//             whileHover={{ scale: 1.1, rotate: 5 }}
//             className="p-3 bg-cyan-300 border border-gray-700 rounded-full text-gray-700 hover:text-white hover:bg-gray-600 transition-colors"
           
//           >
//             <Github className="w-6 h-6" />
//           </motion.a>
//         </div>
//       </motion.div>
//     </AnimatedSection>
//   );
// }


'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';

// ✅ 1. Define the animation variants for the container and its items.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2, // Each item will animate 0.2s after the previous one.
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: -30, opacity: 0 }, // Start 30px to the left and invisible
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "your.email@example.com"; // ✅ Replace with your email

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedSection className="py-20 text-center scroll-mt-20" id="contact">
      <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something Great</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        I&apos;m currently open to new opportunities. Whether you have a question or just want to connect, my inbox is always open.
      </p>

      {/* ✅ 2. Apply the container variants to the wrapping div */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Item 1: Email */}
        <motion.div variants={itemVariants} className="relative group">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 pl-4 pr-6 py-3 bg-cyan-400 border-2 border-gray-700 rounded-full text-lg text-gray-900 hover:bg-gray-800 hover:text-cyan-400 font-semibold"
          >
            <Mail className="w-6 h-6 text-gray-800 hover:text-cyan-400" />
            <span>{email}</span>
          </a>
          <button
            onClick={handleCopy}
            className="absolute -top-2 -right-2 p-2 bg-cyan-400 rounded-full text-white hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Copy email"
          >
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* Item 2: LinkedIn */}
        <motion.div variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/your-profile"
            onClick={(e) => handleExternalLink(e, 'https://www.linkedin.com/in/your-profile')} // ✅ Replace URL
            aria-label="LinkedIn Profile"
            className="p-3 bg-cyan-400 border-2 border-gray-700 rounded-full inline-block text-gray-900 hover:text-cyan-400 hover:border-blue-500 hover:bg-gray-800 transition-colors"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </motion.div>

        {/* Item 3: GitHub */}
        <motion.div variants={itemVariants}>
          <a
            href="https://github.com/your-username"
            onClick={(e) => handleExternalLink(e, 'https://github.com/your-username')} // ✅ Replace URL
            aria-label="GitHub Profile"
            className="p-3  bg-cyan-400 border-2 border-gray-700 rounded-full inline-block text-gray-900 hover:text-cyan-400 hover:border-gray-500 hover:bg-gray-800 transition-colors"
          >
            <Github className="w-7 h-7" />
          </a>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}