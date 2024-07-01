import { Link } from "react-router-dom";

function Nav(): JSX.Element {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about-me"}>About Me</Link>
      <Link to={"/projects"}>Projects</Link>
      <p>CV</p>
      <p>Contact</p>
    </>
  );
}

export default Nav;
