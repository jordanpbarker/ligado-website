'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '@/components/ui/SectionContainer';

export default function WebsiteMockup() {
  const [revealed, setRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    const timeout = setTimeout(() => setRevealed(true), 800);
    return () => clearTimeout(timeout);
  }, [hasStarted]);

  return (
    <SectionContainer dark>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => !hasStarted && setHasStarted(true)}
        >
          {/* Browser frame */}
          <div className="bg-navy-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-navy-950 rounded-lg px-4 py-1.5 text-xs text-gray-400 text-center">
                  aceplumbing.com
                </div>
              </div>
            </div>

            {/* Website content - builds up */}
            <div className="relative bg-white overflow-hidden">
              {/* Loading state */}
              <motion.div
                animate={{ opacity: revealed ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white flex items-center justify-center z-10"
                style={{ pointerEvents: revealed ? 'none' : 'auto' }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-3"
                  />
                  <p className="text-sm text-gray-400">Building your website...</p>
                </div>
              </motion.div>

              {/* Revealed website */}
              <motion.div
                animate={{ opacity: revealed ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Hero section */}
                <div className="relative h-48 bg-gradient-to-br from-navy-950 to-navy-800 flex items-center px-8">
                  <div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={revealed ? { width: '100%' } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="overflow-hidden"
                    >
                      <h3 className="text-white text-xl font-bold whitespace-nowrap">Ace Plumbing & Drain</h3>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={revealed ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 }}
                      className="text-gray-400 text-sm mt-1"
                    >
                      Licensed & insured plumbing services in Salt Lake City
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={revealed ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 }}
                      className="mt-4 flex gap-2"
                    >
                      <span className="bg-accent text-navy-950 text-xs font-semibold px-3 py-1.5 rounded-lg">
                        Get a Free Quote
                      </span>
                      <span className="border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg">
                        Our Services
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Services section */}
                <div className="px-8 py-6">
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={revealed ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 }}
                    className="text-navy-950 font-semibold text-sm mb-4"
                  >
                    Our Services
                  </motion.h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['Drain Cleaning', 'Water Heaters', 'Leak Repair'].map((service, i) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, y: 10 }}
                        animate={revealed ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.6 + i * 0.15 }}
                        className="bg-gray-50 rounded-lg p-3 text-center"
                      >
                        <div className="w-6 h-6 bg-accent/10 rounded-full mx-auto mb-1.5 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                        </div>
                        <span className="text-xs text-navy-950 font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Chat widget preview */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={revealed ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
                  className="absolute bottom-4 right-4"
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30">
                    <svg className="w-6 h-6 text-navy-950" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : {}}
            transition={{ delay: 2.5 }}
            className="text-center text-gray-400 text-sm mt-6"
          >
            Your AI chat widget comes pre-installed, capturing leads from day one.
          </motion.p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
