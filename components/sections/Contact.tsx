'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PERSONAL_INFO } from '@/lib/constants';
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpRight, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: '#06b6d4',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone}`,
    color: '#3b82f6',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    href: PERSONAL_INFO.linkedin,
    color: '#8b5cf6',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View Projects',
    href: PERSONAL_INFO.github,
    color: '#ec4899',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-accent-cyan/[0.04] rounded-full blur-[130px]" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-accent-violet/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Connection lines SVG background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="connection-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#06b6d4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#connection-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <SectionHeading
          title="Let's Connect"
          subtitle="Open to supply chain analyst and operations roles where I can leverage data analytics to drive measurable impact."
        />

        {/* Big CTA card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-accent-cyan/30 via-accent-violet/30 to-accent-cyan/30 animate-gradient-x" style={{ backgroundSize: '200% 100%' }}>
            <div className="w-full h-full rounded-3xl bg-dark-900" />
          </div>

          <div className="relative z-10 p-8 sm:p-12">
            {/* Gradient mesh inside */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.04] via-transparent to-accent-violet/[0.04] pointer-events-none rounded-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 mb-6"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Send className="h-8 w-8 text-accent-cyan" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 mb-3">
                Ready to Work Together?
              </h3>
              <p className="text-slate-400 max-w-lg mx-auto mb-8">
                I&apos;m always excited to discuss how data analytics and operational expertise can solve
                real supply chain challenges.
              </p>

              <MagneticButton onClick={() => (window.location.href = `mailto:${PERSONAL_INFO.email}`)}>
                <motion.button
                  className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  <Mail className="relative z-10 h-5 w-5" />
                  <span className="relative z-10">Send Me an Email</span>
                  <ArrowUpRight className="relative z-10 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                </motion.button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Card background */}
              <div className="absolute inset-0 glass-card rounded-2xl" />

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${method.color}08, transparent 70%)`,
                }}
              />

              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${method.color}30, transparent)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />

              <div className="relative z-10 flex items-center gap-4 p-5">
                <motion.div
                  className="p-3 rounded-xl transition-all duration-300"
                  style={{ backgroundColor: `${method.color}12`, color: method.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <method.icon className="h-5 w-5" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{method.label}</p>
                  <p className="text-sm text-slate-200 font-medium truncate group-hover:text-white transition-colors">
                    {method.value}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MapPin className="h-4 w-4 text-accent-cyan" />
            </motion.div>
            <span className="text-sm text-slate-400">
              Based in <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
            </span>
            <span className="text-slate-600 mx-1">|</span>
            <span className="text-xs text-slate-500">Open to remote & relocation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
