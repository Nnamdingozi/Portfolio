// 'use client';
// import { motion } from 'framer-motion';

// export const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
//   return (
//     <motion.section
//       className={className}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.2 }} // Animate when 20% of it is in view
//     >
//       {children}
//     </motion.section>
//   );
// };


'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

// ✅ 1. Define props to accept all standard HTML attributes for a <section>
type AnimatedSectionProps = HTMLMotionProps<'section'> & {
  children: React.ReactNode;
  className?: string;
};

// ✅ 2. Use `forwardRef` to correctly handle refs if needed (good practice).
//    We pass the `...props` to the underlying `motion.section`.
export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={className}
        {...props} // ✅ This spreads `id`, `style`, etc., onto the component.
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection"; // Recommended for dev tools