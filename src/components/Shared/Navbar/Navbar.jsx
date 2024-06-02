import { Link } from "react-router-dom";
import Container from "../Container";
import { FaHome, FaUserShield } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <div>
              <Link to="/" className="text-2xl ">
                <span className="text-emerald-600">Shohidul</span>{" "}
                <span className="text-blue-600">Arifin</span>
              </Link>
            </div>
            <div className="space-x-8 flex">
              <Link
                className="text-blue-500 hover:text-red-500 flex gap-2 items-center"
                to="/"
              >
                <span className="text-blue-500">
                  <FaHome />
                </span>
                Home
              </Link>

              <Link className="text-blue-500 hover:text-red-500" to="/about">
                About
              </Link>
              <Link className="text-blue-500 hover:text-red-500" to="/skills">
                Skills
              </Link>
              <Link className="text-blue-500 hover:text-red-500" to="/projects">
                Projects
              </Link>
              <Link className="text-blue-500 hover:text-red-500" to="/contact">
                Contact
              </Link>
              <Link
                className="text-blue-500 hover:text-red-500 flex gap-2 items-center"
                to="/dashboard"
              >
                <span className="text-blue-500">
                  <FaUserShield />
                </span>
                Dashboard
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
