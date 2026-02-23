export interface Project {
    id: number;
    title: string;
    description: string;
    keyPoint?: string;
    image: string;
    images?: string[];
    github: string;
    live?: string;
    techStack?: string[];
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
