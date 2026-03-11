import "../styles/myexperience.css";
import ExperienceCard from "./ExperienceCard";

function MyExperience() {
    function orderTechsByLength(wordsArray: string[]) {
        return wordsArray.sort((a, b) => b.length - a.length);
    }

    return (
        <div className="experience-container">
            <ExperienceCard
                title="One Cluster"
                charge="Frontend Developer and Graphic Designer"
                timePeriod="2024 - Present"
                description="Led the end-to-end development of frontend solutions, from initial architectural decisions and technology stack selection to final delivery. I spearheaded the creation of comprehensive design systems to ensure visual consistency and managed full projects lifecycles, including requirement gathering and client stakeholder management."
                techsUsed={orderTechsByLength([
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
                ])}
                customClassName="experience-card-1"
            />

            <ExperienceCard
                title="Freelance"
                charge="Graphic Designer"
                timePeriod="2022 - 2024"
                description="Worked for some companies analyzing and creating visual and communication strategies, physical and digital graphic pieces of communication, and branding."
                techsUsed={orderTechsByLength([
                    "Adobe Illustrator",
                    "Photoshop",
                    "Premiere",
                    "After Effects",
                    "Photography",
                    "Lightroom",
                ])}
                customClassName="experience-card-2"
            />

            <ExperienceCard
                title="EAFIT University"
                charge="Graphic Designer and Frontend Developer Jr."
                timePeriod="2019 - 2022"
                description="I worked in the Graduate and Philanthropy centers alongside the communications team to create communication strategies and visual elements with the aim of raising funds for scholarships and improving ties between graduates and the university. I was also part of the team responsible for maintaining and updating the websites for both centers, where I was in charge of visual design and coding."
                techsUsed={orderTechsByLength([
                    "Adobe Illustrator",
                    "Photoshop",
                    "Premiere",
                    "After Effects",
                    "Eloqua",
                    "HTML5",
                    "CSS3",
                    "Photography",
                ])}
                customClassName="experience-card-3"
            />
        </div>
    );
}

export default MyExperience;
