import { createBrowserRouter } from "react-router-dom";
import AddToy from "../pages/AddToy/AddToy";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ShopByCategory from "../pages/ShopByCategory/ShopByCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <ShopByCategory></ShopByCategory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/addatoy",
    element: <AddToy></AddToy>,
  },
]);

export default router;
