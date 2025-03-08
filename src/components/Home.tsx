import { Link } from "react-router-dom";
import photo from "../assets/pro-headshot.jpeg";

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
            Functional Automation QA
          </h2>
          <div className="bg-amber text-violet rounded-md p-1 w-full"></div>
          <img
            className="border-4 border-solid border-azure max-w-[200px] rounded-full justify-self-center"
            src={photo}
            alt="profile photo of Avril"
          />
          <p className="md:col-start-2 md:row-start-1 md:row-span-2 p-2 ">
            My role as a functional automation QA, testing websites and API's
            has been a brilliant way to consolidate my software development
            knowledge. These skills began through completion of the Northcoders
            boot camp and were then further developed on the Corecom Technology
            Academy's training course. Both of these courses gave me a fantastic
            basis of understand of TypeScript, Java, SQL, behaviour driven
            development, git and agile practices.
          </p>
          <p className="md:col-start-2 md:row-start-1 md:row-span-2 p-2 ">
            My curiosity and enthusiasm to learn has driven me to complete the
            ISTQB Foundation Testing Certificate, the AWS Cloud Practitioner
            Certificate and the Terraform Associates qualification. I am
            thoroughly enjoying learning about cloud technology and have become
            competent using Terraform as an Infrastructure as Code tool to
            deploy a range of AWS resources. Through this I have gained
            networking knowledge and am looking to complement this with Docker
            and Kubernetes experience.
          </p>
          <p className="md:col-start-2 md:row-start-1 md:row-span-2 p-2 ">
            I regularly engage with the local community through attending
            Ministry of Testing and JS Leeds Meet Up events. The new technology
            and ideas which are presented at these events are continuing to feed
            my enthusiasm for my new career and the joy of creating a solution
            with my technical skills continues to be incredibly rewarding.
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
