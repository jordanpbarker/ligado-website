'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import LiveDemo from '@/components/demo/LiveDemo';

export default function LiveDemoSection() {
  return (
    <section id="live-demo" className="relative bg-navy-950 overflow-hidden">
      {/* Subtle depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.03) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.02) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-medium tracking-wider uppercase text-accent mb-4">
            Try It Live
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Meet Alex
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
            Your AI receptionist. Talk to Alex right now and see how it handles calls, answers questions, and books appointments for a real plumbing company.
          </p>
        </motion.div>

        <LiveDemo />
      </div>
    </section>
  );
}
