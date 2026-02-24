import { Profile, SkillSet } from "../types";

export const profile: Profile = {
    name: "김다슬",
    birth: "1996-04-06",
    email: "kimdaaeul0406@gmail.com",
    phone: process.env.NEXT_PUBLIC_PHONE ?? "",
    github: "https://github.com/kimdaaeul0406-lang",
};

export const skills: SkillSet[] = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"] },
    { category: "Backend", skills: ["PHP", "MySQL", "Supabase", "REST API", "Auth Handling"] },
    { category: "AI & Data", skills: ["OpenAI API", "Public Data API", "Prompt Design", "Data Parsing"] },
    { category: "Deployment", skills: ["Vercel", "Netlify", "dothome"] },
    { category: "Tools", skills: ["GitHub", "Figma", "VS Code"] },
];

