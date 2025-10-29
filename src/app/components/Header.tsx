'use client'

import { Briefcase, User, Mail, HammerIcon } from 'lucide-react';
import { motion } from 'framer-motion';


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-400/20 backdrop-blur-sm">
      <nav className="container mx-auto max-w-full px-4 py-4 flex justify-between">
      <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text pb-2"
          >
           Full Stack Engineer
          </motion.p>
        <ul className="flex justify-around space-x-6 md:space-x-8 text-sm font-medium my-auto w-[60%]">
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors flex gap-2 "><Briefcase  className='h-4 w-4'/> Projects</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition-colors flex gap-2 "> <User className='h-4 w-4'/> About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition-colors flex gap-2 "><HammerIcon className='h-4 w-4'/> Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition-colors flex gap-2 "><Mail className='h-4 w-4'/> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}