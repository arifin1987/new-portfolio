import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";

import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import DashboardAllProjects from "../pages/Dashboard/DashboardAllProjects/DashboardAllProjects";
import DashboardCreateProjects from "../pages/Dashboard/DashboardCreateProjects/DashboardCreateProjects";
import DashboardUpdateProjects from "../pages/Dashboard/DashboardUpdateProjects/DashboardUpdateProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "all-projects",
        element: <Projects />,
      },
      {
        path: "all-projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-projects/${params.id}`),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "all-projects",
        element: <DashboardAllProjects />,
      },
      {
        path: "create-projects",
        element: <DashboardCreateProjects />,
      },
      {
        path: "update-projects/:id",
        element: <DashboardUpdateProjects />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-projects/${params.id}`),
      },
    ],
  },
]);
