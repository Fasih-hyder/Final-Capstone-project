import React from "react";
import "./About.css";
import working from "../../Assests/images/work.svg";
import fff from "../../Assests/images/Countless.svg";
function Aboutus() {
  return (
    <div>
      <div className="body-container">
        <div className="position-relative">
          <h1 className=" text-white fw-bold mx-5  marg    position-absolute top-50 start-0 ">
            We're Here for <br />
            Solving your Solutions
          </h1>
          {/* position-absolute top-50 start-0 translate-middle */}
          <p className="text-white mx-5  marg-1 fs-6 text   position-absolute top-50 start-0">
            Debet iuvaret noluisse et per, ea rebum nominati argumentum vis. Vis
            legere cotidieque <br /> te, fierent senserit explicari mei an.
          </p>
          <button
            type="button"
            class="btn btn-primary marg-2 mx-5 p-3 px-5  position-absolute top-50 start-0 btn-lg "
          >
            Know More..
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 ">
            <img src={working} className="img-fluid rounded-4" alt="" />
          </div>

          <div className="col-md-6">
            <span className="text rounded-5  px-4 py-1 mx-3 ">
              lets introduce
            </span>
            <h1 className=" mx-3">
              Who We're & <br /> Mission
            </h1>
            <p className="mt-3 te">
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina. Occasionally the first Oration against Catiline
              is taken for type specimens: Quo usque tandem abutere, Catilina,
              patientia nostra? Quam diu etiam furor iste tuus nos eludet.
            </p>
            <br />
            <p className="te ">
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <span className="teet rounded-5  px-4 py-1 mx-3  ">
              Easiest Plan
            </span>
            <h1 className="mt-3">Our Achievement</h1>
            <p className="te">
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina. Occasionally the first Oration against Catiline
              is taken for type specimens: Quo usque tandem abutere, Catilina,
              patientia nostra? Quam diu etiam furor iste tuus nos eludet.
            </p>
          </div>
          <div className="col-md-6">
            <img src={fff} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
