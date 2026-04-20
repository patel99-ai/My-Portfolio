'use client';

import { motion } from 'framer-motion';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FloatingIcons } from '@/components/ui/FloatingIcons';
import { PERSONAL_INFO } from '@/lib/constants';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience', icon: '📅' },
  { value: 3, suffix: '', label: 'Projects Delivered', icon: '🚀' },
  { value: 2, suffix: '', label: 'Certifications', icon: '🏆' },
];

const roles = [
  'Supply Chain Analyst',
  'Data-Driven Problem Solver',
  'Operations Strategist',
  'Dashboard Developer',
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Interactive particle network */}
      <ParticleNetwork />

      {/* Floating supply chain icons */}
      <FloatingIcons />

      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-cyan/[0.04] rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-violet/[0.05] rounded-full blur-[100px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-accent-cyan/20 text-sm font-medium backdrop-blur-xl bg-white/[0.03]"
            whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.4)' }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
            </span>
            <span className="text-slate-300">Available for Opportunities</span>
          </motion.span>
        </motion.div>

        {/* Name with reveal animation */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-display font-bold leading-[0.95] tracking-tight">
            <motion.span
              className="inline-block text-slate-100"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-gradient"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
            </motion.span>
          </h1>
        </motion.div>

        {/* Typewriter roles */}
        <motion.div variants={itemVariants} className="mb-6 h-10">
          <span className="text-xl sm:text-2xl text-slate-500 font-light">I&apos;m a </span>
          <TypewriterText words={roles} className="text-xl sm:text-2xl text-accent-cyan font-medium" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Transforming supply chain complexity into{' '}
          <span className="text-slate-200 font-normal">competitive advantage</span>{' '}
          through data-driven insights, advanced analytics, and operational excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <MagneticButton onClick={() => scrollToSection('contact')}>
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </motion.button>
          </MagneticButton>

          <MagneticButton onClick={() => scrollToSection('projects')}>
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-slate-300 rounded-2xl border border-white/10 hover:border-accent-cyan/30 backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
          </MagneticButton>
        </motion.div>

        {/* Stats with visual flair */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative group text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4">
                  <div className="text-lg mb-2">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-slate-100 mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-accent-cyan transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
