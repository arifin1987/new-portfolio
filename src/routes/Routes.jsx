import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

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
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
