import photo from "../assets/headshot.jpg";

function Home() {
  return (
    <>
      <main className="grid flex-col gap-1 md:grid-cols-2">
        <h1 className="font-bold text-4xl text-white rounded-md bg-rose p-1 md:pt-5 w-full text-center animate-wiggle">
          Avril Hunter
        </h1>
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
          Having always relished problem-solving and logical thinking tasks, I
          have pivoted my career from procurement to software development
          through completion of the Northcoders bootcamp. Applying my technical
          skills to projects and the joy of creating a solution, continues to
          excite me to pursue an inspiring and challenging career in tech. My
          background in procurement has equipped me with a unique perspective
          and a diverse skill set that I believe will be invaluable in my new
          career as a software developer.
        </p>
      </main>
    </>
  );
}

export default Home;

{
  /* <div className="animate-wiggle">Test1</div>
        <div className="overflow-visible text-7xl">
          <span className="opacity-0 animate-burst_in text-7xl">
            ThisIsALongerWord
          </span>
        </div> */
}
