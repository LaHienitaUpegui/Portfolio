import "../styles/projects.css";
import { projects } from "../content/projects";
import type { Project } from "../content/projects";
import ProjectCard from "./ProjectCard";
import { orderTechsByLength } from "../utils";

function Projects() {
    const naliiaProjects: Project[] = projects.filter(
        (project) => project.category === "naliia",
    );

    const personalProjects: Project[] = projects.filter(
        (project) => project.category === "personal",
    );

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
                    {naliiaProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            backgroundImg={project.backgroundImg}
                            title={project.title}
                            description={project.description}
                            techsUsed={orderTechsByLength(project.techsUsed)}
                        />
                    ))}
                </div>
            </div>

            <div className="personal-projects">
                <div className="title-and-description">
                    <h4 className="project-title">Personal projects</h4>
                    <p className="project-description">
                        Some personal projects I've worked on finding software
                        solutions to various problems focusing in the frontend
                        development and user experience.
                    </p>
                </div>

                <div className="project-cards-container">
                    {personalProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            backgroundImg={project.backgroundImg}
                            title={project.title}
                            description={project.description}
                            techsUsed={orderTechsByLength(project.techsUsed)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
