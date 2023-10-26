import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Black from "../../../../../Assests/images/black-headhone.svg";
import iCon5 from "../../../../../Assests/images/flower.svg";
import Hadephone from "../../../../../Assests/images/pis1.png";
import redVerity from "../../../../../Assests/images/pis2.png";
import shopingtary from "../../../../../Assests/images/ShoppingTray.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../functins/functins";

function HomeSwiper() {
const dispatch = useDispatch();

const addCartHandler = (date)=>{
    dispatch(addItem(date))
}



  const card = [
    {
      id: 1,
      Avliable: "Sold",
      immageUrl: Hadephone,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 2,
      Avliable: "Sale",
      immageUrl: iCon5,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 3,
      Avliable: "Sold",
      immageUrl: redVerity,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 4,
      Avliable: "Sold",
      immageUrl: Hadephone,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 5,
      Avliable: "Sale",
      immageUrl: iCon5,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 6,
      Avliable: "Sold",
      immageUrl: redVerity,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 7,
      Avliable: "Sold",
      immageUrl: Hadephone,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 8,
      Avliable: "Sale",
      immageUrl: iCon5,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 9,
      Avliable: "Sold",
      immageUrl: redVerity,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 10,
      Avliable: "Sold",
      immageUrl: Hadephone,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 11,
      Avliable: "Sale",
      immageUrl: iCon5,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    {
      id: 12,
      Avliable: "Sold",
      immageUrl: redVerity,
      heading: "Half Running Set",
      OldPrice: "$919 ",
      NewPrice: " $149",
      ShopingImg: shopingtary,
    },
    // {
    //     Avliable: "Sale",
    //     immageUrl: Black,
    //     heading: "Half Running Set",
    //     OldPrice: "$919 ",
    //     NewPrice: " $149",
    //     ShopingImg: shopingtary,
    // },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {card.map((data) => {
            return (
              <>
                <div className="col-md-4 mt-5 pt-5 ">
                  <div className="border rounded-3 p-3 ">
                    <div>
                      <button type="button" class="btn btn-danger px-3">
                        {data.Avliable}
                      </button>
                    </div>
                    {/* swiper */}
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      // navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="text-center ">
                          <img
                            style={{ height: 200 }}
                            src={data.immageUrl}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="text-center">
                          <img
                            style={{ height: 200 }}
                            src={data.immageUrl}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    {/* swiper end */}
                    <div>
                      <h6>{data.heading}</h6>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <del>{data.OldPrice}</del>{" "}
                        <span className="text-danger fs-5 ms-2">
                          {data.NewPrice}
                        </span>
                      </div>
                      <div className="col-md-2">
                        <button className="border-0" onClick={()=>{addCartHandler(data)}}><img src={data.ShopingImg} class="" alt="" /></button>
                      </div>
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
}

export default HomeSwiper;
