import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SolutionDetails from "../pages/Solutions/SolutionDetails";
import SolutionsList from "../pages/Solutions/SolutionsList";
import YoutubePage from "../pages/Youtube/YoutubePage";
import ContactUs from "../pages/ContacUs/ContactUs";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/youtube",
        element: <YoutubePage />,
      },
      {
        path: "/solutions-list",
        element: <SolutionsList />,
      },
      {
        path: "/solutions/:id",
        element: <SolutionDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);

export default router;
