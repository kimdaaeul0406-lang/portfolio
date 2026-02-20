"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import ProjectsSection from "../components/ProjectsSection";

import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import OutroSection from "../components/OutroSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background color interpolation based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "#FFF8FB", // Intro (Very Soft Pink)
      "#FFFFFF", // Projects (Clean White)
      "#F8FAFC", // WhyNext (Structured)
      "#EEF2FF", // Skills (Soft Indigo)
      "#F8FAFC", // Contact (Clean)
      "#FFF9FB", // Outro (Soft Finish)
    ]
  );

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-gray-200 selection:text-gray-900">
      <Navbar />

      {/* Fixed Background */}
      <motion.div
        className="fixed inset-0 -z-10 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor }}
      />

      {/* Main Content Assembly */}
      <main className="w-full relative z-10">
        <IntroSection />
        <ProjectsSection />

        <SkillsSection />
        <ContactSection />
        <OutroSection />
      </main>
    </div>
  );
}
