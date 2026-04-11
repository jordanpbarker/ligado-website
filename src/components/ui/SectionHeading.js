'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function SectionHeading({ badge, title, subtitle, dark = false, center = true }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`${center ? 'text-center' : ''} mb-12 lg:mb-16`}
    >
      {badge && (
        <span className={`inline-block text-xs font-medium tracking-wider uppercase mb-4 ${dark ? 'text-accent' : 'text-navy-700'}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-navy-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base max-w-2xl ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
