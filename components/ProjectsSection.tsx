"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Layout from "./Layout";

export default function ProjectsSection() {
    // Define exact project groups by Title or ID
    const topRowProjects = projects.filter(p => ["쉼온", "젤리주식", "듀센트"].includes(p.title));
    const bottomRowProjects = projects.filter(p => ["루멘", "센스가드"].includes(p.title));

    // Sort top row explicitly if needed (Shim On, Jelly, Dewscent in order)
    // projects array order: Lumen, Shim On, Jelly, Dewscent, Sense Guard
    // Filter preserves relative order, so Top Row will be: Shim On, Jelly, Dewscent. Correct.
    // Bottom Row will be: Lumen, Sense Guard. Correct.

    return (
        <Layout id="projects" className="py-24 bg-transparent">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Selected Works
                </h2>
                <div className="h-1 w-20 bg-gray-900 mx-auto rounded-full opacity-20" />
            </motion.div>

            <div className="max-w-5xl mx-auto flex flex-col gap-16">
                {/* Top Grid: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topRowProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} isFeatured={false} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Grid: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-4/5 lg:mx-auto">
                    {bottomRowProjects.map((project, index) => {
                        // Check if project is Lumen to pass isFeatured
                        const isFeatured = project.title === "루멘";
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} isFeatured={isFeatured} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}
