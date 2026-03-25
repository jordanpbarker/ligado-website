# Ligato AI — Cost Structure & Pricing Analysis

**Date:** March 2026
**Price Point:** $499/month (all-inclusive)
**Products Included:** AI Chat Widget, AI Text/SMS, AI Voice/Phone, Pro Website

---

## Per-Customer Monthly Cost Breakdown

### Voice Calls (biggest cost driver)

| Component | Cost | Notes |
|-----------|------|-------|
| Twilio phone number | $1.15/mo | Local US number |
| Twilio inbound voice | $0.0085/min | Raw telephony |
| Vapi.ai platform | $0.05/min | Orchestration layer |
| STT (transcription) | ~$0.01/min | Via Vapi |
| TTS (voice synthesis) | ~$0.04/min | Via Vapi |
| Claude API (Haiku 3.5) | ~$0.002/call | ~2K input + 800 output tokens |
| **All-in voice cost** | **~$0.11–0.15/min** | Conservative estimate |

**Voice cost by usage level:**

| Minutes/mo | Cost @ $0.13/min | % of $499 price |
|------------|-------------------|-----------------|
| 200 min | $26 | 5% |
| 500 min | $65 | 13% |
| 1,000 min | $130 | 26% |
| 2,000 min | $260 | 52% |

### SMS/Text

| Component | Cost | Notes |
|-----------|------|-------|
| Twilio SMS | $0.0083/segment | Send + receive |
| Claude API | ~$0.001/conversation | Haiku 3.5 tokens |
| **All-in SMS cost** | **~$0.02/conversation** | Negligible |

200 SMS conversations/mo = ~$4

### Chat Widget

| Component | Cost | Notes |
|-----------|------|-------|
| Claude API | ~$0.001/conversation | Haiku 3.5 |
| Infrastructure | $0 | Runs on existing stack |
| **All-in chat cost** | **~$0.001/conversation** | Basically free |

### Website (Boots & Pixels)

| Component | Cost | Notes |
|-----------|------|-------|
| Netlify hosting | $0 | Free tier covers it |
| Build labor | One-time ~2–4 hrs | Amortized over subscription lifetime |
| Ongoing edits | ~30 min/mo avg | Team's time |

### Fixed Infrastructure (amortized across all customers)

| Component | Monthly Cost | Per-customer @ 50 customers |
|-----------|-------------|----------------------------|
| Supabase Pro | $25 | $0.50 |
| Resend (email alerts) | $0–20 | $0–0.40 |
| Cal.com (self-hosted) | $0 | $0 |
| Netlify (marketing site) | $0 | $0 |
| **Total fixed** | **~$25–45** | **~$0.50–1.00** |

---

## Total Per-Customer Cost Scenarios

| Scenario | Voice Min | SMS Convos | Chat Convos | Infra | **Total Cost** | **Margin on $499** |
|----------|-----------|------------|-------------|-------|----------------|-------------------|
| Light user | 200 min | 100 | 200 | $1 | **~$32/mo** | **$467 (94%)** |
| Medium user | 500 min | 200 | 500 | $1 | **~$71/mo** | **$428 (86%)** |
| Heavy user | 1,000 min | 400 | 1,000 | $1 | **~$137/mo** | **$362 (73%)** |
| Power user | 2,000 min | 600 | 2,000 | $1 | **~$267/mo** | **$232 (47%)** |

---

## Competitor Pricing Comparison

| Competitor | Price | What's Included | Pricing Model |
|------------|-------|-----------------|---------------|
| Rosie AI | $49–199/mo | 250–1,000 voice min | Per-minute overage ($0.25/min) |
| Goodcall | $59–199/mo | Unlimited minutes | Per unique caller ($0.50 overage) |
| Smith.ai (AI) | $95–270/mo | 50–150 calls | Per-call overage ($2.30–2.40) |
| My AI Front Desk | $65–119/mo | 200+ min | Tiered |
| AIReception | $14–199/mo | 60–400 min | Tiered |
| Dialzara | $29–99/mo | 60+ min | Per-minute overage ($0.48/min) |
| Slang.ai | $399–599/mo | Unlimited | Per-location (restaurants) |
| Ruby (human) | $235–1,640/mo | 50–500 min | Per-minute (live humans) |

**Key takeaway:** Most competitors charge $49–199/mo for **voice only**. Ligato at $499 includes voice + SMS + chat + website — the bundle justifies the premium pricing. No competitor bundles all four.

---

## Recommended Minute Structure Options

### Option A: Unlimited (simplest pitch)
- Just eat the cost. Average small business will use 200–500 min/mo.
- Risk: Power users at 2,000+ min cut margins to ~47%.
- Mitigation: Fair use policy, flag accounts over 2,000 min/mo.
- **Pro:** Dead-simple selling point — "unlimited everything."

### Option B: 1,000 minutes included, $0.25/min overage
- Covers 95%+ of small home service businesses comfortably.
- Way more generous than any competitor at this price.
- Still 73%+ margin even if they use all 1,000 minutes.
- Overage rate matches Rosie AI — industry standard.
- **Pro:** Predictable costs, generous, easy to explain.

### Option C: 500 minutes included, $0.20/min overage
- More conservative, still generous vs competitors.
- 86% margin at full usage.
- Most solo operators / small crews won't hit 500 min/mo.
- **Pro:** Higher margins, room to "upgrade" if needed.

---

## Hidden/Overlooked Costs

1. **Twilio carrier surcharges** — add ~$0.003–0.006/SMS on top of base rate
2. **Number porting fees** — $0–1 one-time if customers want to port an existing number
3. **Vapi concurrent call limits** — may need to upgrade plan for multiple simultaneous calls per business
4. **Claude prompt caching** — can reduce token costs by up to 90% for system prompts (should use this)
5. **Support/onboarding time** — your team's time to configure each business's AI brain (~1–2 hrs)
6. **Website build labor** — 2–4 hours per site, amortized over the customer's lifetime
7. **Churn risk** — customer acquisition cost vs. lifetime value; month-to-month means churn matters

---

## Bottom Line

At $499/mo with the average customer using ~500 voice minutes, ~200 SMS conversations, and ~500 chat conversations:

- **Cost to serve: ~$71/mo**
- **Gross margin: ~$428/mo (86%)**
- **Annual margin per customer: ~$5,136**

Even at heavy usage (1,000 voice minutes), margins stay above 70%. The voice minutes are the only cost that moves the needle — chat and SMS are essentially free. The website is a one-time build cost amortized over the subscription.

**Decision:** Option B — 1,000 voice minutes included, $0.25/min overage. Chat and SMS are unlimited. This is what's live on the site.
