import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/Layout";
import Home from "./src/Featured/Pages/Home";
import NotFound from "./src/Featured/Pages/NotFound";
import Register from "./src/Featured/Pages/register";
import Login from "./src/Featured/Pages/login";

export const Router = createBrowserRouter([
  {
    id: 1,
    element: <Layout />,
    children: [
      {
        id: 2,
        path: "/",
        element: <Home />,
      },
      {
        id: 3,
        path: "/register",
        element: <Register />,
      },
      {
        id: 3,
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    id: 3,
    path: "*",
    element: <NotFound />,
  },
]);
