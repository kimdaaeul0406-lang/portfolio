import { Project } from "../types";

export const projects: Project[] = [
    {
        id: 4,
        title: "루멘",
        description: "AI 기반 사주/타로 서비스",
        image: "/lumen.jpg",
        github: "https://github.com/kimdaaeul0406-lang/LUMEN",
        live: "https://lumen-demo.vercel.app/",
        techStack: ["Next.js", "OpenAI API", "Tailwind CSS"],

    },
    {
        id: 1,
        title: "쉼온",
        description: "힐링 감성 웹 서비스",
        image: "/shimon.jpg",
        github: "https://github.com/kimdaaeul0406-lang/shim_on",
        live: "http://daseul0406.dothome.co.kr/index.php?page=welcome",
        techStack: ["PHP", "Vanilla JS", "MySQL"],
        // field removed
    },
    {
        id: 2,
        title: "젤리주식",
        description: "주식 분석 대시보드 UI",
        image: "/jelly-stock.jpg",
        github: "https://github.com/kimdaaeul0406-lang/JELLY",
        live: "https://magnificent-pavlova-9b9515.netlify.app/",
        techStack: ["React", "Chart.js", "Rest API"],
        // field removed
    },
    {
        id: 3,
        title: "듀센트",
        description: "브랜딩 중심 감성 웹",
        image: "/dewscent.jpg",
        github: "https://github.com/kimdaaeul0406-lang/dewscent",
        live: "http://dewscent.dothome.co.kr/",
        techStack: ["HTML5", "CSS3", "jQuery"],
        // field removed
    },
    {
        id: 5,
        title: "센스가드",
        description: "AI + 공공데이터 기반 안전 알림",
        image: "/sense-guard.jpg",
        github: "https://github.com/kimdaaeul0406-lang/SENSE-GUARD",
        live: "https://sense-guard.vercel.app/",
        techStack: ["Next.js", "Public Data API", "Transformer.js"],
        // field removed
    },
];
