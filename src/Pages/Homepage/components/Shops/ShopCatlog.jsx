import React from "react";
import "./Catlog.css";
import Footers from "../../../../Carporate-Agency/DigitalSense/footer";

import HomeSwiper from "./HomeSwiper/HomeSwiper";
import ShopCategory from "./ShopCategory";
function ShopCatlog() {
  return (
    <>
      <div>
        <div className="back-ground">
          <div className="position-relative">
            <span className="bg-1 rounded-1 px-1  mx-5 mar   position-absolute top-50 start-0">
              Hot Deals
            </span>
            <h1 className="col-md-8  fw-bold mx-5  mareg    position-absolute top-50 start-0 ">
              Wireless Headphones & Decoration At
              <span className="col ps-3">25% Off Discount </span>
            </h1>
            <button
              type="button"
              class="btn btn-success px-3 p-3  ma  mx-5 position-absolute top-50 start-0"
            >
              Explore-More..
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-5">
          <ShopCategory/>
          </div>
          <div className="col-md-9 mt-5">
            <h1 className="mt-5 mb-5">Wireless Bluthooth</h1>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="me-3">
                <div class="nav d-md-none">
                  <a
                    class="nav-link dropdown-toggle fs-sm p-0 mb-2"
                    href="#activeFilters"
                    data-bs-toggle="collapse"
                  >
                    Active filters
                  </a>
                </div>
                <div class="collapse d-md-block" id="activeFilters">
                  <div class="pt-2 pt-md-0">
                    <a
                      class="border rounded-pill text-sm-muted fw-medium py-1 px-2 me-2 mb-2 text-black"
                      href="#"
                    >
                      <span class="d-inline-flex align-items-center">
                        Wireless<i class="fa-solid fa-xmark ps-1"></i>
                      </span>
                    </a>
                    <a
                      class="border rounded-pill text-sm-muted fw-medium py-1 px-2 me-2 mb-2  text-black"
                      href="#"
                    >
                      <span class="d-inline-flex align-items-center">
                        Clocks<i class="fa-solid fa-xmark ps-1"></i>
                      </span>
                    </a>
                    <a
                      class="border rounded-pill text-sm-muted fw-medium py-1 px-2 me-2 mb-2  text-black"
                      href="#"
                    >
                      <span class="d-inline-flex align-items-center">
                        Room<i class="fa-solid fa-xmark ps-1"></i>
                      </span>
                    </a>
                    <a
                      class="border rounded-pill text-sm-muted fw-medium py-1 px-2 me-2 mb-2  text-black"
                      href="#"
                    >
                      <span class="d-inline-flex align-items-center">
                        $20 - $80<i class="fa-solid fa-xmark ps-1"></i>
                      </span>
                    </a>
                    <button
                      class="btn btn-sm btn-light rounded-pill fw-medium py-1 px-2  text-black"
                      type="button"
                    >
                      <span class="px-1">Remove all filters</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center flex-shrink-0">
                <span class="text-muted text-nowrap">Sort by:</span>
                <select class="form-select form-select-flush py-0 fs-6 border-0">
                  <option value="popular">Most popular</option>
                  <option value="low-high">Low-High price</option>
                  <option value="high-low">High-Low price</option>
                  <option value="rating">Average rating</option>
                  <option value="az">A-Z order</option>
                  <option value="za">Z-A order</option>
                </select>
              </div>
            </div>
            <HomeSwiper />
            <div class="d-flex align-items-center justify-content-between mt-4">
								<div class="me-3">
									<div class="d-flex align-items-center flex-shrink-0">
										<span class="text-muted text-nowrap">Show:</span>
										<select class="form-select form-select-flush py-0 fs-6 border-0">
										  <option value="1">10</option>
										  <option value="2">20</option>
										  <option value="3">30</option>
										  <option value="4">40</option>
										  <option value="5">50</option>
										  <option value="6">100</option>
										</select>
									</div>
								</div>
								<div class="d-flex align-items-center flex-shrink-0">
									
									<nav class="mx-auto" aria-label="Portfolio pagination">
									  <ul class="pagination justify-content-center">
										<li class="page-item"><a href="#" class="page-link text-black">1</a></li>
										<li class="page-item active" aria-current="page"><span class="page-link text-black">2</span></li>
										<li class="page-item"><a class="page-link text-black" href="#">3</a></li>
										<li class="page-item"><a class="page-link text-black" href="#">4</a></li>
										<li class="page-item"><a class="page-link text-black" href="#">5</a></li>
									  </ul>
									</nav>
								</div>
							</div>
					
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default ShopCatlog;