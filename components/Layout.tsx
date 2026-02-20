import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    id?: string;
    maxWidth?: string;
}

export default function Layout({ children, className, id, maxWidth = "max-w-7xl" }: LayoutProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full py-16 md:py-24 px-6 sm:px-8 flex flex-col justify-center",
                className
            )}
        >
            <div className={cn("w-full mx-auto relative z-10", maxWidth)}>
                {children}
            </div>
        </section>
    );
}
