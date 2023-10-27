import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pid1 from "../../../../Assests/images/pis1.png";
import pid2 from "../../../../Assests/images/pis2.png";
import pid3 from "../../../../Assests/images/pis3.png";
import fb from "../../../../Assests/images/fb Group.svg";
import ratting from "../../../../Assests/images/rating Star.svg";
import ps4 from "../../../../Assests/images/gift-removebg-preview.png";
import ps5 from "../../../../Assests/images/bori-removebg-preview.png";
import ps6 from "../../../../Assests/images/hurt-removebg-preview.png";
import ps7 from "../../../../Assests/images/seacondear-removebg-preview.png";
import Footers from "../../../../Carporate-Agency/DigitalSense/footer";
import ShopSwiper from "./ShopSwiper/ShopSwiper";
export default function ShopSingle() {
  return (
    <>
      <div className="bg-light">
        <div class="container my-5 ">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-3  rounded-3">
              <li class="breadcrumb-item active" aria-current="page">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <Link to="/ShopSingle">Shop</Link>
              </li>
              <li
                class="breadcrumb-item active text-primary"
                aria-current="page"
              >
                <Link to="/Checkout">Checkout</Link>
              </li>
            </ol>
          </nav>
          <Outlet />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className=" rounded-4 bg-light">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
              
                modules={[Autoplay, Pagination,]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={pid1} className="rounded-5 img-fluid bg-light" alt="pix1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pid2} className="rounded-5 img-fluid bg-light" alt="pic2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pid3} className="rounded-5 img-fluid bg-light" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <span className="bg-danger bg-opacity-10  px-3 rounded-2 text-danger">
                Sale
              </span>
              <span className="ps-3">V00273124</span>
            </div>
            <h3>Blue Headphones</h3>
            <span>
              The toppings you may chose for that TV dinner pizza slice when you
              <br />
              forgot to shop for foods, the paint you may slap on your face
            </span>
            <div className="pt-3">
              <span>
                <img src={ratting} className="img-fluid" alt="" />
              </span>
              <span className="px-3">4.6</span> <span>3472 Reviews</span>
              <span className="px-3">5740 Sold</span>
            </div>
            <div className="py-3">
              <span className="px-3 bg-success bg-opacity-10 text-success rounded-2">
                30% off
              </span>
              <span className="ps-3 text-body-tertiary">
                <del className="fs-4">$179.00</del>
              </span>
              <span className="fs-3 px-3">$79.00</span>
            </div>
            <dir>
              Color: <span className="text-body-tertiary">Blue</span>
            </dir>
            {/* form */}
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input bg-success  p-3"
                      type="radio"
                      name="color"
                      id="color1"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input bg-info bg-opacity-10 p-3"
                      type="radio"
                      name="color"
                      id="color2"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input bg-warning  p-3"
                      type="radio"
                      name="color"
                      id="color3"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input bg-danger p-3"
                      type="radio"
                      name="color"
                      id="color4"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input bg-light p-3"
                      type="radio"
                      name="color"
                      id="color5"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input bg-primary p-3"
                      type="radio"
                      name="color"
                      id="color6"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* number radio */}
            <form action="">
              <dir>
                Color: <span className="text-body-tertiary">32</span>
              </dir>
              <input
                type="radio"
                class="btn-check "
                name="options-base"
                id="option1"
                autocomplete="off"
              />
              <label class="btn" for="option1">
                30
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="option2"
                autocomplete="off"
              />
              <label class="btn" for="option2">
                32
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="option3"
                autocomplete="off"
              />
              <label class="btn" for="option3">
                34
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="option4"
                autocomplete="off"
              />
              <label class="btn" for="option4">
                36
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="option5"
                autocomplete="off"
              />
              <label class="btn" for="option5">
                38
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="option6"
                autocomplete="off"
              />
              <label class="btn" for="option6">
                40
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="option7"
                autocomplete="off"
              />
              <label class="btn" for="option7">
                42
              </label>
            </form>

            <form action="">
              <div className="py-3">
                <span>
                  <input type="number" className="rounded-4 p-3" />
                </span>
                <span className="px-3">
                  <button
                    class="btn btn-primary p-3 px-5  rounded-4"
                    type="submit"
                  >
                    Add To Card
                  </button>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </span>
              </div>
            </form>
            <div>
              <span>Share Item:</span>
              <span className="ps-5">
               <a href=""><img src={fb} className="img-fluid" alt="" /></a> 
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row pt-5">
          <div class="col-xl-10 col-lg-11 col-md-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="description-tab-pane"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#info-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="info-tab-pane"
                  aria-selected="false"
                >
                  Item Info
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="reviews-tab-pane"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div class="tab-content pt-4" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="description-tab-pane"
                role="tabpanel"
                aria-labelledby="description-tab"
                tabindex="0"
              >
                <p class="mb-4">
                  You begin with a text, you sculpt information, you chisel away
                  what's not needed, you come to the point, make things clear,
                  add value, you're a content person, you like words. Design is
                  no afterthought, far from it, but it comes in a deserved
                  second.
                </p>
                <p class="m-0">
                  Anyway, you still use Lorem Ipsum and rightly so, as it will
                  always have a place in the web workers toolbox, as things
                  happen, not always the way you like it, not always in the
                  preferred order.
                </p>
              </div>

              <div
                class="tab-pane fade"
                id="info-tab-pane"
                role="tabpanel"
                aria-labelledby="info-tab"
                tabindex="0"
              >
                <p>
                  There's lot of hate out there for a text that amounts to
                  little more than garbled words in an old language. The
                  villagers are out there with a vengeance to get that
                  Frankenstein, wielding torches and pitchforks, wanting to tar
                  and feather it at the least, running it out of town in shame.
                </p>
                <ul class="no-ul-list mb-0">
                  <li class="mb-3">
                    Weight:<span class="text-dark fw-semibold ms-2">440g</span>
                  </li>
                  <li class="mb-3">
                    Material:
                    <span class="text-dark fw-semibold ms-2">Headphone</span>
                  </li>
                  <li class="mb-3">
                    Color:
                    <span class="text-dark fw-semibold ms-2">Light Blue</span>
                  </li>
                  <li class="mb-3">
                    Size:<span class="text-dark fw-semibold ms-2">XXL</span>
                  </li>
                  <li>
                    Country:
                    <span class="text-dark fw-semibold ms-2">Pakistan</span>
                  </li>
                </ul>
              </div>

              <div
                class="tab-pane fade"
                id="reviews-tab-pane"
                role="tabpanel"
                aria-labelledby="reviews-tab"
                tabindex="0"
              >
                <h5 class="m-0">There is no reviews</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* swiper */}
<ShopSwiper/>
{/* swiper */}



      <div class="bg-primary  pb-4 mt-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="d-flex align-items-center">
                <div class="exljk-icon text-info fs-2">
                  <img src={ps4} alt="" />
                </div>
                <div class="exljk-caps ps-3">
                  <h5 class="text-light fw-semibold">Fast Delivery</h5>
                  <p class="m-0 text-light lh-base opacity-75">
                    Usually, we prefer the real thing, wine without sulfur based
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="d-flex align-items-center">
                <div class="exljk-icon text-info fs-2">
                  <img src={ps5} alt="" />
                </div>
                <div class="exljk-caps ps-3">
                  <h6 class="text-light fw-semibold">Money Back Gaurantee</h6>
                  <p class="m-0 text-light lh-base opacity-75">
                    Usually, we prefer the real thing, wine without sulfur based
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="d-flex align-items-center">
                <div class="exljk-icon text-info fs-2">
                  <img src={ps6} alt="" />
                </div>
                <div class="exljk-caps ps-3">
                  <h5 class="text-light fw-semibold">Secure Payment</h5>
                  <p class="m-0 text-light lh-base opacity-75">
                    Usually, we prefer the real thing, wine without sulfur based
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="d-flex align-items-center">
                <div class="exljk-icon text-info fs-2">
                  <img src={ps7} alt="" />
                </div>
                <div class="exljk-caps ps-3">
                  <h5 class="text-light fw-semibold">24x7 Support</h5>
                  <p class="m-0 text-light lh-base opacity-75">
                    Usually, we prefer the real thing, wine without sulfur based
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers/>
    </>
  );
}
