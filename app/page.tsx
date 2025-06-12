import { Suspense } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MyStrengths from "@/components/MyStrengths";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800">
      <Navigation />
      <div className="space-y-20 pb-20">
        <Hero />
        <About />
        <MyStrengths />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}