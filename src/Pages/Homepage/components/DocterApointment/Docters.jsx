import React from "react";
import "./Docter.css";
import pic1 from "../../../..//Assests/images/doc-1.svg";
import pic2 from "../../../../Assests/images/doc-2.svg";
import pic3 from "../../../../Assests/images/doc-3.PNG";
import pic4 from "../../../../Assests/images/doc-4.svg";
import pic5 from "../../../../Assests/images/doc-5.svg";
import pic6 from "../../../../Assests/images/doc-6.svg";
import pic7 from "../../../../Assests/images/doc-7.png";
import pic8 from "../../../../Assests/images/doc-8.png";
const Doctor = (props) => {
  const card = [
    {
      immageUrl: pic1,
      Catagry: "Cardiologist",
      heading: "Dr. Shannon Rooney",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic2,
      Catagry: "Cardiologist",
      heading: "Dr. Francis Graham",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic3,
      Catagry: "Cardiologist",
      heading: "Dr. Harry Guillory",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic4,
      Catagry: "Cardiologist",
      heading: "Dr. Troy Anderson",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic5,
      Catagry: "Cardiologist",
      heading: "Dr. Roger L. Irving",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic6,
      Catagry: "Cardiologist",
      heading: "Dr. Wallace Jenkins",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic7,
      Catagry: "Cardiologist",
      heading: "Dr. Roberto Gustafson",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
    {
      immageUrl: pic8,
      Catagry: "Cardiologist",
      heading: "Dr. Devin A. Lyons",
      Paragraph: "MBBS, MS, MD,General Surgery",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <span className="div-bg-3 rounded-5 px-4 py-1">Meet Doctors</span>
          <h1 className="pt-3">High Qualified Doctors List</h1>
        </div>

        <div className="row">
          {card.map((data) => {
            return (
              <>
                <div className="col-md-3 pt-5 ">
                  <div className=" border border-1 rounded-3 text-center px-3 py-3 ">
                    <div>
                      <img src={data.immageUrl} class="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Doctor;
