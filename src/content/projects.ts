export type Category = "naliia" | "personal" | "graphic-design";

export interface Project {
    id: string;
    category: Category;
    backgroundImg: string;
    title: string;
    description: string;
    techsUsed: string[];
    projectImages: string[];
    projectLink?: string;
    githubLink?: string;
    additionalComments?: string[];
}

export const projects: Project[] = [
    // Naliia projects
    {
        id: "naliia-webapp",
        category: "naliia",
        backgroundImg: "/imgs/naliia_webapp.webp",
        title: "Naliia web application",
        description:
            "A web app that users can use to interact via RPC directly with the Naliia Tryton ERP system, allowing them to perform different tasks such as checking and creating new services in the database and creat ing reports of services successfully taken in a certain period of time.",
        techsUsed: [
            "VITE",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "RPC Protocol",
        ],
        projectImages: [
            "/imgs/projects/naliia/webapp/1.webp",
            "/imgs/projects/naliia/webapp/2.webp",
            "/imgs/projects/naliia/webapp/3.webp",
            "/imgs/projects/naliia/webapp/4.webp",
            "/imgs/projects/naliia/webapp/5.webp",
            "/imgs/projects/naliia/webapp/6.webp",
        ],
    },

    {
        id: "naliia-website",
        category: "naliia",
        backgroundImg: "/imgs/naliia_website.webp",
        title: "Naliia website",
        description:
            "A content-focused website using Astro and some scroll-triggered animations with the purpose of providing information about Naliia and its services to people.",
        techsUsed: ["Astro", "HTML5", "CSS3", "JavaScript ES6+", "GSAP"],
        projectImages: [
            "/imgs/projects/naliia/website/1.webp",
            "/imgs/projects/naliia/website/2.webp",
            "/imgs/projects/naliia/website/3.webp",
            "/imgs/projects/naliia/website/4.webp",
            "/imgs/projects/naliia/website/5.webp",
        ],
        projectLink: "https://www.naliia.co/",
    },

    // Personal projects
    {
        id: "Taskifier",
        category: "personal",
        backgroundImg: "/imgs/taskifier_banner.webp",
        title: "Taskifier",
        description:
            "A task management web application that allows users to create, organize, and track their tasks and projects. It provides features such as task categorization, due dates, priority levels, and progress tracking to help users stay organized and productive.",
        techsUsed: ["VITE", "React", "TypeScript", "CSS3", "Figma"],
        projectImages: [
            "/imgs/projects/personal/taskifier/1.webp",
            "/imgs/projects/personal/taskifier/2.webp",
            "/imgs/projects/personal/taskifier/3.webp",
            "/imgs/projects/personal/taskifier/4.webp",
            "/imgs/projects/personal/taskifier/5.webp",
        ],
        projectLink: "https://taskifier-psi.vercel.app/",
        githubLink: "https://github.com/LaHienitaUpegui/Taskifier",
        additionalComments: [
            "This is a WIP project that uses local storage as the main way of storing projects and tasks. I plan to continue with its development adding new features.",
        ],
    },
];
