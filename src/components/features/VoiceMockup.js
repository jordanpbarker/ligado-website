'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VOICE_TRANSCRIPT } from '@/lib/constants';
import SectionContainer from '@/components/ui/SectionContainer';

function Waveform({ isActive }) {
  const bars = 24;
  return (
    <div className="flex items-center justify-center gap-[3px] h-12">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-accent rounded-full"
          animate={isActive ? {
            height: [8, Math.random() * 32 + 8, 8],
          } : { height: 4 }}
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

export default function VoiceMockup() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [callDuration, setCallDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    setIsActive(true);

    // Timer
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    // Transcript lines appearing
    let timeouts = [];
    VOICE_TRANSCRIPT.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, (index + 1) * 3000);
      timeouts.push(timeout);
    });

    // Stop waveform after last line
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

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <SectionContainer dark>
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => !hasStarted && setHasStarted(true)}
        >
          {/* Call screen */}
          <div className="bg-navy-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Call header */}
            <div className="px-6 pt-8 pb-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Ace Plumbing</h3>
              <p className="text-gray-400 text-sm mt-1">
                {isActive ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Call in progress — {formatTime(callDuration)}
                  </span>
                ) : hasStarted ? (
                  `Call ended — ${formatTime(callDuration)}`
                ) : (
                  'Incoming call...'
                )}
              </p>
            </div>

            {/* Waveform */}
            <div className="px-6 py-4">
              <Waveform isActive={isActive} />
            </div>

            {/* Live transcript */}
            <div className="px-6 pb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Live Transcript</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="space-y-3 max-h-[280px] overflow-y-auto">
                <AnimatePresence>
                  {visibleLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-3"
                    >
                      <span className="text-xs text-gray-600 flex-shrink-0 mt-0.5 w-8">{line.time}</span>
                      <div>
                        <span className={`text-xs font-semibold ${line.speaker === 'AI' ? 'text-accent' : 'text-gray-400'}`}>
                          {line.speaker}
                        </span>
                        <p className="text-sm text-gray-300 leading-relaxed">{line.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Owner alert */}
          <AnimatePresence>
            {!isActive && hasStarted && visibleLines.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200 flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-950">Call Summary</div>
                  <div className="text-xs text-gray-500 mt-0.5">Water heater issue — No hot water — Appointment requested for ASAP</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
