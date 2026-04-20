'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socials = [
  { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
  { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-12" />

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-accent-cyan fill-accent-cyan" /> & data
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-500 hover:text-accent-cyan hover:bg-white/[0.04] transition-all duration-300"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
