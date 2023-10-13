import React from "react";
import "./About.css";
import working from "../../Assests/images/work.svg";
import fff from "../../Assests/images/Countless.svg";
import link1 from "../../Assests/images/FbLink.svg";
import link2 from "../../Assests/images/tweeter Link.svg";
import link3 from "../../Assests/images/globelLink.svg";
import link4 from "../../Assests/images/LinkedinLink.svg";
import about1 from "../../Assests/images/about 1.svg";
import about2 from "../../Assests/images/about 2.svg";
import about3 from "../../Assests/images/about 3.svg";
import about4 from "../../Assests/images/about 4.svg";

import Footers from "./footer";
function Aboutus() {
  return (
    <div> 
      <div className="body-container">
        <div className="position-relative">
          <h1 className=" text-white fw-bold mx-5  marg    position-absolute top-50 start-0 ">
            We're Here for <br />
            Solving your Solutions
          </h1>
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
      <div className="text-center container mt-5">
     <span className="text rounded-5  px-4 py-1 mx-3">Our Experts</span> 
   <h1><b>Meet Our Expert Team</b></h1> 
   <p><b>vero accusamus et iusto odio dignissimos ducimus</b></p> 
     
      <div className="row">
      <div className="col-md-3 ">
          <div className=" border  rounded-4 p-3">
        <div> <img src={about1} className="img-fluid" alt="" /></div>
        <h5>Admin Cliver'o</h5>
        <span>Web Graphics</span>
        <div><span> <a href=""><img src={link1} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link2} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link3} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link4} className="img-fluid" alt="" /> </a> </span></div>
        </div>
        </div>
           <div className="col-md-3 ">
          <div className=" border  rounded-4 p-3">
        <div> <img src={about2} className="img-fluid" alt="" /></div>
        <h5>Joseph G. Younker</h5>
        <span>Web Developer</span>
        <div><span> <a href=""><img src={link1} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link2} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link3} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link4} className="img-fluid" alt="" /> </a> </span></div>

        </div>
        </div>
        <div className="col-md-3 ">
          <div className=" border rounded-4 p-3">
        <div> <img src={about3} className="img-fluid" alt="" /></div>
        <h5>Erica J. Davis</h5>
        <span>Content Writer</span>
        <div><span> <a href=""><img src={link1} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link2} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link3} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link4} className="img-fluid" alt="" /> </a> </span></div>

        </div>
        </div>
        <div className="col-md-3 ">
          <div className=" border  rounded-4 p-3">
        <div> <img src={about4} className="img-fluid" alt="" /></div>
        <h5>Leslie R. Beach</h5>
        <span>App Developer</span>
        <div><span> <a href=""><img src={link1} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link2} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link3} className="img-fluid" alt="" /> </a> </span><span> <a href=""><img src={link4} className="img-fluid" alt="" /> </a> </span></div>

        </div>
        </div>
        </div>
      </div>
    
      <Footers />
    </div>
  );
}

export default Aboutus;
