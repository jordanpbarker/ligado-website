'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { IconCheck } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

export default function SellingPoints({ points, dark = true }) {
  return (
    <SectionContainer dark={dark}>
      <SectionHeading
        badge="Why It Matters"
        title="Real Results, Not Empty Promises"
        dark={dark}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {points.map((point) => (
          <motion.div
            key={point.title}
            variants={fadeInUp}
            className={`rounded-xl p-6 ${dark ? 'surface-card hover:border-white/10' : 'bg-gray-50 border border-gray-100 hover:border-gray-200'} transition-colors duration-200`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 ${dark ? 'bg-white/[0.07]' : 'bg-navy-950/5'}`}>
              <IconCheck className={`w-5 h-5 ${dark ? 'text-gray-300' : 'text-navy-700'}`} />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${dark ? 'text-white' : 'text-navy-950'}`}>{point.title}</h3>
            <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{point.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
