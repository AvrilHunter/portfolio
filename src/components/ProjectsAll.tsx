import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects(): JSX.Element {
  return (
    <>
      <h1 className="text-2xl bg-orange text-black rounded-md p-1 w-full text-center">
        Projects
      </h1>
      <ul className="md:flex md:flex-wrap">
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
    </>
  );
}

export default Projects;
