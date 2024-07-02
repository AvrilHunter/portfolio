import { Link } from "react-router-dom";

function Nav(): JSX.Element {
  return (
    <nav className="flex justify-around gap-2 md:justify-end p-1 ">
      <Link
        to={"/"}
        className="text-azure border-4 border-azure rounded-md p-1 text-center"
      >
        Home
      </Link>
      <Link
        to={"/projects"}
        className="bg-amber text-black rounded-md p-1 text-center"
      >
        Projects
      </Link>
      <Link
        to={"/about-me"}
        className="bg-orange text-black rounded-md p-1 text-center"
      >
        About Me
      </Link>
      <Link
        to={"/contact"}
        className="bg-violet text-white rounded-md p-1 text-center"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Nav;
