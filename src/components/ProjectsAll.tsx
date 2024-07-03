import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects(): JSX.Element {
  return (
    <article>
      <ul className="flex flex-col">
        {projects.map((project) => {
          return (
            <li className="basis-1/2 grow" key={project.title}>
              <ProjectCard
                title={project.title}
                summary={project.summary}
                skills={project.skills}
                github={project.github}
                demo={project.demo}
                hostedSite={project.hostedSite}
                image={project.image}
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default Projects;
