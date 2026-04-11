'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Ready to Never Miss a Lead Again?
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">
            See how Ligato AI can handle your calls, texts, and chats. All trained on your specific business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book-a-demo" size="lg">
              Book a Demo
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
