import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects(): JSX.Element {
  const handleClick: VoidFunction = () => {
    window.scrollTo(0, 0);
  };

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
      <button
        onClick={handleClick}
        className="font-extrabold text-orange border-solid border-4 border-orange p-1 rounded-md text-center w-full m-2"
      >
        Scroll to top
      </button>
    </article>
  );
}

export default Projects;
