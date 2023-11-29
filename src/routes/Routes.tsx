import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import NotFound from "../pages/NotFound";

const Routes = () => {
  const element = useRoutes([
    {
      element: <MainLayout />,
      path: "/",
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <Products />,
          path: "products",
        },
        {
          element: <AddProduct />,
          path: "add_new_product",
        },
      ],
    },
    {
      element: <NotFound />,
      path: "/*",
    },
  ]);

  return element;
};

export default Routes;
