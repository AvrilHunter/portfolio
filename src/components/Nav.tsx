import { Link } from "react-router-dom";

function Nav(): JSX.Element {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/about-me"}>About Me</Link>
      <Link to={"/contact"}>Contact Me</Link>
    </>
  );
}

export default Nav;
