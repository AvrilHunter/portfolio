import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects(): JSX.Element {
  return (
    <ul className="md:flex md:flex-wrap">
      {projects.map((project) => {
        return (
          <li className="basis-1/2 grow">
            <ProjectCard
              title={project.title}
              summary={project.summary}
              skills={project.skills}
              github={project.github}
              demo={project.demo}
              hostedSite={project.hostedSite}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Projects;
