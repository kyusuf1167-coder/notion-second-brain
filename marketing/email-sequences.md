# Email Sequences — Second Brain Vault

## PURCHASE SEQUENCE (triggered by Stripe webhook)

---

### Email 1 — Delivery (Immediate, already live)
**Subject:** 🧠 Your Second Brain is ready — here's your access link!
→ Already implemented in webhook/route.ts

---

### Email 2 — Day 3 Check-in (send via Resend scheduled/manual)
**Subject:** Did you get started? Quick tip for your first 10 minutes

**Body:**
Hey [first name],

You got your Second Brain 3 days ago. If you haven't set it up yet — completely normal.
Here's how to get started in exactly 10 minutes:

**The 10-Minute First Setup:**

1. Open your workspace → click the 🏠 Master Home Dashboard
2. Open ✅ GTD Task Manager → do a "brain dump" — type everything on your mind into Inbox (5 min)
3. Open 🎯 Goals & OKRs → add your single most important goal for this quarter (3 min)
4. Open 📅 Weekly Planner → create this week's entry and pick your Top 3 priorities (2 min)

That's it. You're live.

The rest of the dashboards can wait. These 3 are your foundation.

Questions? Just reply to this email.

— Second Brain Vault

P.S. The 25-page Quick-Start PDF is inside your workspace under the Resources section if you want to go deeper.

---

### Email 3 — Day 7 Value Add
**Subject:** The Sunday habit that makes everything click (+ a quick win)

**Body:**
Hey,

One week in. Here's the single habit that separates people who get real value from their Second Brain vs. those who let it collect dust:

**The 10-Minute Sunday Review**

Every Sunday, open 📅 Weekly Planner and do this:
1. Write last week's 3 biggest wins (even small ones count)
2. Write 1 thing you'd do differently
3. Set this week's Theme (one word: "Focus", "Outreach", "Recovery", "Momentum")
4. Pick your Top 3 non-negotiable priorities

That's it. 10 minutes. But it compounds.

After 4 Sundays you'll have a pattern of what actually moves the needle for you. After 12 Sundays you'll have a quarterly review that writes itself.

**Quick win for this week:**
Go to your 💪 Habit Tracker and add exactly 3 habits. Not 7. Not 10. Three.

Keep them small enough that you'd be embarrassed NOT to do them. "Read 5 pages" not "Read for 30 minutes." The streak is the point.

You've got a powerful system. Use it consistently and it genuinely changes how you operate.

— Second Brain Vault

---

### Email 4 — Day 14 Social Proof Ask
**Subject:** Quick favor? (+ here's something free)

**Body:**
Hey,

Two weeks with your Second Brain.

If it's been useful — even a little — would you mind sharing it?

You can:
→ Tweet/post about it (tag us and we'll retweet)
→ Tell one person who's always complaining about being overwhelmed
→ Leave a quick review/comment anywhere you hang out online

Word of mouth is how small products like this grow. If you've gotten value, sharing it is the most direct way to say thank you.

As a thank-you in advance — here's a bonus: **The 30-Day Deep Work Challenge Template**

[LINK TO BONUS TEMPLATE]

30 days. One high-value skill. One hour per day. Structured exactly like the 7-Day Focus Sprint but scaled up.

Thanks for being a customer.

— Second Brain Vault

---

## LEAD MAGNET SEQUENCE (triggered by email signup)

### Email 1 — Delivery (Immediate, already live)
**Subject:** 🎁 Your Free 7-Day Focus Sprint Template is here!
→ Already implemented in subscribe/route.ts

---

### Email 2 — Day 2 Follow-up
**Subject:** Did the Focus Sprint work? (+ the full system)

**Body:**
Hey,

Yesterday you grabbed the 7-Day Focus Sprint template.

Quick check-in: did you fill in your goal for the week?

If not — do it right now. Takes 2 minutes. Having one clear focus beats a list of 20 things every single time.

---

The Sprint is the lightweight version. If you're finding yourself wishing it connected to your tasks, goals, habits, and knowledge — that's exactly what the full Second Brain system does.

12 dashboards. All pre-built. All connected. Pre-loaded with sample data so you're never starting from scratch.

→ secondbrainvault.com — $49 one-time, no subscription

Not trying to hard-sell you. Just want to make sure you know it exists if the free template opened something up for you.

— Second Brain Vault

---

### Email 3 — Day 5 Final Nudge
**Subject:** Last thing I'll say about this

**Body:**
Hey,

One last note and then I'll leave you alone (unless you want more tips — just reply).

The most common thing people say after buying the Second Brain:

*"I wish I'd done this earlier."*

Not because it's magic. Because having one place for everything removes the low-level anxiety of not knowing what you're supposed to be doing.

If you've been thinking about it → secondbrainvault.com

30-day money-back if it's not right for you. Zero risk.

That's it from me. Go build something good.

— Second Brain Vault

---

## HOW TO SET UP EMAIL SEQUENCES

**Option A — Manual (free, works now):**
- Export buyer emails from Stripe Dashboard monthly
- Use Resend Broadcasts to send Day 3, 7, and 14 emails manually

**Option B — Automated (recommended when you hit 50+ sales):**
1. Add a contacts database to Resend (Resend Audiences)
2. In webhook/route.ts, after sending the delivery email, also call:
   `resend.contacts.create({ email, audienceId: AUDIENCE_ID })`
3. Set up drip sequences in Resend → Broadcasts → Automations

**Option C — ConvertKit/Beehiiv (best for scaling):**
- Free up to 1,000 subscribers on ConvertKit
- Add subscriber via API on purchase
- Build visual automation sequence
