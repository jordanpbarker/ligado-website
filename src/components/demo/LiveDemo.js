'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DEMO_BUSINESS_ID = '859074c9-570c-482f-a184-6631f93e2bc8';
const DEMO_ASSISTANT_ID = 'f00cc909-febd-48e6-af03-8c7716fa4b8b';

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState('voice');

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex justify-center gap-2 mb-8">
        {['voice', 'chat'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
              activeTab === tab
                ? 'bg-accent text-navy-950 shadow-lg shadow-accent/25'
                : 'bg-navy-800 text-gray-400 hover:text-white'
            }`}
          >
            {tab === 'voice' ? 'Voice Call' : 'Chat'}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'voice' ? (
          <motion.div key="voice" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <VoiceDemo />
          </motion.div>
        ) : (
          <motion.div key="chat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <ChatDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Voice Demo ──────────────────────────────────────────────

function VoiceDemo() {
  const [status, setStatus] = useState('idle');
  const [transcript, setTranscript] = useState([]);
  const [error, setError] = useState(null);
  const vapiRef = useRef(null);

  async function startCall() {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (!publicKey) {
      setError('Voice demo not configured');
      return;
    }

    setError(null);
    setTranscript([]);
    setStatus('connecting');

    try {
      const Vapi = (await import('@vapi-ai/web')).default;
      const vapi = new Vapi(publicKey);
      vapiRef.current = vapi;

      vapi.on('call-start', () => setStatus('active'));
      vapi.on('call-end', () => {
        setStatus('idle');
        vapiRef.current = null;
      });
      vapi.on('error', (e) => {
        console.error('[DEMO VOICE]', e);
        setError('Call error — please try again');
        setStatus('idle');
      });
      vapi.on('message', (msg) => {
        if (msg.type === 'transcript' && msg.transcriptType === 'final') {
          setTranscript((prev) => [...prev, { role: msg.role || 'unknown', text: msg.transcript || '' }]);
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
    <div className="space-y-6">
      <div className="bg-navy-900/60 border border-navy-700/50 rounded-2xl p-8 text-center backdrop-blur-sm">
        {status === 'idle' && (
          <>
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <button
              onClick={startCall}
              className="bg-accent text-navy-950 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.97]"
            >
              Talk to Alex
            </button>
            <p className="text-gray-500 text-xs mt-3">Uses your microphone — allow access when prompted</p>
          </>
        )}

        {status === 'connecting' && (
          <div className="py-4">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <p className="text-accent font-semibold">Connecting...</p>
          </div>
        )}

        {status === 'active' && (
          <div className="py-4">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
            </div>
            <p className="text-accent font-semibold text-sm mb-4">Call in progress</p>
            <button
              onClick={endCall}
              className="bg-red-500 hover:bg-red-400 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/20"
            >
              End Call
            </button>
          </div>
        )}

        {status === 'ending' && (
          <div className="py-4">
            <p className="text-gray-400">Ending call...</p>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Live transcript */}
      <AnimatePresence>
        {transcript.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-navy-900/60 border border-navy-700/50 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Live Transcript</h3>
            <div className="space-y-3">
              {transcript.map((turn, i) => (
                <div key={i} className="flex gap-3">
                  <span className={`text-xs font-bold uppercase mt-0.5 w-10 shrink-0 ${
                    turn.role === 'assistant' ? 'text-accent' : 'text-white'
                  }`}>
                    {turn.role === 'assistant' ? 'Alex' : 'You'}
                  </span>
                  <p className="text-sm text-gray-300">{turn.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Chat Demo ───────────────────────────────────────────────

function ChatDemo() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `demo-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  const messagesEndRef = useRef(null);
  const appUrl = process.env.NEXT_PUBLIC_LIGADO_APP_URL || '';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
      const res = await fetch(`${appUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_id: DEMO_BUSINESS_ID,
          session_id: sessionId,
          message: text,
          history: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.text }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-navy-900/60 border border-navy-700/50 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col" style={{ height: '480px' }}>
      {/* Header */}
      <div className="bg-navy-800/80 border-b border-navy-700/50 px-5 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Alex</div>
          <div className="text-xs text-gray-500">Summit Plumbing Co.</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs text-accent">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 text-sm pt-8">
            Type a message to start chatting with Alex
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
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
            <div className="bg-navy-800 text-gray-400 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
              <span className="animate-pulse">Typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="border-t border-navy-700/50 p-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-accent hover:bg-accent-hover disabled:opacity-40 text-navy-950 px-4 py-2.5 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  );
}
