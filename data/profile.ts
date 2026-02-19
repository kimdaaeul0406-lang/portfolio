import { Profile, SkillSet } from "../types";

export const profile: Profile = {
    name: "김다슬",
    birth: "1996-04-06",
    email: "kimdaaeul0406@gmail.com",
    phone: "010-5779-2271",
    github: "https://github.com/kimdaaeul0406-lang",
};

export const skills: SkillSet[] = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"] },
    { category: "Backend", skills: ["PHP", "MySQL", "Supabase", "REST API", "Auth Handling"] },
    { category: "AI & Data", skills: ["OpenAI API", "Public Data API", "Prompt Design", "Data Parsing"] },
    { category: "Deployment", skills: ["Vercel", "Netlify", "dothome"] },
    { category: "Tools", skills: ["GitHub", "Figma", "VS Code"] },
];

export const trainingLearnings = [
    "AI 기반 반응형 웹화면 구현",
    "PHP 사용자 인증 서버프로그램 구축",
    "데이터 융합웹개발",
    "React 기반 API 활용 반응형 UI 구현",
    "LLM 활용 응용SW개발 프로젝트",
];
