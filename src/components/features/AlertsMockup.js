'use client';

import { motion } from 'framer-motion';
import { ALERTS_TIMELINE } from '@/lib/constants';
import { useEffect, useState, useRef } from 'react';

const TYPE_CONFIG = {
  lead: { color: 'bg-emerald-500', ring: 'ring-emerald-500/20', icon: '📞', label: 'Lead' },
  alert: { color: 'bg-amber-500', ring: 'ring-amber-500/20', icon: '🔔', label: 'Alert' },
  followup: { color: 'bg-blue-500', ring: 'ring-blue-500/20', icon: '💬', label: 'Follow-Up' },
  booking: { color: 'bg-violet-500', ring: 'ring-violet-500/20', icon: '📅', label: 'Booked' },
  reminder: { color: 'bg-teal-500', ring: 'ring-teal-500/20', icon: '⏰', label: 'Reminder' },
};

export default function AlertsMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Reveal items one by one
          ALERTS_TIMELINE.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), (i + 1) * 800);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-navy-950 overflow-hidden">
      <div className="gradient-orb w-[400px] h-[400px] bg-accent/10 top-1/2 right-0 -translate-y-1/2 absolute" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: description */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4"
            >
              Real-Time Activity
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
            >
              Watch Every Lead Get Handled
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              From the moment a customer reaches out to the day of their appointment, every step is tracked, automated, and visible in your dashboard.
            </motion.p>
          </div>

          {/* Right: timeline mockup */}
          <div className="relative">
            {/* Phone frame */}
            <div className="bg-navy-900 border border-navy-700/50 rounded-3xl p-6 shadow-2xl shadow-black/30 max-w-sm mx-auto">
              {/* Phone header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white font-semibold text-sm">Activity Feed</p>
                  <p className="text-gray-500 text-xs">Ace Plumbing Co.</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Timeline */}
              <div className="space-y-4 relative">
                {/* Connecting line */}
                <div className="absolute left-[15px] top-3 bottom-3 w-px bg-navy-700" />

                {ALERTS_TIMELINE.map((item, i) => {
                  const config = TYPE_CONFIG[item.type];
                  const isVisible = i < visibleCount;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="flex gap-3 relative"
                    >
                      {/* Dot */}
                      <div className={`w-[30px] h-[30px] rounded-full ${config.color} ring-4 ${config.ring} flex items-center justify-center shrink-0 text-xs z-10`}>
                        {config.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-navy-800/60 border border-navy-700/40 rounded-xl p-3 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{config.label}</span>
                          <span className="text-[10px] text-gray-600">{item.time}</span>
                        </div>
                        <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                        <p className="text-xs text-gray-400 truncate">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
