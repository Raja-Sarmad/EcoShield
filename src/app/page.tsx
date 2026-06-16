import HeroSection from "@/components/home/HeroSection";
import ProblemSolution from "@/components/home/ProblemSolution";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import HowItWorks from "@/components/home/HowItWorks";
import TestingPreview from "@/components/home/TestingPreview";
import ShopPreview from "@/components/home/ShopPreview";
import SustainabilityBanner from "@/components/home/SustainabilityBanner";
import TeamPreview from "@/components/home/TeamPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <BenefitsGrid />
      <HowItWorks />
      <TestingPreview />
      <ShopPreview />
      <SustainabilityBanner />
      <TeamPreview/>
    </>
  );
}