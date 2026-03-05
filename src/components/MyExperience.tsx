import "../styles/myexperience.css";
import ExperienceCard from "./ExperienceCard";

function MyExperience() {
    function orderTechsByLength(wordsArray: string[]) {
        return wordsArray.sort((a, b) => b.length - a.length);
    }

    return (
        <div className="experience-container">
            <ExperienceCard
                title="Card title 1"
                charge="Charge 1"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim! Harum ducimus velit ipsa repellendus modi suscipit aspernatur perferendis tenetur minima cumque voluptate beatae numquam recusandae repudiandae magnam iusto, maiores repellat iure ut odio dolor animi?"
                techsUsed={orderTechsByLength([
                    "Adobe Illustrator",
                    "Astro",
                    "React",
                    "TypeScript",
                    "CSS",
                    "HTML",
                    "Git",
                    "GitHub",
                ])}
            />

            <ExperienceCard
                title="Card title 2"
                charge="Charge 2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim! Harum ducimus velit ipsa repellendus modi suscipit aspernatur perferendis tenetur minima cumque voluptate beatae numquam recusandae repudiandae magnam iusto, maiores repellat iure ut odio dolor animi?"
                techsUsed={orderTechsByLength(["Tech 1", "Tech 2", "Tech 3"])}
            />

            <ExperienceCard
                title="Card title 3"
                charge="Charge 3"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim! Harum ducimus velit ipsa repellendus modi suscipit aspernatur perferendis tenetur minima cumque voluptate beatae numquam recusandae repudiandae magnam iusto, maiores repellat iure ut odio dolor animi?"
                techsUsed={orderTechsByLength(["Tech 1", "Tech 2", "Tech 3"])}
            />
        </div>
    );
}

export default MyExperience;
