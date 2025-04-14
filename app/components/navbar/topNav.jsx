"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Image } from "@heroui/react";
import i18n from "i18next";

const TopNav = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState("ar");

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const goToRequestForm = () => router.push("/AddRequest");
  const goToRealOffer = () => router.push("/RealOffer");
  const goToMap = () => router.push("/map");
  const isArabic = i18n.language === "ar";

  return (
    <nav
      className="w-full px-4 sm:px-28 py-4 bg-white shadow-sm"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
            <span className="text-[18px] font-bold">{t("logo")}</span>
          </div>

          {/* Centered buttons */}
          <div className="flex gap-4">
            <Button
              onPress={goToMap}
              className="shadow-md px-4 py-2 border-2 border-yellow-500 rounded-lg text-md font-medium"
            >
              {t("search_by_map")}
            </Button>
            <Button
              onPress={goToRequestForm}
              className="border-2 border-yellow-500 shadow-md px-4 py-2 rounded-lg text-md font-medium"
            >
              {t("real_request")}
            </Button>
            <Button
              onPress={goToRealOffer}
              className="border-2 border-yellow-500 shadow-md px-4 py-2 rounded-lg text-md font-medium"
            >
              {t("real_offer")}
            </Button>
          </div>

          {/* Language Toggle Button with Flag Icon */}
          <Button
            variant="flat"
            className="px-4 py-2 shadow-md flex rounded-md items-center gap-2 bg-yellow-500"
            onPress={toggleLanguage}
          >
            {currentLang === "ar" ? (
              <>🇬🇧 {t("English")}</>
            ) : (
              <>🇸🇦 {t("Arabic")}</>
            )}
          </Button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
            <span className="text-[18px] font-bold">{t("logo")}</span>
          </div>

          {/* Language Toggle Button on top-right */}
          <Button
            variant="flat"
            className="px-4 py-2 shadow-md flex items-center gap-2 bg-yellow-500 rounded-md"
            onPress={toggleLanguage}
          >
            {currentLang === "ar" ? (
              <>🇬🇧 {t("English")}</>
            ) : (
              <>🇸🇦 {t("Arabic")}</>
            )}
          </Button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex flex-col gap-4 w-full mt-4">
          <div className="flex gap-2 w-full">
            <Button
              onPress={goToMap}
              className="flex-1 border-2 border-yellow-500  shadow-md px-4 py-2 rounded-lg text-md font-medium"
            >
              {t("search_by_map")}
            </Button>
            <Button
              onPress={goToRequestForm}
              className="flex-1 border-2 border-yellow-500  shadow-md px-4 py-2 rounded-lg text-md font-medium"
            >
              {t("real_request")}
            </Button>
          </div>
          <Button
            onPress={goToRealOffer}
            className="border-2 border-yellow-500  shadow-md px-4 py-2 rounded-lg text-md font-medium w-full"
          >
            {t("real_offer")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
