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

      {/* Team placeholder */}
      <SectionContainer dark>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">The Team</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            A small team of builders who believe tradespeople deserve better technology.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Founder', role: 'CEO & Product' },
              { name: 'Co-Founder', role: 'Engineering' },
              { name: 'Team Member', role: 'Growth' },
            ].map((person) => (
              <div key={person.role} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent text-2xl font-bold">{person.name[0]}</span>
                </div>
                <h3 className="text-white font-semibold">{person.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      <FinalCTA />
    </>
  );
}
