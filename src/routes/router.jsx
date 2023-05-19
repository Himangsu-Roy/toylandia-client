import { createBrowserRouter } from "react-router-dom";
import HomeToyDetails from "../components/HomeToyDetails/HomeToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ShopByCategory from "../pages/ShopByCategory/ShopByCategory";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import PrivateRouter from "./PrivateRouter";

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
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRouter>
            <ToyDetails></ToyDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/hometoydetails/:id",
        element: (
          <PrivateRouter>
            <HomeToyDetails></HomeToyDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/addatoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
]);

export default router;
