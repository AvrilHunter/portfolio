import insta from "../assets/insta.svg";

function AboutMe() {
  return (
    <section>
      <h1 className="text-2xl text-white rounded-md bg-rose p-1 w-full">
        About Me
      </h1>
      <p>
        Since completing the Northcoders bootcamp I have been continuing my
        learning journey with many practice kata's and projects exploring new
        technology.
      </p>
      <br></br>
      <p>
        I am enjoying learning new languages such as python and exploring more
        detail on existing topics such as animations with CSS.
      </p>
      <br></br>
      <p>
        I enjoy the logical technical nature of backend projects and the ability
        to make interactive userfriendly appealing apps with front end,
        therefore I am actively looking for opportunities within either area or
        full stack.
      </p>
      <h2 className="text-xl bg-amber text-black rounded-md p-1">Hobbies</h2>
      <p>
        Aside from coding I love all sports but have focused on Ultimate Frisbee
        since I started playing at University.
      </p>
      <br></br>
      <p>
        I have competed for Great Britian at several European and World
        Championships since 2016; the highlight of my playing career was winning
        Silver at European Championships 2023 competing with Great Britain
        Women.
      </p>
      <br></br>
      <p>I am currently training for World Championships 2024.</p>
      <br></br>
      <p>
        The final from 2023 is linked here and a highlight play video of our
        season!
      </p>
      <div className="flex flex-wrap justify-center">
        <iframe
          max-width="280"
          max-height="220"
          src="https://www.youtube.com/embed/9qZlyDkUjIc?si=bc6zIiglhj88v184&amp;start=3666"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="p-2"
        ></iframe>
        <iframe
          max-width="260"
          max-height="200"
          src="https://www.youtube.com/embed/XIi2s2JYqME?si=v4Mv5NVnMhovbMyp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="p-2"
        ></iframe>
      </div>
      <a
        href="https://www.instagram.com/gbwomenultimate/"
        target="_blank"
        className="flex justify-center"
      >
        <p>Click here to follow our journey: </p>
        <img
          src={insta}
          width="50"
          height="50"
          alt="Insagram link to GB Women's Account"
          className="pl-2"
        />
      </a>
    </section>
  );
}

export default AboutMe;
