'use client';

import { motion } from 'framer-motion';

const icons = [
  { emoji: '📊', x: '10%', y: '20%', delay: 0, duration: 7 },
  { emoji: '📈', x: '85%', y: '15%', delay: 1, duration: 8 },
  { emoji: '🔗', x: '75%', y: '75%', delay: 2, duration: 6 },
  { emoji: '⚙️', x: '15%', y: '70%', delay: 0.5, duration: 9 },
  { emoji: '💡', x: '50%', y: '10%', delay: 1.5, duration: 7.5 },
  { emoji: '🎯', x: '90%', y: '50%', delay: 0.8, duration: 8.5 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-[0.06] select-none"
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: icon.delay,
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </div>
  );
}
