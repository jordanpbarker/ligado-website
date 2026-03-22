'use client';

import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/animations';
import { PRICING } from '@/lib/constants';
import { IconCheck } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function PricingSnapshot() {
  return (
    <SectionContainer>
      <SectionHeading
        title="Simple Pricing. No Surprises."
        subtitle={PRICING.comparison}
      />

      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-lg mx-auto"
      >
        <div className="bg-navy-950 rounded-3xl p-8 lg:p-10 text-center border border-white/10 shadow-2xl">
          <div className="mb-6">
            <span className="text-5xl lg:text-6xl font-bold text-white">{PRICING.price}</span>
            <span className="text-xl text-gray-400">{PRICING.period}</span>
          </div>
          <p className="text-gray-400 mb-8">{PRICING.tagline}</p>

          <ul className="text-left space-y-3 mb-8">
            {PRICING.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <IconCheck className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Button href="/pricing" size="lg" className="w-full mb-3">
            See Full Details
          </Button>
          <p className="text-gray-500 text-xs">{PRICING.noFees}</p>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
