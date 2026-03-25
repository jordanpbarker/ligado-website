import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'AI Chat Widget', href: '/ai-chat-widget' },
    { label: 'AI Text/SMS', href: '/ai-text-sms' },
    { label: 'AI Voice/Phone', href: '/ai-voice-phone' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Book a Demo', href: '/book-a-demo' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-navy-950 font-bold text-sm">L</span>
              </div>
              <span className="text-white font-bold text-xl">Ligato <span className="text-accent">AI</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered communication for home service businesses. Never miss a lead again.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ligato AI. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Ligato AI is a J Bone Investments LLC company.
            </p>
          </div>
          <p className="text-gray-600 text-xs">
            Built by Boots & Pixels
          </p>
        </div>
      </div>
    </footer>
  );
}
