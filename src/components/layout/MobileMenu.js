'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-navy-950 pt-24 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label}>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2 mt-4">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-8">
              <Button href="/book-a-demo" size="lg" className="w-full">
                Book a Demo
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
