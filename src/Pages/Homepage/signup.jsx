import React from "react";
import image4 from "../../Assests/images/logo-1.svg";

import Man from "../../Assests/images/blog-2.jpg";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";

function Signup() {
  return (
    <>
      <MDBContainer fluid className="border-0">
        <MDBRow className="  ">
          <MDBCol>
            <MDBCard className="my-4">
              <MDBRow className="g-0">
                <MDBCol md="6">
                  <MDBCardBody className="px-5 ">
                    <div className="mt-5 mb-5">
                      <img src={image4} alt="" />
                    </div>

                    <h1 className="text-uppercase t mb- fw-bold">
                      Create An Account
                    </h1>

                    <p className="">Welcome Back! Slect Methode to Register:</p>
                    <MDBRow>
                      <MDBCol md="6">
                        <form action="">
                          <MDBInput
                            wrapperClass="mb-4"
                            placeholder="First Name"
                            size="lg"
                            id="form1"
                            type="text"
                            required
                          />
                        </form>
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4 required"
                          placeholder="Last Name"
                          size="lg"
                          id="form2"
                          type="text"
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Password"
                      size="lg"
                      id="form3"
                      type="password"
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Confirm Password"
                      size="lg"
                      id="form3"
                      type="password"
                      required
                    />

                    <div className="d-flex flex-row justify-content-between  mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        label="I agree to Terms & Conditions"
                        required
                      />
                    </div>
                    <button type="button" class="btn btn-primary btn-lg w-100">
                      Sign up
                    </button>

                    <p className="text-center">
                      Or sign in with your social account
                    </p>
                    <div className=" d-flex justify-content-around   py-3 ">
                      <span className="">
                        <button className="text-white bg-primary px-5 py-2 rounded-2 border-0 ">
                          Facebook
                        </button>
                      </span>
                      <button className="text-white bg-danger px-5 py-2 rounded-2 border-0">
                        Google+
                      </button>
                      <br />
                    </div>
                    <p className="text-center mt-5">
                      {" "}
                      Have an account already?
                      <Link className="fw-bold  " to="/Signin">
                        Login Your Account
                      </Link>
                    </p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    src={Man}
                    alt="Sample photo"
                    className="h-100"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Outlet />
    </>
  );
}

export default Signup;
