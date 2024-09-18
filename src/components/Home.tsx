import { Link } from "react-router-dom";
import photo from "../assets/headshot.jpg";
import ProjectShowcase from "./ProjectShowcase";

function Home() {
  return (
    <>
      <main>
        <div className="grid flex-col gap-1 md:grid-cols-2 mb-2">
          <div className="font-bold text-4xl text-white rounded-md bg-rose p-1 md:pt-5 w-full">
            <h1 className="text-center overflow-hidden text-nowrap p-50% animate-typing">
              Avril Hunter
            </h1>
          </div>
          <h2 className=" font-bold text-2xl bg-violet text-white rounded-md w-full text-center p-1 md:pt-7">
            Junior Software Developer
          </h2>
          <div className="bg-amber text-violet rounded-md p-1 w-full"></div>
          <img
            className="border-4 border-solid border-azure max-w-[200px] rounded-full justify-self-center"
            src={photo}
            alt="profile photo of Avril"
          />
          <p className="md:col-start-2 md:row-start-1 md:row-span-2 p-2 ">
            Having always enjoyed problem-solving and logical thinking tasks, I
            have pivoted my career from procurement to software development
            through completion of the Northcoders bootcamp. Applying my
            technical skills to projects and the joy of creating a solution,
            continues to excite me to pursue an inspiring and challenging career
            in tech. My background in procurement has equipped me with a unique
            perspective and a diverse skill set that will be valuable in my new
            career as a software developer.
          </p>
        </div>
        <div className="md:hidden flex justify-center">
          <Link
            to={"/projects"}
            className="bg-amber text-black rounded-md p-3 text-center hover:bg-rose font-bold"
          >
            Projects
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
