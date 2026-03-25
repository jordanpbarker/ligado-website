# Ligato AI — Website Handoff

**Domain:** getligado.com
**Purpose:** Marketing site for Ligato AI — an AI-powered communication assistant for home service businesses. The site sells the product directly to business owners (plumbers, HVAC techs, electricians, landscapers, roofers, painters, general contractors).

---

## Product Overview

Ligato AI is an AI receptionist that handles all inbound customer communication for home service businesses. One AI "brain" is trained on each business and handles three channels:

1. **AI Chat Widget** — embeddable on the business's website
2. **AI Text/SMS** — responds to inbound texts on a dedicated business number
3. **AI Voice/Phone** — answers overflow or all inbound calls with a natural AI voice

All three channels share the same AI brain, so the assistant knows the business's services, hours, service area, pricing guidance, and FAQs regardless of how the customer reaches out.

**Pricing:** $499/month flat rate. All three channels included. No per-message or per-call fees.

**Primary CTA:** "Book a Demo"

---

## The Three Components (Service Pages)

Each component should have its own dedicated page with feature details, use cases, and how it works.

### 1. AI Chat Widget

**What it does:**
- Embeds on any website with a single script tag
- Customizable colors and branding (matches the business's site)
- AI greets visitors after 8 seconds of idle browsing (configurable greeting text)
- Captures lead info naturally through conversation (name, phone, email, job type)
- Handles booking — checks real calendar availability and books appointments mid-conversation
- TCPA-compliant — AI never claims to be human, discloses it's an AI assistant
- The AI persona has a configurable name (e.g., "Alex", "Sam") — feels like a real team member

**Key selling points:**
- Converts website visitors into leads 24/7 — even at 2am
- No forms to fill out — the AI collects info through natural conversation
- Instant response vs. "we'll get back to you" contact forms
- Knows the business's services, hours, and service area — gives accurate answers, not generic chatbot nonsense
- Can book appointments directly (integrates with Cal.com)

**How it works (animation/demo opportunity):**
- Visitor lands on website → chat bubble appears in corner
- After 8 seconds, greeting bubble pops up: "Hi! I'm Alex with Ace Plumbing. Have a question?"
- Visitor clicks → chat opens → has a real conversation
- AI collects name + phone naturally → owner gets an SMS/email alert within 30 seconds
- If visitor wants to book → AI shows available slots → books it on the spot

**Demo opportunity:** An actual working chat widget could be embedded on the Ligato website itself as a live demo. The widget is a self-contained JS file that can be dropped onto any page.

---

### 2. AI Text/SMS

**What it does:**
- Each business gets a dedicated local phone number (via Twilio)
- When customers text that number, the same AI brain responds
- Maintains conversation context within a session — remembers what was said earlier in the thread
- Captures lead info (name, phone, email, job type) just like chat
- Can book appointments via text conversation
- Owner gets instant SMS/email alerts on new leads
- Owner can jump in and reply manually at any time (takes over from AI)

**Key selling points:**
- 98% open rate on SMS vs. 20% on email — customers actually read texts
- Customers can text back anytime — AI picks up instantly
- No app to download — works with any phone's native texting
- Perfect for "text us" CTAs on yard signs, truck wraps, business cards, Google Business Profile
- After-hours coverage — AI responds even when the owner is on a job or sleeping

**How it works (animation opportunity):**
- Customer sees phone number on truck wrap / yard sign / Google listing
- Texts: "Hey, do you guys do sprinkler repair?"
- AI responds in seconds with a personalized, knowledgeable answer
- Conversation flows naturally → AI captures name + job details
- Owner gets alert: "New lead from Mike S. — sprinkler repair in Murray"

---

### 3. AI Voice/Phone

**What it does:**
- AI answers inbound calls with a natural-sounding voice (text-to-speech, not robotic)
- Same AI brain as chat and SMS — knows the business inside and out
- Handles the full call: greets caller, answers questions about services/hours/area, captures contact info
- Can check calendar availability and book appointments during the call
- Full call transcript logged and stored — owner can read every word
- Emergency keyword detection — if caller mentions "burst pipe", "gas leak", etc., owner gets an immediate emergency alert
- Configurable as overflow-only (rings to owner first, AI picks up if no answer) or always-on

**Key selling points:**
- Never miss a call again — AI picks up every time
- No voicemail black hole — callers get real answers, not "leave a message"
- Full transcript of every call — owner knows exactly what was discussed
- Emergency detection — owner gets alerted immediately for urgent situations
- Professional first impression — AI sounds like a knowledgeable team member, not a phone tree

**How it works (animation opportunity):**
- Customer calls the business number
- AI answers: "Thanks for calling Ace Plumbing! I'm Alex, how can I help you today?"
- Caller describes their issue → AI asks smart follow-up questions
- AI captures name + phone + job type → offers to book an appointment
- Call ends → owner gets SMS alert + full transcript in dashboard
- Owner reviews transcript and follows up if needed

---

## Cross-Cutting Features (Apply to All Three Channels)

These features should be highlighted on the main landing page or a features overview section:

### Instant Owner Alerts
- SMS and/or email alert within 30 seconds of every new lead
- Alert includes: customer name, phone, job type, channel, urgency level, and a direct link to the conversation
- Emergency alerts flagged separately for urgent situations

### AI Brain Training
- Each business gets a custom-trained AI brain
- Configured through a simple form: business name, services offered, service area, hours, FAQs
- Trade-specific knowledge built in (plumbing, HVAC, landscaping, electrical, etc.)
- Custom instructions field for business-specific quirks ("we don't do commercial work", "always mention our 10% senior discount")
- No coding required — fill out the form and the AI is ready

### Lead Capture & CRM
- Every conversation (chat, text, call) is logged with full transcript
- Contact info extracted automatically — name, phone, email, job type
- Built-in CRM pipeline: New Lead → Contacted → Quoted → Booked → Completed → Lost
- All leads in one place regardless of channel

### Appointment Booking
- Integrates with Cal.com for real-time availability
- AI checks open slots and books appointments mid-conversation
- Works across all three channels
- Customer gets a confirmation email automatically

### After-Hours Coverage
- AI knows the business's hours and adjusts its behavior accordingly
- During hours: full service, answers questions, books appointments
- After hours: lets the caller/texter know they're closed, collects contact info, promises a callback
- Owner wakes up to a list of leads, not missed calls

### TCPA Compliance
- AI never claims to be human
- Discloses it's an AI assistant when asked
- Consent language displayed in chat widget
- Persona is a named assistant (e.g., "Alex"), not a fake person

---

## Who This Is For

**Primary audience:** Solo operators and small teams (1-10 people) in blue-collar home service trades:
- Plumbers
- HVAC technicians
- Electricians
- Landscapers
- Roofers
- Painters
- General contractors
- Pest control
- Cleaning services
- Handyman services

**Pain points to hit:**
- "I miss calls when I'm on a job and lose the lead"
- "I can't afford a receptionist"
- "Customers fill out my contact form and I don't see it for hours"
- "I lose jobs to the competitor who answers the phone first"
- "I'm working until 7pm but customers are searching at 9pm"
- "I hate voicemail — nobody leaves messages anymore, they just call the next guy"

**Key message:** Ligato AI is the first employee every solo operator can actually afford. $499/month for a receptionist that works 24/7, never calls in sick, and handles chat, text, and phone — all trained on your specific business.

---

## Pricing

**Single tier: $499/month**
- All three channels included (chat, SMS, voice)
- Unlimited conversations
- Custom AI brain trained on your business
- Instant lead alerts (SMS + email)
- Full conversation transcripts
- Built-in CRM pipeline
- Appointment booking integration
- After-hours coverage
- Trade-specific AI knowledge

No setup fees. No per-message fees. No contracts (month-to-month).

---

## Technical Details for Website Implementation

### Live Chat Widget Demo
The Ligato chat widget can be embedded on the marketing site as a live demo. It's a single JavaScript file:

```html
<script src="https://[app-domain]/widget.js?id=DEMO_BUSINESS_ID"></script>
```

The widget is self-contained (React bundled in), renders in a fixed-position container at bottom-right, and doesn't conflict with page styles. Colors, greeting text, and persona name are all configurable per business.

### How the Product Works (Technical Flow — For Accuracy in Copy)

**Chat flow:**
1. Script tag loads widget on business's website
2. Visitor types a message → POST to Ligato API
3. API routes message to Claude AI with the business's custom system prompt
4. AI responds with business-specific knowledge
5. As conversation progresses, AI naturally asks for name + phone
6. Once captured → contact saved to DB → owner alert fires (SMS + email)
7. If booking-enabled → AI can check calendar + book appointment mid-chat

**SMS flow:**
1. Business gets a dedicated local phone number
2. Customer texts that number
3. Twilio webhook hits Ligato API
4. Same AI brain responds via the same Claude system prompt
5. Reply sent back through Twilio as an SMS
6. Owner can take over the conversation manually at any time

**Voice flow:**
1. Calls route to Ligato via Twilio → Vapi.ai
2. Vapi runs Claude as the AI brain with the business's system prompt
3. AI has a natural voice conversation (OpenAI TTS voice)
4. After the call ends, full transcript is logged
5. Contact info + job type extracted from transcript
6. Owner gets SMS/email alert with call summary

### Underlying Tech (Not for the marketing site — just for dev context)
- Frontend: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Backend: Next.js API routes (serverless)
- Database: Supabase (Postgres)
- AI: Claude API (Anthropic)
- Voice: Vapi.ai
- SMS/Phone: Twilio
- Booking: Cal.com integration
- Email alerts: Resend

---

## Content Needs / Page Structure Suggestions

### Suggested pages:
1. **Home / Landing** — hero + value prop + 3-channel overview + social proof + pricing + CTA
2. **AI Chat Widget** — dedicated feature page
3. **AI Text/SMS** — dedicated feature page
4. **AI Voice/Phone** — dedicated feature page
5. **Pricing** — single tier, keep it simple, FAQ section
6. **Book a Demo** — form or calendar embed (Cal.com or Calendly)
7. **About** — Boots & Pixels backstory, why we built this

### Animation / Visual Opportunities:
- **Chat widget demo** — live or animated mockup showing a real conversation flow
- **Phone screen mockup** — SMS conversation between customer and AI
- **Call visualization** — animated waveform or phone ringing → AI answering → transcript appearing
- **Alert notification** — mockup of the owner's phone receiving an SMS alert
- **Before/After** — "Without Ligato: missed call → lost lead" vs. "With Ligato: AI answers → lead captured → owner alerted"
- **3-channel diagram** — visual showing chat, SMS, and voice all feeding into one AI brain → one dashboard

### Tone:
- Direct, no-BS, blue-collar friendly
- Not corporate or enterprise-y
- Speak to the owner who's on a roof or under a sink, not a VP of Operations
- Short sentences. Clear value. No jargon.
- "Stop losing jobs to the guy who answers the phone first."
