"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Layout from "./Layout";

export default function IntroSection() {
    const keywords = ["Pastel UI", "Responsive Web", "AI + Data"];

    return (
        <Layout id="intro" className="min-h-screen items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                {/* Label */}
                <span className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider text-gray-500 uppercase bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm">
                    Frontend Developer · Daseul
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                    감성은 설계하고,<br className="hidden md:block" />
                    <span className="font-normal text-gray-800">기능은 끝까지 구현합니다.</span>
                </h1>

                {/* Keywords */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {keywords.map((keyword, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 text-sm rounded-full bg-white/60 border border-gray-200 text-gray-600 shadow-sm hover:shadow-md transition-shadow cursor-default"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-full text-sm font-medium transition-all hover:bg-gray-800 hover:shadow-xl active:scale-95"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>
        </Layout>
    );
}
