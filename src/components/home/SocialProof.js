'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import SectionContainer from '@/components/ui/SectionContainer';

export default function SocialProof() {
  return (
    <SectionContainer>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
          Trusted by Home Service Pros
        </p>

        {/* Placeholder logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-16 opacity-30">
          {['Ace Plumbing', 'Peak HVAC', 'Bolt Electric', 'Green Valley', 'Summit Roofing'].map((name) => (
            <div key={name} className="text-xl font-bold text-gray-400">
              {name}
            </div>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl sm:text-3xl font-medium text-navy-950 leading-relaxed">
            &ldquo;I used to lose 3-4 jobs a week to missed calls. Now my AI picks up every time. Last month it booked 12 appointments while I was on other jobs.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold text-navy-950">Mike Johnson</p>
            <p className="text-gray-500 text-sm">Owner, Johnson Plumbing &amp; Drain</p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
