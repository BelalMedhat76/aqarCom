import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SearchForm = ({
  area,
  setArea,
  city,
  setCity,
  searchTerm,
  setSearchTerm,
  areas,
  cities,
  handleSearch,
}) => {
  const { t } = useTranslation();

  return (
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
          <option value="">{t("selectArea")}</option>
          {areas.map((areaOption) => (
            <option key={areaOption} value={areaOption}>
              {t(`areas.${areaOption}`)}
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

      <div className="relative w-full sm:w-1/3">
        <select
          className="w-full py-3 px-4 bg-white text-gray-800 rounded-lg shadow-md focus:ring-0 focus:outline-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">{t("selectCity")}</option>
          {cities.map((cityOption) => (
            <option key={cityOption} value={cityOption}>
              {t(`cities.${cityOption}`)}
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

      <div className="relative w-full sm:w-2/3">
        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 bg-white text-gray-800 rounded-lg shadow-md focus:ring-0 focus:outline-none"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
      </div>

      <div className="relative w-full sm:w-auto">
        <button
          onClick={handleSearch}
          className="w-full px-10 sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center"
        >
          <FaSearch className="mr-2" />
          {t("searchButton")}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
