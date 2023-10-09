import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepages';
import Coporter from './Carporate-Agency/DigitalSense/Carporate'
// import Sign from './Sign-In-page/sign'


function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element:  <Homepage/>
    },
    // {
    //   path:"/Sign",
    //   element:  <Sign />
    // },
    {
      path:"/Homepage",
      element:  <Homepage/>
    },
    {
      path:"/Coporter",
      element:  <Coporter/>
    },
  ])
  return (
    <> 
    <RouterProvider router={router}/> 
    </>
  );
}

export default App;
