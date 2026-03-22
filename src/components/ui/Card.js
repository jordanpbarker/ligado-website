'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Card({ children, glass = false, hover = true, className = '' }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
        glass
          ? 'glass-card hover:border-accent/20'
          : 'bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-lg'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
