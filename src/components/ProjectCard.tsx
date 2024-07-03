import { Project } from "../data/projectData";
import whatYouLookingApp from "../assets/WhatYouLookingApp.png";
declare var require: any;

function ProjectCard({
  title,
  github,
  skills,
  summary,
  demo,
  hostedSite,
  image,
}: Project) {
  console.log(image, "image");
  return (
    <section className="pt-1 flex flex-col m-1">
      <h2 className="text-2xl bg-violet text-white rounded-md p-1 w-full text-center">
        {title}
      </h2>
      {summary.map((para, index) => {
        return index === summary.length - 1 ? (
          <>
            <p>{para}</p>
          </>
        ) : (
          <>
            <p>{para}</p>
            <br></br>
          </>
        );
      })}
      {image ? <img src={image} /> : null}
      <h3 className="text-xl bg-amber text-black rounded-md p-1 text-center">
        Skills
      </h3>
      <ul className="flex flex-wrap">
        {skills.map((skill) => {
          return (
            <li key={skill} className="p-3 grow">
              {skill}
            </li>
          );
        })}
      </ul>
      {demo ? (
        <a
          href={demo}
          className="text-white bg-azure p-1 rounded-md text-center mb-1"
        >
          Demo Video
        </a>
      ) : null}
      {hostedSite ? (
        <a
          href={hostedSite}
          className="text-white bg-azure p-1 rounded-md text-center mb-1"
        >
          Hosted Site
        </a>
      ) : null}
      <a
        href={github}
        className="text-white bg-azure p-1 rounded-md text-center"
      >
        Source Code
      </a>
    </section>
  );
}

export default ProjectCard;
