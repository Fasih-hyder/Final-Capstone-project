import React from 'react'
import './home2.css';
import image from '../../../../Assests/images/logo.png'
import troggler from '../../../../Assests/images/Sort.svg'
import sign from '../../../../Assests/images/Item → Link 2.svg'
import appointment from '../../../../Assests/images/register.svg'
import arr from '../../../../Assests/images/Arrow.svg'
import get from '../../../../Assests/images/Get-started.svg'
import check from '../../../../Assests/images/check-list.svg'
import str from '../../../../Assests/images/star.svg'
import str2 from '../../../../Assests/images/forword.svg'
import str3 from '../../../../Assests/images/google.svg'
import star from '../../../../Assests/images/golden-star.svg'
import pay1 from '../../../../Assests/images/razopay.svg'
import pay2 from '../../../../Assests/images/sitepoint.svg'
import pay3 from '../../../../Assests/images/cordrops.svg'
import pay4 from '../../../../Assests/images/PayPal.svg'
import pay5 from '../../../../Assests/images/drible.svg'
import pay6 from '../../../../Assests/images/unplish.svg'
import pay7 from '../../../../Assests/images/Hub.svg'
import pay8 from '../../../../Assests/images/shopify.svg'
import pay9 from '../../../../Assests/images/Rakta.svg'
import pay10 from '../../../../Assests/images/cococola.svg'
import maiol from '../../../../Assests/images/software-tools.png'
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
                <a class="nav-link active" aria-current="page" href="./Homepage">Home</a>
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
            <a href='#'><img src={sign} /></a>

            <a href='#'><img src={appointment} /></a>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='font-c mt-5'><b>
              The Digital Service You <span className='Font-H'>Really</span> Want
            </b>
            </h1>
            <p className='font-p mt-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
            <div className='mt-5 '>
              <img src={arr} alt="" /> <span className='font-s '>5 Project Free</span>
              <img className='margin-p' src={arr} alt="" /> <span className='font-s  '>Unlimited Team</span>
            </div>
            <div className='mt-3'>
              <img src={arr} alt="" /> <span className='font-s'>Friendly Support</span>
              <img className='margin-x' src={arr} alt="" /> <span className='font-s  '>250 GB Free Space</span>
            </div>
            <div className='mt-5 d-flex '>
              <img src={get} className='img-fluid ma' alt="" />
              <img src={check} className='img-fluid mx-5 ' alt="" />
            </div>

          </div>
          <div className='col-md-6'>
            <img src={maiol} className='img-fluid' alt="" />
          </div>

        </div>
      </div>

      <div className='bg pt-3 pb-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-3'>
              <div className=' d-flex'>
            <img src={str} className='img-fluid ' alt="" />
            <img src={star} className='img-fluid mb-3 mx-3' alt="" />
            <p className='text-white fw-bold mt-1 '>4.8/5</p>
            </div>
            <div className='col-md-1'>

            </div>
            </div>
            <div className='col-md-4 mx-3 ms-5'>
              <div className=' d-flex'>
            <img src={str2} className='img-fluid ' alt="" />
            <img src={star} className='img-fluid mb-3 mx-3' alt="" />
            <p className='text-white fw-bold mt-1 '>4.8/5</p>
            </div>
           
            </div>
            <div className='col-md-3 '>
              <div className=' d-flex'>
            <img src={str3} className='img-fluid ' alt="" />
            <img src={star} className='img-fluid mb-3 mx-3' alt="" />
            <p className='text-white fw-bold mt-1 '>4.8/5</p>
            </div>
            
            </div>
            
          </div>
        </div>
      </div>

      <div className='container mt-5'>
          <div className="text-center py-5"><h3>More Than 25,000 Teams Use Killar</h3></div>
          <div className='row'>
            <div className='col-md-2'>
              <img src={pay1} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay2} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay3} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay4} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay5} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay6} className='img-fluid ' alt="" />
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-2'>

            </div>
            <div className='col-md-2'>
              <img src={pay7} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay8} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay9} className='img-fluid ' alt="" />
            </div>
            <div className='col-md-2'>
              <img src={pay10} className='img-fluid ' alt="" />
            </div>

            <div className='col-md-2'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Home