"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for the page to be fully loaded
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
                >
                    {/* Logo Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                            Daseul.
                        </h1>

                        {/* Underline animation */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 origin-left rounded-full"
                        />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="mt-6 text-sm text-gray-400 font-medium tracking-wider"
                    >
                        Software Creator
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
