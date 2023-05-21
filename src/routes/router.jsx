import { createBrowserRouter } from "react-router-dom";
import HomeToyDetails from "../components/HomeToyDetails/HomeToyDetails";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Register from "../pages/Register/Register";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-landia-server.vercel.app/alltoys"),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRouter>
            <MyToys></MyToys>
          </PrivateRouter>
        ),
      },

      {
        path: "/update/:id",

        element: (
          <PrivateRouter>
            <UpdateToy></UpdateToy>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-landia-server.vercel.app/mytoy/${params.id}`),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRouter>
            <ToyDetails></ToyDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-landia-server.vercel.app/toydetails/${params.id}`),
      },
      {
        path: "/hometoydetails/:id",
        element: (
          <PrivateRouter>
            <HomeToyDetails></HomeToyDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-landia-server.vercel.app/toydetails/${params.id}`),
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRouter>
            <AddToy></AddToy>
          </PrivateRouter>
        ),
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
