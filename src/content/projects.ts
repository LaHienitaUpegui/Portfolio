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
}

export const projects: Project[] = [
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
            "/src/assets/images/naliia/Rectangle 3.jpg",
            "/src/assets/images/naliia/Rectangle 4.jpg",
            "/src/assets/images/naliia/Rectangle 5.jpg",
            "/src/assets/images/naliia/Rectangle 6.jpg",
            "/src/assets/images/naliia/Rectangle 7.jpg",
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
            "/imgs/naliia/Rectangle 3.jpg",
            "/imgs/naliia/Rectangle 4.jpg",
            "/imgs/naliia/Rectangle 5.jpg",
            "/imgs/naliia/Rectangle 6.jpg",
            "/imgs/naliia/Rectangle 7.jpg",
        ],
    },

    {
        id: "Taskifier",
        category: "personal",
        backgroundImg: "/imgs/taskifier.webp",
        title: "Taskifier",
        description:
            "A task management web application that allows users to create, organize, and track their tasks and projects. It provides features such as task categorization, due dates, priority levels, and progress tracking to help users stay organized and productive.",
        techsUsed: ["VITE", "React", "TypeScript", "CSS3", "Figma"],
        projectImages: [
            "/imgs/taskifier/Rectangle 3.jpg",
            "/imgs/taskifier/Rectangle 4.jpg",
            "/imgs/taskifier/Rectangle 5.jpg",
            "/imgs/taskifier/Rectangle 6.jpg",
            "/imgs/taskifier/Rectangle 7.jpg",
        ],
    },
];
