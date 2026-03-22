'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { CROSS_FEATURES } from '@/lib/constants';
import { IconBell, IconBrain, IconUsers, IconCalendar, IconMoon, IconShield } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

const icons = {
  bell: IconBell,
  brain: IconBrain,
  contacts: IconUsers,
  calendar: IconCalendar,
  moon: IconMoon,
  shield: IconShield,
};

export default function CrossFeatures() {
  return (
    <SectionContainer dark>
      <SectionHeading
        badge="Features"
        title="Built for How You Actually Work"
        subtitle="Every feature designed for tradespeople who are too busy doing the work to answer the phone."
        dark
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CROSS_FEATURES.map((feature) => {
          const Icon = icons[feature.icon];
          return (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
