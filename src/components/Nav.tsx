import { Link } from "react-router-dom";
import Menu from "./Menu";

function Nav(): JSX.Element {
  return (
    <nav>
      <div className="hidden bg-white md:flex justify-around gap-1 md:justify-end p-1 sticky top-0">
        <Link
          to={"/"}
          className="text-black bg-azure rounded-md p-3 text-center hover:bg-rose font-bold"
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          className="bg-amber text-black rounded-md p-3 text-center hover:bg-rose font-bold"
        >
          Projects
        </Link>
        <Link
          to={"/about-me"}
          className="bg-orange text-black rounded-md p-3 text-center hover:bg-rose font-bold"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="bg-violet text-white rounded-md p-3 text-center hover:bg-rose font-bold"
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </nav>
  );
}

export default Nav;
