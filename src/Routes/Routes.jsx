import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import NotfoundPage from "../Pages/NotfoundPage";
import HomePage from "../Pages/HomePage";
import AllTouristsSpotPage from "../Pages/AllTouristsSpotPage";
import AddTouristsSpotPage from "../Pages/AddTouristsSpotPage";
import MyListPage from "../Pages/MyListPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotfoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpotPage />,
      },
      {
        path: "/add-tourists-spot",
        element: <AddTouristsSpotPage />,
      },
      {
        path: "/my-list",
        element: <MyListPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
