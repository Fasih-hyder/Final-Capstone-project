import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import pic from '../../../../Assests/images/user-1.png'

export default function Carousel() {
  return (
  <div className='bg-light'>
      <div className='container text-center py-5 my-5'>
        <button className='bg-primary rounded-pill p-2'>What People Says</button>
      <h1>Our Clients Reviews</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='border'>
                <div className='bg-white'>
               <img src={pic} className='img-fluid' alt="" />
               <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.</p>
                </div>
            </div>
            <div className='border'>
            <div className='bg-white'>
               <img src={pic} className='img-fluid rounded-5' alt="" />
               <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}
