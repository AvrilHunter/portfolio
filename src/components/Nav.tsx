import { Link } from "react-router-dom";

function Nav(): JSX.Element {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <p>About Me</p>
      <Link to={"/projects"}>Projects</Link>
      <p>CV</p>
      <p>Contact</p>
    </>
  );
}

export default Nav;
