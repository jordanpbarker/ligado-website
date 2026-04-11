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
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
      >
        {CHANNELS.map((channel, i) => {
          const Icon = icons[channel.icon];
          return (
            <motion.div key={channel.name} variants={fadeInUp}>
              <Link href={channel.slug} className="block group">
                <div className="surface-card rounded-xl p-6 h-full hover:border-white/12 transition-colors duration-200">
                  <div className="w-10 h-10 bg-white/[0.07] rounded-lg flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${i === 0 ? 'text-accent' : 'text-gray-300'}`} />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{channel.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{channel.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-gray-400 text-sm group-hover:text-white transition-colors">
                    Learn more
                    <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
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
