import "../styles/experiencecard.css";

interface ExperienceCardProps {
    title: string;
    charge: string;
    description: string;
    techsUsed: string[];
}

function ExperienceCard({
    title,
    charge,
    description,
    techsUsed,
}: ExperienceCardProps) {
    return (
        <>
            <div className="experience-card-container">
                <div className="title-and-charge">
                    <h6 className="title">{title}</h6>
                    <p className="charge">{charge}</p>
                </div>

                <p className="description">{description}</p>

                <div className="techs-used">
                    {techsUsed.map((tech) => (
                        <p key={tech} className="tech text-sm">
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExperienceCard;
