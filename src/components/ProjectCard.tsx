import { Project } from "../data/projectData";

function ProjectCard({
  title,
  github,
  skills,
  summary,
  demo,
  hostedSite,
  image,
}: Project) {
  return (
    <section className="pt-1 flex flex-col m-1">
      <h1 className="text-2xl bg-violet text-white rounded-md p-1 w-full text-center">
        {title}
      </h1>
      <div className="grid md:grid-cols-2 p-2">
        <div className="">
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
        </div>
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-contain object-center p-2"
          />
        ) : null}
      </div>
      <h2 className="text-xl text-black rounded-md p-1 underline underline-offset-4">
        Skills
      </h2>
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
          className="text-black bg-azure p-1 rounded-md text-center mb-1"
        >
          Demo Video
        </a>
      ) : null}
      {hostedSite ? (
        <a
          href={hostedSite}
          className="text-black bg-azure p-1 rounded-md text-center mb-1"
        >
          Hosted Site
        </a>
      ) : null}
      <div className="self-center">
        <a
          href={github}
          className="font-extrabold text-azure border-solid border-4 border-azure p-1 rounded-md text-center"
        >
          Source Code
        </a>
      </div>
    </section>
  );
}

export default ProjectCard;
