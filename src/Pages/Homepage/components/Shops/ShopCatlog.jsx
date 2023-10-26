import React from 'react'
import "./Catlog.css"
import Footers from '../../../../Carporate-Agency/DigitalSense/footer'
import HomeSwiper from './HomeSwiper/HomeSwiper'
function ShopCatlog() {
  return (
    <>
    <div>
      <div className="back-ground">
        <div className='position-relative'>
            <span className='bg-1 rounded-1 px-1  mx-5 mar   position-absolute top-50 start-0'>Hot Deals</span>
        <h1 className='col-md-8  fw-bold mx-5  mareg    position-absolute top-50 start-0 ' >
        Wireless Headphones &  Decoration At <span className='col'>25% Off Discount </span>
          </h1>
          <button type="button" class="btn btn-success px-3 p-3  ma  mx-5 position-absolute top-50 start-0">Explore-More..</button>
        </div>
      </div>

				</div>	
        <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-9'> <HomeSwiper/>	</div>
        </div>
        </div>
       			
				<Footers/>
                  </>
     

  )
}

export default ShopCatlog
