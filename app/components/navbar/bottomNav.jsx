// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const BottomNav = () => {
//   const partners = [
//     { id: 1, name: "Ahmed Al-Talihan", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=1" },
//     { id: 2, name: "Fahad Abdullah", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=2" },
//     { id: 3, name: "Sultan Al-Dosari", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=3" },
//     { id: 4, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
//     { id: 5, name: "Property Group", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=5" },
//     { id: 6, name: "Estate Agency", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=6" },
//     { id: 7, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },

//     { id: 8, name: "Property Group", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=5" },
//     { id: 9, name: "Estate Agency", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=6" },
//     { id: 10, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 300 });

//     const interval = setInterval(() => {
//       const container = document.querySelector('.partners-scroll');
//       if (container) {
//         if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//           container.scrollLeft = 0;
//         } else {
//           container.scrollLeft += 100;
//         }
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full px-4 py-1 bg-white shadow-sm shadow-gray-500/20 rounded-md">
//       <div className="max-w-7xl mx-auto overflow-hidden">
//         <div className="partners-scroll flex justify-center items-center gap-8 sm:gap-20 overflow-x-auto scroll-smooth py-4">
//           {partners.map((partner, index) => (
//             <div
//               key={partner.id}
//               className="flex flex-col items-center min-w-[100px]"
//               data-aos="zoom-in"
//               data-aos-delay={index * 90}
//             >
//               <img
//                 src={partner.image}
//                 alt={partner.name}
//                 className="w-20 h-20 rounded-full border-4 border-yellow-200 object-cover"
//               />
//               <span className="text-sm mt-2 text-center font-medium text-gray-700">{partner.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BottomNav;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const BottomNav = () => {
  const partners = [
    { id: 1, name: "Ahmed Al-Talihan", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=1" },
    { id: 2, name: "Fahad Abdullah", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=2" },
    { id: 3, name: "Sultan Al-Dosari", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=3" },
    { id: 4, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
    { id: 5, name: "Property Group", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=5" },
    { id: 6, name: "Estate Agency", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=6" },
    { id: 7, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
    { id: 8, name: "Property Group", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=5" },
    { id: 9, name: "Estate Agency", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=6" },
    { id: 10, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
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
            640: { slidesPerView:  3},
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
                  className="w-20 h-20 rounded-full border-4 border-yellow-200 object-cover cursor-pointer"
                />
                <span className="text-sm mt-2 text-center font-medium text-gray-700">
                  {partner.name}
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
