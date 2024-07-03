import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="flex justify-center p-3 gap-3 bg-azure rounded-md mt-3">
      <a href={"https://github.com/AvrilHunter/"} target={"_blank"}>
        <img src={github} alt="github logo" width="30" height="40" />
      </a>
      <a
        href={"https://www.linkedin.com/in/avril-hunter-6814b087/"}
        target={"_blank"}
      >
        <img width="30" height="40" src={linkedin} alt="linkedIn logo" />
      </a>
    </footer>
  );
}

export default Footer;
