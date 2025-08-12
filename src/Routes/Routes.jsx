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
import SpotByCountryPage from "../Pages/SpotsByCountryPage";

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
        path: "/spot-by-country",
        element: <SpotByCountryPage />,
      },
      {
        path: "/update-spot/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(
            `https://tourify-backend-nine.vercel.app/tourist-spot/${params.id}`
          ),
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
