
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaSnapchatGhost,
//     FaTwitter,
//     FaWhatsapp
//   } from 'react-icons/fa';
//   import Image from 'next/image';
  
//   const Footer = () => {
//     return (
//       <>
//         <footer className="bg-[#1B2430] text-white py-10 px-6 md:px-20">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
//             {/* Aqar com section */}
//             <div className="col-span-2">
//               <div className="flex items-center gap-2 mb-4">
//                 <Image src="/logo.png" alt="logo" width={50} height={50} />
//                 <h2 className="font-bold text-lg">Aqar com</h2>
//               </div>
//               <p className="text-sm leading-6 w-3/2 text-gray-300">
//                 Aqar.com is a marketing platform that enables you to trade real estate and related
//                 services through the Apple and Android app. Aqar.com gives you access to your goal in
//                 the fastest and best way.
//               </p>
//             </div>
  
//             {/* Around section */}
//             <div>
//               <h3 className="font-semibold mb-2">around</h3>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li>privacy policy</li>
//                 <li>Terms and Conditions</li>
//                 <li>Ads Conditions</li>
//                 <li>Agreement</li>
//               </ul>
//             </div>
  
//             {/* Our services */}
//             <div>
//               <h3 className="font-semibold mb-2">Our services</h3>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li>Real estate offers</li>
//                 <li>Real requests</li>
//                 <li className="font-semibold text-white">Real estate services</li>
//               </ul>
//             </div>
  
//             {/* Apps & QR section */}
//             <div className="flex flex-col items-start gap-3">
//               <div className="flex gap-4 text-white text-xl">
//                 <FaTwitter />
//                 <FaInstagram />
//                 <FaFacebookF />
//                 <FaSnapchatGhost />
//               </div>
//               <Image src="/images/foot1.jpeg" alt="Google Play" width={140} height={40} />
//               <Image src="/images/foot2.png" alt="App Store" width={140} height={40} />
//               <Image src="/images/foot3.jpg" alt="App Gallery" width={140} height={40} />
//             </div>
  
//             {/* Logo */}
//             <div className="flex items-center gap-2 mb-2">
//               <Image src="/images/footlogo.jpg" alt="logo" width={250} height={40} />
//             </div>
//           </div>
  
//           <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-gray-400 text-center relative">
//             <p>all rights are save <span className="text-yellow-400">@ Aqar com</span></p>
//           </div>
//         </footer>
  
//         {/* WhatsApp Icon Fixed */}
//         <a
//   href="https://wa.me/966543442066"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 text-white text-2xl"
//   data-aos="fade-up"
// >
//   <FaWhatsapp />
// </a>

//       </>
//     );
//   };
  
//   export default Footer;
  

import {
    FaFacebookF,
    FaInstagram,
    FaSnapchatGhost,
    FaTwitter,
    FaWhatsapp
  } from 'react-icons/fa';
  import Image from 'next/image';
  
  const Footer = () => {
    return (
      <>
        <footer className="bg-[#1B2430] text-white py-10 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {/* Aqar com section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                <h2 className="font-bold text-lg">Aqar com</h2>
              </div>
              <p className="text-sm leading-6 text-gray-300">
                Aqar.com is a marketing platform that enables you to trade real estate and related
                services through the Apple and Android app. Aqar.com gives you access to your goal in
                the fastest and best way.
              </p>
            </div>
  
            {/* Around section */}
            <div>
              <h3 className="font-semibold mb-2">Around</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Ads Conditions</li>
                <li>Agreement</li>
              </ul>
            </div>
  
            {/* Our services */}
            <div>
              <h3 className="font-semibold mb-2">Our Services</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Real Estate Offers</li>
                <li>Real Requests</li>
                <li className="font-semibold text-white">Real Estate Services</li>
              </ul>
            </div>
  
            {/* Apps & QR section */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex gap-4 text-white text-xl">
                <FaTwitter />
                <FaInstagram />
                <FaFacebookF />
                <FaSnapchatGhost />
              </div>
              <Image src="/images/foot1.jpeg" alt="Google Play" width={140} height={40} />
              <Image src="/images/foot2.png" alt="App Store" width={140} height={40} />
              <Image src="/images/foot3.jpg" alt="App Gallery" width={140} height={40} />
            </div>
  
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start">
              <Image src="/images/footlogo.jpg" alt="logo" width={200} height={40} />
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-gray-400 text-center relative">
            <p>
              All rights are reserved <span className="text-yellow-400">@ Aqar com</span>
            </p>
          </div>
        </footer>
  
        {/* WhatsApp Icon Fixed */}
        <a
          href="https://wa.me/966543442066"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-yellow-400 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 text-white text-2xl"
          data-aos="fade-up"
        >
          <FaWhatsapp />
        </a>
      </>
    );
  };
  
  export default Footer;
  