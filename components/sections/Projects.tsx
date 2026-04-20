'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';
import { MiniBarChart } from '@/components/ui/MiniBarChart';
import { ExternalLink, ArrowRight, Layers, TrendingUp } from 'lucide-react';

const projectChartData: Record<string, number[]> = {
  'supply-chain-dashboard': [30, 55, 40, 70, 85, 95, 88, 92],
  'inventory-optimization': [45, 35, 60, 50, 75, 65, 80, 90],
  'supplier-performance': [20, 40, 35, 55, 70, 60, 85, 78],
};

const projectColors: Record<string, string> = {
  'supply-chain-dashboard': '#06b6d4',
  'inventory-optimization': '#8b5cf6',
  'supplier-performance': '#3b82f6',
};

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-60 w-[600px] h-[600px] bg-accent-blue/[0.04] rounded-full blur-[130px]" />
        <div className="absolute bottom-40 -left-20 w-[400px] h-[400px] bg-accent-cyan/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Analytics and automation projects that transformed supply chain operations."
        />

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, i) => (
            <TiltCard key={project.id} index={i} tiltAmount={8} glareColor={`${projectColors[project.id]}20`}>
              <div className="flex flex-col h-full">
                {/* Mini chart visualization */}
                <div className="mb-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <TrendingUp className="h-3 w-3" style={{ color: projectColors[project.id] }} />
                      Performance Trend
                    </span>
                    <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md"
                      style={{ color: projectColors[project.id], backgroundColor: `${projectColors[project.id]}15` }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <MiniBarChart
                    data={projectChartData[project.id] || [50, 60, 70, 80]}
                    color={projectColors[project.id]}
                    height={50}
                    delay={i * 0.2}
                  />
                </div>

                {/* Title & description */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold text-slate-100 group-hover:text-accent-cyan transition-colors leading-tight pr-4">
                    {project.title}
                  </h3>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all shrink-0"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>

                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact metrics */}
                <div className="mb-5 flex-grow">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers className="h-3 w-3" />
                    Key Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {project.impact.map((item, j) => (
                      <motion.li
                        key={j}
                        className="text-sm text-slate-400 flex items-start gap-2.5 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                      >
                        <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0 group-hover/item:translate-x-0.5 transition-transform"
                          style={{ color: projectColors[project.id] }}
                        />
                        <span className="group-hover/item:text-slate-300 transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, j) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-white/[0.04] rounded-lg border border-white/[0.04] hover:border-white/10 hover:text-slate-300 transition-all"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + j * 0.05, type: 'spring' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-xl font-display font-semibold text-slate-300">More Projects</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <TiltCard key={project.id} index={i + featuredProjects.length} tiltAmount={8}>
                  <div className="flex flex-col h-full">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-blue bg-accent-blue/10 rounded-md w-fit mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-medium text-slate-500 bg-white/[0.03] rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
