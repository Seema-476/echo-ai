import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { TESTIMONIAL_SLIDER } from "../utils/helper";
import Heading from "../common/Heading";

const Testimonials = () => {
  return (
    <div className="bg-z-black xl:pb-[105px] lg:pb-16 sm:py-16 py-6 lg:pt-[87px] -mt-[2px]" id="testimonials">
      <div className="container">
        <Heading classStyle="pb-10" text="Testimonials" />
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              pagination: {
                clickable: true,
              },
            },
            768: {
              slidesPerView: 2,
              pagination: {
                clickable: true,
              },
            },
            1024: {
              slidesPerView: 3,
              pagination: false,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {TESTIMONIAL_SLIDER.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-custom-gradient xl:p-6 px-4 py-5 max-sm:pb-6 rounded-3xl text-white shadow-lg lg:max-w-[364px] xl:min-h-[289px] lg:min-h-[260px] w-full h-full">
                <h3 className="text-2xl font-medium pb-4">
                  {testimonial.title}
                </h3>
                <p className="text-sm xl:text-base font-normal lg:pb-12 pb-9 opacity-80">{testimonial.description}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm font-normal">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;