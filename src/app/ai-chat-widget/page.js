import { CHAT_WIDGET_PAGE } from '@/lib/constants';
import FeatureHero from '@/components/features/FeatureHero';
import ChatMockup from '@/components/features/ChatMockup';
import HowItWorks from '@/components/features/HowItWorks';
import SellingPoints from '@/components/features/SellingPoints';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'AI Chat Widget — Ligato AI',
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
      <FinalCTA />
    </>
  );
}
