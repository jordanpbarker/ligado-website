'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { PAIN_POINTS } from '@/lib/constants';
import { IconXCircle, IconCheckCircle } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PainPoints() {
  return (
    <SectionContainer>
      <SectionHeading
        title="The Difference Is Night and Day"
        subtitle="See what changes when every call, text, and chat gets answered instantly."
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Without Ligado */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-400 mb-6 flex items-center gap-2">
            <IconXCircle className="w-5 h-5 text-red-400" />
            Without Ligado
          </h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {PAIN_POINTS.without.map((point, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                <IconXCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* With Ligado */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-navy-950 rounded-2xl p-8 border border-accent/20"
        >
          <h3 className="text-lg font-semibold text-accent mb-6 flex items-center gap-2">
            <IconCheckCircle className="w-5 h-5 text-accent" />
            With Ligado
          </h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {PAIN_POINTS.with.map((point, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
