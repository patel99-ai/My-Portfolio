'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CircularProgressProps {
  value: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  delay?: number;
}

export function CircularProgress({
  value,
  label,
  size = 90,
  strokeWidth = 4,
  color = '#06b6d4',
  delay = 0,
}: CircularProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - value / 100);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: dashOffset } : {}}
            transition={{
              duration: 1.5,
              delay: delay + 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        </svg>
        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-sm font-display font-bold text-slate-200 group-hover:text-white transition-colors"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.8 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
      <span className="text-[11px] text-slate-500 text-center leading-tight max-w-[80px] group-hover:text-slate-400 transition-colors">
        {label}
      </span>
    </motion.div>
  );
}
