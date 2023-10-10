import './App.css';
import Signin from './Pages/Homepage/sign';
import Homepage from './Pages/Homepage/homepages';
import Carporate from './Carporate-Agency/DigitalSense/Carporate';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Pages/Homepage/components/navbar/navbar';




function App() {
  let route = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children:[
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

      ]
    }
  ]

  )

  return (
    <> 
       <RouterProvider router={route}/> 
    {/* <Homepage/>
    <Signin/>
    <Carporate/> */}
    </>
  );
}

export default App;
