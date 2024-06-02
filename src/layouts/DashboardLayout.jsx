import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Container from "../components/Shared/Container";

const DashboardLayout = () => {
  return (
    <Container>
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </Container>
  );
};

export default DashboardLayout;
