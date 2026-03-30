import { ScarcityBanner }  from "@/components/ScarcityBanner";
import { Navbar }          from "@/components/Navbar";
import { Hero }            from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks }      from "@/components/HowItWorks";
import { Features }        from "@/components/Features";
import { WhatYouGet }      from "@/components/WhatYouGet";
import { Testimonials }    from "@/components/Testimonials";
import { Pricing }         from "@/components/Pricing";
import { LeadMagnet }      from "@/components/LeadMagnet";
import { FAQ }             from "@/components/FAQ";
import { FinalCTA }        from "@/components/FinalCTA";
import { SocialShare }     from "@/components/SocialShare";
import { Footer }          from "@/components/Footer";
import { FloatingCTA }     from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      {/* Scarcity banner sits above everything */}
      <ScarcityBanner />

      {/* Sticky navigation */}
      <Navbar />

      <main>
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Problem → Solution */}
        <ProblemSolution />

        {/* 3 — How It Works + Who It's For */}
        <HowItWorks />

        {/* 4 — What's Inside / Features */}
        <Features />

        {/* 5 — Full "What You Get" value breakdown */}
        <WhatYouGet />

        {/* 6 — Testimonials */}
        <Testimonials />

        {/* 7 — Pricing */}
        <Pricing />

        {/* 8 — Lead Magnet (free mini template) */}
        <LeadMagnet />

        {/* 9 — FAQ */}
        <FAQ />

        {/* 10 — Final CTA */}
        <FinalCTA />

        {/* Social share */}
        <SocialShare />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating mobile buy button */}
      <FloatingCTA />
    </>
  );
}
