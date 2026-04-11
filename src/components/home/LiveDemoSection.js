'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import LiveDemo from '@/components/demo/LiveDemo';

export default function LiveDemoSection() {
  return (
    <section id="live-demo" className="relative bg-navy-950 overflow-hidden">
      {/* Gradient orb */}
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
            Try It Live
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Talk to Alex, our AI assistant for a demo plumbing company. Ask about services, request an estimate, or book an appointment.
          </p>
        </motion.div>

        <LiveDemo />
      </div>
    </section>
  );
}
