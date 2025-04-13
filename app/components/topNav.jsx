import { useState } from 'react';
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

const TopNav = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="w-full px-4 sm:px-20 py-4 bg-content1 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="logo.png"
            alt="Logo"
            className="w-[60px] h-[60px]"
          />
          <span className="text-[18px] font-bold">Aqar com</span>
        </div>

        {/* Center Buttons - No Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="flat"
            className="bg-white shadow-md px-4 py-2 rounded-lg text-sm font-medium"
          >
            Search by Map
          </Button>

          <Button
            variant="flat"
            className="bg-white shadow-md px-4 py-2 rounded-lg text-sm font-medium"
          >
            Property Request
          </Button>

          <Button
            variant="flat"
            className="bg-white shadow-md px-4 py-2 rounded-lg text-sm font-medium"
          >
            List Property
          </Button>
        </div>

        {/* Language Switcher with Flag Icon */}
        <Button
          variant="flat"
          className="px-4 py-2 shadow-md"
          startContent={
            <Icon icon={currentLang === 'ar' ? "logos:saudi-arabia" : "logos:united-kingdom"} />
          }
          onPress={toggleLanguage}
        >
          {currentLang === 'ar' ? 'Arabic' : 'English'}
        </Button>
      </div>
    </nav>
  );
};

export default TopNav;
