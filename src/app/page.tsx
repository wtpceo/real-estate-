import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MarketInsightSection from "@/components/sections/MarketInsightSection";
import CoreMessageSection from "@/components/sections/CoreMessageSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import UsageSection from "@/components/sections/UsageSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <MarketInsightSection />
      <CoreMessageSection />
      <SolutionSection />
      <DifferenceSection />
      <UsageSection />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
