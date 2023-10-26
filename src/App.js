import "./App.css";
import Signin from "./Pages/Homepage/sign";
import Homepage from "./Pages/Homepage/homepages";
import Carporate from "./Carporate-Agency/DigitalSense/Carporate";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Homepage/components/navbar/navbar";
import Signup from "./Pages/Homepage/signup";
import Aboutus from "./Carporate-Agency/DigitalSense/Aboutus";
import Checkout from "./Pages/Homepage/components/Shops/Checkout.jsx";
import ShopSingle from "./Pages/Homepage/components/Shops/ShopSingle";
import ShopCatlog from "./Pages/Homepage/components/Shops/ShopCatlog";
// import { Offcanvas } from "bootstrap";
import Offcanvas from "./Pages/Homepage/components/Shops/Offcanvas"


function App() {
  let route = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <ShopCatlog />,
        },
        {
          path: "/Homepage",
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
        {
          path: "/Offcanvas",
          element: <Offcanvas/>,
        }
       
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
