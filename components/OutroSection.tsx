"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Layout from "./Layout";

export default function OutroSection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Layout id="outro" className="py-24 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
                        매 프로젝트를 통해 배우고 확장해왔습니다.<br />
                        앞으로도 저만의 시선으로,<br />
                        <span className="font-medium text-gray-900">더 나은 결과를 만들어가고자 합니다.</span>
                    </h3>
                </div>

                <div className="w-10 h-px bg-gray-300 mx-auto mb-16" />

                <button
                    onClick={scrollToTop}
                    className="group flex flex-col items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors mx-auto"
                >
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-white transition-all duration-300">
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </button>

                <footer className="mt-20 text-xs text-gray-400 font-mono tracking-wider">
                    <p>© 2026 Daseul. All rights reserved.</p>
                </footer>
            </motion.div>
        </Layout>
    );
}
