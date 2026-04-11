'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { PAIN_POINTS } from '@/lib/constants';
import { IconXCircle, IconCheckCircle } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PainPoints() {
  return (
    <SectionContainer spacing="breathing">
      <SectionHeading
        title="The Difference Is Night and Day"
        subtitle="See what changes when every call, text, and chat gets answered instantly."
      />

      <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
        {/* Without Ligato — narrower, faded */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-2 rounded-xl p-6 border border-gray-100"
        >
          <h3 className="text-sm font-medium text-gray-400 mb-5 uppercase tracking-wider">
            Without Ligato
          </h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3.5"
          >
            {PAIN_POINTS.without.map((point, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                <IconXCircle className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* With Ligato — wider, prominent */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-3 bg-navy-950 rounded-xl p-8 border border-white/[0.06]"
        >
          <h3 className="text-sm font-medium text-accent mb-5 uppercase tracking-wider">
            With Ligato
          </h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3.5"
          >
            {PAIN_POINTS.with.map((point, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                <IconCheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
