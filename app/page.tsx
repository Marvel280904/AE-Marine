import HeroSection from "./components/home/HeroSection";
import SolutionSection from "./components/home/SolutionSection";
import ServiceSection from "./components/home/ServiceSection";
import CharterersSection from "./components/home/CharterersSection";
import CTASection from "./components/home/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SolutionSection />
      <ServiceSection />
      <CharterersSection />
      <CTASection />
    </main>
  );
}
