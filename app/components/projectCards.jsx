"use client";
import { useEffect, useState, useRef } from "react";
import { FaMapMarkerAlt, FaSearch, FaTimes } from "react-icons/fa";
import AOS from "aos";
import FilterButtons from "./FilterBar";
import SearchForm from "./SearchForm";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const ProjectCard = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    fetch("/data/realestate.json")
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

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <SearchForm
        area={area}
        setArea={setArea}
        city={city}
        setCity={setCity}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        areas={areas}
        cities={cities}
        handleSearch={handleSearch}
      />

      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-1 sm:px-10 gap-6 mt-6">
        {currentCards.map((item) => (
          <div
            onClick={() => router.push(`/projects/${item.id}`)}
            key={item.id}
            className="shadow-lg rounded-xl overflow-hidden cursor-pointer"
            data-aos="fade-up"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover curser-pointer"
            />
            <div className="p-4 space-y-1 relative h-[180px] ">
              <p className="font-bold text-lg">{t(`price.${item.price}`)}</p>
              <span className="bg-yellow-400 text-black px-3 py-1 absolute right-4 top-3 ml-3 rounded text-sm">
                {t(`moraltype.${item.moraltype}`)}
              </span>
              <p className="text-gray-600 capitalize">
                {t(`titles.${item.title}`)}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {t(`location.${item.location}`)}
              </div>
              <p className="text-sm text-gray-400">{item.date}</p>
              <div className="bg-yellow-400 text-black w-[90%]   text-center py-2 absolute bottom-3 left-1/2 transform -translate-x-1/2 rounded text-md">
                {t(`agency.${item.agency}`)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({
          length: Math.ceil(filteredData.length / cardsPerPage),
        }).map((_, index) => (
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
        ))}
      </div>
    </main>
  );
};

export default ProjectCard;
