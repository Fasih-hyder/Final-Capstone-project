import React from 'react'
import drip from "../../../../Assests/images/drop.png"
function ShopCategory() {
  return (
    <div>
        <div class="widget-boxed-header">
              <h4 class="mt-5">Categories</h4>
            </div>
            <div class="single_filter_card">
              <h5>
                <a
                  href="#shoes"
                  data-bs-toggle="collapse"
                  class="collapsed text-black nav-link "
                  aria-expanded="false"
                  role="button"
                >
                  <span className="ps-3">Shoes</span>
                  <span className="mx-5 ps-4">
                    <img src={drip} style={{ height: 20 }} alt="" />
                  </span>
                </a>
              </h5>

              <div class="collapse" id="shoes" data-parent="#shop-categories">
                <div class="card-body">
                  <div class="inner_widget_link">
                    <ul>
                      <div>
                        Pumps Heals <span className=" ps-3">112</span>
                      </div>

                      <div>
                        Sandels
                        <span className="mx-5 ps-3 ">82</span>
                      </div>

                      <div>
                        Sneakers <span className="mx-4 ps-4">56</span>
                      </div>

                      <div>
                        Boots <span className="mx-5 ps-4">101</span>
                      </div>

                      <div>
                        Casual Shoes <span className=" ps-3">212</span>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="single_filter_card">
              <h5>
                <a
                  href="#clothing"
                  data-bs-toggle="collapse"
                  class="nav-link ps-3"
                  aria-expanded="false"
                  role="button"
                >
                  Clothing
                  <span className="mx-4 ps-4">
                    <img src={drip} style={{ height: 20 }} alt="" />
                  </span>
                </a>
              </h5>

              <div
                class="collapse show"
                id="clothing"
                data-parent="#shop-categories"
              >
                <div class="card-body">
                  <div class="inner_widget_link">
                    <ul>
                      <li className=" nav-link">
                        <a href="#" className="text-black nav-link">
                          Blazers
                          <span className="mx-4 ps-5">82</span>
                        </a>
                      </li>
                      <li className=" nav-link">
                        <a href="#" className=" nav-link">
                          Men Suits
                          <span className="mx-4 ps-3">110</span>
                        </a>
                      </li>
                      <li className=" nav-link">
                        <a href="#" className=" nav-link">
                          Blouses
                          <span className="mx-5 ps-2">103</span>
                        </a>
                      </li>
                      <li className=" nav-link">
                        <a href="#" className=" nav-link">
                          Coat Pant
                          <span className="mx-2 ps-5">2</span>
                        </a>
                      </li>
                      <li className=" nav-link">
                        <a href="#" className=" nav-link">
                          T-Shirts
                          <span className="mx-3 ps-5">36</span>
                        </a>
                      </li>
                      <li className=" nav-link">
                        <a href="#" className=" nav-link">
                          Men Shirts
                          <span className="mx-3 ps-3">122</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="single_filter_card">
              <h5>
                <a
                  href="#watches"
                  data-bs-toggle="collapse"
                  class="collapsed nav-link ps-3"
                  aria-expanded="false"
                  role="button"
                >
                  Watches
                  <span className="mx-5 ps-">
                    <img src={drip} style={{ height: 20 }} alt="" />
                  </span>
                </a>
              </h5>

              <div class="collapse" id="watches" data-parent="#shop-categories">
                <div class="card-body">
                  <div class="inner_widget_link">
                    <ul>
                      <li className="nav-link">
                        <a href="#" className="text-black nav-link">
                          Sport Watches<span className="ps-3">112</span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#" className="text-black nav-link">
                          Casual Watches<span className="ps-2">112</span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#" className="text-black nav-link">
                          Fashion Watches<span className="ps-">112</span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#" className="text-black nav-link">
                          Girls Watches<span className="ps-4">112</span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#" className="text-black nav-link">
                          Smart Watches<span className="ps-3">112</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="single_filter_card">
                <h5>
                  <a
                    href="#bags"
                    data-bs-toggle="collapse"
                    class="collapsed ps-4 nav-link"
                    aria-expanded="false"
                    role="button"
                  >
                    Bags
                    <span className="mx-4 ps-5">
                      <img src={drip} style={{ height: 20 }} alt="" />
                    </span>
                  </a>
                </h5>

                <div class="collapse" id="bags" data-parent="#shop-categories">
                  <div class="card-body">
                    <div class="inner_widget_link">
                      <ul>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Casual Bags<span>212</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-back nav-link">
                            Sport Bags<span>212</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-back nav-link">
                            Lugges bags<span>82</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Fashion Bags<span>212</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Small bags<span>113</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single_filter_card">
                <h5>
                  <a
                    href="#accessories"
                    data-bs-toggle="collapse"
                    class="collapsed nav-link ps-2"
                    aria-expanded="false"
                    role="button"
                  >
                    Accessories
                    <span className="mx-3 ps-2">
                      <img src={drip} style={{ height: 20 }} alt="" />
                    </span>
                  </a>
                </h5>

                <div
                  class="collapse"
                  id="accessories"
                  data-parent="#shop-categories"
                >
                  <div class="card-body">
                    <div class="inner_widget_link">
                      <ul>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Men Wallet<span className=" ps-4">432</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Men Belt<span className=" ps-5">82</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Hats<span className=" ps-5 mx-4">541</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Jwelery<span className=" ps-5">312</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Beauty<span className=" ps-5 mx-2">65</span>
                          </a>
                        </li>
                        <li className=" nav-link">
                          <a href="#" className="text-black nav-link">
                            Cosmetic<span className=" ps-4">242</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single_search_boxed">
                <div class="widget-boxed-header">
                  <h4>
                    <a
                      href="#pricing"
                      className="nav-link"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      role="button"
                    >
                      Pricing{" "}
                      <span className="mx-3 ps-5">
                        <img src={drip} style={{ height: 20 }} alt="" />
                      </span>
                    </a>
                  </h4>
                </div>
                <div
                  class="widget-boxed-body collapse show"
                  id="pricing"
                  data-parent="#pricing"
                >
                  <div class="side-list no-border mb-4">
                    <label>Price Range in USD</label>
                    <div class="form-group-inner">
                      <div class="">
                        <input
                          type="range"
                          class="form-range"
                          id="customRange1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single_search_boxed">
              <div class="widget-boxed-header">
                <h4>
                  <a
                    href="#size"
                    data-bs-toggle="collapse"
                    class="collapsed nav-link"
                    aria-expanded="false"
                    role="button"
                  >
                    Size
                    <span className="mx-5 ps-5">
                      <img src={drip} style={{ height: 20 }} alt="" />
                    </span>
                  </a>
                </h4>
              </div>
              <div
                class="widget-boxed-body collapse"
                id="size"
                data-parent="#size"
              >
                <div class="side-list no-border">
                  <div class="single_filter_card">
                    <div class="card-body pt-0">
                      <div class="d-flex flex-wrap pb-0 pt-2 option-clr">
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="26s"
                          />
                          <label class="form-option-label" for="26s">
                            26
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="28s"
                          />
                          <label class="form-option-label" for="28s">
                            28
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="30s"
                          />
                          <label class="form-option-label" for="30s">
                            30
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="32s"
                          />
                          <label class="form-option-label" for="32s">
                            32
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="34s"
                          />
                          <label class="form-option-label" for="34s">
                            34
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="36s"
                          />
                          <label class="form-option-label" for="36s">
                            36
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="38s"
                          />
                          <label class="form-option-label" for="38s">
                            38
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="40s"
                          />
                          <label class="form-option-label" for="40s">
                            40
                          </label>
                        </div>
                        <div class=" form-check-inline mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="sizes"
                            id="42s"
                          />
                          <label class="form-option-label" for="42s">
                            42
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single_search_boxed">
              <div class="widget-boxed-header">
                <h4>
                  <a
                    href="#brands"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    className="nav-link"
                    role="button"
                  >
                    Brands{" "}
                    <span className="mx-5 ps-3">
                      <img src={drip} style={{ height: 20 }} alt="" />
                    </span>
                  </a>
                </h4>
              </div>
              <div
                class="widget-boxed-body collapse show"
                id="brands"
                data-parent="#brands"
              >
                <div class="side-list no-border">
                  <div class="single_filter_card">
                    <div class="card-body pt-0">
                      <div class="inner_widget_link">
                        <ul class="no-ul-list">
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="b1"
                                  class="form-check-input"
                                  name="b1"
                                  type="checkbox"
                                />
                                <label for="b1" class="form-check-label">
                                  Sumsung
                                </label>
                              </div>
                              <span class="fs-xs text-muted me-1">142</span>
                            </div>
                          </li>
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="b2"
                                  class="form-check-input"
                                  name="b2"
                                  type="checkbox"
                                />
                                <label for="b2" class="form-check-label">
                                  Apple
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">652</span>
                            </div>
                          </li>
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="b3"
                                  class="form-check-input"
                                  name="b3"
                                  type="checkbox"
                                />
                                <label for="b3" class="form-check-label">
                                  Nike
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">232</span>
                            </div>
                          </li>
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="b4"
                                  class="form-check-input"
                                  name="b4"
                                  type="checkbox"
                                />
                                <label for="b4" class="form-check-label">
                                  Reebok
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">192</span>
                            </div>
                          </li>
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="b5"
                                  class="form-check-input"
                                  name="b5"
                                  type="checkbox"
                                />
                                <label for="b5" class="form-check-label">
                                  Hawai
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">265</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single_search_boxed">
              <div class="widget-boxed-header">
                <h4>
                  <a
                    href="#gender"
                    data-bs-toggle="collapse"
                    class="collapsed"
                    aria-expanded="false"
                    className="nav-link"
                    role="button"
                  >
                    Gender
                    <span className="mx-5 ps-2">
                    <img src={drip} style={{ height: 20 }} alt="" />
                  </span>
                  </a>
                </h4>
              </div>
              <div
                class="widget-boxed-body collapse"
                id="gender"
                data-parent="#gender"
              >
                <div class="side-list no-border">
                  <div class="single_filter_card">
                    <div class="card-body pt-0">
                      <div class="inner_widget_link">
                        <ul class="no-ul-list">
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="g1"
                                  class="form-check-input"
                                  name="g1"
                                  type="checkbox"
                                />
                                <label for="g1" class="form-check-label">
                                  All
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">22</span>
                            </div>
                          </li>
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="g2"
                                  class="form-check-input"
                                  name="g2"
                                  type="checkbox"
                                />
                                <label for="g2" class="form-check-label">
                                  Male
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">472</span>
                            </div>
                          </li>
                          <li className="nav-link">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="escols">
                                <input
                                  id="g3"
                                  class="form-check-input"
                                  name="g3"
                                  type="checkbox"
                                />
                                <label for="g3" class="form-check-label">
                                  Female
                                </label>
                              </div>
                              <span class="fs-xs text-muted ms-auto">170</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-boxed-header">
              <h4>
                <a
                  href="#colors"
                  data-bs-toggle="collapse"
                  class="collapsed nav-link"
                  aria-expanded="false"
                  role="button"
                >
                  Colors
                  <span className="mx-5 ps-3">
                    <img src={drip} style={{ height: 20 }} alt="" />
                  </span>
                </a>
              </h4>
            </div>
            <div class="widget-boxed-body collapse"
              id="colors"
              data-parent="#colors"
            >
              <div class="side-list no-border">
                <div class="single_filter_card">
                  <div class="card-body pt-0">
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
                  </div>
                </div>
              </div>
            </div>
            
    </div>
  )
}

export default ShopCategory
