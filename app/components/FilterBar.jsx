"use client"
import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';

const FilterButtons = ({ filter, setFilter }) => {
  const { t ,i18n} = useTranslation();
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const categories = [
    "All",
    "Apartment For Rent",
    "Apartment For Sell",
    "Land For Rent",
    "Land For Sell",
    "Building For Rent",
    "Building For Sell",
    "Villa For Rent",
    "Villa For Sell",
    "Stairs For Rent",
    "Stairs For Sell",
    "Roof For Rent",
    "Roof For Sell",
    "Farm For Rent",
    "Farm For Sell",
    "House For Rent",
    "House For Sell",
    "Room For Rent",
    "Room For Sell",
    "Office For Rent",
    "Office For Sell",
  ];
  const isArabic = i18n.language === 'ar';  

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="flex gap-3 mt-6 overflow-x-auto whitespace-nowrap px-2 py-2 scrollbar-hide cursor-grab"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-1 rounded-full border ${
            filter === cat ? "bg-yellow-400 text-white" : "bg-gray-100"
          } hover:bg-yellow-300 transition-all duration-300 whitespace-nowrap`}
          onClick={() => setFilter(cat)}
        >
          {t(`categories.${cat}`)}
          </button>
      ))}
    </div>
  );
};

export default FilterButtons;
