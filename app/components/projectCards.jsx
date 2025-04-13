

"use client";
import { useEffect, useState, useRef } from "react";
import { FaMapMarkerAlt, FaSearch, FaTimes } from "react-icons/fa";
import AOS from "aos";

const Card = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [mapVisible, setMapVisible] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const cardsPerPage = 8; 

  useEffect(() => {
    AOS.init();
    fetch("/realestate.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const areas = [...new Set(data.map((item) => item.area))];

  const getCitiesForArea = (selectedArea) => {
    const filteredCities = data.filter((item) => item.area === selectedArea);
    return [...new Set(filteredCities.map((item) => item.city))];
  };

  useEffect(() => {
    if (area) {
      const filteredCities = getCitiesForArea(area);
      setCities(filteredCities);
    }
  }, [area]);

  const filteredData = data.filter((item) => {
    return (
      (filter === "All" || item.type === filter) &&
      (area ? item.area === area : true) &&
      (city ? item.city === city : true) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleSearch = () => {};

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Scroll interaction
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
    const walk = (x - startX.current) * 1.5; // speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const toggleMap = () => {
    setMapVisible((prev) => !prev);
  };

  return (
    <main className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Search Form */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10"
        data-aos="fade-up"
      >
        {/* Area Select */}
        <div className="relative w-full sm:w-1/3">
          <select
            className="w-full py-3 px-4 bg-white text-gray-800 rounded-lg shadow-md focus:ring-0 focus:outline-none"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Select Area</option>
            {areas.map((areaOption) => (
              <option key={areaOption} value={areaOption}>
                {areaOption}
              </option>
            ))}
          </select>
          {area && (
            <FaTimes
              className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setArea("")}
            />
          )}
        </div>

        {/* City Select */}
        <div className="relative w-full sm:w-1/3">
          <select
            className="w-full py-3 px-4 bg-white text-gray-800 rounded-lg shadow-md focus:ring-0 focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((cityOption) => (
              <option key={cityOption} value={cityOption}>
                {cityOption}
              </option>
            ))}
          </select>
          {city && (
            <FaTimes
              className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setCity("")}
            />
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-2/3">
          <input
            type="text"
            className="w-full py-3 pl-10 pr-4 bg-white text-gray-800 rounded-lg shadow-md focus:ring-0 focus:outline-none"
            placeholder="Find the interface"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

        {/* Search Button */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={handleSearch}
            className="w-full px-10 sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center"
          >
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>

      {/* Filter Buttons with drag scroll */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-3 mt-6 overflow-x-auto whitespace-nowrap px-2 py-2 scrollbar-hide cursor-grab"
      >
        {[
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
        ].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full border ${
              filter === cat ? "bg-yellow-400 text-white" : "bg-gray-100"
            } hover:bg-yellow-300 transition-all duration-300 whitespace-nowrap`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-1 sm:px-10 gap-6 mt-6">
        {currentCards.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-xl overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 space-y-1">
              <p className="font-bold text-lg">{item.price}</p>
              <span className="bg-yellow-400 text-white px-3 py-1 rounded text-sm">
                {item.type}
              </span>
              <p className="text-gray-600 capitalize">{item.title}</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {item.location}
              </div>
              <p className="text-sm text-gray-400">{item.date}</p>
              <div className="text-sm font-semibold text-right">
                {item.agency}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(filteredData.length / cardsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-700"
              } hover:bg-yellow-400 transition-all duration-300`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </main>
  );
};

export default Card;
