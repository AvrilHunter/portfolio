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
    <li>
      <h2>{title}</h2>
      <ul>
        {summary.map((summary) => {
          return <li key={summary}>{summary}</li>;
        })}
      </ul>
      {demo ? <a href={demo}>Demo Video</a> : null}
      {hostedSite ? <a href={hostedSite}>Hosted Site</a> : null}
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      <a href={github}>GitHub Code</a>
    </li>
  );
}

export default ProjectCard;
