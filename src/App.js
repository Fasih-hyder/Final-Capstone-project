import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepages';
import House from './SeacondComponents/Home/home2';
function App() {
  let Router = createBrowserRouter([
    {
      path:"/",
      element:  <Homepage/>
    },
    {
      path:"/House",
      element:  <House/>
    },
  ])
  return (
    <> 
    <RouterProvider router={Router}/> 
    </>
  );
}

export default App;
