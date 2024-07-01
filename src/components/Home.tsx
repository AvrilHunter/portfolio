import photo from "../assets/headshot.jpg";

function Home() {
  return (
    <>
      <h1>Avril Hunter</h1>
      <img className="profilephoto" src={photo} alt="profile photo of Avril" />
      <p>Junior Software Developer</p>
      <p>Leeds, West Yorkshire</p>
      <p>
        Having always relished problem-solving and logical thinking tasks, I
        have pivoted my career from procurement to software development through
        completion of the Northcoders bootcamp. Applying my technical skills to
        projects and the joy of creating a solution, continues to excite me to
        pursue an inspiring and challenging career in tech. My background in
        procurement has equipped me with a unique perspective and a diverse
        skill set that I believe will be invaluable in my new career as a
        software developer.
      </p>
    </>
  );
}

export default Home;
