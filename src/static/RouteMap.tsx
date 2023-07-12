import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

function RouteMap() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/product",
          element: <ProductDetails />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default RouteMap;
