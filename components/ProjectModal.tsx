"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Project } from "../types";
import { useEffect, useState, useCallback } from "react";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState(0);

    const galleryImages = project ? [project.image, ...(project.images || [])] : [];

    // Initialize current image when project opens
    useEffect(() => {
        if (project) {
            setCurrentImage(project.image);
            setLightboxIndex(null); // Reset lightbox
        }
    }, [project]);

    const navigate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            const total = galleryImages.length;
            return (prev + newDirection + total) % total;
        });
    }, [galleryImages.length]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "ArrowRight") navigate(1);
            if (e.key === "Escape") setLightboxIndex(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, navigate]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!project) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999]"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        {/* Outer container */}
                        <div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Inner scrollable area - scrollbar hidden */}
                            <div className="overflow-y-auto max-h-[85vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                {/* Header Image Area */}
                                <div className="relative w-full h-56 md:h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden group">
                                    {currentImage ? (
                                        <button
                                            onClick={() => {
                                                setLightboxIndex(0);
                                                setDirection(0);
                                            }}
                                            className="relative w-full h-full cursor-zoom-in"
                                        >
                                            <Image
                                                src={currentImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 640px"
                                            />
                                        </button>
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                                            <ImageIcon className="w-12 h-12 mb-2" />
                                            <span className="text-sm">스크린샷 준비 중</span>
                                        </div>
                                    )}

                                    {/* Close Button */}
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 transition-all shadow-sm"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    {/* Title & Description */}
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-500 font-medium">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Key Point */}
                                    {project.keyPoint && (
                                        <div className="mb-8 p-5 bg-gradient-to-r from-indigo-50/60 to-pink-50/60 rounded-2xl border border-indigo-100/50">
                                            <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                                                핵심 포인트
                                            </p>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {project.keyPoint}
                                            </p>
                                        </div>
                                    )}

                                    {/* Screenshots Gallery */}
                                    {project.images && project.images.length > 0 ? (
                                        <div className="mb-8">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                주요 화면 (클릭하여 확대)
                                            </p>
                                            <div className="grid grid-cols-3 gap-3">
                                                {/* Additional Images */}
                                                {project.images.map((img, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => {
                                                            setLightboxIndex(i + 1); // +1 because index 0 is main image
                                                            setDirection(0);
                                                        }}
                                                        className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-zoom-in ${currentImage === img
                                                            ? "border-blue-500 ring-2 ring-blue-200"
                                                            : "border-gray-100 hover:border-gray-300"
                                                            }`}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Screenshot ${i + 1}`}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 33vw, 200px"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        /* Placeholder if no images */
                                        <div className="mb-8">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                주요 화면
                                            </p>
                                            <div className="grid grid-cols-3 gap-3">
                                                {[1, 2, 3].map((i) => (
                                                    <div
                                                        key={i}
                                                        className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-100 flex items-center justify-center text-gray-300"
                                                    >
                                                        <ImageIcon className="w-6 h-6" />
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-300 mt-2 text-center">
                                                스크린샷 업데이트 예정
                                            </p>
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    {project.techStack && (
                                        <div className="mb-8">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                사용 기술
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3.5 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-semibold border border-gray-100"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-6 border-t border-gray-100">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                                        >
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </a>
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold shadow-sm hover:bg-gray-800 hover:shadow-md transition-all active:scale-95"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && (
                <motion.div
                    key="lightbox"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[11000] bg-black/80 flex items-center justify-center gap-2 md:gap-8 p-4"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Left Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(-1);
                        }}
                        className="p-3 text-gray-900 bg-white/90 hover:bg-white rounded-full transition-all shadow-lg hover:scale-110 z-[11010]"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative flex-1 max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={lightboxIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? 300 : -300,
                                        opacity: 0
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: (direction: number) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 300 : -300,
                                        opacity: 0
                                    })
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative w-full h-full pointer-events-none"
                            >
                                <Image
                                    src={galleryImages[lightboxIndex]}
                                    alt="Full screen"
                                    fill
                                    className="object-contain pointer-events-auto"
                                    sizes="100vw"
                                    quality={100}
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(1);
                        }}
                        className="p-3 text-gray-900 bg-white/90 hover:bg-white rounded-full transition-all shadow-lg hover:scale-110 z-[11010]"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Close Button */}
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-4 right-4 z-[11020] text-white/80 hover:text-white p-2 bg-black/40 hover:bg-black/60 rounded-full transition-all"
                    >
                        <X size={24} />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-medium px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-sm">
                        {lightboxIndex + 1} / {galleryImages.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    // Portal을 사용해 body에 직접 렌더링 → z-index 겹침 문제 해결
    if (typeof window === "undefined") return null;
    return createPortal(modalContent, document.body);
}
