# Ligado AI Website - Complete Handoff Document

Feed this to Claude Desktop to generate an overview doc covering all features, functionality, design, and architecture.

## Project Overview
- **Repo:** github.com/jordanpbarker/ligado-website
- **Framework:** Next.js 14.2.35 (App Router), React 18, Tailwind CSS 3.4.1, Framer Motion
- **Deployment:** Netlify with @netlify/plugin-nextjs
- **Local Dev:** `npm run dev` on port 3000

---

## Product: Ligado AI
AI receptionist for home service businesses (plumbers, electricians, HVAC, landscapers, roofers, painters, etc.). Single plan at **$199/mo**.

### Four Products
1. **AI Voice/Phone** - Answers every call 24/7 with natural voice, books appointments, sends full transcripts
2. **AI Text/SMS** - Instant intelligent text replies from a dedicated local phone number
3. **AI Chat Widget** - Embeddable website chat that qualifies visitors and captures leads
4. **Pro Website** - Professional website built, hosted, and maintained for the business (included)

### Pricing
- $199/mo, single tier, no contracts, cancel anytime
- 250 voice minutes included (~50 calls/month)
- Unlimited AI SMS and Chat
- Pro Website included
- Dedicated local phone number
- Instant lead alerts to owner's phone
- $0.30/min overage after 250 minutes
- Tagline: "Everything your front desk should be, for less than one missed job."

### Cross-Channel Features
- Instant lead alerts (SMS + email within 30 seconds)
- Automated follow-ups for leads who don't book
- Appointment reminders (24hr before)
- Appointment booking with calendar integration
- Lead capture & CRM pipeline
- AI brain custom-trained on each business
- After-hours coverage
- Emergency detection (burst pipe, gas leak = priority alert)
- TCPA compliant (AI discloses it's an AI)

---

## Site Structure

### Pages
| Route | Purpose |
|-------|---------|
| `/` | Homepage - hero (video bg), channel cards, pain points, cross-features, pricing snapshot, "Meet Alex" live demo, final CTA |
| `/ai-chat-widget` | Chat product page - animated chat mockup + activity timeline, how it works, selling points, lead alerts section |
| `/ai-text-sms` | SMS product page - iPhone-style SMS mockup + activity timeline |
| `/ai-voice-phone` | Voice product page - call UI with waveform + transcript + activity timeline |
| `/websites` | Pro Website product page |
| `/pricing` | Full pricing page |
| `/about` | Story, mission, values |
| `/book-a-demo` | Demo form (sends email via Resend to jordan@fractionaldemand.com) |
| `/privacy-policy` | Legal |
| `/terms` | Legal |

---

## Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Navy 950 | #0A0F1E | Primary dark background |
| Navy 900 | #0F172A | Panel backgrounds |
| Navy 800 | #1B2336 | Elevated surfaces |
| Navy 700 | #334155 | Borders, muted elements |
| Accent (Teal) | #2DD4BF | Primary CTA, interactive elements |
| Accent Hover | #14B8A6 | Hover state |

### Design Philosophy (Linear-inspired)
- **Surfaces:** `bg-white/[0.02]` with `border border-white/[0.08]`, hover brightens both
- **No glassmorphism** - solid/semi-transparent surfaces only
- **No gradient blur orbs** - removed
- **Background depth:** subtle radial gradients at very low opacity (3-4%) positioned at corners
- **No glow shadows** on buttons or cards
- **No scale animations on hover** - CSS transitions only (color, border, background)

### Typography
- Font: Inter (Google Fonts, weights 300-800)
- Hero: `text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight`
- Section headings: `text-3xl sm:text-4xl font-semibold tracking-tight`
- Card titles: `text-base font-medium`
- Badges: `text-xs font-medium tracking-wider uppercase` (plain text, no pill bg)
- No em dashes in copy (feels AI-generated)

### Border Radius
- Buttons: `rounded-md` (6px)
- Inputs: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Phone frames: `rounded-2xl`+

### Spacing (SectionContainer)
Three tiers via `spacing` prop: `tight` (py-12/16), `normal` (py-16/24), `breathing` (py-20/32)

### Animation (Framer Motion)
- Varied easing curves (not one curve everywhere)
- Varied durations (0.4s-0.55s)
- Irregular stagger delays
- Reduced animation count - not everything animates

---

## Key Features

### Live Demo ("Meet Alex")
- Section heading: "Meet Alex" with subtitle about trying the AI receptionist
- **Alex avatar** - cartoon character with teal headset (`/public/alex.png`)
- **Voice demo:** Vapi integration, real phone call to AI assistant
  - Activity timeline shows stages: Call Connected > Assessing Need > Lead Captured > Booking Appointment > Appointment Confirmed > Owner Notified
  - Stage detection via keyword analysis of transcript (tested against 14 scenarios)
  - Auto-hangup 15 seconds after "confirmed" stage
  - Owner Notified fires 2.5s after confirmed
- **Chat demo:** Proxied through `/api/chat` to avoid CORS
  - Initial greeting from Alex
  - Narrower widget (384px) to look like real chat widget
  - Vertical activity timeline sidebar (same stages, labeled "Chat Connected")
  - Strips ISO timestamp refs from AI responses

### Product Page Mockups
Each product page has an animated mockup with a synchronized activity timeline:
- **Chat:** Animated chat widget (left) + vertical timeline (right), messages appear with typing indicator
- **SMS:** iPhone-style frame (280px, Dynamic Island) + vertical timeline
- **Voice:** Call UI with waveform animation + live transcript that auto-scrolls + vertical timeline
- **All pages:** AlertsMockup section with channel-specific timeline data (configurable per channel)

### Demo Form
- Sends formatted HTML email via Resend
- From: "Ligado AI" / To: jordan@fractionaldemand.com
- Dark header with branding, clean table with all fields
- Fields: business name, owner name, phone, email, business type, message, SMS consent

---

## Integrations

### Vapi (Voice AI)
- Public key in `NEXT_PUBLIC_VAPI_PUBLIC_KEY`
- Demo assistant ID: `f00cc909-febd-48e6-af03-8c7716fa4b8b`
- Events: call-start, call-end, error, message (final transcripts only)

### Resend (Email)
- API key in `RESEND_API_KEY`
- Sends from `onboarding@resend.dev` (free tier, can only send to account owner email)
- Currently sends to jordan@fractionaldemand.com

### Ligado AI App (Chat Backend)
- URL in `NEXT_PUBLIC_LIGADO_APP_URL` (https://ligado-ai-app.netlify.app)
- Proxied through local `/api/chat` route to avoid CORS
- Request: `{ business_id, session_id, message, channel, history }`
- Response: `{ response, conversation_id, lead_captured, urgency }`
- Demo business ID: `859074c9-570c-482f-a184-6631f93e2bc8`

---

## Target Audience
Blue-collar home service business owners - solo operators and small crews. Plumbers, HVAC, electricians, landscapers, roofers, painters, general contractors, pest control, cleaning, handyman.

### Copy Tone
- Direct, no-BS, blue-collar friendly
- No em dashes
- No corporate speak
- Primary CTA: "Book a Demo"

### Brand Character: Alex
- AI receptionist persona for demos
- Demo company: Summit Plumbing Co.
- Avatar: cartoon guy with teal headset

---

## File Structure
```
src/
  app/
    page.js                     # Homepage
    globals.css                 # Global styles, surface-card class
    favicon.ico
    ai-chat-widget/page.js
    ai-text-sms/page.js
    ai-voice-phone/page.js
    websites/page.js
    pricing/page.js
    about/page.js
    book-a-demo/page.js
    privacy-policy/page.js
    terms/page.js
    api/chat/route.js           # Chat proxy
    api/demo/route.js           # Demo form -> Resend email
  components/
    home/                       # Hero, ChannelCards, CrossFeatures, PainPoints, LiveDemoSection, PricingSnapshot, FinalCTA
    features/                   # ChatMockup, SmsMockup, VoiceMockup, AlertsMockup, FeatureHero, HowItWorks, SellingPoints
    demo/                       # LiveDemo (voice+chat), DemoForm
    ui/                         # Button, Card, Badge, SectionContainer, SectionHeading, AlexAvatar, Icons
    layout/                     # Navbar, Footer, MobileMenu
    animation/                  # FadeIn, StaggerChildren
  lib/
    constants.js                # All copy, pricing, nav links, conversation data
    animations.js               # Framer Motion presets
public/
    alex.png                    # Alex avatar
    logo.png                    # Logo mark
    video/hero.mp4              # Hero background video
tailwind.config.js              # Colors, fonts, animations
```

---

## Company
- **Legal entity:** J Bone Investments LLC d/b/a Ligato AI
- **Mission:** Make sure no home service pro ever loses a job because they couldn't answer the phone.
- **Values:** Speed Over Complexity, Built for the Trades, Always Available
