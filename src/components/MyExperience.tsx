import "../styles/myexperience.css";
import { experiences } from "../content/experiences";
import ExperienceCard from "./ExperienceCard";
import { orderTechsByLength } from "../utils";

function MyExperience() {
    return (
        <div className="experience-container">
            {experiences.map((experience) => (
                <ExperienceCard
                    key={experience.id}
                    id={experience.id}
                    title={experience.title}
                    charge={experience.charge}
                    timePeriod={experience.timePeriod}
                    description={experience.description}
                    techsUsed={orderTechsByLength(experience.techsUsed)}
                    customClassName={experience.customClassName}
                />
            ))}
        </div>
    );
}

export default MyExperience;
