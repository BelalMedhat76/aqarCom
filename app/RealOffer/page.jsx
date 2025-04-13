"use client";

import { useState } from "react";

const RealOffer = () => {
  const [licenseNumber, setLicenseNumber] = useState("");

  const handleNext = () => {
    console.log("License Number:", licenseNumber);
    
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20 px-4 bg-white">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-2xl font-bold mb-6">Add Offer</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            License Number
          </label>
          <input
            type="number"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter license number"
          />
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RealOffer;
