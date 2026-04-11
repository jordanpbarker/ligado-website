import { ALERTS_PAGE } from '@/lib/constants';
import FeatureHero from '@/components/features/FeatureHero';
import AlertsMockup from '@/components/features/AlertsMockup';
import HowItWorks from '@/components/features/HowItWorks';
import SellingPoints from '@/components/features/SellingPoints';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Lead Alerts & Follow-Ups | Ligato AI',
  description: 'Instant owner alerts, automated follow-ups for leads who don\'t book, and appointment reminders. No lead left behind.',
};

export default function LeadAlertsPage() {
  return (
    <>
      <FeatureHero
        badge={ALERTS_PAGE.badge}
        headline={ALERTS_PAGE.headline}
        subheadline={ALERTS_PAGE.subheadline}
      />
      <AlertsMockup />
      <HowItWorks steps={ALERTS_PAGE.howItWorks} />
      <SellingPoints points={ALERTS_PAGE.sellingPoints} />
      <FinalCTA />
    </>
  );
}
