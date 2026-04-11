'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAT_CONVERSATION } from '@/lib/constants';
import SectionContainer from '@/components/ui/SectionContainer';

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-gray-100 rounded-2xl rounded-bl-md w-fit">
      <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
      <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
      <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
    </div>
  );
}

// Activity stages that map to conversation progress
const STAGES = [
  { id: 'connected', label: 'Chat Connected', icon: '💬', triggerAt: 0 },
  { id: 'assessing', label: 'Assessing Need', icon: '📋', triggerAt: 2 },
  { id: 'lead-captured', label: 'Lead Captured', icon: '👤', triggerAt: 5 },
  { id: 'scheduling', label: 'Booking Appointment', icon: '📅', triggerAt: 3 },
  { id: 'confirmed', label: 'Appointment Confirmed', icon: '✓', triggerAt: 6 },
  { id: 'notification', label: 'Owner Notified', icon: '✉', triggerAt: 7 },
];

function StageIcon({ type, active }) {
  const color = active ? 'text-accent' : 'text-gray-600';
  const props = { className: `w-3.5 h-3.5 ${color}`, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 };

  switch (type) {
    case '💬':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>;
    case '📋':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>;
    case '👤':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
    case '📅':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
    case '✓':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case '✉':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
    default:
      return null;
  }
}

export default function ChatMockup() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!hasStarted) return;

    let timeouts = [];

    CHAT_CONVERSATION.forEach((msg, index) => {
      if (msg.role === 'ai' && index > 0) {
        const typingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, msg.delay - 1200);
        timeouts.push(typingTimeout);
      }

      const msgTimeout = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg]);
      }, msg.delay);
      timeouts.push(msgTimeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  // Determine which stages are active based on how many messages have appeared
  const messageCount = visibleMessages.length;
  const activeStages = STAGES.filter(s => messageCount >= s.triggerAt).map(s => s.id);

  return (
    <SectionContainer dark spacing="tight">
      <div className="max-w-3xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Chat widget — left side */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => !hasStarted && setHasStarted(true)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto lg:mx-0"
            >
              {/* Chat header */}
              <div className="bg-navy-950 px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy-950 font-bold text-xs">AP</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Ace Plumbing</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-400 text-xs">Alex is online</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="h-[380px] overflow-y-auto px-4 py-4 space-y-3 bg-white">
                <AnimatePresence>
                  {visibleMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-accent text-navy-950 rounded-2xl rounded-br-md'
                            : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <TypingIndicator />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-400">
                    Type a message...
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-navy-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
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
    </SectionContainer>
  );
}
