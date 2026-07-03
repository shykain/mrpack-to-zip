import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TechnicalDetails } from "@/components/sections/TechnicalDetails";
import { UsageGuide } from "@/components/sections/UsageGuide";
import { FAQ } from "@/components/sections/FAQ";
import { LauncherCompat } from "@/components/sections/LauncherCompat";
import { FormatInfo } from "@/components/sections/FormatInfo";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <TechnicalDetails />
        <UsageGuide />
        <FAQ />
        <LauncherCompat />
        <FormatInfo />
      </main>
      <Footer />
    </div>
  );
}
