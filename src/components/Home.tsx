import { Link } from "react-router-dom";
import photo from "../assets/pro-headshot.jpeg";

function Home() {
  return (
    <>
      <main>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[1fr_2fr] mb-2 ">
          <div className="font-bold text-4xl text-white rounded-md bg-rose p-1 md:pt-5 w-full">
            <h1 className="text-center overflow-hidden text-nowrap p-50% animate-typing">
              Avril Hunter
            </h1>
          </div>
          <h2 className=" font-bold text-2xl bg-violet text-white rounded-md w-full text-center p-1 md:pt-7">
            Functional Automation Tester
          </h2>
          {/* <div className="bg-amber text-violet rounded-md p-1 w-full"></div> */}
          <img
            className="border-4 border-solid border-azure max-w-[200px] rounded-full justify-self-center"
            src={photo}
            alt="profile photo of Avril"
          />
          <div className="md:col-start-2 md:row-start-1 md:row-span-3 p-2 ">
            <p>
              My role as a functional automation QA, testing websites and API's
              has been a brilliant way to consolidate my software development
              knowledge. These skills began through completion of the
              Northcoders boot camp and were then further developed through training with 
              Corecom Technology Academy. Both of these
              courses gave me a fantastic understand of TypeScript,
              Java, SQL, behaviour driven development, git and agile practices.
            </p>
            <br></br>
            <p>
              My curiosity and enthusiasm to learn has driven me to complete the
              ISTQB Foundation Testing Certificate, the AWS Cloud Practitioner
              Certificate and the Terraform Associates qualification. I am
              thoroughly enjoying learning about cloud technology and have
              become competent using Terraform as an Infrastructure as Code tool
              to deploy a range of AWS resources. Through this I have gained
              networking knowledge and am looking to complement this with Docker
              and Kubernetes experience.
            </p>
            <br></br>
            <p>
              I regularly engage with the local community through attending
              Ministry of Testing and JS Leeds Meet Up events. The new
              technology and ideas which are presented at these events are
              continuing to feed my enthusiasm for my new career and the joy of
              creating solutions continues to be
              incredibly rewarding.
            </p>
          </div>
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
