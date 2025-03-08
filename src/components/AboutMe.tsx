function AboutMe() {
  return (
    <section>
      <h1 className="text-2xl text-white rounded-md bg-rose p-1 w-full">
        About Me
      </h1>
      <p>
        Outside of work I love all sports including Ultimate Frisbee, surfing and weightlifting.
      </p>
      <br></br>
  
      <p>
        My main sport has been Ultimate Frisbee since I was introduced to this at University. I have competed for Great Britain at several European and World Ultimate
        Frisbee Championships since 2016; the highlight of my playing career was
        winning Silver at European Championships 2023 competing with Great
        Britain Women.
      </p>
      <br></br>
      <p>In 2024 I competed at World Championships in Australia, it was an incredible opportunity to match up against the best women in the world and we placed 12th.</p>
      <br></br>
      <p>
      Please have a watch of the final from 2023 and a highlight play video of our
        season to see what a fun sport it is!
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
    </section>
  );
}

export default AboutMe;
