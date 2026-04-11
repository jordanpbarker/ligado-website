'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Card({ children, dark = false, hover = true, className = '' }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`rounded-xl p-6 lg:p-8 transition-colors duration-200 ${
        dark
          ? 'surface-card hover:border-white/10'
          : 'bg-gray-50 border border-gray-100 hover:border-gray-200'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
