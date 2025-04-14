"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const MostPopular = () => {
  const [popularProjects, setPopularProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/realestate.json");
      const data = await res.json();
      setPopularProjects(data.slice(0, 4)); 
    };

    fetchData();
  }, []);

  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark flex justify-center items-center gap-2">
          {t("popular.title")}
        </h2>
        <p className="text-sm md:text-3xl text-gray-600 mt-2">
          {t("popular.subtitle")}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {popularProjects.map((project) => (
          <div
            onClick={() => router.push(`/projects/${project.id}`)}
            key={project.id}
            className="shadow-lg rounded-xl overflow-hidden cursor-pointer" 
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
              <p className="font-bold text-lg">
                {" "}
                {t(`price.${project.price}`)}
              </p>
              <span className="bg-yellow-400 text-black px-3 py-1 absolute right-4 top-3 ml-3 rounded text-sm">
                {t(`moraltype.${project.moraltype}`)}
              </span>
              <p className="text-gray-600 capitalize">
                {t(`titles.${project.title}`)}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {t(`location.${project.location}`)}
              </div>
              <p className="text-sm text-gray-400">{project.date}</p>
              <div className="bg-yellow-400 text-black w-[90%]   text-center py-2 absolute bottom-3 left-1/2 transform -translate-x-1/2 rounded text-md">
                {t(`agency.${project.agency}`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
