"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "./Layout";
import { profile } from "../data/profile";
import { Eye, EyeOff, Github, User, Calendar, Phone } from "lucide-react";

export default function ContactSection() {
    const [showPhone, setShowPhone] = useState(false);

    // Simple masking logic
    const maskedPhone = profile.phone
        ? profile.phone.replace(/(\d{3})-\d{4}-(\d{4})/, "$1-****-$2")
        : "";

    return (
        <Layout id="contact" className="py-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Contact
                    </h2>
                    <div className="h-1 w-12 bg-gray-900 mx-auto rounded-full opacity-20" />
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {/* Essential Info */}
                        <div className="p-8 space-y-6 flex flex-col justify-center bg-gray-50/50">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</p>
                                    <p className="text-gray-900 font-medium">{profile.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Birth</p>
                                    <p className="text-gray-900 font-medium">{profile.birth}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Actionable */}
                        <div className="p-8 space-y-8">
                            {/* Email */}
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</p>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-lg font-medium text-gray-900 hover:text-blue-600 hover:underline decoration-blue-200 underline-offset-4 transition-all"
                                >
                                    {profile.email}
                                </a>
                            </div>

                            {/* Phone - only show if available */}
                            {profile.phone && (
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-semibold font-mono text-gray-900 tracking-[0.35em]">
                                            {showPhone ? profile.phone : maskedPhone}
                                        </span>
                                        <button
                                            onClick={() => setShowPhone(!showPhone)}
                                            className="text-gray-400 hover:text-gray-900 transition-colors"
                                        >
                                            {showPhone ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Github */}
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">GitHub</p>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full"
                                >
                                    <Github className="w-4 h-4" />
                                    Visit GitHub Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
}
