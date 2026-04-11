'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_TYPES } from '@/lib/constants';
import { IconCheck, IconChat, IconMobile, IconPhone } from '@/components/ui/Icons';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, smsConsent }),
      });
    } catch {
      // Silently handle - form still shows success
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-navy-950 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-accent mb-4">
              Get Started
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
              See Ligato AI in Action
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Book a free demo and see how your AI receptionist handles calls, texts, and chats, trained on your specific business.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: IconChat, text: 'Watch your AI chat widget convert a visitor into a lead' },
                { icon: IconMobile, text: 'See how AI handles inbound texts with your business knowledge' },
                { icon: IconPhone, text: 'Listen to a live AI phone call with natural voice' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-gray-300 mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 lg:p-10 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-navy-950 mb-2">You&apos;re All Set!</h2>
                <p className="text-gray-600">
                  We&apos;ll be in touch within 24 hours to schedule your demo. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
                <h2 className="text-xl font-bold text-navy-950 mb-6">Book Your Free Demo</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      placeholder="Ace Plumbing"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Owner Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      placeholder="(801) 555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      placeholder="john@aceplumbing.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Type</label>
                    <select
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow appearance-none bg-white"
                    >
                      <option value="">Select your trade</option>
                      {BUSINESS_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow resize-none"
                      placeholder="Tell us about your business..."
                    />
                  </div>

                  {/* SMS consent checkbox - required for A2P 10DLC compliance */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent flex-shrink-0"
                    />
                    <label htmlFor="smsConsent" className="text-xs text-gray-500 leading-relaxed">
                      <span className="font-medium text-gray-600">(Optional)</span> I agree to receive automated text notifications from
                      Ligato AI about calls, leads, and service updates. Consent is not required to use Ligato AI.
                      Msg &amp; data rates may apply. Reply STOP to opt out. See our{' '}
                      <a href="/privacy-policy" className="text-accent underline hover:text-accent-hover">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="/terms" className="text-accent underline hover:text-accent-hover">Terms &amp; Conditions</a>.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-6 bg-accent text-navy-950 font-semibold py-3.5 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Book My Demo'}
                </button>

                <p className="text-center text-gray-400 text-xs mt-4">
                  No commitment. We&apos;ll show you how it works for your business.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
