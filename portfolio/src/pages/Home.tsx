import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";

import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Scroll Animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    // Handle fake loading state for the cool cinematic entrance
    const timer = setTimeout(() => {
      setLoading(false);
      // Refresh AOS after loader is gone to ensure proper calculations
      setTimeout(() => AOS.refresh(), 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-background min-h-screen text-foreground overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
