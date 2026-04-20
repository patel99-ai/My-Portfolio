'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Overline accent */}
      <motion.div
        className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-px w-8 bg-gradient-to-r from-transparent to-accent-cyan"
          initial={{ width: 0 }}
          animate={isInView ? { width: 32 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <span className="text-xs font-semibold text-accent-cyan uppercase tracking-[0.2em]">
          {title}
        </span>
        <motion.div
          className="h-px w-8 bg-gradient-to-l from-transparent to-accent-cyan"
          initial={{ width: 0 }}
          animate={isInView ? { width: 32 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      {/* Main title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-display font-bold mb-4"
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        className={`h-0.5 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 64, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />

      {subtitle && (
        <motion.p
          className="text-base sm:text-lg text-slate-400 max-w-2xl mt-6 leading-relaxed"
          style={align === 'center' ? { margin: '1.5rem auto 0' } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
