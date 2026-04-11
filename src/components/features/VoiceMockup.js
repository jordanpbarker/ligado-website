'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VOICE_TRANSCRIPT } from '@/lib/constants';

function Waveform({ isActive }) {
  const bars = 20;
  return (
    <div className="flex items-center justify-center gap-[3px] h-10">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-accent rounded-full"
          animate={isActive ? {
            height: [6, Math.random() * 28 + 6, 6],
          } : { height: 3 }}
          transition={isActive ? {
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.05,
          } : { duration: 0.3 }}
        />
      ))}
    </div>
  );
}

// Activity stages mapped to transcript progress
const STAGES = [
  { id: 'connected', label: 'Call Connected', icon: 'phone', triggerAt: 1 },
  { id: 'assessing', label: 'Assessing Need', icon: 'clipboard', triggerAt: 2 },
  { id: 'lead-captured', label: 'Lead Captured', icon: 'user', triggerAt: 4 },
  { id: 'scheduling', label: 'Booking Appointment', icon: 'calendar', triggerAt: 6 },
  { id: 'confirmed', label: 'Appointment Confirmed', icon: 'check', triggerAt: 7 },
  { id: 'notification', label: 'Owner Notified', icon: 'mail', triggerAt: 7 },
];

function StageIcon({ type, active }) {
  const color = active ? 'text-accent' : 'text-gray-600';
  const props = { className: `w-3.5 h-3.5 ${color}`, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 };

  switch (type) {
    case 'phone':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
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

export default function VoiceMockup() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [callDuration, setCallDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const transcriptRef = useRef(null);

  useEffect(() => {
    if (!hasStarted) return;
    setIsActive(true);

    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    let timeouts = [];
    VOICE_TRANSCRIPT.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, (index + 1) * 3000);
      timeouts.push(timeout);
    });

    const stopTimeout = setTimeout(() => {
      setIsActive(false);
      clearInterval(timer);
    }, (VOICE_TRANSCRIPT.length + 1) * 3000);
    timeouts.push(stopTimeout);

    return () => {
      clearInterval(timer);
      timeouts.forEach(clearTimeout);
    };
  }, [hasStarted]);

  // Auto-scroll transcript to bottom
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const lineCount = visibleLines.length;
  const activeStages = STAGES.filter(s => lineCount >= s.triggerAt).map(s => s.id);

  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Subtle depth gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.04) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Call UI + transcript — left side */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              onViewportEnter={() => !hasStarted && setHasStarted(true)}
              className="bg-navy-900 rounded-xl overflow-hidden border border-white/[0.06] h-full flex flex-col"
            >
              {/* Call header */}
              <div className="px-5 pt-6 pb-4 text-center">
                <div className="w-12 h-12 bg-white/[0.05] border border-white/[0.08] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Ace Plumbing</h3>
                <p className="text-gray-500 text-xs mt-1">
                  {isActive ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Call in progress · {formatTime(callDuration)}
                    </span>
                  ) : hasStarted ? (
                    `Call ended · ${formatTime(callDuration)}`
                  ) : (
                    'Incoming call...'
                  )}
                </p>
              </div>

              {/* Waveform */}
              <div className="px-5 py-3">
                <Waveform isActive={isActive} />
              </div>

              {/* Live transcript */}
              <div className="px-5 pb-5 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-white/[0.06]" />
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Live Transcript</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                <div ref={transcriptRef} className="space-y-2.5 max-h-[250px] overflow-y-auto">
                  <AnimatePresence>
                    {visibleLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-3"
                      >
                        <span className="text-[10px] text-gray-600 flex-shrink-0 mt-0.5 w-7">{line.time}</span>
                        <div>
                          <span className={`text-[10px] font-semibold ${line.speaker === 'AI' ? 'text-accent' : 'text-gray-400'}`}>
                            {line.speaker === 'AI' ? 'Alex' : 'Caller'}
                          </span>
                          <p className="text-sm text-gray-300 leading-relaxed">{line.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
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
