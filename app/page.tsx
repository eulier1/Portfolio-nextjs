import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <p className="leading-relaxed mb-16 text-xl md:text-2xl">
             <span className="">Soon more about WHO we are and WHAT we do</span>
        </p>
    </main>
  );
}
