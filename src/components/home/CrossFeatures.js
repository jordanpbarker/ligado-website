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
    <SectionContainer dark spacing="tight">
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
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {CROSS_FEATURES.map((feature, i) => {
          const Icon = icons[feature.icon];
          return (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="surface-card rounded-xl p-5 hover:border-white/10 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-white/[0.07] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
