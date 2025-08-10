import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import NotfoundPage from "../Pages/NotfoundPage";
import HomePage from "../Pages/HomePage";
import AllTouristsSpotPage from "../Pages/AllTouristsSpotPage";
import AddTouristsSpotPage from "../Pages/AddTouristsSpotPage";
import MyListPage from "../Pages/MyListPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "../Private/PrivateRoute";
import DetailsPage from "../Pages/DetailsPage";
import UpdatePage from "../Pages/UpdatePage";

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
        loader: () => fetch("http://localhost:3000/all-tourist-spots"),
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpotPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/tourist-spot/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-spot/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tourist-spot/${params.id}`),
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
