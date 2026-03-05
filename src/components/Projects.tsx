import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

function orderTechsByLength(techsArray: string[]) {
    return techsArray.sort((a, b) => b.length - a.length);
}

function Projects() {
    return (
        <div className="projects-container">
            <ProjectCard
                title="Project #1"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim."
                techsUsed={orderTechsByLength(["Tech 1", "Tech 2", "Tech 3"])}
            />

            <ProjectCard
                title="Project #2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim."
                techsUsed={orderTechsByLength(["Tech 1", "Tech 2", "Tech 3"])}
            />

            <ProjectCard
                title="Project #3"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam voluptatibus aspernatur itaque ea voluptas aperiam ex totam sunt suscipit aut veniam excepturi aliquam corporis rerum nobis dolor, autem voluptatum consectetur delectus, amet fugit accusantium aliquid enim."
                techsUsed={orderTechsByLength(["Tech 1", "Tech 2", "Tech 3"])}
            />
        </div>
    );
}

export default Projects;
