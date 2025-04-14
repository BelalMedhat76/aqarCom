"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const BottomNav = () => {
  const { t } = useTranslation();

  const partners = [
    { id: 1, name: "partner1", image: "/images/nav1.jpg" },
    { id: 2, name: "partner2", image: "/images/nav2.jpg" },
    { id: 3, name: "partner3", image: "/images/nav3.jpg" },
    { id: 4, name: "partner4", image: "/images/nav4.jpg" },
    { id: 5, name: "partner5", image: "/images/nav5.png" },
    { id: 6, name: "partner6", image: "/images/nav6.png" },
    { id: 7, name: "partner7", image: "/images/nav7.png" },
    { id: 8, name: "partner8", image: "/images/nav2.jpg" },
    { id: 9, name: "partner9", image: "/images/nav1.jpg" },
    { id: 10, name: "partner10", image: "/images/nav5.png" },
  ];

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <div className="w-full px-4 py-1 bg-white shadow-sm shadow-gray-500/20 rounded-md">
      <div className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={12}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="py-4"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={partner.id}>
              <div
                className="flex flex-col items-center "
                data-aos="zoom-in"
                data-aos-delay={index * 90}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-20 h-20 rounded-full border-2 border-yellow-400 object-cover cursor-pointer"
                />
                <span className="text-sm mt-2 text-center font-medium text-gray-700">
                  {t(partner.name)}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BottomNav;
