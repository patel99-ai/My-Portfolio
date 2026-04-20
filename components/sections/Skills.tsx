'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RadarChart } from '@/components/ui/RadarChart';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { TiltCard } from '@/components/ui/TiltCard';
import { BarChart3, Workflow, Zap, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Turn complex datasets into clear insights and actionable recommendations',
    color: '#06b6d4',
    metric: '95%',
    metricLabel: 'Analytical Accuracy',
  },
  {
    icon: Workflow,
    title: 'End-to-End View',
    description: 'Understand the full supply chain from sourcing to delivery',
    color: '#3b82f6',
    metric: '3+',
    metricLabel: 'Years Experience',
  },
  {
    icon: Zap,
    title: 'Process Optimizer',
    description: 'Identify bottlenecks and implement solutions that improve efficiency',
    color: '#8b5cf6',
    metric: '100%',
    metricLabel: 'Commitment',
  },
];

// Prepare radar chart data from skill categories
const radarData1 = skillsData[0].skills.map((s) => ({ label: s.name.split(' ')[0], value: s.proficiency }));
const radarData2 = skillsData[1].skills.map((s) => ({ label: s.name.split(' ')[0], value: s.proficiency }));

export function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-accent-violet/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-accent-cyan/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A powerful blend of supply chain mastery, analytical tools, and business acumen."
        />

        {/* Radar Charts Row */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TiltCard className="flex items-center justify-center" index={0}>
            <div className="flex flex-col items-center py-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🔗</span>
                <h3 className="text-lg font-display font-semibold text-slate-100">Supply Chain Expertise</h3>
              </div>
              <RadarChart data={radarData1} color="#06b6d4" label="" size={260} />
            </div>
          </TiltCard>

          <TiltCard className="flex items-center justify-center" index={1}>
            <div className="flex flex-col items-center py-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">📊</span>
                <h3 className="text-lg font-display font-semibold text-slate-100">Analytics & Tools</h3>
              </div>
              <RadarChart data={radarData2} color="#8b5cf6" label="" size={260} />
            </div>
          </TiltCard>
        </motion.div>

        {/* Circular Progress Grid for Other Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.slice(2).map((category, catIndex) => (
            <TiltCard key={category.category} index={catIndex + 2}>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-lg font-display font-semibold text-slate-100">{category.category}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <CircularProgress
                    key={skill.name}
                    value={skill.proficiency}
                    label={skill.name}
                    color={catIndex === 0 ? '#3b82f6' : '#ec4899'}
                    delay={catIndex * 0.1 + skillIndex * 0.08}
                    size={80}
                    strokeWidth={3}
                  />
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Highlights with animated metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <TiltCard key={item.title} index={i} glareColor={`${item.color}25`}>
              <div className="text-center py-2">
                <motion.div
                  className="inline-flex p-4 rounded-2xl mb-4"
                  style={{ backgroundColor: `${item.color}12` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <item.icon className="h-7 w-7" style={{ color: item.color }} />
                </motion.div>

                <h4 className="font-display font-semibold text-slate-100 text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

                {/* Animated metric */}
                <div className="pt-3 border-t border-white/5">
                  <motion.span
                    className="text-2xl font-display font-bold"
                    style={{ color: item.color }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                  >
                    {item.metric}
                  </motion.span>
                  <p className="text-xs text-slate-500 mt-1">{item.metricLabel}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
