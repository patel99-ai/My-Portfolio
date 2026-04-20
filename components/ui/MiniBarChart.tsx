'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MiniBarChartProps {
  data: number[];
  color?: string;
  height?: number;
  delay?: number;
}

export function MiniBarChart({
  data,
  color = '#06b6d4',
  height = 40,
  delay = 0,
}: MiniBarChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const max = Math.max(...data);
  const barWidth = 100 / data.length;

  return (
    <div ref={ref} className="flex items-end gap-[2px]" style={{ height }}>
      {data.map((value, i) => {
        const barHeight = (value / max) * 100;
        return (
          <motion.div
            key={i}
            className="rounded-t-sm flex-1"
            style={{ backgroundColor: color }}
            initial={{ height: 0, opacity: 0 }}
            animate={
              isInView
                ? { height: `${barHeight}%`, opacity: 0.7 }
                : {}
            }
            whileHover={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        );
      })}
    </div>
  );
}
