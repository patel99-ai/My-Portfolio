'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="glass-card rounded-2xl p-6 relative group gradient-border card-highlight h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="flex flex-col h-full relative z-10">
        {/* Category badge */}
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full">
            {project.category}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent-cyan transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-slate-100 mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-5 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Impact */}
        <div className="mb-5 flex-grow">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Key Impact
          </h4>
          <ul className="space-y-2">
            {project.impact.map((item, i) => (
              <motion.li
                key={i}
                className="text-sm text-slate-400 flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-accent-cyan mt-1 text-xs">&#9654;</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-slate-400 bg-white/5 rounded-lg border border-white/5 hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
