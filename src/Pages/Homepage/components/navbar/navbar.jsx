
import image from '../../../../Assests/images/logo.png'
import troggler from '../../../../Assests/images/Sort.svg'
import sign from '../../../../Assests/images/Item → Link 2.svg'
import appointment from '../../../../Assests/images/Item → Link.svg'

import { Link, Outlet } from 'react-router-dom'
const Navbar =()=> {
    return(
        <div className=''>

        <nav class="navbar navbar-expand-lg  ">
        <div class="container">
          <a class="navbar-brand" href="#"><img height={40} src={image} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""><img src={troggler} /></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto gap-3 mt-2 mx-3 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Aboutus">User Account</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Carporate">Pages</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Documentation</a>
              </li>



            </ul>
            <Link to="/Signin"><button type="button" class="btn border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={sign} height={40} />

</button>


            </Link>
           <a href="#">  <img src={appointment} /> </a>
          
          </div>
        </div>
      </nav>
      <Outlet/>
        </div>
    )
}

export default Navbar