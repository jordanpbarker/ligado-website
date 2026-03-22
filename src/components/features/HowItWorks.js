'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

export default function HowItWorks({ steps }) {
  return (
    <SectionContainer>
      <SectionHeading
        badge="How It Works"
        title="Up and Running in No Time"
        subtitle="From setup to your first captured lead — here's the flow."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl mx-auto space-y-0"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            variants={fadeInUp}
            className="relative flex gap-6 pb-12 last:pb-0"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200" />
            )}

            {/* Step number */}
            <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-navy-950 font-bold text-sm relative z-10">
              {step.step}
            </div>

            {/* Content */}
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-navy-950 mb-1">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
