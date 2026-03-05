import "../styles/project-card.css";

interface ProjectCardProps {
    title: string;
    description: string;
    techsUsed: string[];
}

function ProjectCard({ title, description, techsUsed }: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="image-mockup"></div>

            <div className="project-info">
                <div className="title-and-info">
                    <h6 className="project-title">{title}</h6>
                    <p className="project-description">{description}</p>
                </div>

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
