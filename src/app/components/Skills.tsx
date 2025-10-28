'use client';

import { motion, Variants } from 'framer-motion';
import { Server, Brush, Database, Code, CircleDollarSign, Shield, Workflow, KeyRound, Type } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';

// 1. DATA: Define your skills data in a clean, typed array.
// This is the single source of truth.
type Skill = {
  name: string;
  icon: JSX.Element;
  category: 'Frontend' | 'Backend' | 'Database & ORMs' | 'Services & Payments';
};

const skills: Skill[] = [
  // Frontend
  { name: 'Next.js', icon: <Code />, category: 'Frontend' },
  { name: 'React', icon: <Brush />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Type />, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: <Server />, category: 'Backend' },
  { name: 'Express.js', icon: <Workflow />, category: 'Backend' },
  { name: 'Zod', icon: <Shield />, category: 'Backend' },
  { name: 'Passport.js', icon: <KeyRound />, category: 'Backend' },
  
  // Database & ORMs
  { name: 'PostgreSQL', icon: <Database />, category: 'Database & ORMs' },
  { name: 'Supabase', icon: <Database className="text-green-400" />, category: 'Database & ORMs' },
  { name: 'Prisma', icon: <Database className="text-gray-400" />, category: 'Database & ORMs' },
  { name: 'Sequelize', icon: <Database className="text-blue-400" />, category: 'Database & ORMs' },
  
  // Services & Payments
  { name: 'Paystack', icon: <CircleDollarSign />, category: 'Services & Payments' },
];

// 2. ANIMATION VARIANTS: Define the animation objects.
// This structure is guaranteed to be compatible.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// 3. SKILL CARD COMPONENT: Create a small, pure component for each skill.
// This is a best practice that helps with readability and isolation.
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-black/20 rounded-lg group transition-colors duration-300 hover:bg-cyan-400 hover:-translate-y-1"
      variants={itemVariants}
    >
      <div className="mb-3 text-gray-900 group-hover:text-gray-900 transition-colors">
        {skill.icon}
      </div>
      <span className="font-semibold text-center text-sm text-gray-900 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
};


// 4. MAIN COMPONENT: This now orchestrates the rendering.
export default function Skills() {
  const categories: Skill['category'][] = ['Frontend', 'Backend', 'Database & ORMs', 'Services & Payments'];

  return (
    <AnimatedSection className="scroll-mt-20" id="skills">
      <h2 className="text-3xl font-bold text-center mb-16">My Tech Stack</h2>

      <div className="space-y-14">
        {categories.map((category) => {
          // Filter skills for the current category inside the map.
          const skillsInCategory = skills.filter((s) => s.category === category);
          
          // Don't render a section if there are no skills for it.
          if (skillsInCategory.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{category}</h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // Animate when it enters the viewport
                viewport={{ once: true, amount: 0.2 }}
              >
                {skillsInCategory.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}