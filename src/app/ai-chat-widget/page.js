import { CHAT_WIDGET_PAGE, CHAT_ALERTS } from '@/lib/constants';
import FeatureHero from '@/components/features/FeatureHero';
import ChatMockup from '@/components/features/ChatMockup';
import HowItWorks from '@/components/features/HowItWorks';
import SellingPoints from '@/components/features/SellingPoints';
import AlertsMockup from '@/components/features/AlertsMockup';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'AI Chat Widget | Ligato AI',
  description: 'Turn website visitors into booked jobs with an AI chat assistant that knows your business. Converts leads 24/7.',
};

export default function AiChatWidgetPage() {
  return (
    <>
      <FeatureHero
        badge={CHAT_WIDGET_PAGE.badge}
        headline={CHAT_WIDGET_PAGE.headline}
        subheadline={CHAT_WIDGET_PAGE.subheadline}
      />
      <ChatMockup />
      <HowItWorks steps={CHAT_WIDGET_PAGE.howItWorks} />
      <SellingPoints points={CHAT_WIDGET_PAGE.sellingPoints} />
      <AlertsMockup
        badge={CHAT_ALERTS.badge}
        headline={CHAT_ALERTS.headline}
        description={CHAT_ALERTS.description}
        timeline={CHAT_ALERTS.timeline}
      />
      <FinalCTA />
    </>
  );
}
