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
        {CHANNELS.map((channel) => {
          const Icon = icons[channel.icon];
          return (
            <motion.div key={channel.name} variants={fadeInUp} className="flex">
              <Link href={channel.slug} className="block group flex-1">
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-5 h-full flex flex-col hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-200">
                  <div className="mb-4">
                    <Icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-base font-medium text-white mb-1.5">{channel.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{channel.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-accent text-sm font-medium group-hover:gap-2.5 transition-all">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
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
