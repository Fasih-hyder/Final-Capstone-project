import React, { useState } from "react";
import logoicon from "../../Assests/images/logo522.png";
import { Link, Outlet } from "react-router-dom";
const SignUpSec = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameMesg, setFirstNameMesg] = useState("Enter your Name");
  const [showFirstNameError, setShowFirstNameError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [passwordMesg, setPasswordMesg] = useState("Enter your vaild password");
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);

    if (firstName !== "")
      // setShowFirstNameError(false)
      setFirstNameMesg("Looks Good");
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

    if (userPassword === "") {
      setShowUserPasswordError(true);
    }
  };
  return (
    <div className="text-center ">
      <div className="container">
        <div className="row ">
          <div className="col-md-3"></div>
          <div className="col-md-6 p-5 border rounded-5 bg-light">
            <img src={logoicon} className="img-fluid" alt="" />
            <h1 className="fw-bold ">Hello,World</h1>

            <div>
              <form onSubmit={submitHandler}>
                <div className="container-fluid row">
                  <div className="col-md-12">
                    <input
                      className="px-3 py-2 rounded w-100 para-style border"
                      value={firstName}
                      onChange={firstNameHandler}
                      type="text"
                      placeholder="User Name"
                    />
                    {showFirstNameError && (
                      <p
                        className={`${
                          firstNameMesg === "Looks Good"
                            ? "text-success"
                            : "text-danger"
                        } fw-bold`}
                      >
                        {firstNameMesg}
                      </p>
                    )}
                  </div>
                </div>

                <div className="container-fluid row">
                  <div className="col-md-12">
                    <input
                      className="px-3 py-2 rounded w-100 my-2 para-style border "
                      value={userPassword}
                      onChange={userPasswordHandler}
                      type="password"
                      placeholder="Password"
                    />
                    {showUserPasswordError && (
                      <p
                        className={`${
                          passwordMesg === "Looks Good"
                            ? "text-success"
                            : "text-danger"
                        } fw-bold`}
                      >
                        {passwordMesg}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <input
                      className="px-3 py-3 rounded border-0 btn btn-primary text-white w-100"
                      type="submit"
                      value="Login In"
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <input className="mt-1" type="checkbox" name="checkBox" />
                      <span className="px-2">Save Password</span>
                    </div>
                    <span>Forgot Password?</span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" class="btn btn-danger px-5 mx-5 mt-3">
                      
                      Google+
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary px-5 mx-5  mt-3 "
                    >
                      
                      Facebook
                    </button>
                  </div>
                  <hr className="mt-3" />

                  <div className="">
                    Don't have an account yet?<Link to="/Signup">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};
export default SignUpSec;
