import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [openNav, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!openNav);
  };

  return (
    <section className="flex m-2 justify-end">
      <div
        className="space-y-2 bg-orange pb-2 rounded-md"
        onClick={handleClick}
      >
        <span className="block h-0.5 w-8 m-2 bg-white"></span>
        <span className="block h-0.5 w-8 m-2 bg-white"></span>
        <span className="block h-0.5 w-8 m-2 bg-white"></span>
      </div>

      <div className={openNav ? "visible" : "hidden"}>
        <div className="bg-white block w-full h-full z-10 absolute top-0 left-0">
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex flex-col mt-16 m-2 gap-2">
            <Link
              to={"/"}
              className="text-black bg-azure rounded-md p-3 text-center hover:bg-rose font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/projects"}
              className="bg-amber text-black rounded-md p-3 text-center hover:bg-rose font-bold"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to={"/about-me"}
              className="bg-orange text-black rounded-md p-3 text-center hover:bg-rose font-bold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="bg-violet text-white rounded-md p-3 text-center hover:bg-rose font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
