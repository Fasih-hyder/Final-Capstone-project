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
import sym1 from '../../../../Assests/images/Symbol1.svg'
import sym2 from '../../../../Assests/images/Symbol2.svg'
import sym3 from '../../../../Assests/images/Symbol3.svg'
import sym4 from '../../../../Assests/images/Symbol4.svg'
import okay from '../../../../Assests/images/span.square 6.svg'
import maiol from '../../../../Assests/images/software-tools.png'
import group from "../../../../Assests/images/groupIcon.svg"
import earphone from "../../../../Assests/images/mic.svg"
import checkMark from "../../../../Assests/images/mark.svg"
import Rocket from "../../../../Assests/images/rokset.svg"
import mobilePhone from "../../../../Assests/images/mob-app.png"
import svg1 from "../../../../Assests/images/svg-1.svg"
import svg2 from "../../../../Assests/images/SVG-2.svg"
import svg3 from "../../../../Assests/images/svg-3.svg"

function Home() {
  return (

    <div>
      {/* <nav class="navbar navbar-expand-lg  ">
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
      </nav> */}
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



      {/* //services Secton */}
      <div className='container'>
        <div className="row">
          <div className="col-md-5 mt-5 pt-4"><h1> <b>Our Awesome <br /> Servises </b></h1>
            <p className="pt-5">
              At vero eos et accusamus et iusto odio <br />
              dignissimos ducimus qui blanditiis <br />
              praesentium voluptatum deleniti atque <br />
              corrupti quos dolores et quas molestias <br />
              excepturi sint occaecati cupiditate
            </p>
            <p className="pt-3">
              <img src={okay} className="img-fluid" alt="" /> <span>Individual approach to the brand</span> <br />
              <img src={okay} className="img-fluid" alt="" /> <span>We guarantee the result after a month</span> <br />
              <img src={okay} className="img-fluid" alt="" /> <span>Completing tasks exactly on time</span> <br />
            </p>
            <div className="pt-3"><button class="btn btn-primary px-4 py-3" type="submit">Check All Services</button></div>
          </div>
          <div className="col-md-7">
            <div className="row mt-5">
              <div className="col-md-6 ">
                <div className="border border-2 rounded-4 p-4"><img src={sym1} className="img-fluid" alt="" />
                  <h3>Digital Marketing</h3>
                  <p>The wise man therefore always holds in <br />
                    these matters to this principle of brand <br />
                    marketing selection.</p>
                </div>
                <div className="border border-2 rounded-4 mt-4 p-4"><img src={sym2} className="img-fluid" alt="" />
                  <h3>Digital Marketing</h3>
                  <p>The wise man therefore always holds in <br />
                    these matters to this principle of brand <br />
                    marketing selection.</p>
                </div>
              </div>
              <div className="col-md-6  mt-5 ">
                <div className="border border-2 rounded-4 p-4"><img src={sym3} className="img-fluid" alt="" />
                  <h3>Digital Marketing</h3>
                  <p>The wise man therefore always holds in <br />
                    these matters to this principle of brand <br />
                    marketing selection.</p>
                </div>
                <div className="border border-2 rounded-4 mt-4 p-4"><img src={sym4} className="img-fluid" alt="" />
                  <h3>Digital Marketing</h3>
                  <p>The wise man therefore always holds in <br />
                    these matters to this principle of brand <br />
                    marketing selection.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
       {/* //software Secton */}
        <div className='container'>
          <div className="bg-info rounded-4 ">
            <div className="row mt-5 py-5">
            <div className="col-md-6"><img src={group} className="img-fluid" alt="" /></div>
            <div className="col-md-6"><h1 className="mt-5 fw-bold ">  High & Popular Software <br />We Work With </h1>
                <p className="py-4 fs-6 ">hese cases are perfectly simple and easy to distinguish. In a free hour,<br />
                    when our power of choice is untrammelled and when nothing prevents <br />
                    our being able to do what we like best, every pleasure is to welcomed <br />
                    and every pain avoided. But in certain circumstances.</p>
                    
                    <div><button class="btn btn-primary px-4 py-3 rounded-4" type="submit">View More Software</button></div>
                    </div>
            </div>
          </div>
        </div>
        {/* benifits section */}
        <div className='container'>

        
        <div className="text-center mt-5"> Our Benifits
            <div><h2><b>Check Out Killar Benifits</b></h2></div>
            </div>
        <div className="row text-center pt-5">
            <div className="col-md-3">
            <img src={earphone} alt="" />
                <h3 className="pt-3">Friendly Support</h3>
                <p>
                These cases are perfectly simple and <br />
                 easy to distinguish The wise man <br />
                  therefore always and annoyances <br />
                   accepted.
                   </p>
            </div>
            <div className="col-md-3">
            <img src={earphone} alt="" />
            <h3 className="pt-3">Back Guarantee</h3>
                <p>
                These cases are perfectly simple and <br />
                 easy to distinguish The wise man <br />
                  therefore always and annoyances <br />
                   accepted.
                   </p>
            </div>
            <div className="col-md-3">
            <img src={checkMark} alt="" />
            <h3 className="pt-3">Complete Project</h3>
                <p>
                These cases are perfectly simple and <br />
                 easy to distinguish The wise man <br />
                  therefore always and annoyances <br />
                   accepted.
                   </p>

            </div>
            <div className="col-md-3 ">
            <img src={Rocket} alt="" />
            <h3 className="pt-3">Free SEO Audit</h3>
                <p>
                These cases are perfectly simple and <br />
                 easy to distinguish The wise man <br />
                  therefore always and annoyances <br />
                   accepted.
                   </p>

            </div>
        </div>
        </div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-7">
                    <h3> <b>High performence achieved with <br /> expert Killar team </b></h3>
                    <p className="pt-4">In a professional context it the actual content still not being ready. Think of a news <br />
                    blog that's filled with content hourly on the day of going live.</p>
                    <img src={svg1} className="img-fluid"   alt="" />
                    <h3>Custom Block Available</h3>
                    <p>The are likely to focus on the text, disregarding the layout and its elements. Besides, <br />
                     random text risks to be unintendedly humorous or offensive, an unacceptable risk</p>

        
                    <img src={svg2} className="img-fluid"   alt="" />
                    <h3>Hire Your Perfect Agent</h3>
                    <p>The are likely to focus on the text, disregarding the layout and its elements. Besides, <br />
                     random text risks to be unintendedly humorous or offensive, an unacceptable risk</p>

                    <img className='img-fluid' src={svg3} alt="" />
                    <h3>Choose Suitable Apps</h3>
                    <p>The are likely to focus on the text, disregarding the layout and its elements. Besides, <br />
                     random text risks to be unintendedly humorous or offensive, an unacceptable risk</p>

                </div>
                <div className="col-md-5"><div className="mt-5 "><img src={mobilePhone} className="img-fluid" alt="" /></div></div>
            </div>
        </div>
    </div>


  )
}

export default Home