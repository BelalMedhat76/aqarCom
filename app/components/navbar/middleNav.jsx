"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const MiddleNav = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const router = useRouter();

  const goToMap = () => router.push("/map");
  const goToLogin = () => router.push("/login");

  const isArabic = i18n.language === "ar";

  return (
    <nav
      className="px-4 sm:px-20 py-3  shadow-sm mt-4 mb-4 relative bg-white z-50"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Map Icon */}
          <a
            href="/map"
            className="text-black hover:text-primary transition duration-300 flex items-center"
          >
            <FaMapMarkerAlt
              className={`mr-2 text-xl text-yellow-600 ${
                isArabic ? "ml-2" : ""
              }`}
            />
          </a>

          {/* Center Links */}
          <div className="flex gap-8 justify-center flex-grow font-bold mb-2">
            <a
              href="/"
              className="text-black hover:text-primary transition duration-300"
            >
              {t("home")}
            </a>
            <a
              href="/"
              className="text-black hover:text-primary transition duration-300"
            >
              {t("realEstate")}
            </a>
            <a
              href="/"
              className="text-black hover:text-primary transition duration-300"
            >
              {t("support")}
            </a>
            <a
              href="/"
              className="text-black hover:text-primary transition duration-300"
            >
              {t("blog")}
            </a>
            <a
              href="/"
              className="text-black hover:text-primary transition duration-300"
            >
              {t("about")}
            </a>
            <a
              href="/"
              className="text-black hover:text-primary transition duration-300"
            >
              {t("contact")}
            </a>
          </div>

          <button
            onClick={closeMenu}
            className="text-black px-6 py-3 flex items-center text-md  transition"
          >
            <FaUserAlt
              className={`mr-4 text-xl text-yellow-600 ${
                isArabic ? "ml-4" : ""
              }`}
              onClick={goToLogin}
            />
            <span onClick={goToLogin}> {t("login")}</span>
          </button>
        </div>

        {/* Mobile & Tablet Nav */}
        <div className="lg:hidden flex justify-between items-center w-full">
          <a
            href="/map"
            className="text-black hover:text-primary transition duration-300 flex items-center"
          >
            <FaMapMarkerAlt
              className={`mr-2 text-xl text-yellow-600 ${
                isArabic ? "ml-2" : ""
              }`}
            />
          </a>

          <button onClick={toggleMenu} className="text-yellow-600 text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-start text-black space-y-6"
          style={{
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-2xl text-yellow-600"
          >
            <FaTimes />
          </button>

          <a
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold py-2"
          >
            {t("home")}
          </a>
          <a
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold py-2"
          >
            {t("realEstate")}
          </a>
          <a
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold py-2"
          >
            {t("support")}
          </a>
          <a
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold py-2"
          >
            {t("blog")}
          </a>
          <a
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold py-2"
          >
            {t("about")}
          </a>
          <a
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold py-2"
          >
            {t("contact")}
          </a>

          {/* Updated Login Button Design */}
          <button
            onClick={closeMenu}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-3 mt-6 rounded-md hover:bg-green-700 flex items-center text-lg font-semibold shadow-xl transition"
          >
            <FaUserAlt className="mr-2 text-xl " onClick={goToLogin} />
           <span onClick={goToLogin}> {t("login")}</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default MiddleNav;
