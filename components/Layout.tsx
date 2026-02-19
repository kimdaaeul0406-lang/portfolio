import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Layout({ children, className, id }: LayoutProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full py-16 md:py-24 px-6 sm:px-8 flex flex-col justify-center",
                className
            )}
        >
            <div className="max-w-5xl w-full mx-auto relative z-10">
                {children}
            </div>
        </section>
    );
}
