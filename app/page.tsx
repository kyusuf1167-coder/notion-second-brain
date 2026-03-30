import { ScarcityBanner } from "@/components/ScarcityBanner";
import { Navbar }         from "@/components/Navbar";
import { Hero }           from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features }       from "@/components/Features";
import { Testimonials }   from "@/components/Testimonials";
import { Pricing }        from "@/components/Pricing";
import { LeadMagnet }     from "@/components/LeadMagnet";
import { FAQ }            from "@/components/FAQ";
import { FinalCTA }       from "@/components/FinalCTA";
import { SocialShare }    from "@/components/SocialShare";
import { Footer }         from "@/components/Footer";
import { FloatingCTA }    from "@/components/FloatingCTA";

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

        {/* 3 — What's Inside / Features */}
        <Features />

        {/* 4 — Testimonials */}
        <Testimonials />

        {/* 5 — Pricing */}
        <Pricing />

        {/* 6 — Lead Magnet (free mini template) */}
        <LeadMagnet />

        {/* 7 — FAQ */}
        <FAQ />

        {/* 8 — Final CTA */}
        <FinalCTA />

        {/* Social share */}
        <SocialShare />
      </main>

      {/* 9 — Footer */}
      <Footer />

      {/* Floating mobile buy button */}
      <FloatingCTA />
    </>
  );
}
