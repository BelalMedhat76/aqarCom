import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BottomNav = () => {
  const partners = [
    { id: 1, name: "Ahmed Al-Talihan", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=1" },
    { id: 2, name: "Fahad Abdullah", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=2" },
    { id: 3, name: "Sultan Al-Dosari", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=3" },
    { id: 4, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
    { id: 5, name: "Property Group", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=5" },
    { id: 6, name: "Estate Agency", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=6" },
    { id: 7, name: "Real Estate Co.", image: "https://img.heroui.chat/image/avatar?w=64&h=64&u=4" },
  ];

  useEffect(() => {
    AOS.init({ duration: 300 });

    const interval = setInterval(() => {
      const container = document.querySelector('.partners-scroll');
      if (container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 100;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-1 bg-white shadow-sm shadow-gray-500/20 rounded-md">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="partners-scroll flex justify-center items-center gap-8 sm:gap-20 overflow-x-auto scroll-smooth py-4">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="flex flex-col items-center min-w-[100px]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
              />
              <span className="text-sm mt-2 text-center font-medium text-gray-700">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
