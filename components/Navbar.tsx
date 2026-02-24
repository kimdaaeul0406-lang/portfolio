"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Training", href: "#training" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {scrolled && (
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 left-0 right-0 z-50"
                >
                    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4">
                        <div className="flex items-center justify-between bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-full px-6 py-2.5 shadow-sm">
                            {/* Logo / Name */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors tracking-tight"
                            >
                                Daseul.
                            </button>

                            {/* Nav Links */}
                            <div className="flex items-center gap-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="px-3.5 py-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-100/60 rounded-full transition-all"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
