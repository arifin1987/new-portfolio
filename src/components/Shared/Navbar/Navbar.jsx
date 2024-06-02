import { Link } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <div>
              <Link>Shohidul Arifin</Link>
            </div>
            <div className="space-x-4">
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
