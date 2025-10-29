// 'use client'

// import { Briefcase, User, Mail, HammerIcon } from 'lucide-react';
// import { motion } from 'framer-motion';


// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-gray-400/20 backdrop-blur-sm">
//       <nav className="container mx-auto max-w-full px-4 py-4 flex justify-between">
//       <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text pb-2"
//           >
//            Full Stack Engineer
//           </motion.p>
//         <ul className="flex justify-around space-x-6 md:space-x-8 text-sm font-medium my-auto w-[60%]">
//           <li><a href="#projects" className="hover:text-cyan-400 transition-colors flex gap-2 "><Briefcase  className='h-4 w-4'/> Projects</a></li>
//           <li><a href="#about" className="hover:text-cyan-400 transition-colors flex gap-2 "> <User className='h-4 w-4'/> About</a></li>
//           <li><a href="#skills" className="hover:text-cyan-400 transition-colors flex gap-2 "><HammerIcon className='h-4 w-4'/> Skills</a></li>
//           <li><a href="#contact" className="hover:text-cyan-400 transition-colors flex gap-2 "><Mail className='h-4 w-4'/> Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


'use client';

import { Briefcase, User, Mail, HammerIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/60 backdrop-blur-sm text-white">
      <nav className="w-full px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text"
        >
          Full Stack Engineer
        </motion.p>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-cyan-400 hover:text-emerald-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <User className="h-4 w-4" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <HammerIcon className="h-4 w-4" /> Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 w-full"
        >
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
              <User className="h-4 w-4" /> About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
              <HammerIcon className="h-4 w-4" /> Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </li>
        </motion.ul>
      )}
    </header>
  );
}
