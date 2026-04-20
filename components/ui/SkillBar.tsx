'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  name: string;
  proficiency: number;
  delay?: number;
}

export function SkillBar({ name, proficiency, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <motion.span
          className="text-sm font-medium text-slate-300 group-hover:text-accent-cyan transition-colors"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay }}
        >
          {name}
        </motion.span>
        <motion.span
          className="text-xs font-mono text-slate-500 group-hover:text-accent-cyan transition-colors"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {proficiency}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : {}}
          transition={{
            duration: 1.2,
            delay: delay + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}
