import React from 'react'
import image from '../../../../Assests/images/logo.png'
import image2 from '../../../../Assests/images/List.svg'
import img1 from '../../../../Assests/images/Link1.svg'
import img2 from '../../../../Assests/images/Link.svg'

import './footer.css'
function footer() {
  return (
    <div>

      <div className='mt-5 p-5'>
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-4">
              <div class="footer-widget mt-3">
                <img src={image} height={70} width={200} className='img-fluid hight' />
                <div class="footer-add mt-4">
                  <p className='para'>Collins Street West, Victoria Near Bank Road<br />Australia QHR12456.</p>
                </div>
                <img src={image2} className='img-fluid' />
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <div class="footer-widget">
                <h4 class="widget-title">The Navigation</h4>
                <p className='para'>Talent Marketplace</p>
                <p className='para' >Payroll Services</p>
                <p className='para'>Direct Contracts</p>
                <p className='para'>Hire Worldwide</p>
                <p className='para'>Hire in the USA</p>
                <p className='para'>How to Hire</p>

              </div>
            </div>

            <div class="col-lg-2 col-md-4">
              <div class="footer-widget">
                <h4 class="widget-title">Our Resources</h4>
                <p className='para'>Free Business tools</p>
                <p className='para'>Affiliate Program</p>
                <p className='para'>Success Stories</p>
                <p className='para'>Upwork Reviews</p>
                <p className='para'>Resources</p>
                <p className='para'>Help &amp; Support</p>

              </div>
            </div>

            <div class="col-lg-2 col-md-6">
              <div class="footer-widget">
                <h4 class="widget-title">The Company</h4>
                <p className='para'>About Us</p>
                <p className='para'>Leadership</p>
                <p className='para'>Contact Us</p>
                <p className='para'>Investor Relations</p>
                <p className='para'>Trust, Safety &amp; Security</p>

              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h4 class="widget-title">Download Apps</h4>
                <div class="app-wrap">
                  <img src={img1} class="img-fluid" alt="" />
                  <img src={img2} class="img-fluid mt-2" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center justify-content-between">

            <div class="col-xl-4 col-lg-5 col-md-5 mt-5 mb-3">
              <p class="mb-0 para">© 2023 Killar Apps® Design by Themezhub.</p>
            </div>



          </div>
        </div>
      </div>

   

    </div>
  )
}

export default footer