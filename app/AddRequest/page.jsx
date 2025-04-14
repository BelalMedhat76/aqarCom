import React from "react";
import { FaChevronDown } from "react-icons/fa";

const AddRequestForm = () => {
  const options = {
    Area: ["North", "South", "East", "West"],
    City: ["Riyadh", "Jeddah", "Dammam", "Makkah"],
    Neighborhood: ["Al Malaz", "Al Olaya", "King Fahd", "Al Yasmin"],
    "Estate Type": ["Apartment", "Villa", "Land", "Shop"],
    "Ads Type": ["For Rent", "For Sale"],
    "Usage Type": ["Residential", "Commercial"],
  };

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 bg-white overflow-y-auto">
      <h2 className="text-center text-xl font-semibold mb-6">Add Request</h2>

      <form className="space-y-4 w-full">
        {/* Dropdowns */}
        {Object.entries(options).map(([label, items]) => (
          <div key={label} className="relative">
            <label className="block font-semibold mb-1">{label}</label>
            <select
              className="w-full px-4 pr-10 py-3 rounded cursor-pointer text-gray-600 focus:outline-none appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select {label}
              </option>
              {items.map((item) => (
                <option
                  key={item}
                  className="cursor-pointer rounderd h-[100px] overflow-scroll"
                >
                  {item}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-11 text-gray-500 pointer-events-none" />
          </div>
        ))}

        {/* Description */}
        <div className="relative">
          <label className="block font-semibold mb-1">Description</label>
          <input
            type="text"
            placeholder="Enter description..."
            className="w-full px-4 pr-10 py-3 rounded bg-gray-100 focus:outline-none"
          />
          <FaChevronDown className="absolute right-3 top-11 text-gray-400 pointer-events-none" />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full">
              <input
                type="number"
                placeholder="From "
                className="w-full px-4 pr-10 py-3 rounded bg-gray-100 focus:outline-none"
              />
              <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative w-full">
              <input
                type="number"
                placeholder="To "
                className="w-full px-4 pr-10 py-3 rounded bg-gray-100 focus:outline-none"
              />
              <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Area */}
        <div>
          <label className="block font-semibold mb-1">Area </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full">
              <input
                type="number"
                placeholder="From "
                className="w-full px-4 pr-10 py-3 rounded bg-gray-100 focus:outline-none"
              />
              <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative w-full">
              <input
                type="number"
                placeholder="To "
                className="w-full px-4 pr-10 py-3 rounded bg-gray-100 focus:outline-none"
              />
              <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded w-full sm:w-[500px]"
          >
            Add a New Ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRequestForm;
