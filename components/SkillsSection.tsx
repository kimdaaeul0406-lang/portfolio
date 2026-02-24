"use client";

import { motion } from "framer-motion";
import Layout from "./Layout";
import { skills } from "../data/profile";

// Only border + title get color, everything else stays neutral
const categoryTheme: Record<string, { border: string; hover: string }> = {
    Frontend: { border: "border-sky-300", hover: "hover:bg-sky-50 hover:text-sky-600" },
    Backend: { border: "border-teal-300", hover: "hover:bg-teal-50 hover:text-teal-600" },
    "AI & Data": { border: "border-purple-300", hover: "hover:bg-purple-50 hover:text-purple-600" },
    Deployment: { border: "border-orange-300", hover: "hover:bg-orange-50 hover:text-orange-600" },
    Tools: { border: "border-pink-300", hover: "hover:bg-pink-50 hover:text-pink-600" },
};

export default function SkillsSection() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {orderedCategories.map((catName, index) => {
                        const category = skills.find(s => s.category === catName);
                        if (!category) return null;

                        const theme = categoryTheme[catName] ?? categoryTheme.Frontend;
                        const gridClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`bg-white p-8 rounded-2xl shadow-sm border ${theme.border} hover:shadow-[0_8px_30px_rgba(196,181,253,0.12)] hover:-translate-y-0.5 transition-all duration-500 ${gridClass}`}
                            >
                                <h3 className="text-lg font-bold mb-6 border-b border-gray-100 pb-3 flex items-center justify-between text-gray-900">
                                    {category.category}
                                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                                        {category.skills.length} skills
                                    </span>
                                </h3>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`inline-flex items-center px-3.5 py-1.5 text-sm font-semibold text-gray-700 bg-gray-50 rounded-lg ${theme.hover} transition-colors duration-300 cursor-default`}
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
