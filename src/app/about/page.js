'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ABOUT_CONTENT } from '@/lib/constants';
import SectionContainer from '@/components/ui/SectionContainer';
import Button from '@/components/ui/Button';
import FinalCTA from '@/components/home/FinalCTA';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20 relative overflow-hidden">
        <div className="gradient-orb w-[400px] h-[400px] bg-accent/10 top-20 right-0 absolute" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
              About Ligato
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {ABOUT_CONTENT.headline}
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              {ABOUT_CONTENT.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <SectionContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {ABOUT_CONTENT.story.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeInUp} className="mt-12 p-8 bg-navy-950 rounded-2xl">
            <p className="text-xl font-semibold text-white leading-relaxed">
              &ldquo;{ABOUT_CONTENT.mission}&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Values */}
      <SectionContainer dark>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">What Drives Us</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Built for tradespeople, by people who understand the work.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Speed Over Complexity', desc: 'Simple tools that work from day one. No training manuals required.' },
              { title: 'Built for the Trades', desc: 'Every feature is designed for how service businesses actually operate.' },
              { title: 'Always Available', desc: 'Your AI never takes a day off, so you never miss an opportunity.' },
            ].map((value) => (
              <motion.div key={value.title} variants={fadeInUp} className="glass-card rounded-2xl p-6 text-left">
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      <FinalCTA />
    </>
  );
}
