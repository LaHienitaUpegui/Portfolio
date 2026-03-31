import "../styles/experiencecard.css";

interface ExperienceCardProps {
    id: string;
    title: string;
    charge: string;
    timePeriod: string;
    description: string;
    techsUsed: string[];
    customClassName?: string;
}

function ExperienceCard({
    id,
    title,
    charge,
    description,
    techsUsed,
    customClassName = "",
    timePeriod = "",
}: ExperienceCardProps) {
    return (
        <div className={`experience-card-container ${customClassName}`} id={id}>
            <div className="title-and-charge">
                <h6 className="title">{title}</h6>

                <div className="charge-and-time-period">
                    <p className="charge">{charge}</p>
                    <p className="time-period">{timePeriod}</p>
                </div>
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
    );
}

export default ExperienceCard;
