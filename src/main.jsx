import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/Shop/ProductPage";
import Cart from "./pages/Shop/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "shop/:id",
    element: <ProductPage />,
  },
  {
    path: "shop/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
