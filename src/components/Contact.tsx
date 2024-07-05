function Contact() {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl text-white rounded-md bg-rose p-1 w-full">
        Contact Me
      </h1>
      <p>
        Please don't hesitate to contact me if you have any questions,
        opportunities or collaborations.
      </p>
      <a href="mailto:avrilhunter15@gmail.com" className="self-center">
        avrilhunter15@gmail.com
      </a>
      <a
        href={"https://www.linkedin.com/in/avril-hunter-6814b087/"}
        target={"_blank"}
        className="bg-orange text-black p-1 mt-1 mb-1 rounded-md text-center"
      >
        Reach out on LinkedIn
      </a>
      <a
        href={"https://github.com/AvrilHunter/"}
        target={"_blank"}
        className="bg-orange text-black p-1 mt-1 mb-1 rounded-md  text-center"
      >
        Find my code on GitHub
      </a>
    </section>
  );
}

export default Contact;
