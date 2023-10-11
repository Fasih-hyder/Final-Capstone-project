import React from 'react';
import dot from "../../../Assests/images/Symbol.png"
import man from "../../../Assests/images/cs-2.png"

function Enchance() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={man} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <span className='div-bg-2 rounded-2  px-4 py-1 '>Enhance Engagement</span>
                        <h1 className=' h2-4 '>
                            Grow your most valuable visitors
                        </h1>
                        <span className='fonts'>
                            In a professional Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline context it the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live.
                        </span>
                        <h1 className=' h2-3 '>
                            Steps to grow your marketing
                        </h1>
                        <img src={dot} className='mx-2' alt="" />
                     
                 
                        <span>
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                        </span>
                        <br />
                        <br />
                        <img src={dot} className='mx-2' alt="" />
                        
                        <span className='mt-5'>
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                        </span>
                        <br />
                        <br />
                        <img src={dot} className='mx-2' alt="" />
                     
                 
                        <span>
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                        </span>
                        <br />
                        <br />
                        <img src={dot} className='mx-2' alt="" />
                        
                        <span className='mt-5'>
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                        </span>
                        <br />
                        
                    </div>

                </div>
            </div>
        </>
    );
}

export default Enchance;