
import logo from "../../Assests/images/logo-1.svg";
import React, { useState } from "react";
import Man from "../../Assests/images/blog-2.jpg";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,

} from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";

function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [emailMesg, setEmailMesg] = useState(
      "Enter your vaild Email"
  );
  const [showUserEmailError, setShowUserEmailError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameMesg, setFirstNameMesg] = useState("Enter your Name");
  const [showFirstNameError, setShowFirstNameError] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [confirmMesg, setConfirmMesg] = useState("Confirm password");
  const [showConfirmError, setShowConfirmError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [passwordMesg, setPasswordMesg] = useState("Enter your vaild password");
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);

  const firstNameHandler = (e) => {
      setFirstName(e.target.value);

      if (firstName !== "")
          // setShowFirstNameError(false)
          setFirstNameMesg("Looks Good");
  };

  const confirmHandler = (e) => {
      setConfirm(e.target.value);

      if (confirm === "")
          //setShowSurNameError
          setConfirmMesg("Looks Good");
  };

  const userEmailHandler = (e) => {
      setUserEmail(e.target.value);

      if (userEmail !== "")
          // setShowUserEmailError(false)
          setEmailMesg("Looks Good");
  };

  const userPasswordHandler = (e) => {
      setUserPassword(e.target.value);

      if (userPassword !== "")
          // setShowUserPasswordError(false)
          setPasswordMesg("Looks Good");
  };

  const submitHandler = (e) => {
      e.preventDefault();

      if (firstName === "") {
          setShowFirstNameError(true);
      }

      if (confirm === "") {
          setShowConfirmError(true);
      }

      if (userEmail === "") {
          setShowUserEmailError(true);
      }

      if (userPassword === "") {
          setShowUserPasswordError(true);
      }
  };
  return (
    <>
      <MDBContainer fluid className="">
       
        
         
              <div className="">
                <div className="row border-0">
                    <div className="col-md-6 p-5">
                        <img src={logo} width={200} className="img-fluid" alt="" />
                        <h1 className="fw-bold pt-3">Create An Account</h1>
                        <p>Welcome Back! Slect Methode to Register:</p>
                        <div>
                        <form onSubmit={submitHandler}>
                                <div className="container-fluid row">
                                    <div className="col-md-6">
                                        <input
                                            className='px-3 py-2 rounded w-100 para-style border'
                                            value={firstName}
                                            onChange={firstNameHandler}
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        {showFirstNameError && (
                                            <p className={`${firstNameMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{firstNameMesg}</p>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                    <input
                                            className='px-3 py-2 rounded w-100 para-style border '
                                            value={userEmail}
                                            onChange={userEmailHandler}
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                        {showUserEmailError && (
                                            <p className={`${emailMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{emailMesg}</p>
                                        )}
                                       
                                    </div>
                                </div>

                                <div className="container-fluid row">
                                    <div className="col-md-12">
                                    <input
                                            className='px-3 py-2 rounded w-100 my-2 para-style border '
                                            value={userPassword}
                                            onChange={userPasswordHandler}
                                            type="password"
                                            placeholder="Password"
                                        />
                                        {showUserPasswordError && (
                                            <p className={`${passwordMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{passwordMesg}</p>
                                        )}
                                    </div>
                                    <div className="col-md-12 py-4">
                                    <input
                                            className='px-3 py-2 rounded para-style w-100 border '
                                            value={confirm}
                                            onChange={confirmHandler}
                                            type="text"
                                            placeholder="Confirm Password"
                                        />
                                        {showConfirmError && (
                                            <p className={`${confirmMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{confirmMesg}</p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <input className="mt-1" type="checkbox" name="checkBox"/><span className="px-2">I agree to Terms & Conditions</span>
                                    </div>
                                    <div className="">
                                        <input className='px-3 py-3 rounded border-0 btn btn-primary text-white w-100' type="submit" value='Sign Up' />
                                    </div>
                                </div>
                            </form>
                            <p className="text-center">Or sign in with your social account</p>
                            <div className="d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-danger px-5 mt-3">G+ Google</button>
                            <button type="button" class="btn btn-outline-primary px-5 mx-5 mt-3 ">F Facebook</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                      <span>Have an account already?</span> <Link to="/Signin"><span className="ps-2 " >Login Your Account</span></Link> 
                    </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img style={{height:650}} src={Man}  className="img-fluid rounded-4 mt-3" alt="" />
                    </div>
                    


                </div>
            </div>
           
            
           
       
      
      </MDBContainer>
      <Outlet />
    </>
  );
}

export default Signup;
