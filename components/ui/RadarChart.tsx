'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RadarPoint {
  label: string;
  value: number;
}

interface RadarChartProps {
  data: RadarPoint[];
  size?: number;
  color?: string;
  label?: string;
}

export function RadarChart({ data, size = 280, color = '#06b6d4', label }: RadarChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 40;
  const levels = 5;
  const angleStep = (Math.PI * 2) / data.length;

  const getPoint = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const dist = (value / 100) * r;
    return {
      x: cx + dist * Math.cos(angle),
      y: cy + dist * Math.sin(angle),
    };
  };

  const dataPoints = data.map((d, i) => getPoint(i, d.value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      {label && (
        <motion.p
          className="text-sm font-display font-semibold text-slate-300 mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {label}
        </motion.p>
      )}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Grid levels */}
        {Array.from({ length: levels }, (_, level) => {
          const levelR = (r / levels) * (level + 1);
          const points = data.map((_, i) => {
            const angle = angleStep * i - Math.PI / 2;
            return `${cx + levelR * Math.cos(angle)},${cy + levelR * Math.sin(angle)}`;
          }).join(' ');

          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={level === levels - 1 ? 1 : 0.5}
            />
          );
        })}

        {/* Axis lines */}
        {data.map((_, i) => {
          const end = getPoint(i, 100);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={end.x}
              y2={end.y}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth={0.5}
            />
          );
        })}

        {/* Data area */}
        <motion.path
          d={dataPath}
          fill={`${color}15`}
          stroke={color}
          strokeWidth={2}
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0, originX: `${cx}px`, originY: `${cy}px` }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : {}
          }
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Data points */}
        {dataPoints.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={4}
            fill={color}
            stroke="#0a0a0f"
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.4, type: 'spring' }}
          />
        ))}

        {/* Labels */}
        {data.map((d, i) => {
          const angle = angleStep * i - Math.PI / 2;
          const labelR = r + 24;
          const lx = cx + labelR * Math.cos(angle);
          const ly = cy + labelR * Math.sin(angle);
          const textAnchor =
            Math.abs(Math.cos(angle)) < 0.1
              ? 'middle'
              : Math.cos(angle) > 0
              ? 'start'
              : 'end';

          return (
            <motion.text
              key={i}
              x={lx}
              y={ly}
              textAnchor={textAnchor}
              dominantBaseline="central"
              className="text-[10px] font-medium fill-slate-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.05 }}
            >
              {d.label}
            </motion.text>
          );
        })}
      </svg>
    </div>
  );
}
