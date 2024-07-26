import CasesSection from "@/components/Cases";
import FeaturesSection from "@/components/Features";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
        <Hero />
        <Partners />
        <CasesSection />
        <FeaturesSection />
        <p className="leading-relaxed mb-16 mt-16 text-xl md:text-2xl">
             <span className="">Soon more about WHO we are and WHAT we do</span>
        </p>
    </main>
  );
}
