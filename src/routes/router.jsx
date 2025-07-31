
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Tshirts from "../pages/Tshirts";
import Jeans from "../pages/Jeans";
import Shirts from "../pages/Shirts";
import MyCart from "../pages/MyCart"; // ✅ NEW

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tshirts", element: <Tshirts /> },
      { path: "/jeans", element: <Jeans /> },
      { path: "/shirts", element: <Shirts /> },
      { path: "/product/:category/:id", element: <ProductDetails /> },
      { path: "/mycart", element: <MyCart /> }, // ✅ NEW
    ],
  },
]);

export default router;

