"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
    project: Project;
    isFeatured?: boolean;
}

export default function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
    return (
        <div
            className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 border
            ${isFeatured
                    ? 'bg-white border-blue-100 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1'}
            `}
        >
            {/* Image Container - Fixed height as requested */}
            <div className={`relative w-full overflow-hidden bg-gray-50 border-b border-gray-100
                ${isFeatured ? 'h-48' : 'h-36'}`}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority={isFeatured}
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 70vw" : "(max-width: 768px) 100vw, 40vw"}
                />

                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gray-900/[0.03] pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Content Section - Reduced Padding */}
            <div className={`flex flex-col flex-1 ${isFeatured ? 'p-6' : 'p-5'}`}>
                {/* Header */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
                            {project.title}
                        </h3>
                        {/* Featured Badge */}
                        {isFeatured && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                                Featured
                            </span>
                        )}
                    </div>

                    <p className={`text-gray-500 font-medium mb-4 leading-relaxed ${isFeatured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
                        {project.description}
                    </p>

                    {/* Tech Tags */}
                    {project.techStack && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`border px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide
                                    ${isFeatured
                                            ? 'bg-blue-50 text-blue-700 border-blue-100'
                                            : 'bg-gray-50 text-gray-600 border-gray-200'}`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Actions - Rebalanced Spacing */}
                <div className="flex gap-2 pt-4 border-t border-gray-50 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 text-xs font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-900 text-white text-xs font-semibold shadow-sm hover:bg-gray-800 hover:shadow-md transition-all active:scale-95"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
