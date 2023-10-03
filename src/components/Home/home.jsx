import React from 'react'
import './home.css';
import image from '../../Assests/images/logo.png'
import troggler from '../../Assests/images/Sort.svg'
import sign from '../../Assests/images/Item → Link 2.svg'
import appointment from '../../Assests/images/Item → Link.svg'
import click from '../../Assests/images/span.square 6.svg'
import book from '../../Assests/images/Button.svg'
import call from '../../Assests/images/Link.png'
import women from '../../Assests/images/hs-1.png'
function Home() {
  return (
    <div className='bg-color'>
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

      <div className=' margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className='font-c'><b>
              Best Healthcare For Your <span className='Font-H'>Healthy</span> Life
              </b>
              
              </h1>
              <p className='font-p mt-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
            <div className='mt-5 '>
              <img src={click} alt="" /> <span className='font-s '>Skilled Dentist</span>
              <img className='margin-x' src={click} alt="" /> <span className='font-s  '>Letest Technology</span>
            </div>
            <div className='mt-3'>
              <img src={click} alt="" /> <span className='font-s'>Affortable Cost</span>
              <img className='margin-x' src={click} alt="" /> <span className='font-s  '>24 hour Service</span>
            </div>
            <div className='mt-5 d-flex '>
              <img  src={book} className='img-fluid ma' alt="" />
              <img  src={call} className='img-fluid ' alt="" />
                </div>
                
                
            </div>
            <div className='col-md-6'>
            <img src={women} className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home