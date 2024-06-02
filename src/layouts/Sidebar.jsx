import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="mx-10 bg-slate-500 p-8 my-2">
      <h1 className="text-xl text-white font-semibold flex gap-2">
        <FaUserShield />
        Dashboard
      </h1>
      <ul className="text-white">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/all-projects">All Projects</Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
