import { Link } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <div>
              <Link className="text-2xl ">
                {" "}
                <span className="text-emerald-600">Shohidul</span>{" "}
                <span className="text-blue-600">Arifin</span>
              </Link>
            </div>
            <div className="space-x-8">
              <Link className="text-blue-500 hover:text-red-500" to="/">
                Home
              </Link>
              <Link
                className="text-blue-500 hover:text-red-500"
                to="/dashboard"
              >
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
