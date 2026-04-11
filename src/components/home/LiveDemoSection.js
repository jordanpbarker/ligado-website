'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import LiveDemo from '@/components/demo/LiveDemo';

export default function LiveDemoSection() {
  return (
    <section id="live-demo" className="relative bg-navy-950 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-medium tracking-wider uppercase text-accent mb-4">
            Try It Live
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            See It In Action
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">
            Talk to Alex, our AI assistant for a demo plumbing company. Ask about services, request an estimate, or book an appointment.
          </p>
        </motion.div>

        <LiveDemo />
      </div>
    </section>
  );
}
