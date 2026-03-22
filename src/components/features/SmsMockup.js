'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SMS_CONVERSATION } from '@/lib/constants';
import SectionContainer from '@/components/ui/SectionContainer';

export default function SmsMockup() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!hasStarted) return;

    let timeouts = [];

    SMS_CONVERSATION.forEach((msg) => {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <SectionContainer dark>
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => !hasStarted && setHasStarted(true)}
        >
          {/* Phone frame */}
          <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
            {/* Notch */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

              <div className="bg-white rounded-[2.25rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-50 px-6 pt-12 pb-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">9:41 AM</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-gray-400 rounded-sm" />
                  </div>
                </div>

                {/* SMS header */}
                <div className="bg-gray-50 px-4 pb-3 border-b border-gray-200 text-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-accent font-bold text-xs">GV</span>
                  </div>
                  <div className="text-sm font-semibold text-navy-950">Green Valley Landscaping</div>
                  <div className="text-xs text-gray-400">(801) 555-0147</div>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="h-[340px] overflow-y-auto px-4 py-4 space-y-3">
                  <AnimatePresence>
                    {visibleMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                            msg.role === 'customer'
                              ? 'bg-blue-500 text-white rounded-2xl rounded-br-md'
                              : 'bg-gray-200 text-gray-800 rounded-2xl rounded-bl-md'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                      Text Message
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pb-2">
                  <div className="w-32 h-1 bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Owner alert */}
          <AnimatePresence>
            {visibleMessages.length >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200 flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-950">New SMS Lead</div>
                  <div className="text-xs text-gray-500 mt-0.5">Mike S. — Sprinkler repair in Murray — via SMS</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
