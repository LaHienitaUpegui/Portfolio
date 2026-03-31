export interface Experience {
    id: string;
    title: string;
    charge: string;
    timePeriod: string;
    description: string;
    techsUsed: string[];
    customClassName: string;
}

export const experiences: Experience[] = [
    {
        id: "OneCluster",
        title: "OneCluster",
        charge: "Frontend Developer and Graphic Designer",
        timePeriod: "2024 - Present",
        description:
            "Led the end-to-end development of frontend solutions, from initial architectural decisions and technology stack selection to final delivery. I spearheaded the creation of comprehensive design systems to ensure visual consistency and managed full projects lifecycles, including requirement gathering and client stakeholder management.",
        techsUsed: [
            "Adobe Illustrator",
            "Astro",
            "React",
            "JavaScript ES6+",
            "TypeScript",
            "CSS3",
            "HTML5",
            "Git",
            "GitHub",
            "Figma",
            "GSAP",
            "VITE",
            "Docker",
            "Docker Compose",
            "Docusaurus",
        ],
        customClassName: "experience-card-1",
    },

    {
        id: "Freelance Graphic Designer",
        title: "Freelance Graphic Designer",
        charge: "Graphic Designer",
        timePeriod: "2022 - 2024",
        description:
            "Worked for some companies analyzing and creating visual and communication strategies, physical and digital graphic pieces of communication, and branding.",
        techsUsed: [
            "Adobe Illustrator",
            "Photoshop",
            "Premiere",
            "After Effects",
            "Photography",
            "Lightroom",
        ],
        customClassName: "experience-card-2",
    },

    {
        id: "EAFIT University",
        title: "EAFIT University",
        charge: "Graphic Designer and Frontend Developer Jr.",
        timePeriod: "2019 - 2022",
        description:
            "I worked in the Graduate and Philanthropy centers alongside the communications team to create communication strategies and visual elements with the aim of raising funds for scholarships and improving ties between graduates and the university. I was also part of the team responsible for maintaining and updating the websites for both centers, where I was in charge of visual design and coding.",
        techsUsed: [
            "Adobe Illustrator",
            "Photoshop",
            "Premiere",
            "After Effects",
            "Eloqua",
            "HTML5",
            "CSS3",
            "Photography",
        ],
        customClassName: "experience-card-3",
    },
];
