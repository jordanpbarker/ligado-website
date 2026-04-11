'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SMS_CONVERSATION } from '@/lib/constants';
import SectionContainer from '@/components/ui/SectionContainer';

// Activity stages that map to SMS conversation progress
const STAGES = [
  { id: 'connected', label: 'Text Received', icon: 'sms', triggerAt: 1 },
  { id: 'assessing', label: 'Assessing Need', icon: 'clipboard', triggerAt: 3 },
  { id: 'lead-captured', label: 'Lead Captured', icon: 'user', triggerAt: 5 },
  { id: 'scheduling', label: 'Booking Appointment', icon: 'calendar', triggerAt: 6 },
  { id: 'confirmed', label: 'Appointment Confirmed', icon: 'check', triggerAt: 6 },
  { id: 'notification', label: 'Owner Notified', icon: 'mail', triggerAt: 6 },
];

function StageIcon({ type, active }) {
  const color = active ? 'text-accent' : 'text-gray-600';
  const props = { className: `w-3.5 h-3.5 ${color}`, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 };

  switch (type) {
    case 'sms':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>;
    case 'clipboard':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>;
    case 'user':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
    case 'calendar':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
    case 'check':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'mail':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
    default:
      return null;
  }
}

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

  const messageCount = visibleMessages.length;
  const activeStages = STAGES.filter(s => messageCount >= s.triggerAt).map(s => s.id);

  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Subtle depth gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.04) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Phone — left side */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              onViewportEnter={() => !hasStarted && setHasStarted(true)}
              className="w-[280px]"
            >
              {/* iPhone frame */}
              <div className="bg-[#1a1a1a] rounded-[2.5rem] p-2.5 border border-gray-700/50">
                <div className="relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-full z-10" />

                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-50 px-6 pt-10 pb-1 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-gray-800">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-3.5 h-1.5 bg-gray-800 rounded-sm" />
                      </div>
                    </div>

                    {/* SMS header */}
                    <div className="bg-gray-50 px-4 pb-2.5 border-b border-gray-200 text-center">
                      <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-accent font-bold text-[10px]">GV</span>
                      </div>
                      <div className="text-xs font-semibold text-navy-950">Green Valley Landscaping</div>
                      <div className="text-[10px] text-gray-400">(801) 555-0147</div>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="h-[320px] overflow-y-auto px-3 py-3 space-y-2.5">
                      <AnimatePresence>
                        {visibleMessages.map((msg, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[82%] px-3 py-2 text-[13px] leading-relaxed ${
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
                    <div className="px-3 py-2 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-[12px] text-gray-400">
                          Text Message
                        </div>
                        <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="flex justify-center pb-1.5">
                      <div className="w-28 h-1 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activity timeline — right side */}
          <div className="lg:col-span-2 hidden lg:flex">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-navy-900/40 border border-navy-700/30 rounded-xl px-5 py-5 w-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <h3 className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Live Activity</h3>
              </div>

              <div className="relative flex-1 flex flex-col">
                <div className="absolute left-[10px] top-3 bottom-3 w-px bg-navy-700/60" />

                <div className="flex-1 flex flex-col justify-between">
                  {STAGES.map((stage) => {
                    const isActive = activeStages.includes(stage.id);
                    const isLatest = isActive && !STAGES.slice(STAGES.indexOf(stage) + 1).some(s => activeStages.includes(s.id));

                    return (
                      <motion.div
                        key={stage.id}
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.25 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                          isLatest
                            ? 'bg-accent/15 ring-1 ring-accent/30'
                            : isActive
                            ? 'bg-navy-800 ring-1 ring-navy-700/50'
                            : 'bg-navy-900 ring-1 ring-navy-800/50'
                        }`}>
                          <StageIcon type={stage.icon} active={isLatest} />
                        </div>
                        <p className={`text-sm font-medium ${
                          isLatest ? 'text-white' : isActive ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {stage.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
