import React from "react";
import image3 from "../../Assests/images/logo522.png";
import social1 from "../../Assests/images/facebook.png";
import social2 from "../../Assests/images/google+.png";
import { Link, Outlet } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Signin() {
  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center "
      >
        <div className=""></div>
        <MDBCard className="m-5 border-0" style={{ maxWidth: "500px" }}>
          <MDBCardBody className="px-5">
            <div className="d-flex justify-content-center">
              <img src={image3} alt="" />
            </div>

            <h1 className="text-uppercase text-center mb-5 fw-bold">
              Hello, Again
            </h1>
            <form action="">
              <MDBInput
                required
                wrapperClass="mb-4"
                placeholder="User Name"
                size="lg"
                id="form1"
                type="text"
              />

              <MDBInput
                required
                wrapperClass="mb-4"
                placeholder="Password"
                size="lg"
                id="form3"
                type="password"
              />
              <button type="submit" class="btn btn-primary btn-lg w-100">
                Log in
              </button>
            </form>
            <div className="d-flex flex-row justify-content-between  mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Save Password"
              />
              <a class="nav-link active" aria-current="page" href="#">
                Forget Password?
              </a>
            </div>

            <div className="text-center d-flex justify-content-around py-3">
              <span className="">
          
                <button className="text-white bg-primary px-5 py-2 rounded-2 border-0">
                  Facebook
                </button>
              </span>
              <button className="text-white bg-danger px-5 py-2 rounded-2 border-0">
                Google
              </button>
              <br />
            </div>
            <hr className="mx-n5" />
            <p className="text-center">
              Don't have an account yet?
              <Link className="fw-bold text-black  " to="/Signup">
                Sign Up
              </Link>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Outlet />
    </>
  );
}

export default Signin;
