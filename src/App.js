import "./App.css";
import Signin from "./Pages/Homepage/sign";
import Homepage from "./Pages/Homepage/homepages";
import Carporate from "./Carporate-Agency/DigitalSense/Carporate";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Homepage/components/navbar/navbar";
import Signup from "./Pages/Homepage/signup";
import Aboutus from "./Carporate-Agency/DigitalSense/Aboutus";
import Checkout from "./Pages/Homepage/Checkout";
import ShopSingle from "./Pages/Homepage/Shop Single";

function App() {
  let route = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/Carporate",
          element: <Carporate />,
        },
        {
          path: "/Signin",
          element: <Signin />,
        },
        {
          path: "/Signup",
          element: <Signup />,
        },
        {
          path: "/Aboutus",
          element: <Aboutus />,
        },
        {
          path: "/Checkout",
          element: <Checkout />,
        },
        {
          path: "/ShopSingle",
          element: <ShopSingle />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      
      {/* <Homepage/>
    <Signin/>
    <Carporate/> */}
    </>
  );
}

export default App;
