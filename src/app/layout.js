import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Ligado AI — AI Receptionist for Home Service Businesses',
  description: 'Stop losing jobs to the guy who answers first. Ligado AI handles your calls, texts, and website chats 24/7. One AI brain trained on your business.',
  openGraph: {
    title: 'Ligado AI — AI Receptionist for Home Service Businesses',
    description: 'Stop losing jobs to the guy who answers first. Ligado AI handles your calls, texts, and website chats 24/7.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
