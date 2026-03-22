import { SMS_PAGE } from '@/lib/constants';
import FeatureHero from '@/components/features/FeatureHero';
import SmsMockup from '@/components/features/SmsMockup';
import HowItWorks from '@/components/features/HowItWorks';
import SellingPoints from '@/components/features/SellingPoints';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'AI Text/SMS — Ligado AI',
  description: 'Every text gets an instant, intelligent reply. AI-powered SMS for home service businesses.',
};

export default function AiTextSmsPage() {
  return (
    <>
      <FeatureHero
        badge={SMS_PAGE.badge}
        headline={SMS_PAGE.headline}
        subheadline={SMS_PAGE.subheadline}
      />
      <SmsMockup />
      <HowItWorks steps={SMS_PAGE.howItWorks} />
      <SellingPoints points={SMS_PAGE.sellingPoints} />
      <FinalCTA />
    </>
  );
}
