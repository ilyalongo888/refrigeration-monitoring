import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ControlLevels } from "@/components/ControlLevels";
import { Pricing } from "@/components/Pricing";
import { Diagnostics } from "@/components/Diagnostics";
import { Industries } from "@/components/Industries";
import { DashboardDemo } from "@/components/DashboardDemo";
import { Benefits } from "@/components/Benefits";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <ControlLevels />
        <Pricing />
        <Diagnostics />
        <Industries />
        <DashboardDemo />
        <Benefits />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
