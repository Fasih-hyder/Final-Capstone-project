import React from "react";
import dot from "../../../Assests/images/Symbol.png";
import man from "../../../Assests/images/cs-2.png";

function Enchance() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={man} alt="" />
          </div>
          <div className="col-md-6">
            <span className="div-bg-2 rounded-2  px-4 py-1 ">
              Enhance Engagement
            </span>
            <h1 className=" h2-4 ">Grow your most valuable visitors</h1>
            <span className="fonts">
              In a professional Cicero famously orated against his political
              opponent Lucius Sergius Catilina. Occasionally the first Oration
              against Catiline context it the actual content still not being
              ready. Think of a news blog that's filled with content hourly on
              the day of going live.
            </span>
            <h1 className=" h2-3 ">Steps to grow your marketing</h1>
            <img src={dot} className="mx-2" alt="" />

            <span>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
            <br />
            <br />
            <img src={dot} className="mx-2" alt="" />

            <span className="mt-5">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
            <br />
            <br />
            <img src={dot} className="mx-2" alt="" />

            <span>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
            <br />
            <br />
            <img src={dot} className="mx-2" alt="" />

            <span className="mt-5">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
            <br />
          </div>
        </div>
      </div>

      <div className="bg-primary container rounded-5 text-light">
        <div className="text-center pt-5">
          Project Quotes
          <h1>Get Your Project Quotes</h1>
        </div>
        <>
          <form class="row g-3 px-5  text-light">
            <div class="col-md-6 ">
              <label for="inputEmail4" class="form-label  ">
                Name
              </label>
              <input
                type="Name"
                placeholder="Name"
                class="form-control bg-primary"
                id="inputEmail4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                class="form-control bg-primary"
                id="inputPassword4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Phone
              </label>
              <input
                type="Phone"
                placeholder="Phone"
                class="form-control bg-primary"
                id="inputEmail4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Company
              </label>
              <input
                type="text"
                placeholder="Company"
                class="form-control bg-primary"
                id="inputPassword4"
                required
              />
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">
                Explan your Project
              </label>
              <textarea
                name="city"
                id=""
                cols="133"
                rows="5"
                className="bg-primary"
                placeholder="Your project Description....."
              ></textarea>
            </div>

            <div class="col-12 d-flex gap-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label class="form-check-label" for="gridCheck">
                  SEO Website Audit
                </label>
              </div>
              <div class="form-check ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label class="form-check-label" for="gridCheck">
                  Email Marketing
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label class="form-check-label" for="gridCheck">
                  Social Networks
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label class="form-check-label" for="gridCheck">
                  Content Marketing
                </label>
              </div>
            </div>
            <div class="col-12 text-center py-5">
              <button
                type="submit"
                class="btn btn-light text-success py-3 px-5"
              >
                Send a Request
              </button>
            </div>
          </form>
        </>
      </div>
    </>
  );
}

export default Enchance;
