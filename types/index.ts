export interface Project {
    id: number;
    title: string;
    description: string;
    keyPoint?: string;
    image: string;
    github: string;
    live: string;
    tags?: string[];
    techStack?: string[];
    whyBuiltThis?: string;
}

export interface Profile {
    name: string;
    birth: string;
    email: string;
    phone: string;
    github: string;
}

export interface SkillSet {
    category: string;
    skills: string[];
}
