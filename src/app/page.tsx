import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import SplitSection from "@/components/SplitSection";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <CTA />
      <Mission />
      <SplitSection />
      <Footer />
    </main>
  );
}
