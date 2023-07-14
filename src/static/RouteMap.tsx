import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <DetailsPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

function RouteMap() {
  return <RouterProvider router={router} />;
}

export default RouteMap;
