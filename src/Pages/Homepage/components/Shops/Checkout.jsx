import React from "react";
import cill from "../../../../Assests/images/pjon.png";
import will from "../../../../Assests/images/email.png";
import handfree from "../../../../Assests/images/WirelessHandfree.svg";
import handfree2 from "../../../../Assests/images/handfree.svg";
import deelt from "../../../../Assests/images/deleteIcon.svg";
import { Link, Outlet } from "react-router-dom";
import Footers from "../../../../Carporate-Agency/DigitalSense/footer";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../../../functins/functins";
function Checkout() {
  const { items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  console.log(items);

  const removItemHandler = (date) => {
    dispatch(removeItem(date));
  };

  const increaseIQuantityHandler = (date) => {
    dispatch(increaseQuantity(date));
  };

  const decreaseIQuantityHandler = (date) => {
    dispatch(decreaseQuantity(date));
  };
  return (
    <>
      <form action="https://formspree.io/f/mvojdvol" method="POST">
        <div class="breadcrumb-wraps py-3">
          <div class="container">
            <div class="row mb-5">
              <div class="container my-5">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb p-3  rounded-3">
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link to="/">Home</Link>
                    </li>{" "}
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link to="/ShopSingle">Shop</Link>
                    </li>
                    <li
                      class="breadcrumb-item active text-primary"
                      aria-current="page"
                    >
                      Checkout
                    </li>
                  </ol>
                </nav>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-xl-6 col-lg-6 bg-light rounded-3">
              <div class="gray-simple rounded-2 py-3 px-3">
                <h1 class="fs-2 pb-3">Checkout</h1>
                <h3 class="d-flex align-items-center fs-6 lh-base font--bold">
                  <span class="square--20 font--medium circle  text-white me-2  px-2 rounded-5 bg-primary">
                    1
                  </span>
                  Shipping Details
                </h3>

                <div class="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
                  <div class="col-sm-6">
                    <label class="form-label fs-base">First Name</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label fs-base">Last Name</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label fs-base">Email</label>
                    <div class="position-relative">
                      <i class="fa-regular fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3">
                        <img src={will} alt="" />
                      </i>
                      <input
                        class="form-control form-control-lg ps-5"
                        type="email"
                        placeholder="   Email address"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label fs-base">Phone</label>
                    <div class="position-relative">
                      <i class="fa-solid fa-phone position-absolute top-50 start-0 translate-middle-y ms-3 me-5">
                        <img src={cill} alt="" />
                      </i>
                      <input
                        class="form-control form-control-lg ps-5"
                        type="tel"
                        placeholder="    +1 ___ ___ __"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="form-label fs-base">Country</label>
                    <select class="form-control">
                      <option value="" selected="" disabled="">
                        Select a country
                      </option>
                      <option value="Australia">Australia</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Canada">Canada</option>
                      <option value="Denmark">Denmark</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label fs-base">City</label>
                    <select class="form-control">
                      <option value="" selected="" disabled="">
                        Select a city
                      </option>
                      <option value="Sydney">Sydney</option>
                      <option value="Brussels">Brussels</option>
                      <option value="Toronto">Toronto</option>
                      <option value="Copenhagen">Copenhagen</option>
                      <option value="New York">New York</option>
                    </select>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label fs-base">Zip Code</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="XXX-XXXX"
                    />
                  </div>
                  <div class="col-12">
                    <label class="form-label fs-base">Address line</label>
                    <input class="form-control form-control-lg" type="text" />
                  </div>
                  <div class="col-12">
                    <label class="form-label fs-base">
                      Order notes <span class="text-muted">(optional)</span>
                    </label>
                    <textarea
                      class="form-control form-control-lg"
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="same-address"
                      />
                      <label
                        class="form-check-label text-dark fw-medium ms-1"
                        for="same-address"
                      >
                        Billing address same as delivery
                      </label>
                    </div>
                  </div>
                </div>

                <h3 class="d-flex align-items-center fs-6 lh-base font--bold">
                  <span class="square--20 font--medium circle   text-white me-2  px-2 rounded-5 bg-primary">
                    2
                  </span>
                  Shipping Method
                </h3>
                <div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="shipping"
                    id="standard"
                  />
                  <label
                    class="form-check-label d-flex justify-content-between"
                    for="standard"
                  >
                    <span>
                      <span class="d-block font--medium mb-1">
                        Standard Delivery
                      </span>
                      <span class="text-body">
                        Delivery in 5 - 8 working days
                      </span>
                    </span>
                    <span class="fs-base text-dark fw-semibold">$09.00</span>
                  </label>
                </div>
                <div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="shipping"
                    id="standard"
                  />
                  <label
                    class="form-check-label d-flex justify-content-between"
                    for="standard"
                  >
                    <span>
                      <span class="d-block font--medium mb-1">
                        Express Shipping
                      </span>
                      <span class="text-body">
                        Delivery in 5 - 7 working days
                      </span>
                    </span>
                    <span class="fs-base text-dark fw-semibold">$09.00</span>
                  </label>
                </div>

                <div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="shipping"
                    id="local"
                  />
                  <label
                    class="form-check-label d-flex justify-content-between"
                    for="local"
                  >
                    <span>
                      <span class="d-block font--medium mb-1">
                        Local Pickup
                      </span>
                      <span class="text-body">
                        Delivery in 1 - 3 working days
                      </span>
                    </span>
                    <span class="fs-base text-dark fw-semibold">Free</span>
                  </label>
                </div>

                <h3 class="d-flex align-items-center fs-6 lh-base font--bold">
                  <span class="square--20 font--medium circle  text-white me-2  px-2 rounded-5 bg-primary">
                    3
                  </span>
                  Payment Method
                </h3>
                <div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="payment"
                    id="cash"
                  />
                  <label class="form-check-label" for="cash">
                    <span>
                      <span class="d-block fs-base text-dark fw-medium mb-1">
                        Credit Card
                      </span>
                      <span class="text-body">
                        Mastercard, Maestro, American Express, Visa are accepted
                      </span>
                    </span>
                  </label>
                </div>
                <div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="payment"
                    id="cash"
                  />
                  <label class="form-check-label" for="cash">
                    <span>
                      <span class="d-block fs-base text-dark fw-medium mb-1">
                        Cash on Delivery
                      </span>
                      <span class="text-body">
                        Pay with cash upon the delivery
                      </span>
                    </span>
                  </label>
                </div>

                <div class=" d-lg-block pt-5 mt-n3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="same-address"
                    />
                    <label class="form-check-label text-dark fw-medium ms-1">
                      Your personal information will be used to process your
                      order, to support your experience on this site and for
                      other purposes described in the
                      <a className="text-black" href="#">
                        privacy policy
                      </a>
                    </label>
                  </div>
                  <button
                    class="btn  btn-primary px-xl-5 p-3 mt-5"
                    type="submit"
                  >
                    Place An Order
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-5 offset-lg-1 pt-1 pt-md-4">
              {items?.map((product) => {
                return (
                  <>
                    <div className="text-black">
                      <h6 className="mt-3">{product?.heading}</h6>

                      <div className=" mt-4">
                        <img
                          src={product?.immageUrl}
                          style={{ height: 100 }}
                          className="img-fluid"
                          alt="pic"
                        />
                      </div>
                      <div className="d-flex mt-3  ">
                        <span className="px-3">Old Price <del>{product?.OldPrice} </del> </span>
                        <span>New Price{product?.NewPrice}</span>
                      </div>
                    </div>
                    <form>
                      <div className=" ">
                        <div className="border p-2 d-flex rounded-4 ">
                          <span>
                            
                            <input
                              type="text"
                              className="form-control border-0 form-control"
                              placeholder=" YOUR COPPIN CODE"
                            />
                          </span>
                          <a
                            class="btn btn-primary offset-md-4 "
                            href="#"
                            role="button"
                          >
                            APPLY COPIN
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-md-4">Subtotal:</div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 .offset-md-4">$172.00</div>
                      </div>
                      <div className="row ">
                        <div className="col-md-4">GST:</div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 .offset-md-4">$22.00</div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">Shipping Cost:</div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 .offset-md-4">$12.00</div>
                      </div>
                    </div>
                    <div>
                      <hr />
                    </div>
                    <div className="row">
                      <div className="col-md-4">Total:</div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4 .offset-md-4">
                        <b className="fs-3">$206.00</b>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <Outlet />
        <Footers />
      </form>
    </>
  );
}

export default Checkout;
