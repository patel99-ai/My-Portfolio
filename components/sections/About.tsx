'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';
import { GraduationCap, Award, BookOpen, BadgeCheck, Sparkles, Target } from 'lucide-react';

const paragraphs = [
  "I'm a supply chain analyst who believes that the best decisions come from the right data, presented at the right time. With an MBA in Operations and Supply Chain Management and over three years of hands-on experience, I've learned that excellence in supply chain isn't just about managing inventory or cutting costs\u2014it's about creating systems that work.",
  'My background spans procurement at Larsen & Toubro, where I supported large infrastructure projects, to supply chain analytics at RKG Technology, where I built the dashboards and models that drive smarter purchasing decisions.',
  "What sets me apart is the combination: I understand the operational realities of procurement, logistics, and inventory management, but I'm equally comfortable writing SQL queries, building Power BI dashboards, or developing forecasting models. I don't just report numbers\u2014I translate them into action.",
];

const education = [
  {
    icon: GraduationCap,
    degree: 'MBA, Operations & Supply Chain Management',
    school: 'New York Institute of Technology',
    year: 'Dec 2025',
    color: '#06b6d4',
  },
  {
    icon: BookOpen,
    degree: 'Bachelor of Architecture',
    school: 'Mumbai University',
    year: 'April 2023',
    color: '#3b82f6',
  },
];

const certifications = [
  {
    icon: Award,
    name: 'Certified Supply Chain Professional (CSCP)',
    detail: 'Advanced supply chain planning, procurement, logistics, and operations',
    color: '#8b5cf6',
  },
  {
    icon: BadgeCheck,
    name: 'Google Data Analytics Professional Certificate',
    detail: 'Data analysis, Excel, SQL, and data visualization',
    color: '#ec4899',
  },
];

const strengths = [
  { label: 'Data Analytics', value: 95, color: '#06b6d4' },
  { label: 'Supply Chain Ops', value: 92, color: '#3b82f6' },
  { label: 'Process Design', value: 88, color: '#8b5cf6' },
  { label: 'Strategic Thinking', value: 90, color: '#ec4899' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-accent-violet/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <SectionHeading
          title="About Me"
          subtitle="Driven by data, grounded in operations."
        />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          {/* Bio text - wider column */}
          <div className="lg:col-span-3 space-y-5">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="text-base text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                {text}
              </motion.p>
            ))}

            {/* Core strengths visualization */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-accent-cyan" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Core Strengths</span>
              </div>
              <div className="space-y-3">
                {strengths.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{s.value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{ backgroundColor: s.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${s.value}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 0.9 + i * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Info cards - narrower column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick stats */}
            <TiltCard index={0} tiltAmount={6}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-cyan/10">
                  <Sparkles className="h-4 w-4 text-accent-cyan" />
                </div>
                <h3 className="text-base font-display font-semibold text-slate-100">Quick Snapshot</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Industry', value: 'Supply Chain' },
                  { label: 'Location', value: 'New Jersey' },
                  { label: 'Degree', value: 'MBA, NYIT' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] group hover:border-accent-cyan/20 transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-accent-cyan transition-colors">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </TiltCard>

            {/* Education */}
            <TiltCard index={1} tiltAmount={6}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-cyan/10">
                  <GraduationCap className="h-4 w-4 text-accent-cyan" />
                </div>
                <h3 className="text-base font-display font-semibold text-slate-100">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="pl-4 border-l-2 hover:border-l-[3px] transition-all"
                    style={{ borderColor: `${edu.color}40` }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    whileHover={{ x: 4 }}
                  >
                    <p className="font-medium text-slate-200 text-sm">{edu.degree}</p>
                    <p className="text-xs text-slate-400">{edu.school}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </TiltCard>

            {/* Certifications */}
            <TiltCard index={2} tiltAmount={6}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-violet/10">
                  <Award className="h-4 w-4 text-accent-violet" />
                </div>
                <h3 className="text-base font-display font-semibold text-slate-100">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    className="pl-4 border-l-2 hover:border-l-[3px] transition-all"
                    style={{ borderColor: `${cert.color}40` }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    whileHover={{ x: 4 }}
                  >
                    <p className="font-medium text-slate-200 text-sm">{cert.name}</p>
                    <p className="text-xs text-slate-400">{cert.detail}</p>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
