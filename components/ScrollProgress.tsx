"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #f9a8d4, #c4b5fd, #7dd3fc)",
            }}
        />
    );
}
