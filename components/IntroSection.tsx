"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Layout from "./Layout";

export default function IntroSection() {
    const keywords = ["Pastel UI", "Responsive Web", "AI + Data"];

    return (
        <Layout id="intro" className="min-h-screen items-center text-center relative overflow-hidden" maxWidth="max-w-[1920px]">
            {/* Floating Pastel Blobs */}
            <div className="absolute inset-0 -z-1 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full opacity-40 blur-[100px]"
                    style={{ background: "linear-gradient(135deg, #FECDD3, #FDE68A)", top: "-10%", left: "-10%" }}
                    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full opacity-35 blur-[100px]"
                    style={{ background: "linear-gradient(135deg, #C7D2FE, #BAE6FD)", top: "30%", right: "-10%" }}
                    animate={{ y: [0, 25, 0], x: [0, -20, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full opacity-30 blur-[100px]"
                    style={{ background: "linear-gradient(135deg, #DDD6FE, #FBCFE8)", bottom: "-5%", left: "20%" }}
                    animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.03, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center relative z-10 w-full px-6 py-12 md:py-28"
            >
                {/* Profile Photo */}
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-2 border-white shadow-lg bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center">
                    <Image
                        src="/profile.jpg"
                        alt="김다슬"
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            target.parentElement!.innerHTML = '<span class="text-3xl font-bold text-gray-300">D</span>';
                        }}
                    />
                </div>

                {/* Label */}
                <span className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider text-gray-500 uppercase bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm">
                    Frontend Developer · Daseul
                </span>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-6xl font-light text-gray-900 leading-snug md:leading-tight tracking-tight mb-6 break-keep text-balance">
                    감성은 설계하고,&nbsp;<br className="hidden md:block" />
                    <span className="font-semibold text-gray-800">기능은 끝까지 구현합니다.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm md:text-lg text-gray-500 font-medium leading-relaxed mb-10 max-w-3xl break-keep text-balance">
                    PHP 풀스택부터 Next.js + AI까지,&nbsp;<br className="hidden md:block" />
                    매 프로젝트마다 기술의 폭을 넓혀온 주니어 개발자입니다.
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {keywords.map((keyword, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                            className="px-4 py-2 text-sm rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-600 shadow-sm hover:shadow-md hover:border-pink-200 hover:bg-pink-50/40 transition-all cursor-default"
                        >
                            {keyword}
                        </motion.span>
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
