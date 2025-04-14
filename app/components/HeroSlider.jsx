
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; 
const slides = [
  {
    image: "images/back3.jpg",
    titleKey: "heroSlider.slide1.title",
    subtitleKey: "heroSlider.slide1.subtitle",
  },
  {
    image: "/images/back1.jpg",
    titleKey: "heroSlider.slide2.title",
    subtitleKey: "heroSlider.slide2.subtitle",
  },
  {
    image: "images/back2.jpg",
    titleKey: "heroSlider.slide3.title",
    subtitleKey: "heroSlider.slide3.subtitle",
  },
];
const HeroSlider = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[80vh] relative ">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]} 
        pagination={{ clickable: true }}
        loop={true} 
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        effect="fade" 
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1
                  className="text-white text-3xl md:text-5xl font-extrabold mb-4"
                  data-aos="fade-up"
                >
                  {t(slide.titleKey)}
                </h1>
                <p
                  className="text-white text-3xl  md:text-5xl font-extrabold"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t(slide.subtitleKey)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
