import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PeriodicTable from "@/components/PeriodicTable";
import ThingsIveBuilt from "@/components/ThingsIveBuilt";
import ThePathSoFar from "@/components/ThePathSoFar";
import ProofInNumbers from "@/components/ProofInNumbers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-neutral-900 selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <PeriodicTable />
      <ThingsIveBuilt />
      <ThePathSoFar />
      <ProofInNumbers />
      <Footer />
    </main>
  );
}
