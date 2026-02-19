"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Layout from "./Layout";

export default function ProjectsSection() {
    return (
        <Layout id="projects" className="py-24 bg-transparent">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => {
                    const isFeatured = index === 0;

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={isFeatured ? "md:col-span-2" : ""}
                        >
                            <ProjectCard project={project} isFeatured={isFeatured} />
                        </motion.div>
                    );
                })}
            </div>
        </Layout>
    );
}
