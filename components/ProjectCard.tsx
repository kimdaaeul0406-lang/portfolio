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
            className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 border bg-white
            ${isFeatured
                    ? 'border-blue-100 shadow-lg hover:shadow-xl' // Lumen: Distinct but standard shadow
                    : 'border-gray-100 shadow-sm hover:shadow-md'}
            `}
        >
            {/* Image Container 
                - Fixed height h-52 (within h-48 ~ h-56 range)
                - object-cover, object-center
            */}
            <div className="relative w-full h-52 overflow-hidden bg-gray-50 border-b border-gray-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={isFeatured}
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                />

                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gray-900/[0.03] pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6">
                {/* Header */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors ${isFeatured ? 'text-xl' : 'text-lg'}`}>
                            {project.title}
                        </h3>
                        {/* Featured Badge - Only for Lumen */}
                        {isFeatured && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                                Featured
                            </span>
                        )}
                    </div>

                    <p className="text-gray-500 font-medium mb-5 leading-relaxed text-sm line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Tags */}
                    {project.techStack && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`border px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide
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

                {/* Actions */}
                <div className="flex gap-2 pt-5 border-t border-gray-50 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-600 text-xs font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gray-900 text-white text-xs font-semibold shadow-sm hover:bg-gray-800 hover:shadow-md transition-all active:scale-95"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
