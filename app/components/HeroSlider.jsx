'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const slides = [
  {
    image: 'slide1.png',
    title: "Don't miss the opportunity to acquire ",
    subtitle: 'a wonderful property in our location.',
  },
  {
    image: 'slide1.png',
    title: "Don't miss the opportunity to acquire ",
    subtitle: 'a wonderful property in our location.',
  },
  {
    image: 'slide1.png',
    title: "Don't miss the opportunity to acquire ",
    subtitle: 'a wonderful property in our location.',
  },
];

const HeroSlider=()=> {
  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectCreative]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
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
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
                  {slide.title}
                </h1>
                <p className="text-white text-base font-bold md:text-4xl" data-aos="fade-up" data-aos-delay="200">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default HeroSlider;