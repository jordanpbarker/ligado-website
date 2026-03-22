# Pricing Overview + Cost Structure

> **Product rename:** This was previously filed under "Ringer AI." The product is now **Legato AI** as of March 2026.
> 

---

**Date:** March 2026

**Price point under analysis:** $499/month (all-inclusive)

**Products included:** AI Voice, AI SMS/Text, AI Chat Widget, Pro Website

---

# 📞 Voice Calls — The Main Cost Driver

Voice is the core product and the biggest variable cost. Everything else is essentially rounding error.

## Per-Minute Cost Breakdown

| Component | Cost | Notes |
| --- | --- | --- |
| Twilio phone number | $1.15/mo | Local US number, one per client |
| Twilio inbound voice | $0.0085/min | Raw telephony |
| [Vapi.ai](http://Vapi.ai) platform | $0.05/min | Orchestration layer |
| STT (transcription) | ~$0.01/min | Via Vapi |
| TTS (voice synthesis) | ~$0.04/min | Via Vapi / ElevenLabs |
| Claude API (Haiku 3.5) | ~$0.002/call | ~2K input + 800 output tokens |
| **All-in voice cost** | **~$0.11–0.15/min** | Use $0.13 as working estimate |

## Voice Cost by Usage Level

| Minutes/mo | Cost @ $0.13/min | % of $499 price |
| --- | --- | --- |
| 200 min | $26 | 5% |
| 500 min | $65 | 13% |
| 1,000 min | $130 | 26% |
| 2,000 min | $260 | 52% |

> Voice minutes are the only cost line that can actually threaten margins. A power user at 2,000+ min/mo compresses margin to ~47%. Everything else — SMS, chat — is noise.
> 

---

# 📱 SMS / Text

| Component | Cost | Notes |
| --- | --- | --- |
| Twilio SMS | $0.0083/segment | Send + receive |
| Claude API | ~$0.001/conversation | Haiku 3.5 tokens |
| **All-in SMS cost** | **~$0.02/conversation** | Effectively negligible |

**200 SMS conversations/mo ≈ $4 total**

---

# 💬 Chat Widget

| Component | Cost | Notes |
| --- | --- | --- |
| Claude API | ~$0.001/conversation | Haiku 3.5 |
| Infrastructure | $0 | Runs on existing stack |
| **All-in chat cost** | **~$0.001/conversation** | Basically free |

---

# 🌐 Website (Boots & Pixels)

| Component | Notes |
| --- | --- |
| Netlify hosting | Free tier covers it |
| Build labor | One-time ~2–4 hrs, amortized over subscription lifetime |
| Ongoing edits | ~30 min/mo average |

---

# 🏗️ Fixed Infrastructure (Amortized Across All Customers)

| Component | Monthly Cost | Per-customer @ 50 customers |
| --- | --- | --- |
| Supabase Pro | $25 | $0.50 |
| Resend (email alerts) | $0–20 | $0–0.40 |
| Netlify (marketing site) | $0 | $0 |
| **Total fixed** | **~$25–45** | **~$0.50–1.00** |

---

# 📊 Total Per-Customer Cost Scenarios

| Scenario | Voice Min | SMS Convos | Chat Convos | Infra | **Total Cost** | **Margin on $499** |
| --- | --- | --- | --- | --- | --- | --- |
| Light user | 200 min | 100 | 200 | $1 | **~$32/mo** | **$467 (94%)** |
| Medium user | 500 min | 200 | 500 | $1 | **~$71/mo** | **$428 (86%)** |
| Heavy user | 1,000 min | 400 | 1,000 | $1 | **~$137/mo** | **$362 (73%)** |
| Power user | 2,000 min | 600 | 2,000 | $1 | **~$267/mo** | **$232 (47%)** |

> **Bottom line:** At the expected average (~500 voice min, ~200 SMS, ~500 chat) — cost to serve is **~$71/mo**, gross margin is **~$428/mo (86%)**, and **~$5,136/year per customer** in gross profit.
> 

---

# 🏁 Competitor Pricing Comparison

| Competitor | Price | What's Included | Model |
| --- | --- | --- | --- |
| Rosie AI | $49–199/mo | 250–1,000 voice min | Per-minute overage ($0.25/min) |
| Goodcall | $59–199/mo | Unlimited minutes | Per unique caller ($0.50 overage) |
| [Smith.ai](http://Smith.ai) (AI) | $95–270/mo | 50–150 calls | Per-call overage ($2.30–2.40) |
| My AI Front Desk | $65–119/mo | 200+ min | Tiered |
| AIReception | $14–199/mo | 60–400 min | Tiered |
| Dialzara | $29–99/mo | 60+ min | Per-minute overage ($0.48/min) |
| [Slang.ai](http://Slang.ai) | $399–599/mo | Unlimited | Per-location (restaurants) |
| Ruby (human) | $235–1,640/mo | 50–500 min | Live humans |

> **Key insight:** Most competitors charge $49–199/mo for voice *only*. Legato at $499 bundles voice + SMS + chat + website. **No competitor bundles all four.** The premium is justified.
> 

---

# 🎚️ Minute Tier Options for Launch

## Option A — Unlimited (Simplest Pitch)

Just eat the cost. Average small business will use 200–500 min/mo. Risk: power users at 2,000+ min cut margins to ~47%. Mitigation: fair use policy, flag accounts over 2,000 min/mo.

**Pro:** Dead-simple selling point — "unlimited everything."

**Con:** Exposure on high-volume accounts without a safety valve.

## Option B — 1,000 Minutes Included, $0.25/min Overage ✅ Recommended

Covers 95%+ of home service businesses comfortably. More generous than any competitor at this price point. Margin stays above 73% even at full usage. Overage rate matches Rosie AI (industry standard).

**Pro:** Predictable costs, generous, easy to explain, protects against outliers.

## Option C — 500 Minutes Included, $0.20/min Overage

More conservative. Still generous vs. competitors. Most solo operators won't hit 500 min/mo. Higher margins with room to upgrade.

**Pro:** Higher floor margins, leaves headroom.

---

# ⚠️ Hidden & Overlooked Costs

These were either missing or understated in the initial analysis. The **Cost Type** column is critical — not everything here is per-customer.

| Cost | Estimate | Cost Type | Notes |
| --- | --- | --- | --- |
| **Stripe processing fees** | **~$14.80/mo** | **Per customer** | **2.9% + $0.30 on $499. ~$178/year per customer. Most commonly missed line item.** |
| Twilio carrier surcharges | +$0.003–0.006/SMS | Per customer | On top of base Twilio SMS rate — easy to miss, small but real |
| Number porting | $0–1 one-time | Per customer (optional) | Only if client wants to keep their existing number |
| Support + onboarding time | ~1–2 hrs/client | Per customer (labor) | Time to configure each AI brain — real cost even if not tracked in P&L |
| Website build labor | 2–4 hrs/site | Per customer, one-time (labor) | Amortized over subscription lifetime |
| **A2P 10DLC registration** | **~$19/mo total** | **✅ Platform-wide (shared — NOT per customer)** | **One brand registration + one campaign in Twilio Trust Hub covers ALL client numbers. ~$4 brand fee + $15 campaign fee/mo. At 50 clients = $0.38/customer/mo.** |
| Vapi concurrent call limits | Varies by plan | Platform-wide | Plan upgrade needed only if multiple clients have overlapping simultaneous inbound calls |
| **ElevenLabs (if direct)** | **~$5–22/mo** | **Platform-wide** | **Only if routing TTS outside of Vapi. Verify this isn't double-counted with the Vapi TTS line.** |
| Claude prompt caching | Saves up to 90% on system prompt tokens | Savings lever (not a cost) | Should be implemented — biggest opportunity to reduce per-call Claude spend |
| Churn risk | — | — | Month-to-month means LTV math is sensitive to churn rate |

> **Stripe fees (~$14.80/mo) are the biggest per-customer cost that's easy to forget.** Everything else in this table is either a platform-wide shared cost or a one-time labor item. A2P 10DLC in particular is ~$19/mo flat across your entire customer base — not a per-client fee.
> 

---

# 📐 Revised Margin w/ Stripe Fees

Voice minutes are the primary cost driver. SMS and chat are essentially free at any usage level.

| Scenario | Who This Is | Voice Min/mo | Cost to Serve | Stripe Fee | True Net | True Margin |
| --- | --- | --- | --- | --- | --- | --- |
| **Light user** | Solo operator, mostly on-site, low inbound call volume. Phone rings a few times a day but many are existing customers. AI handles occasional overflow. | **~200 min** | ~$32 | ~$14.80 | ~$452 | **91%** |
| **Medium user** | Small crew, active lead flow. Misses 4–6 calls/day. AI handles a mix of new leads and customer questions. **This is the expected average customer.** | **~500 min** | ~$71 | ~$14.80 | ~$413 | **83%** |
| **Heavy user** | Busy contractor, high inbound volume — seasonal spikes (HVAC in summer, plumber in winter), active marketing driving calls. AI handles most overflow. | **~1,000 min** | ~$137 | ~$14.80 | ~$347 | **70%** |
| **Power user** | Multi-crew operation or very high call volume. AI is essentially the primary answering layer, not just overflow. Rare at this price point — flag for review. | **~2,000 min** | ~$267 | ~$14.80 | ~$217 | **44%** |

> **For context on real-world usage:** A 5-minute AI call is typical for a qualified lead (greeting + FAQ + contact capture). At 200 min/mo that's ~40 calls handled. At 500 min/mo it's ~100 calls. Most solo home service operators get 5–15 inbound calls/day — the majority of which Legato would handle in 2–4 minutes each. **Medium user is the right baseline for pricing conversations.**
> 

---

# ✅ Recommendation

**Go with Option B (1,000 minutes included, $0.25/min overage) at launch.**

- Generous enough to be a selling point
- Protects you from the 2%–3% of power users who'd erode margins
- Matches industry-standard overage rates
- Easy to explain in a sales conversation
- You can shift to unlimited once you have 6 months of real usage data to back it