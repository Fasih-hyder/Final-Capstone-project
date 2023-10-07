import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepages';
import Coporter from './Carporate-Agency/DigitalSense/Carporate'

function App() {
  let Router = createBrowserRouter([
    {
      path:"/",
      element:  <Homepage/>
    },
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
    <RouterProvider router={Router}/> 
    </>
  );
}

export default App;
