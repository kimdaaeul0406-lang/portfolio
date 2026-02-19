"use client";

import { motion } from "framer-motion";
import Layout from "./Layout";
import { trainingLearnings } from "../data/profile";

export default function TrainingSection() {
    return (
        <Layout id="training" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
            >
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Training & Learning
                    </h2>
                    <p className="text-gray-500 text-sm">
                        지속적인 학습과 성장의 기록
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <ul className="divide-y divide-gray-50">
                        {trainingLearnings.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="p-6 hover:bg-gray-50 transition-colors flex items-center gap-4 group"
                            >
                                <span className="text-xs font-mono text-gray-300 group-hover:text-gray-500 transition-colors">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <span className="text-gray-700 font-medium text-sm md:text-base">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </Layout>
    );
}
