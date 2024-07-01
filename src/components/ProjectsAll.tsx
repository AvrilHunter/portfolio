import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects(): JSX.Element {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            summary={project.summary}
            skills={project.skills}
            github={project.github}
            demo={project.demo}
            hostedSite={project.hostedSite}
          />
        );
      })}
    </ul>
  );
}

export default Projects;
