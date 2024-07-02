function AboutMe() {
  return (
    <>
      <h2 className="text-2xl text-white rounded-md bg-rose p-1 w-full">
        About Me
      </h2>
      <p>
        Transitioning from a career in procurement to Software Development
        exciting and fulfilling. The technical knowledge gained from completion
        of the 13 week industry leading Northcoders bootcamp alongside my
        communication, project management and problem solving skills developed
        in procurement allow me to bring an analytical and diverse skill set to
        my next role.
      </p>
      <h3 className="text-xl bg-amber text-violet rounded-md p-1">
        Achievements and Interests
      </h3>
      <p>
        I have competed for Great Britian at several European and World
        Championships. The highlight of my playing career was winning Silver at
        the Ultimate Frisbee European Championships 2023 competing with Great
        Britain Women.
      </p>
      <p>I am currently training for World Championships 2024 with GB Women!</p>
      <h3 className="text-xl bg-violet text-white rounded-md p-1 w-full">
        Highlight play of the final
      </h3>
      <iframe
        max-width="280"
        max-height="220"
        src="https://www.youtube.com/embed/9qZlyDkUjIc?si=bc6zIiglhj88v184&amp;start=3666"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="bg-orange text-black rounded-md p-1">Team highlights</h3>
      <iframe
        max-width="260"
        max-height="200"
        src="https://www.youtube.com/embed/XIi2s2JYqME?si=v4Mv5NVnMhovbMyp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p>
        Aside from Ultimate Frisbee I love all sports including surfing,
        climbing and the gym.
      </p>
    </>
  );
}

export default AboutMe;
