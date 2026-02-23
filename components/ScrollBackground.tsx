"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollBackgroundProps {
    children: ReactNode;
}

export default function ScrollBackground({ children }: ScrollBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 5 sections: Intro, Projects, Skills, Contact, Outro
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [
            "#FFF8FB", // Intro (Very Soft Pink)
            "#FFFFFF", // Projects (Clean White)
            "#EEF2FF", // Skills (Soft Indigo)
            "#F8FAFC", // Contact (Clean)
            "#FFF9FB", // Outro (Soft Finish)
        ]
    );

    return (
        <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-gray-200 selection:text-gray-900">
            {/* Fixed Background */}
            <motion.div
                className="fixed inset-0 -z-10 transition-colors duration-700 ease-in-out"
                style={{ backgroundColor }}
            />
            {children}
        </div>
    );
}
