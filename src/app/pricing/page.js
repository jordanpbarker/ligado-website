'use client';

import { motion } from 'framer-motion';
import { scaleIn, fadeInUp } from '@/lib/animations';
import { PRICING, FAQ_ITEMS } from '@/lib/constants';
import { IconCheck } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import FinalCTA from '@/components/home/FinalCTA';

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Simple Pricing. No Surprises.
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
              {PRICING.comparison}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing card */}
      <SectionContainer>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-lg mx-auto -mt-8"
        >
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 relative overflow-hidden">
            {/* Accent top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

            <div className="text-center mb-8">
              <span className="text-6xl lg:text-7xl font-bold text-navy-950">{PRICING.price}</span>
              <span className="text-xl text-gray-400">{PRICING.period}</span>
              <p className="text-gray-500 mt-2">{PRICING.tagline}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {PRICING.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button href="/book-a-demo" size="lg" className="w-full">
              Book a Demo
            </Button>
            <p className="text-center text-gray-400 text-sm mt-4">{PRICING.noFees}</p>
          </div>
        </motion.div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers."
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion items={FAQ_ITEMS} />
        </motion.div>
      </SectionContainer>

      <FinalCTA />
    </>
  );
}
