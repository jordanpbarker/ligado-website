import Hero from '@/components/home/Hero';
import ChannelCards from '@/components/home/ChannelCards';
import LiveDemoSection from '@/components/home/LiveDemoSection';
import PainPoints from '@/components/home/PainPoints';
import CrossFeatures from '@/components/home/CrossFeatures';
import SocialProof from '@/components/home/SocialProof';
import PricingSnapshot from '@/components/home/PricingSnapshot';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ChannelCards />
      <LiveDemoSection />
      <PainPoints />
      <CrossFeatures />
      <SocialProof />
      <PricingSnapshot />
      <FinalCTA />
    </>
  );
}
