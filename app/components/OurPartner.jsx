"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partnerLogos = [
  "/images/partner1.png",
  "/images/partner2.png",
  "/images/partner3.png",
  "/images/partner4.png",
  "/images/partner5.png",
  "/images/partner6.png",
  "/images/partner7.png",
  "/images/partner8.png",
  "/images/partner9.png",
];

const OurPartner = () => {
  return (
    <div className="w-full py-12 bg-white mb-10">
      <h2 className="text-3xl font-extrabold text-center mb-1">Success Partners</h2>
      <p className="text-sm md:text-3xl text-gray-600  mt-2 text-center mb-8">
      Partners whose partnership we are proud of


        </p>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-24">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-full object-contain grayscale hover:grayscale-0 transition-all w-[150px]  duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartner;
