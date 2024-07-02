import { Project } from "../data/projectData";

function ProjectCard({
  title,
  github,
  skills,
  summary,
  demo,
  hostedSite,
}: Project) {
  return (
    <li className="border-2 border-azure rounded-md p-2 m-2">
      <h2 className="text-2xl bg-violet text-white rounded-md p-1 w-full">
        {title}
      </h2>
      <ul>
        {summary.map((summary) => {
          return (
            <li key={summary} className="list-disc list-inside p-1">
              {summary}
            </li>
          );
        })}
      </ul>
      {demo ? (
        <a href={demo} className="text-white bg-azure p-1 rounded-md">
          Demo Video
        </a>
      ) : null}
      {hostedSite ? (
        <a href={hostedSite} className="text-white bg-azure p-1 rounded-md">
          Hosted Site
        </a>
      ) : null}
      <h3 className="text-xl bg-orange text-black rounded-md p-1">Skills</h3>
      <ul className="flex flex-wrap">
        {skills.map((skill) => {
          return (
            <li key={skill} className="p-3 grow">
              {skill}
            </li>
          );
        })}
      </ul>
      <a href={github} className="text-white bg-azure p-1 rounded-md">
        GitHub Code
      </a>
    </li>
  );
}

export default ProjectCard;
