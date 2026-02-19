"use client";

import { motion } from "framer-motion";
import Layout from "./Layout";

export default function WhyNextSection() {
    return (
        <Layout id="whynext" className="py-16 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Sentence */}
                    <div className="text-left md:flex-1">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Why Next.js?</h2>
                        <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                            HTML로도 가능했지만, <br className="md:hidden" />
                            <span className="text-gray-900 font-bold">구조와 확장성</span>을 위해 Next.js로 재구성했습니다.
                        </p>
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden md:block w-px h-12 bg-gray-200" />

                    {/* Keywords */}
                    <div className="flex gap-3">
                        {["App Router", "next/image", "Metadata"].map((kw, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm"
                            >
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
}
