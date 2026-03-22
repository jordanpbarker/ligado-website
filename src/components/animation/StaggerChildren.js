'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

export default function StaggerChildren({ children, className = '' }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
