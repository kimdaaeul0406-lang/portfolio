"use client";

import { motion } from "framer-motion";
import Layout from "./Layout";
import { skills } from "../data/profile";

export default function SkillsSection() {
    // Explicit ordering for consistent layout with new AI category
    const orderedCategories = ["Frontend", "Backend", "AI & Data", "Deployment", "Tools"];

    return (
        <Layout id="skills" className="py-20 bg-transparent">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Skills
                    </h2>
                    <div className="h-1 w-12 bg-gray-900 mx-auto rounded-full opacity-20" />
                </div>

                {/* Grid Layout - Adapted for 5 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {orderedCategories.map((catName, index) => {
                        const category = skills.find(s => s.category === catName);
                        if (!category) return null;

                        // Layout Logic:
                        // Row 1: Frontend (3 cols), Backend (3 cols)
                        // Row 2: AI (2 cols), Deployment (2 cols), Tools (2 cols)
                        const gridClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-[0_8px_30px_rgba(196,181,253,0.12)] hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-500 ${gridClass}`}
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center justify-between">
                                    {category.category}
                                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                                        {category.skills.length} skills
                                    </span>
                                </h3>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center px-3.5 py-1.5 text-sm font-semibold text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </Layout>
    );
}
