"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Sparkles } from "lucide-react";
import Layout from "./Layout";

const trainingData = {
    education: {
        school: "BHA 영진직업전문학교",
        course: "생성형 AI 기반 UI/UX 디자인 웹앱 컨텐츠 개발",
        period: "수료",
    },
    awards: [
        {
            title: "루멘 송암전 최우수상",
            project: "루멘",
            description: "AI 기반 사주/타로 서비스 프로젝트로 최우수상 수상",
        },
    ],
};

export default function TrainingSection() {
    return (
        <Layout id="training" className="py-20 bg-transparent">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Training & Awards
                    </h2>
                    <div className="h-1 w-12 bg-gray-900 mx-auto rounded-full opacity-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="relative bg-gradient-to-br from-indigo-50/40 via-white to-sky-50/30 rounded-2xl p-8 shadow-sm border border-indigo-100/80 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    >


                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-indigo-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Education</h3>
                                <span className="text-xs font-medium text-indigo-400 tracking-wider uppercase">교육 이력</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 to-sky-50/50 border border-indigo-100/60">
                                <p className="font-semibold text-gray-800 mb-1.5 text-base">
                                    {trainingData.education.school}
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                                    {trainingData.education.course}
                                </p>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-semibold text-indigo-500 border border-indigo-100 shadow-sm">
                                    <Sparkles className="w-3 h-3" />
                                    {trainingData.education.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Awards Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative bg-gradient-to-br from-amber-50/40 via-white to-yellow-50/30 rounded-2xl p-8 shadow-sm border border-amber-100/80 hover:shadow-[0_12px_40px_rgba(245,158,11,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    >


                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Awards</h3>
                                <span className="text-xs font-medium text-amber-400 tracking-wider uppercase">수상 이력</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {trainingData.awards.map((award, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-gradient-to-br from-amber-50/80 to-yellow-50/50 border border-amber-100/60"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <Trophy className="w-4 h-4 text-amber-500" />
                                        <p className="font-semibold text-gray-800 text-base">
                                            {award.title}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                                        {award.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-semibold text-amber-600 border border-amber-100 shadow-sm">
                                        프로젝트: {award.project}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Layout>
    );
}
