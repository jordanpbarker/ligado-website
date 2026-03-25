'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { CHANNELS } from '@/lib/constants';
import { IconChat, IconMobile, IconPhone, IconGlobe } from '@/components/ui/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

const icons = {
  chat: IconChat,
  sms: IconMobile,
  voice: IconPhone,
  globe: IconGlobe,
};

export default function ChannelCards() {
  return (
    <SectionContainer dark id="channels">
      <SectionHeading
        badge="One Plan, Everything Included"
        title="Every Way Customers Reach You. Covered."
        subtitle="Chat, text, call, and even your website. All handled by one AI brain trained on your business."
        dark
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {CHANNELS.map((channel) => {
          const Icon = icons[channel.icon];
          return (
            <motion.div key={channel.name} variants={fadeInUp}>
              <Link href={channel.slug} className="block group">
                <div className="glass-card rounded-2xl p-8 h-full hover:border-accent/30 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{channel.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-accent text-sm font-medium">
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
