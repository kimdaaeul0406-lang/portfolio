"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUp, Mail, Copy, Check } from "lucide-react";
import Layout from "./Layout";
import { profile } from "../data/profile";

export default function OutroSection() {
    const [copied, setCopied] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Layout id="outro" className="py-24 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
                        매 프로젝트를 통해 배우고 확장해왔습니다.<br />
                        앞으로도 저만의 시선으로,<br />
                        <span className="font-medium text-gray-900">더 나은 결과를 만들어가고자 합니다.</span>
                    </h3>
                </div>

                {/* Contact CTA */}
                <div className="mb-16">
                    <p className="text-sm text-gray-400 mb-4">함께 일하고 싶으시다면</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all active:scale-95"
                        >
                            <Mail className="w-4 h-4" /> 메일 보내기
                        </a>
                        <button
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                        >
                            {copied ? (<><Check className="w-4 h-4" /> 복사됨!</>) : (<><Copy className="w-4 h-4" /> 이메일 복사</>)}
                        </button>
                    </div>
                </div>

                <div className="w-10 h-px bg-gray-300 mx-auto mb-16" />

                <button
                    onClick={scrollToTop}
                    className="group flex flex-col items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors mx-auto"
                >
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-sky-200 group-hover:bg-sky-50 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-sky-100">
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </button>

                <footer className="mt-20 text-xs text-gray-400 font-mono tracking-wider">
                    <p>© {new Date().getFullYear()} Daseul. All rights reserved.</p>
                </footer>
            </motion.div>
        </Layout>
    );
}
