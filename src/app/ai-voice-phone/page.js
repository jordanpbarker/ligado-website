import { VOICE_PAGE } from '@/lib/constants';
import FeatureHero from '@/components/features/FeatureHero';
import VoiceMockup from '@/components/features/VoiceMockup';
import HowItWorks from '@/components/features/HowItWorks';
import SellingPoints from '@/components/features/SellingPoints';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'AI Voice/Phone | Ligato AI',
  description: 'Never miss a call again. AI answers with a natural voice, books appointments, and sends you full transcripts.',
};

export default function AiVoicePhonePage() {
  return (
    <>
      <FeatureHero
        badge={VOICE_PAGE.badge}
        headline={VOICE_PAGE.headline}
        subheadline={VOICE_PAGE.subheadline}
      />
      <VoiceMockup />
      <HowItWorks steps={VOICE_PAGE.howItWorks} />
      <SellingPoints points={VOICE_PAGE.sellingPoints} />
      <FinalCTA />
    </>
  );
}
