import React from 'react';
import image3 from '../../Assests/images/logo522.png'
import image4 from '../../Assests/images/logo-1.svg'
import social1 from '../../Assests/images/facebook.png'
import social2 from '../../Assests/images/google+.png'
import Man from '../../Assests/images/blog-2.jpg'
import './Form.css'
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBCardImage,
}
  from 'mdb-react-ui-kit';

function Signin() {
  return (
    <>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center ' >
        <div className=''></div>
        <MDBCard className='m-5 border-0' style={{ maxWidth: '500px' }}>
          <MDBCardBody className='px-5'>
            <div className='d-flex justify-content-center'>
              <img src={image3} alt="" />
            </div>

            <h1 className="text-uppercase text-center mb-5 fw-bold">Hello, Again</h1>
            <form action="">
            <MDBInput required wrapperClass='mb-4' placeholder='User Name' size='lg' id='form1' type='text' />

            <MDBInput required wrapperClass='mb-4' placeholder='Password' size='lg' id='form3' type='password' />
            <button type="submit" class="btn btn-primary btn-lg w-100">Log in</button>
            </form>
            <div className='d-flex flex-row justify-content-between  mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Save Password' />
              <a class="nav-link active" aria-current="page" href="#">Forget Password?</a>
            </div>
            <div className='d-flex justify-content-between gap-5 '>
              <img src={social1} className=' ' height={50} alt="" />
              <img src={social2} className='' height={50} alt="" />
            </div>

            <hr className="mx-n5" />
            <p className='text-center'>Don't have an account yet?<a className='fw-bold text-black  ' href="#">Sign Up</a></p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>






















      <MDBContainer fluid className='border-0'>

        <MDBRow className='  '>
          <MDBCol>

            <MDBCard className='my-4'>

              <MDBRow className='g-0'>
                <MDBCol md='6'>
                  <MDBCardBody className='px-5 '>
                    <div className='mt-5 mb-5'>
                      <img src={image4} alt="" />
                    </div>



                    <h1 className="text-uppercase t mb- fw-bold">Create An Account</h1>

                    <p className="">Welcome Back! Slect Methode to Register:</p>
                    <MDBRow>
                      
                      <MDBCol md='6'>
                        <form action="">
                        <MDBInput wrapperClass='mb-4' placeholder='First Name' size='lg' id='form1' type='text' required />
                      </form>
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 required' placeholder='Last Name' size='lg' id='form2' type='text' required />
                      </MDBCol>

                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='form3' type='password' required />
                    <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' size='lg' id='form3' type='password' required />

                    <div className='d-flex flex-row justify-content-between  mb-4'>
                      <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree to Terms & Conditions' required />

                    </div>
                    <button type="button" class="btn btn-primary btn-lg w-100">Sign up</button>

                    <p className='text-center'>Or sign in with your social account</p>
                    <div className='d-flex justify-content-between gap-5 '>
                      <img src={social1} className=' ' height={50} alt="" />
                      <img src={social2} className='' height={50} alt="" />
                    </div>
                    <p className='text-center mt-5'> Have an account already?<a className='fw-bold  ' href="#">Login Your Account</a></p>



                  </MDBCardBody>

                </MDBCol>
                <MDBCol md='6' className="d-none d-md-block">
                  <MDBCardImage src={Man} alt="Sample photo" className="h-100" fluid />
                </MDBCol>


              </MDBRow>

            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>


    </>
  );
}

export default Signin;