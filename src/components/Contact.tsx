function Contact() {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl text-white rounded-md bg-rose p-1 w-full">
        Contact Me
      </h1>
      <p className="self-center">
        Please don't hesitate to contact me with any
        opportunities or collaboration suggestions.
      </p>
      <a
        href="mailto:avrilhunter15@gmail.com"
        className="bg-orange text-black p-1 mt-1 mb-1 rounded-md text-center"
        target="_blank"
      >
        avrilhunter15@gmail.com
      </a>
      <a
        href={"https://www.linkedin.com/in/avril-hunter-6814b087/"}
        target={"_blank"}
        className="bg-orange text-black p-1 mt-1 mb-1 rounded-md text-center"
      >
        LinkedIn Profile
      </a>
      <a
        href={"https://github.com/AvrilHunter/"}
        target={"_blank"}
        className="bg-orange text-black p-1 mt-1 mb-1 rounded-md  text-center"
      >
        GitHub
      </a>
    </section>
  );
}

export default Contact;
