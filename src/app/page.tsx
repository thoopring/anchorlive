import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Solutions from "@/components/Solutions";
import Comparison from "@/components/Comparison";
import TechSpec from "@/components/TechSpec";
import UseCases from "@/components/UseCases";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <Comparison />
        <TechSpec />
        <UseCases />
        <Demo />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
