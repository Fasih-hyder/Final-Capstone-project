import React from 'react'
import image from '../../Assests/images/logo.png'
import troggler from '../../Assests/images/Sort.svg'
import sign from '../../Assests/images/Item → Link 2.svg'
import appointment from '../../Assests/images/Item → Link.svg'
function Home() {
  return (
    
    <div>
        <nav class="navbar navbar-expand-lg  ">
        <div class="container">
          <a class="navbar-brand" href="#"><img height={40} src={image} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""><img src={troggler} /></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto gap-3 mt-2 mx-3 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">User Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Pages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Documentation</a>
              </li>



            </ul>
            <img src={sign} />
            <img src={appointment} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home