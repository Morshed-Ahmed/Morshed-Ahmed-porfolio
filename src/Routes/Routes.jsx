import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects/",
        element: <Projects></Projects>,
      },
      {
        path: "/about/",
        element: <About></About>,
      },
    ],
  },
]);
