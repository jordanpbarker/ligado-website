import { WEBSITE_PAGE, WEBSITE_ALERTS } from '@/lib/constants';
import FeatureHero from '@/components/features/FeatureHero';
import WebsiteMockup from '@/components/features/WebsiteMockup';
import HowItWorks from '@/components/features/HowItWorks';
import SellingPoints from '@/components/features/SellingPoints';
import AlertsMockup from '@/components/features/AlertsMockup';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Pro Website | Ligato AI',
  description: 'Don\'t have a website? We\'ll build a professional, mobile-friendly site for your trade business, included in your Ligato AI plan.',
};

export default function WebsitesPage() {
  return (
    <>
      <FeatureHero
        badge={WEBSITE_PAGE.badge}
        headline={WEBSITE_PAGE.headline}
        subheadline={WEBSITE_PAGE.subheadline}
      />
      <WebsiteMockup />
      <HowItWorks steps={WEBSITE_PAGE.howItWorks} />
      <SellingPoints points={WEBSITE_PAGE.sellingPoints} />
      <AlertsMockup
        badge={WEBSITE_ALERTS.badge}
        headline={WEBSITE_ALERTS.headline}
        description={WEBSITE_ALERTS.description}
        timeline={WEBSITE_ALERTS.timeline}
      />
      <FinalCTA />
    </>
  );
}
