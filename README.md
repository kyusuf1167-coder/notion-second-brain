# The Ultimate 2026 Notion Second Brain — Sales Site

A production-ready Next.js 15 landing page + Stripe checkout for a $49 Notion template bundle.

---

## Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Fill in all values — see comments in the file

# 3. Run the dev server
npm run dev
# → http://localhost:3000
```

### Environment variables you need

| Variable | Where to get it |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys (test: `sk_test_...`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Same page (test: `pk_test_...`) |
| `STRIPE_WEBHOOK_SECRET` | Run `stripe listen` CLI (see below) |
| `STRIPE_PRICE_ID` | Create a product in Stripe Dashboard → Products → Add product → $49 one-time |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` for local |
| `NEXT_PUBLIC_NOTION_TEMPLATE_URL` | Your Notion template → Share → "Allow duplicate as template" → copy link |

### Test Stripe webhooks locally

```bash
# Install Stripe CLI (macOS)
brew install stripe/stripe-cli/stripe

# Authenticate
stripe login

# Forward events to your local server
stripe listen --forward-to localhost:3000/api/webhook

# Copy the webhook signing secret (whsec_...) → paste to STRIPE_WEBHOOK_SECRET

# Trigger a test payment
stripe trigger checkout.session.completed
```

### Test card numbers

| Card | Number | Use |
|---|---|---|
| Visa (success) | `4242 4242 4242 4242` | Normal purchase |
| Declined | `4000 0000 0000 9995` | Test error handling |
| Requires auth | `4000 0025 0000 3155` | 3DS flow |

Use any future expiry date, any 3-digit CVC, any ZIP.

---

## Deploy to Vercel (under 10 minutes)

1. **Push to GitHub** — create a repo and push this folder.

2. **Import on Vercel**
   - Go to vercel.com/new
   - Click "Import Git Repository" → select your repo
   - Framework preset: **Next.js** (auto-detected)
   - Click **Deploy** (first deploy uses placeholder env vars — fix next)

3. **Add environment variables**
   - Vercel Dashboard → your project → Settings → Environment Variables
   - Add all variables from `.env.local.example` with your **live** values
   - Update `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://secondbrain.so`)

4. **Swap to live Stripe keys**
   ```
   STRIPE_SECRET_KEY              → sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY → pk_live_...
   STRIPE_PRICE_ID                → price_... (from live mode product)
   ```

5. **Add production webhook in Stripe**
   - Stripe Dashboard → Developers → Webhooks → Add endpoint
   - URL: `https://your-domain.com/api/webhook`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`
   - Copy signing secret → update `STRIPE_WEBHOOK_SECRET` in Vercel

6. **Redeploy** — Vercel auto-redeploys on each GitHub push.

---

## Where to swap test → live keys

| File | What to change |
|---|---|
| `.env.local` | `sk_test_` → `sk_live_`, `pk_test_` → `pk_live_` |
| `lib/stripe.ts` | No code changes — reads from env |
| `app/api/checkout/route.ts` | No code changes — reads `PRICE_ID` from env |
| Stripe Dashboard | Create live product → copy live `price_ID` |

---

## Folder Structure

```
notion-second-brain/
├── app/
│   ├── layout.tsx            # Root layout, SEO metadata, JSON-LD schema
│   ├── page.tsx              # Landing page (assembles all sections)
│   ├── globals.css           # Tailwind base + custom utilities
│   ├── thank-you/
│   │   └── page.tsx          # Protected delivery page (verifies Stripe session)
│   └── api/
│       ├── checkout/
│       │   └── route.ts      # Creates Stripe Checkout Session
│       └── webhook/
│           └── route.ts      # Stripe webhook handler (email delivery hook)
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Primary/secondary/outline buttons
│   │   └── Badge.tsx         # Coloured badge chips
│   ├── ScarcityBanner.tsx    # Top scarcity/urgency bar
│   ├── Navbar.tsx            # Sticky nav with mobile drawer
│   ├── ThemeToggle.tsx       # Dark/light mode switch
│   ├── Hero.tsx              # Hero section + dashboard preview
│   ├── ProblemSolution.tsx   # Before/after two-column
│   ├── Features.tsx          # 12-template grid
│   ├── Testimonials.tsx      # Masonry testimonials
│   ├── Pricing.tsx           # Pricing card + comparison table
│   ├── LeadMagnet.tsx        # Free mini template email opt-in
│   ├── FAQ.tsx               # Animated accordion, 12 questions
│   ├── FinalCTA.tsx          # Bottom CTA with guarantees
│   ├── SocialShare.tsx       # Share on X + copy link
│   ├── FloatingCTA.tsx       # Mobile sticky buy button
│   └── Footer.tsx            # Links + social + legal
├── lib/
│   ├── stripe.ts             # Stripe client singleton
│   └── utils.ts              # cn() helper
├── .env.local.example        # All required env vars with comments
├── next.config.ts            # Image domains, security headers
├── tailwind.config.ts        # Custom brand colours, animations
└── package.json
```

---

## Adding email delivery

Two options — both require a short API route:

### Option A: Resend (recommended — free tier: 3,000 emails/month)

```bash
npm install resend
```

In `app/api/webhook/route.ts`, uncomment the Resend block and add:

```bash
# .env.local
RESEND_API_KEY=re_...
```

### Option B: Mailchimp

Uncomment the Mailchimp block in the webhook handler and add:

```bash
MAILCHIMP_API_KEY=...
MAILCHIMP_AUDIENCE_ID=...
```

---

---

# Free Promotion & Launch Plan 2026

## Overview

You have a $49 digital product with zero COGS. Your only job is distribution. Here's how to generate sales from day one without spending a dollar on ads.

---

## 1. TikTok / Instagram Reels / YouTube Shorts

**Strategy:** "Transformation" format — messy chaos → clean Notion system. Post 3× per week for 30 days.

### Ready-to-post scripts

**Script 1 — "I replaced 6 apps with Notion"**
> Hook (0-3s): *[Screen recording of 6 app icons]* "I was paying for 6 different apps to stay productive. I cut it down to one."
> Middle: *[Show the Second Brain dashboard]* Walk through Home Dashboard, Project Hub, Goals Tracker.
> CTA: "Link in bio to get the full bundle — $49, no subscription."

**Script 2 — "How I capture every idea before it disappears"**
> Hook: "If you lose ideas in the shower, this Notion setup will fix that."
> Demo: Quick capture → Idea Incubator database → filter view of incubated ideas.
> CTA: "I'll send you the free mini template — comment 'BRAIN' and I'll DM you."

**Script 3 — "The productivity system I wish I had at 22"**
> Personal story: What chaos felt like. What clarity feels like now.
> Screen share your weekly planner and habit tracker filling in for 60 seconds.
> CTA: "2026 Second Brain bundle — link in bio. 30-day money back, instant access."

**Script 4 — "I built my whole year in one afternoon"**
> Show the Goals → Quarterly → Weekly → Daily breakdown.
> Time-lapse of filling in the annual goals.
> CTA: "If you want this setup, it's in the Second Brain bundle. $49 for all 12 dashboards."

**Script 5 — "Notion setup that took me 200 hours to build — yours in 5 minutes"**
> Dev-style: "I spent 200 hours building and testing this system so you don't have to."
> Quick feature tour.
> "Link in bio, $49 one-time, no subscription, 30-day refund."

---

## 2. Pinterest

**Strategy:** Create a "Productivity & Notion" board. Pin 3-5 images daily. Pinterest has 3-6 month SEO lag — start immediately.

### 5 pin ideas

1. **"12 Notion Dashboards for 2026"** — screenshot collage with title overlay. Link → your landing page.
2. **"The Ultimate Second Brain Setup"** — clean infographic of the 12 modules. Brand your URL at the bottom.
3. **"Notion GTD System — Step by Step"** — carousel-style educational pin. Ends with "Full system: [your URL]"
4. **"How to Organise Your Whole Life in Notion"** — tip-list pin (5 tips). Tip 5: "Or just duplicate our pre-built workspace."
5. **"Notion Template for Entrepreneurs 2026"** — aspirational lifestyle + productivity framing.

**Captions (copy-paste):**
> "Stop losing ideas and missing deadlines. This Notion Second Brain bundles 12 dashboards, 50+ templates, and a full GTD system. One-time $49 → link in bio. #NotionTemplate #Productivity2026 #SecondBrain"

---

## 3. Reddit

**Rules:** Never post a direct sales link on your first comment. Add value first, then drop the link naturally or in DMs.

### Target subreddits

- r/Notion (~200k members)
- r/productivity (~2M members)
- r/sidehustle (~500k members)
- r/LifeProTips
- r/digitalnomad

### Post templates

**Post 1 — r/Notion**
> **Title:** "I spent 6 months building a full Second Brain in Notion — here's everything I learned (plus the template)"
>
> *Long-form post sharing 5-7 genuine lessons about building a Notion system. Screenshots throughout. At the end:* "I packaged the whole thing into a bundle anyone can duplicate. Happy to share the link if useful — just ask in the comments."

**Post 2 — r/productivity**
> **Title:** "Replaced Todoist, Notion (basic), Google Calendar, Notion AI notes, Evernote, and Bear with one Notion workspace. Here's how."
>
> Comparison walkthrough. Genuine pros/cons. Link in comments if asked.

**Post 3 — r/sidehustle**
> **Title:** "My Notion template hit $2k in its first 30 days. Here's the exact launch playbook I used."
>
> Transparent breakdown of channels, conversion rates, what worked/didn't. Community loves this. Product link is natural context.

---

## 4. Threads + LinkedIn + X (Twitter) Threads

### X thread template

> **Tweet 1:** "I replaced 6 productivity apps with one Notion workspace. Here's the exact system (thread) 🧵"
>
> **Tweet 2:** "The problem: I had tasks in Todoist, notes in Bear, goals in a Google Sheet, ideas in Apple Notes, projects in Asana, and finances in Excel. Nothing talked to each other."
>
> **Tweet 3:** "The solution: build a Second Brain where every piece of information is linked. Here's the architecture:"
>
> *[Tweet 4-8: Walk through each major dashboard with a screenshot or description]*
>
> **Tweet 9:** "It took me 200+ hours to build and test. I packaged it as a Notion template anyone can duplicate in 5 minutes."
>
> **Tweet 10:** "12 dashboards. 50+ templates. $49 one-time, lifetime updates, 30-day money back. Link: [your URL]"

### LinkedIn post

> **Hook:** "I lost 2.5 hours every day to disorganisation. Then I built a system that fixed it."
>
> [Describe the problem in 3 bullet points]
> [Describe the solution in 3 bullet points]
>
> "I've packaged this as a Notion template bundle — 12 dashboards, 50+ templates, $49 once. Happy to share the link in the comments for anyone who wants it."
>
> P.S. If you're managing projects for a team, DM me — I have a team licence.

### Threads post (shorter)

> "The most underrated productivity move in 2026: build a Notion Second Brain.
> Not just a task list. An actual system where goals link to projects, projects link to tasks, tasks link to your weekly planner.
> I built one from scratch. Now I'm selling it for $49. Link in bio."

---

## 5. Facebook Groups

### Target groups (search these keywords)
- "Notion templates"
- "productivity system"
- "digital minimalism"
- "online business tools"
- "remote work tools 2026"

### Post approach

**Value-first post (works in most groups):**
> "Hey everyone — I've been building in Notion for 3 years and finally packaged my full Second Brain setup. Happy to share a free mini template (7-Day Focus Sprint) for anyone who comments 'FOCUS'. No catch — just share the link and I'll DM you."
>
> This drives engagement, DMs, and warm leads who then see the full $49 product.

---

## 6. SEO Blog Post Ideas

Write one 2,000-word post per week. Target long-tail, buyer-intent keywords.

### 3 Starter titles (high search volume, low competition)

1. **"The Best Notion Second Brain Template for 2026 (+ Free Download)"**
   - Target keyword: `notion second brain template 2026`
   - Include: what a second brain is, why Notion, full feature walkthrough, comparison table vs alternatives, download CTA.

2. **"How to Build a GTD System in Notion: Step-by-Step for Beginners"**
   - Target keyword: `notion GTD template`
   - Include: explain GTD, 5-step workflow, screenshots of your GTD dashboard, CTA for the full bundle.

3. **"50+ Free Notion Templates (and the One Paid Bundle Worth It in 2026)"**
   - Target keyword: `notion templates free`
   - Include: curated list of genuinely free templates, then at the end compare to your paid bundle and why it's worth $49.

**SEO tips:**
- Add your landing page URL at the top and bottom of each post.
- Use your Notion template screenshots as images (alt text: "Notion second brain dashboard template 2026").
- Submit each post to Google Search Console within 24 hours of publishing.

---

## 7. Gumroad Cross-Listing

**Why:** Gumroad has its own built-in discovery and search. Buyers find you organically.

1. Create a Gumroad account at gumroad.com
2. List the product at $49 (match your site price)
3. Description: copy/paste your landing page copy
4. Set up a custom delivery page (paste the Notion duplicate link or use Gumroad's automatic delivery)
5. Add tags: `notion`, `productivity`, `second brain`, `template`, `2026`
6. Gumroad takes 10% — factor this in or slightly raise price to $54 on Gumroad

---

## 8. Viral Sharing Mechanics (Already Built Into the Site)

The site includes these conversion + virality features:

| Feature | Where | Purpose |
|---|---|---|
| Social share buttons | Footer of thank-you page | Buyers share after purchase |
| "Share on X" button | `/components/SocialShare.tsx` | Pre-written tweet for landing page visitors |
| "Copy link" button | Same component | Easy sharing |
| Free mini template | `/components/LeadMagnet.tsx` | Email list growth + warm lead nurture |
| Testimonial + result badges | `/components/Testimonials.tsx` | Social proof that gets screenshotted |

### Boost virality further

- **Referral programme (optional):** Use Rewardful or LemonSqueezy's affiliate feature. Give 20% commission. 10 affiliates each driving 5 sales = 50 extra sales at zero cost to you.
- **"Tag a friend" post:** Monthly TikTok: "Tag someone who needs to get organised in 2026." Comments = algorithm reach.
- **Buyer UGC:** Email buyers 7 days post-purchase: "Screenshot your favourite dashboard and tag us — we'll repost." Free content + social proof.

---

## Launch Week Checklist

- [ ] Deploy to Vercel with live Stripe keys
- [ ] Create Stripe product + price, update env vars
- [ ] Set your Notion template to "Allow duplicate" and update `NEXT_PUBLIC_NOTION_TEMPLATE_URL`
- [ ] Post Day-1 TikTok (Script 1 above)
- [ ] Post X thread
- [ ] Post in 3 Reddit communities (value-first approach)
- [ ] List on Gumroad
- [ ] Post in 5 Facebook Groups
- [ ] Publish first SEO blog post
- [ ] Set up Pinterest board with 5 pins
- [ ] Send to your existing email list / social following
- [ ] Reply to every comment on every platform for the first 7 days (algorithm signal)

---

*Built with Next.js 15, Tailwind CSS, Framer Motion, and Stripe.*
