'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';
import { Briefcase, MapPin, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

export function Experience() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-accent-violet/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-accent-cyan/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={timelineRef}>
        <SectionHeading
          title="Experience"
          subtitle="A proven track record of driving operational improvements and delivering measurable results."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              className="h-full w-full"
              style={{
                background: 'linear-gradient(to bottom, #06b6d4, #8b5cf6, transparent)',
                transformOrigin: 'top',
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  >
                    {/* Pulse ring */}
                    {index === 0 && (
                      <motion.div
                        className="absolute -inset-2 rounded-full bg-accent-cyan/20"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        index === 0
                          ? 'bg-accent-cyan border-accent-cyan shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                          : 'bg-dark-900 border-accent-violet/50 hover:border-accent-violet transition-colors'
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <TiltCard index={index} tiltAmount={6}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/15 to-accent-blue/10 shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Briefcase className="h-5 w-5 text-accent-cyan" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-slate-100">
                          {exp.role}
                        </h3>
                        <p className="text-accent-cyan font-medium text-sm">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.03]">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.03]">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements with staggered animation */}
                    <ul className="space-y-3 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-400 group/item"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-accent-cyan mt-1 shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                          <span className="leading-relaxed group-hover/item:text-slate-300 transition-colors">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Key metrics as glowing pills */}
                    {exp.keyMetrics && (
                      <div className="pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="h-3.5 w-3.5 text-accent-violet" />
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Impact</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.keyMetrics.map((metric, i) => (
                            <motion.span
                              key={i}
                              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-accent-cyan/10 to-accent-violet/10 text-slate-300 border border-white/5 hover:border-accent-cyan/20 transition-colors"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + i * 0.05, type: 'spring' }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {metric}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </TiltCard>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
