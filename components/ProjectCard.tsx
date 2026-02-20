"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
    project: Project;
    isFeatured?: boolean;
    onSelect?: () => void;
}

export default function ProjectCard({ project, isFeatured = false, onSelect }: ProjectCardProps) {
    return (
        <div
            onClick={onSelect}
            className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 border bg-white cursor-pointer
            ${isFeatured
                    ? 'border-blue-100 shadow-lg hover:shadow-[0_8px_30px_rgba(129,140,248,0.2)] hover:-translate-y-1'
                    : 'border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgba(196,181,253,0.15)] hover:-translate-y-1'}
            `}
        >
            {/* Image Container */}
            <div className="relative w-full h-52 overflow-hidden bg-gray-50 border-b border-gray-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={isFeatured}
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/[0.03] pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Click hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                        자세히 보기
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6">
                {/* Header */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold text-gray-900 group-hover:text-indigo-500 transition-colors ${isFeatured ? 'text-xl' : 'text-lg'}`}>
                            {project.title}
                        </h3>
                        {/* Featured Badge */}
                        {isFeatured && (
                            <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-500 text-[10px] font-bold uppercase tracking-wider">
                                Featured
                            </span>
                        )}
                    </div>

                    <p className="text-gray-500 font-medium mb-3 leading-relaxed text-sm">
                        {project.description}
                    </p>

                    {/* Key Point */}
                    {project.keyPoint && (
                        <p className="text-gray-400 text-xs leading-relaxed mb-5 pl-3 border-l-2 border-indigo-100">
                            {project.keyPoint}
                        </p>
                    )}

                    {/* Tech Tags */}
                    {project.techStack && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`border px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide
                                    ${isFeatured
                                            ? 'bg-indigo-50 text-indigo-600 border-indigo-100'
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
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-600 text-xs font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
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
