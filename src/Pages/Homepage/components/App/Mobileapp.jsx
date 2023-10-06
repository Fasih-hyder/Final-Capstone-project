import React from 'react'
import click from "../../../../Assests/images/span.square 6.svg"
import download from '../../../../Assests/images/app-store.png'
import callus from '../../../../Assests/images/number.png'
import scr from '../../../../Assests/images/mobile-app.png'
import './Mobileapp.css';
function Mobileapp() {
  return (
    <div className='bg-color'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 mt-5'>
            <h1 className='font5 mt-5'>
              Ready To Give Us a Try?
            </h1>
            <span className='font6 '>
              In a professional Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline context it the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live.
            </span>
            <div className='mt-5 '>
              <img src={click} alt="" /> <span className='font-s '>Skilled Dentist</span>
              <img className='margin-x' src={click} alt="" /> <span className='font-s  '>Letest Technology</span>
            </div>
            <div className='mt-4'>
              <img src={click} alt="" /> <span className='font-s'>Affortable Cost</span>
              <img className='margin-x' src={click} alt="" /> <span className='font-s  '>24 hour Service</span>
            </div>
            <div className=' mt-5'>
              <img src={download} className='img-fluid' alt="" />
              <img src={callus} className='img-fluid' alt="" />
            </div>
          </div>
          <div className='col-md-6 mt-5'>
          <img src={scr} height={600}  alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobileapp