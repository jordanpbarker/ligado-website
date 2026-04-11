'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DEMO_BUSINESS_ID = '859074c9-570c-482f-a184-6631f93e2bc8';
const DEMO_ASSISTANT_ID = 'f00cc909-febd-48e6-af03-8c7716fa4b8b';

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState('voice');

  return (
    <div>
      <div className="flex justify-center gap-2 mb-8">
        {['voice', 'chat'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
              activeTab === tab
                ? 'bg-accent text-navy-950'
                : 'bg-navy-800 text-gray-400 hover:text-white'
            }`}
          >
            {tab === 'voice' ? 'Voice Call' : 'Chat'}
          </button>
        ))}
      </div>

      {/* Fixed height container prevents layout shift when switching tabs */}
      <div className="h-[480px]">
        <AnimatePresence mode="wait">
          {activeTab === 'voice' ? (
            <motion.div key="voice" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="h-full">
              <VoiceDemo />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="h-full">
              <ChatDemo />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Stage definitions for the call activity timeline ────────

const CALL_STAGES = [
  {
    id: 'connected',
    label: 'Call Connected',
    description: 'AI receptionist answered instantly',
    icon: 'phone',
  },
  {
    id: 'assessing',
    label: 'Assessing Need',
    description: 'Understanding the service request',
    icon: 'clipboard',
  },
  {
    id: 'lead-captured',
    label: 'Lead Captured',
    description: 'Contact saved to CRM',
    icon: 'user',
  },
  {
    id: 'scheduling',
    label: 'Booking Appointment',
    description: 'Checking available time slots',
    icon: 'calendar',
  },
  {
    id: 'confirmed',
    label: 'Appointment Confirmed',
    description: 'Confirmation sent to customer',
    icon: 'check',
  },
  {
    id: 'notification',
    label: 'Owner Notified',
    description: 'Email alert sent to business owner',
    icon: 'mail',
  },
];

// Detect which stages should be active based on transcript content.
// Stages are strictly sequential — each one requires the previous to have fired,
// so nothing jumps ahead even if a keyword appears early.
function detectStages(transcript, callActive) {
  const stages = new Set();
  if (!callActive && transcript.length === 0) return stages;

  // Walk the transcript in order, tracking where we are in the conversation
  const entries = transcript.map(t => ({
    role: t.role,
    text: t.text.toLowerCase(),
  }));
  const assistantMsgs = entries.filter(e => e.role === 'assistant');
  const userMsgs = entries.filter(e => e.role === 'user');

  // 1. Connected — call is live
  if (callActive || transcript.length > 0) stages.add('connected');
  else return stages;

  // 2. Assessing need — user has described their problem (at least 1 user message
  //    after the initial greeting exchange)
  if (userMsgs.length >= 1 && assistantMsgs.length >= 1) {
    stages.add('assessing');
  } else return stages;

  // 3. Lead captured — assistant asked for name AND user responded after that ask.
  //    We find the index where the assistant asks for a name, then check that the
  //    user spoke at least once after that point.
  const nameAskPatterns = /\bname\b|who am i speaking|who('s| is) calling|can i get your name|may i have your name|who('s| is) this/;
  let nameAskIndex = -1;
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].role === 'assistant' && nameAskPatterns.test(entries[i].text)) {
      nameAskIndex = i;
      break;
    }
  }
  const userSpokeAfterNameAsk = nameAskIndex >= 0 && entries.slice(nameAskIndex + 1).some(e => e.role === 'user');
  if (userSpokeAfterNameAsk) {
    stages.add('lead-captured');
  } else return stages;

  // 4. Notification — handled by timer in component (fires 2.5s after lead-captured)

  // 5. Scheduling — assistant specifically mentions scheduling/appointment AFTER
  //    the name exchange (ignore early mentions like "would you like to schedule" in greeting)
  const schedulePatterns = /schedule|appointment|what (time|day|date)|when would you|when works|slot|come (by|out|over)|set (up|that up)|pencil you in/;
  const postNameEntries = entries.slice(nameAskIndex + 1);
  const hasSchedulingTalk = postNameEntries.some(e => e.role === 'assistant' && schedulePatterns.test(e.text));
  if (hasSchedulingTalk) {
    stages.add('scheduling');
  } else return stages;

  // 6. Confirmed — assistant confirms the booking is set
  const confirmPatterns = /confirmed|you('re| are) (all set|booked|scheduled)|see you (on|at|then)|got you (down|booked|scheduled)|that('s| is) (set|booked|confirmed)|appointment is set/;
  const hasConfirmation = postNameEntries.some(e => e.role === 'assistant' && confirmPatterns.test(e.text));
  if (hasConfirmation) {
    stages.add('confirmed');
  }

  return stages;
}

// ─── Stage Icons ─────────────────────────────────────────────

function StageIcon({ type, active }) {
  const color = active ? 'text-accent' : 'text-gray-600';
  const props = { className: `w-4 h-4 ${color}`, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 };

  switch (type) {
    case 'phone':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
    case 'clipboard':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>;
    case 'user':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
    case 'mail':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
    case 'calendar':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
    case 'check':
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    default:
      return null;
  }
}

// ─── Call Activity Timeline (horizontal) ─────────────────────

function CallTimeline({ activeStages, vertical = false, channel = 'voice' }) {
  if (activeStages.size === 0) return null;

  function getLabel(stage) {
    if (stage.id === 'connected' && channel === 'chat') return 'Chat Connected';
    return stage.label;
  }

  if (vertical) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-navy-900/40 border border-navy-700/30 rounded-xl px-4 py-4 w-full"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <h3 className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Live Activity</h3>
        </div>

        <div className="relative">
          <div className="absolute left-[10px] top-3 bottom-3 w-px bg-navy-700/60" />

          <div className="space-y-3">
            {CALL_STAGES.map((stage, i) => {
              const isActive = activeStages.has(stage.id);
              const isLatest = isActive && !CALL_STAGES.slice(i + 1).some(s => activeStages.has(s.id));

              return (
                <motion.div
                  key={stage.id}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.25 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2.5"
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
                  <p className={`text-[11px] font-medium leading-tight ${
                    isLatest ? 'text-white' : isActive ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {getLabel(stage)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-5 bg-navy-900/40 border border-navy-700/30 rounded-xl px-5 py-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <h3 className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Live Activity</h3>
      </div>

      <div className="relative flex items-start gap-0">
        <div className="absolute top-[11px] left-3 right-3 h-px bg-navy-700/60" />

        {CALL_STAGES.map((stage, i) => {
          const isActive = activeStages.has(stage.id);
          const isLatest = isActive && !CALL_STAGES.slice(i + 1).some(s => activeStages.has(s.id));

          return (
            <div key={stage.id} className="flex-1 relative flex flex-col items-center text-center min-w-0">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.8,
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className={`w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                  isLatest
                    ? 'bg-accent/15 ring-1 ring-accent/30'
                    : isActive
                    ? 'bg-navy-800 ring-1 ring-navy-700/50'
                    : 'bg-navy-900 ring-1 ring-navy-800/50'
                }`}
              >
                <StageIcon type={stage.icon} active={isLatest} />
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="mt-2 px-1"
              >
                <p className={`text-[11px] font-medium leading-tight ${
                  isLatest ? 'text-white' : isActive ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stage.label}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Voice Demo ──────────────────────────────────────────────

function VoiceDemo() {
  const [status, setStatus] = useState('idle');
  const [transcript, setTranscript] = useState([]);
  const [activeStages, setActiveStages] = useState(new Set());
  const [error, setError] = useState(null);
  const vapiRef = useRef(null);
  const notificationTimer = useRef(null);

  // Update stages when transcript changes
  const updateStages = useCallback((currentTranscript, callActive) => {
    const detected = detectStages(currentTranscript, callActive);
    setActiveStages(prev => {
      // Only add stages, never remove (stages persist once shown)
      const merged = new Set([...prev, ...detected]);
      // Trigger notification timer when lead-captured appears
      if (merged.has('confirmed') && !prev.has('confirmed') && !notificationTimer.current) {
        notificationTimer.current = setTimeout(() => {
          setActiveStages(p => new Set([...p, 'notification']));
        }, 2500);
      }
      return merged;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (notificationTimer.current) clearTimeout(notificationTimer.current);
    };
  }, []);

  async function startCall() {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (!publicKey) {
      setError('Voice demo not configured');
      return;
    }

    setError(null);
    setTranscript([]);
    setActiveStages(new Set());
    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current);
      notificationTimer.current = null;
    }
    setStatus('connecting');

    try {
      const Vapi = (await import('@vapi-ai/web')).default;
      const vapi = new Vapi(publicKey);
      vapiRef.current = vapi;

      vapi.on('call-start', () => {
        setStatus('active');
        updateStages([], true);
      });
      vapi.on('call-end', () => {
        setStatus('idle');
        vapiRef.current = null;
      });
      vapi.on('error', (e) => {
        console.error('[DEMO VOICE]', e);
        setError('Call error \u2014 please try again');
        setStatus('idle');
      });
      vapi.on('message', (msg) => {
        if (msg.type === 'transcript' && msg.transcriptType === 'final') {
          const newEntry = { role: msg.role || 'unknown', text: msg.transcript || '' };
          setTranscript((prev) => {
            const updated = [...prev, newEntry];
            updateStages(updated, true);
            return updated;
          });
        }
      });

      await vapi.start(DEMO_ASSISTANT_ID);
    } catch (err) {
      console.error(err);
      setError('Failed to start call');
      setStatus('idle');
    }
  }

  function endCall() {
    setStatus('ending');
    vapiRef.current?.stop();
  }

  return (
    <div className="h-full flex flex-col">
      <div className="bg-navy-900/60 border border-navy-700/50 rounded-xl p-8 text-center flex-1 flex flex-col justify-center">
        {status === 'idle' && (
          <>
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <button
              onClick={startCall}
              className="bg-accent text-navy-950 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-150 hover:bg-accent-hover"
            >
              Talk to Alex
            </button>
            <p className="text-gray-500 text-xs mt-3">Requires microphone access</p>
          </>
        )}

        {status === 'connecting' && (
          <div className="py-4">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/[0.04] border border-accent/20 flex items-center justify-center animate-pulse">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <p className="text-accent font-medium text-sm">Connecting...</p>
          </div>
        )}

        {status === 'active' && (
          <div className="py-4">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            </div>
            <p className="text-white font-medium text-sm mb-1">Call in progress</p>
            <p className="text-gray-500 text-xs mb-5">Watch the activity feed below</p>
            <button
              onClick={endCall}
              className="bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 font-medium px-6 py-2.5 rounded-lg transition-colors duration-150 text-sm"
            >
              End Call
            </button>
          </div>
        )}

        {status === 'ending' && (
          <div className="py-4">
            <p className="text-gray-400 text-sm">Ending call...</p>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Live activity timeline */}
      <CallTimeline activeStages={activeStages} />
    </div>
  );
}

// ─── Chat Demo ───────────────────────────────────────────────

function ChatDemo() {
  const GREETING = 'Hey there! Thanks for stopping by Summit Plumbing Co. What questions can I help you with today?';
  const [messages, setMessages] = useState([
    { role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `demo-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  const [activeStages, setActiveStages] = useState(new Set(['connected']));
  const messagesEndRef = useRef(null);
  const notificationTimer = useRef(null);

  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages]);

  // Update stages when messages change
  useEffect(() => {
    if (messages.length <= 1) return;
    // Map chat messages to transcript format for detectStages
    const transcript = messages.map(m => ({ role: m.role, text: m.content }));
    const detected = detectStages(transcript, true);
    setActiveStages(prev => {
      const merged = new Set([...prev, ...detected]);
      if (merged.has('confirmed') && !prev.has('confirmed') && !notificationTimer.current) {
        notificationTimer.current = setTimeout(() => {
          setActiveStages(p => new Set([...p, 'notification']));
        }, 2500);
      }
      return merged;
    });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (notificationTimer.current) clearTimeout(notificationTimer.current);
    };
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_id: DEMO_BUSINESS_ID,
          session_id: sessionId,
          message: text,
          channel: 'chat',
          history: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      let reply = data.response || data.text;
      if (reply) {
        // Strip raw ISO timestamp refs the AI sometimes leaks
        reply = reply.replace(/\s*\(ref:\d{4}-\d{2}-\d{2}T[\d:.]+Z?\)/g, '');
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      }
    } catch (err) {
      console.error('[DEMO CHAT]', err);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center gap-5 h-full items-stretch">
      <div className="w-full max-w-sm bg-navy-900/60 border border-navy-700/50 rounded-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-navy-800/80 border-b border-navy-700/50 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Alex</div>
            <div className="text-xs text-gray-500">Summit Plumbing Co.</div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs text-gray-500">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'bg-accent text-navy-950 rounded-br-md'
                  : 'bg-navy-800 text-gray-200 rounded-bl-md'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-navy-800 text-gray-400 px-3.5 py-2 rounded-2xl rounded-bl-md text-sm">
                <span className="animate-pulse">Typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="border-t border-navy-700/50 p-2.5 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-navy-950 border border-navy-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent/40"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-accent hover:bg-accent-hover disabled:opacity-40 text-navy-950 px-3 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>

      {/* Activity timeline — vertical sidebar */}
      {activeStages.size > 1 && (
        <div className="hidden sm:flex w-full max-w-[200px]">
          <CallTimeline activeStages={activeStages} vertical channel="chat" />
        </div>
      )}
    </div>
  );
}
