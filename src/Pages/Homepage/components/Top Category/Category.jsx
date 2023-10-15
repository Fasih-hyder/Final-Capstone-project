import "./Category.css";
import child from "../../../../Assests/images/hs-4.png";
import ladies from "../../../../Assests/images/hs-3.png";
import symbol2 from "../../../../Assests/images/img-6.png";
import Image1 from "../../../../Assests/images/img-1.png";
import Image2 from "../../../../Assests/images/img-2.PNG";
import Image3 from "../../../../Assests/images/img-3.png";
import Image4 from "../../../../Assests/images/img-4.png";
import Image5 from "../../../../Assests/images/img-5.PNG";
import Image7 from "../../../../Assests/images/img-7.PNG";
import Image8 from "../../../../Assests/images/img-8.PNG";
import pic1 from "../../../../Assests/images/blue-1.png";
import pic2 from "../../../../Assests/images/green-1.png";
import pic3 from "../../../../Assests/images/red-1.png";
import dot from "../../../../Assests/images/Symbol.png";
const Category = (props) => {
  const card1 = [
    {
      immageUrl: Image1,

      heading: "Cardiologist",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },

    {
      immageUrl: Image2,

      heading: "Orthopedic Surgeon",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },
    {
      immageUrl: Image3,

      heading: "Neurologist",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },
    {
      immageUrl: Image4,

      heading: "Pulmonologist",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },
  ];
  const card2 = [
    {
      immageUrl: Image5,

      heading: "Ophthalmologist",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },

    {
      immageUrl: symbol2,

      heading: "Nephrologist",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },
    {
      immageUrl: Image7,

      heading: "Gastroenterologist",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },
    {
      immageUrl: Image8,

      heading: "Ear-Nose-Throat ",

      pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <span className="div-bg rounded-5  px-4 py-1 ">Top Category</span>

          <h1 className="pt-3 h2-1">Browse By Specialist</h1>
        </div>

        <div className="row">
          {card1.map((item) => {
            return (
              <>
                <div className="col-md-3 mt-5 pt-5">
                  <div className="border rounded-1 text-center p-3">
                    <div>
                      <img src={item.immageUrl} alt="" />
                    </div>

                    <div>
                      <h4 className="font-h">{item.heading}</h4>
                    </div>

                    <div>
                      <p className="fonts">{item.pera}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {card2.map((item) => {
            return (
              <>
                <div className="col-md-3 mt-5 pt-5 mb-5">
                  <div className="border rounded-1 text-center p-3">
                    <div>
                      <img src={item.immageUrl} alt="" />
                    </div>

                    <div>
                      <h4 className="font-h">{item.heading}</h4>
                    </div>

                    <div>
                      <p className="fonts">{item.pera}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={child} alt="" />
          </div>
          <div className="col-md-6">
            <span className="div-bg-1 rounded-2  px-4 py-1 ">
              Varity Of Dental
            </span>

            <h1 className=" h2-2 ">We Help with a Varity of Dental Services</h1>

            <span className="fonts mt-5">
              Lucius Sergius Catilina against Catiline context it the actual
              content still not being ready. Think of a news blog that's filled
              with content hourly on the day of going live.
            </span>
            <h1 className=" h2-3 mt-3">Steps to Consultant And Services</h1>
            <img src={pic1} className="mt-5" alt="" />
            <br />
            <span className="fonts  ">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment
            </span>
            <br />
            <img src={pic2} className="mt-5" alt="" />
            <br />
            <span className="fonts">
              Laura Perry, then art director with Aldus, modified prior versions
              of Lorem Ipsum text from typographical specimens.
            </span>
            <br />
            <img src={pic3} className="mt-5" alt="" />
            <br />
            <span className="fonts">
              Word selection or sequence don't necessarily match the original,
              which is intended to add variety. Presentation software like
              Keynote.
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <span className="div-bg-2 rounded-2  px-4 py-1 ">
              Best Solution
            </span>
            <h1 className=" h2-4 ">
              Perfect solution to grow your new visitors
            </h1>
            <span className="fonts">
              Lucius Sergius Catilina. Occasionally the first Oration the actual
              content still not being ready. Think of a news blog that's filled
              with content hourly on the day of going live.
            </span>
            <h1 className=" h2-3 ">Authorised features For Our Customers</h1>
            <img src={dot} className="mb-3" alt="" />
            <span className="h2-3 mx-2 ">Create Advance Custom Fields</span>
            <br />
            <span>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
            <br />
            <img src={dot} className="mb-3" alt="" />
            <span className="h2-3 mx-2 ">Reach More Audience</span>
            <br />
            <span className="mt-5">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
            <br />
            <img src={dot} className="mb-3" alt="" />
            <span className="h2-3 mx-2 ">Make Brand Awareness</span>
            <br />
            <span>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore
            </span>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={ladies} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
