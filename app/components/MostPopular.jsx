"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const MostPopular = () => {
  const [popularProjects, setPopularProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/realestate.json");
      const data = await res.json();
      setPopularProjects(data.slice(0, 4)); // Show only 4 cards
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark  flex justify-center items-center gap-2">
          Most Popular
        </h2>
        <p className="text-sm md:text-3xl text-gray-600 mt-2">
          Check out the latest exclusive offers
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {popularProjects.map((project) => (
          <div
            key={project.id}
            className="shadow-lg rounded-xl overflow-hidden bg-white transition hover:scale-105"
            data-aos="fade-up"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 space-y-1 relative h-[180px] ">
              <p className="font-bold text-lg">{project.price}</p>
              <span className="bg-yellow-400 text-white px-3 py-1 absolute right-4 top-3 ml-3 rounded text-sm">
                {project.moraltype}
              </span>
              <p className="text-gray-600 capitalize">{project.title}</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {project.location}
              </div>
              <p className="text-sm text-gray-400">{project.date}</p>
              <div className="bg-yellow-400 text-white w-[90%]   text-center py-2 absolute bottom-3 left-1/2 transform -translate-x-1/2 rounded text-sm">
  {project.agency}
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
