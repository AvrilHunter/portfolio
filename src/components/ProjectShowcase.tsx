import { projects } from "../data/projectData";

function ProjectShowcase() {
  return (
    //   slider
    <div className="overflow-hidden m-auto p-2">
      {/* slides */}

      <div className="flex overflow-x-auto snap-x">
        {projects.map((project) => (
          <div className="w-60 flex-shrink-0 snap-center">
            <img
              src={project.image}
              alt={project.title}
              className="object-contain object-center p-2"
              id={project.title}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {projects.map((project) => {
          const id = `#${project.title}`;
          return (
            <a
              href={id}
              className="bg-slate-500 text-slate-500 m-2 rounded-full w-6 h-6"
            >
              1
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectShowcase;
