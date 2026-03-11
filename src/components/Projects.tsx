import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

function orderTechsByLength(techsArray: string[]) {
    return techsArray.sort((a, b) => b.length - a.length);
}

function Projects() {
    return (
        <div className="projects-container">
            <div className="naliia-projects">
                <div className="title-and-description">
                    <h4 className="project-title">Naliia projects</h4>
                    <p className="project-description">
                        Naliia, an ERP business management solution that
                        combines two systems: a Tryton system and a custom-built
                        web application. As a front-end developer, I
                        participated in planning and decision-making for the
                        creation of different solutions and processes.
                    </p>
                </div>

                <div className="project-cards-container">
                    <ProjectCard
                        backgroundImg="/imgs/naliia_webapp.webp"
                        title="Naliia web application"
                        description="A web app that users can use to interact via RPC directly with the Naliia Tryton ERP system, allowing them to perform different tasks such as checking and creating new services in the database and creat ing reports of services successfully taken in a certain period of time."
                        projectLink="/naliia-project"
                        techsUsed={orderTechsByLength([
                            "VITE",
                            "React",
                            "TypeScript",
                            "Tailwind CSS",
                            "RPC Protocol",
                        ])}
                    />

                    <ProjectCard
                        backgroundImg="/imgs/naliia_website.webp"
                        title="Naliia website"
                        description="A content-focused website using Astro and some scroll-triggered animations with the purpose of providing information about Naliia and its services to people."
                        projectLink="#"
                        techsUsed={orderTechsByLength([
                            "Astro",
                            "HTML5",
                            "CSS3",
                            "JavaScript ES6+",
                            "GSAP",
                        ])}
                    />
                </div>
            </div>

            <div className="personal-projects">
                <div className="title-and-description">
                    <h4 className="project-title">Personal projects</h4>
                    <p className="project-description">Hola</p>
                </div>

                <div className="project-cards-container">
                    <ProjectCard
                        title="Project #3"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim."
                        techsUsed={orderTechsByLength([
                            "Tech 1",
                            "Tech 2",
                            "Tech 3",
                        ])}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
