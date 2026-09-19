import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HardwareSection } from "@/components/HardwareSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingModel } from "@/components/PricingModel";
import { ServiceCompany } from "@/components/ServiceCompany";
import { RemoteControl } from "@/components/RemoteControl";
import { Calculator } from "@/components/Calculator";
import { TargetCustomers } from "@/components/TargetCustomers";
import { BusinessScenarios } from "@/components/BusinessScenarios";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <HardwareSection />
        <HowItWorks />
        <PricingModel />
        <ServiceCompany />
        <RemoteControl />
        <Calculator />
        <TargetCustomers />
        <BusinessScenarios />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
