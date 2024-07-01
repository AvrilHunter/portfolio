import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <>
      <a href={"https://github.com/AvrilHunter/"} target={"_blank"}>
        <img className="contact-icons" src={github} alt="github logo" />
      </a>
      <a
        href={"https://www.linkedin.com/in/avril-hunter-6814b087/"}
        target={"_blank"}
      >
        <img className="contact-icons" src={linkedin} alt="linkedIn logo" />
      </a>
    </>
  );
}

export default Footer;
