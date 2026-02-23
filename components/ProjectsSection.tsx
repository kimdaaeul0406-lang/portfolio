"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";
import { Project } from "../types";
import Layout from "./Layout";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Filter by stable IDs instead of title strings
    const topRowProjects = projects.filter(p => [1, 2, 3].includes(p.id));
    const bottomRowProjects = projects.filter(p => [4, 5].includes(p.id));

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
                            <ProjectCard
                                project={project}
                                isFeatured={false}
                                onSelect={() => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Grid: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-4/5 lg:mx-auto">
                    {bottomRowProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard
                                project={project}
                                isFeatured={true}
                                onSelect={() => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Layout>
    );
}
