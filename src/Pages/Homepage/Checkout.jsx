import React from "react";
import cill from "../../Assests/images/pjon.png";
import will from "../../Assests/images/email.png";
import handfree from "../../Assests/images/WirelessHandfree.svg";
import handfree2 from "../../Assests/images/handfree.svg";
import deelt from "../../Assests/images/deleteIcon.svg";
function Checkout() {
  return (
    <>
    <div class="breadcrumb-wraps py-3">
				<div class="container">
					<div class="row mb-5">
						<div class="col-xl-12 col-lg-12 col-12">
							<nav aria-label="breadcrumb">
							  <ol class="breadcrumb m-0">
								<li class="breadcrumb-item font--medium active text-black" aria-current="page">Home</li>
                <li class="breadcrumb-item font--medium active text-black" aria-current="page">Shop</li>
								<li class="breadcrumb-item font--medium active text-primary" aria-current="page">Checkout</li>
							  </ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
    <div class="container">

					<div class="row justify-content-center mt-5">
					
						<div class="col-xl-6 col-lg-6 bg-light rounded-3">
							<div class="gray-simple rounded-2 py-3 px-3">
								<h1 class="fs-2 pb-3">Checkout</h1>
								<h3 class="d-flex align-items-center fs-6 lh-base font--bold"><span class="square--20 font--medium circle  text-black me-2">1</span>Shipping Details</h3>
								
								<div class="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
									<div class="col-sm-6">
										<label class="form-label fs-base">First Name</label>
										<input class="form-control form-control-lg" type="text" placeholder="First Name"/>
									</div>
									<div class="col-sm-6">
										<label class="form-label fs-base">Last Name</label>
										<input class="form-control form-control-lg" type="text" placeholder="Last Name"/>
									</div>
									<div class="col-sm-6">
										<label class="form-label fs-base">Email</label>
										<div class="position-relative"><i class="fa-regular fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3"><img src={will} alt="" /></i>
											<input class="form-control form-control-lg ps-5" type="email" placeholder="   Email address"/>
										</div>
									</div>
									<div class="col-sm-6">
										<label class="form-label fs-base">Phone</label>
										<div class="position-relative"><i class="fa-solid fa-phone position-absolute top-50 start-0 translate-middle-y ms-3 me-5"><img src={cill} alt="" /></i>
											<input class="form-control form-control-lg ps-5" type="tel" placeholder="    +1 ___ ___ __"/>
										</div>
									</div>
									<div class="col-12">
									<label class="form-label fs-base">Country</label>
										<select class="form-control">
											<option value="" selected="" disabled="">Select a country</option>
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
											<option value="" selected="" disabled="">Select a city</option>
											<option value="Sydney">Sydney</option>
											<option value="Brussels">Brussels</option>
											<option value="Toronto">Toronto</option>
											<option value="Copenhagen">Copenhagen</option>
											<option value="New York">New York</option>
										</select>
									</div>
									<div class="col-sm-6">
										<label class="form-label fs-base">Zip Code</label>
										<input class="form-control form-control-lg" type="text" placeholder="XXX-XXXX"/>
									</div>
									<div class="col-12">
										<label class="form-label fs-base">Address line</label>
										<input class="form-control form-control-lg" type="text"/>
									</div>
									<div class="col-12">
										<label class="form-label fs-base">Order notes <span class="text-muted">(optional)</span></label>
										<textarea class="form-control form-control-lg" rows="5"></textarea>
									</div>
									<div class="col-12">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="same-address"/>
											<label class="form-check-label text-dark fw-medium ms-1" for="same-address">Billing address same as delivery</label>
										</div>
									</div>
								</div>
								
								<h3 class="d-flex align-items-center fs-6 lh-base font--bold"><span class="square--20 font--medium circle  text-black me-2">2</span>Shipping Method</h3>
								<div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
									<input class="form-check-input" type="radio" name="shipping" id="standard"/>
									<label class="form-check-label d-flex justify-content-between" for="standard"><span><span class="d-block font--medium mb-1">Standard Delivery</span><span class="text-body">Delivery in 5 - 8 working days</span></span><span class="fs-base text-dark fw-semibold">$09.00</span></label>
								</div>
                <div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
									<input class="form-check-input" type="radio" name="shipping" id="standard"/>
									<label class="form-check-label d-flex justify-content-between" for="standard"><span><span class="d-block font--medium mb-1">Express Shipping</span><span class="text-body">Delivery in 5 - 7 working days</span></span><span class="fs-base text-dark fw-semibold">$09.00</span></label>
								</div>
							
								<div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
									<input class="form-check-input" type="radio" name="shipping" id="local"/>
									<label class="form-check-label d-flex justify-content-between" for="local"><span><span class="d-block font--medium mb-1">Local Pickup</span><span class="text-body">Delivery in 1 - 3 working days</span></span><span class="fs-base text-dark fw-semibold">Free</span></label>
								</div>
								
								<h3 class="d-flex align-items-center fs-6 lh-base font--bold"><span class="square--20 font--medium circle text-black me-2">3</span>Payment Method</h3>
								<div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
									<input class="form-check-input" type="radio" name="payment" id="cash"/>
									<label class="form-check-label" for="cash"><span><span class="d-block fs-base text-dark fw-medium mb-1">Credit Card</span><span class="text-body">Mastercard, Maestro, American Express, Visa are accepted</span></span></label>
								</div>
								<div class="form-check bg-white rounded-2 p-3 ps-4 mb-4">
									<input class="form-check-input" type="radio" name="payment" id="cash"/>
									<label class="form-check-label" for="cash"><span><span class="d-block fs-base text-dark fw-medium mb-1">Cash on Delivery</span><span class="text-body">Pay with cash upon the delivery</span></span></label>
								</div>
								
								<div class=" d-lg-block pt-5 mt-n3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="same-address"
                />
                <label class="form-check-label text-dark fw-medium ms-1">
                  Your personal information will be used to process your order,
                  to support your experience on this site and for other purposes
                  described in the
                  <a className="text-black" href="#">
                    privacy policy
                  </a>
                </label>
              </div>
              <button class="btn  btn-primary px-xl-5 p-3 mt-5" type="submit">
                Place An Order
              </button>
            </div>
								
							</div>
						</div>
						
						<div class="col-lg-5 offset-lg-1 pt-1 pt-md-4">
							<div class="exploi py-3 py-md-3">
								<div class="d-flex w-100 justify-content-between align-items-center border-bottom pb-2 pb-sm-2 mb-3">
									<h2 class="offcanvas-title d-flex align-items-center mb-1">Your Order <span class="fs-6 fw-normal text-muted ms-3">(3 items)</span></h2>
								</div>
								
							
								<div class="d-sm-flex align-items-center pb-4">
									<a class="d-inline-block flex-shrink-0 gray-simple rounded-2 p-sm-2 p-md-3 mb-2 mb-sm-0" href="product-single.html"><img src={handfree} width="100" alt="Product"/></a>
									<div class="w-100 pt-1 ps-sm-4">
										<div class="d-flex mb-3">
											<div class="me-3">
											  <h3 class="fs-5 mb-2"><span className="text-seacondry">Wireless Headphones</span></h3>
											  <div class="d-flex flex-wrap">
												<div class="text-muted fs-sm me-3">Color: <span class="text-dark fw-medium">Red</span></div>
												<div class="text-muted fs-sm me-3">Weight: <span class="text-dark fw-medium">150g</span></div>
											  </div>
											</div>
											<div class="text-end ms-auto">
											  <div class="fs-5 font--bold mb-2">$35.00</div>
											  <del class="text-muted font--medium ms-auto">$55.00</del>
											</div>
										</div>
                    
										<div class="d-flex align-items-center justify-content-between">
											<div class="count-input ms-n3">
												<input class="form-control" type="number" value="2"/>
											</div>
											<div class="nav justify-content-end">
												<a class="fs-4 p-2" href="#" data-bs-toggle="tooltip" aria-label="Remove" data-bs-original-title="Remove Item"><i class="fa-solid fa-trash"></i></a>
											</div>
										</div>
									</div>
								</div>
                <div class="d-sm-flex align-items-center pb-4">
									<a class="d-inline-block flex-shrink-0 gray-simple rounded-2 p-sm-2 p-md-3 mb-2 mb-sm-0" href="product-single.html"><img src={handfree2} width="100" alt="Product"/></a>
									<div class="w-100 pt-1 ps-sm-4">
										<div class="d-flex mb-3">
											<div class="me-3">
											  <h3 class="fs-5 mb-2"><span className="text-seacondry">High Headphones</span></h3>
											  <div class="d-flex flex-wrap">
												<div class="text-muted fs-sm me-3">Color: <span class="text-dark fw-medium">Red</span></div>
												<div class="text-muted fs-sm me-3">Weight: <span class="text-dark fw-medium">150g</span></div>
											  </div>
											</div>
											<div class="text-end ms-auto">
											  <div class="fs-5 font--bold mb-2">$29.00</div>
											  <del class="text-muted font--medium ms-auto">$69.00</del>
											</div>
										</div>
                    
										<div class="d-flex align-items-center justify-content-between">
											<div class="count-input ms-n3">
												<input class="form-control" type="number" value="2"/>
											</div>
											<div class="nav justify-content-end">
												<a class="fs-4 p-2" href="#" data-bs-toggle="tooltip" aria-label="Remove" data-bs-original-title="Remove Item"><i class="fa-solid fa-trash"></i></a>
											</div>
										</div>
									</div>
								</div>
                <div class="pb-3">
								<div class="d-sm-flex align-items-center border-top pt-4">
									<div class="input-group input-group-sm mb-3 mb-sm-0 me-sm-4 me-md-5 p-2 border rounded-3">
									  <input class="form-control form-control-md text-uppercase border-0" type="text" placeholder="Your coupon code"/>
									  <button class="btn btn-md btn-primary rounded-2" type="button">Apply coupon</button>
									</div>
								</div>
                <ul class="list-unstyled py-3 mb-0">
								<li class="d-flex justify-content-between mb-2">Subtotal:<span class="fw-semibold ms-2">$172.00</span></li>
								<li class="d-flex justify-content-between mb-2">GST:<span class="fw-semibold ms-2">$22.00</span></li>
								<li class="d-flex justify-content-between mb-2">Shipping Cost:<span class="fw-semibold ms-2">$12.00</span></li>
							</ul>
							
							<div class="d-flex align-items-center justify-content-between border-top pt-4">Total:<span class="fs-3 font--bold text-dark ms-2">$206.00</span></div>
							
						
							</div>
              
								</div>
                </div>
                </div>
                </div>
                
     
								
    </>
  );
}

export default Checkout;
