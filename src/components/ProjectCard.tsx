import "../styles/project-card.css";

interface ProjectCardProps {
    title: string;
    description: string;
    techsUsed: string[];
    projectLink?: string;
}

function ProjectCard({
    title,
    description,
    techsUsed,
    projectLink,
}: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="image-mockup"></div>

            <div className="project-info">
                <div className="title-and-info">
                    <h6 className="project-title">{title}</h6>
                    <p className="project-description">{description}</p>
                </div>

                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-project-link"
                    >
                        See the project
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="link-icon"
                        >
                            <path
                                fill="none"
                                stroke="var(--white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
                            />
                        </svg>
                    </a>
                )}

                <div className="techs-used">
                    {techsUsed.map((tech, index) => (
                        <p key={index} className="tech text-sm">
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
