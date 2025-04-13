import React from 'react'
import TopNav from './navbar/topNav'
import MiddleNav from './navbar/middleNav'
import BottomNav from './navbar/bottomNav'

const Navbar = () => {
  return (
    <div>
<TopNav/>
<MiddleNav/>
<BottomNav/>

    </div>
  )
}

export default Navbar

// "use client";

// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Menu, X, Globe, Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState(i18n.language || "en");

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const savedLang = localStorage.getItem("language");
//     if (savedLang) {
//       i18n.changeLanguage(savedLang);
//       setLanguage(savedLang);
//     }
//   }, []);

//   const toggleLanguage = () => {
//     const newLang = language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLang).then(() => {
//       setLanguage(newLang);
//       localStorage.setItem("language", newLang);
//     }).catch(err => console.error("Language change error:", err));
//   };

//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
//       {/* Top Navbar */}
//       <div className="hidden md:flex items-center justify-between px-10 py-2 border-b">
//         <div className="flex items-center gap-4">
//           <span className="text-sm font-medium">📞 00966554786838</span>
//           <span className="text-sm font-medium">✉️ info@twgksa.com</span>
//         </div>
//         <div className="flex items-center gap-4">
//           {/* Language Toggle */}
//           <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-1 border-2 border-gray-400 rounded-md hover:bg-gray-200 transition">
//             <Globe className="w-5 h-5 text-gray-600" />
//             <span>{language === "en" ? "العربية" : "English"}</span>
//           </button>
//           {/* Social Icons */}
//           {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, index) => (
//             <div key={index} className="p-2 rounded-full border-2 border-transparent hover:border-blue-500 transition-all duration-500" data-aos="zoom-in">
//               <Icon className="w-6 h-6 text-gray-600 hover:text-blue-500 transition" />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Main Navbar */}
//       <nav className={`flex items-center justify-between px-6 py-4 transition-all ${isScrolled ? "fixed top-0 w-full bg-white shadow-lg" : ""}`}>
//         <Link href="/">
//           <Image src="/logo.png" alt="Logo" width={50} height={50} unoptimized={true} />
//         </Link>
//         <ul className="hidden md:flex gap-6 text-lg font-semibold">
//           {["home", "about", "services", "products", "industry", "partners", "profile", "contact"].map((link, index) => (
//             <li key={index}>
//               <Link href={`/${link}`} className="hover:text-blue-500 transition">{t(`nav.${link}`)}</Link>
//             </li>
//           ))}
//         </ul>
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
//         </button>
//       </nav>
//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.4, ease: "easeInOut" }} className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-xl font-semibold z-50">
//             <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
//               <X className="w-8 h-8" />
//             </button>
//             {["home", "about", "services", "products", "industry", "partners", "profile", "contact"].map((link, index) => (
//               <Link key={index} href={`/${link}`} onClick={() => setIsOpen(false)}>{t(`nav.${link}`)}</Link>
//             ))}
//             <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-1 border-2 border-gray-400 rounded-md hover:bg-gray-200 transition">
//               <Globe className="w-5 h-5 text-gray-600" />
//               <span>{language === "en" ? "العربية" : "English"}</span>
//             </button>
//             <div className="flex gap-4 mt-4">
//               {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, index) => (
//                 <div key={index} className="p-2 rounded-full border-2 border-transparent hover:border-blue-500 transition-all duration-500" data-aos="zoom-in">
//                   <Icon className="w-6 h-6 text-gray-600 hover:text-blue-500 transition" />
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };
// export default Navbar;
