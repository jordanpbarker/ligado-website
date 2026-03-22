'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '@/lib/animations';

export default function FadeIn({ children, direction = 'up', delay = 0, className = '' }) {
  const variants = direction === 'up' ? fadeInUp : fadeIn;

  return (
    <motion.div
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
