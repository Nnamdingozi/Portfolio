import { Briefcase, User, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-400/20 backdrop-blur-sm">
      <nav className="container mx-auto max-w-4xl px-4 py-4">
        <ul className="flex justify-end space-x-6 md:space-x-8 text-sm font-medium">
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors"><Briefcase/> Projects</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition-colors"> <User/> About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition-colors"><Mail/> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}