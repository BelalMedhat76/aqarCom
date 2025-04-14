import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-[#1B2430] text-white py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Aqar com section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <h2 className="font-bold text-lg">{t("aqar_com")}</h2>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              {t("footer.aqar_com_description")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("footer.around")}</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t("footer.privacy_policy")}</li>
              <li>{t("footer.terms_conditions")}</li>
              <li>{t("footer.ads_conditions")}</li>
              <li>{t("footer.agreement")}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("footer.our_services")}</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t("footer.real_estate_offers")}</li>
              <li>{t("footer.real_requests")}</li>
              <li className="font-semibold text-white">
                {t("footer.real_estate_services")}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-4 text-white text-xl">
              <FaTwitter />
              <FaInstagram />
              <FaFacebookF />
              <FaSnapchatGhost />
            </div>
            <Image
              src="/images/foot1.jpeg"
              alt="Google Play"
              width={140}
              height={40}
            />
            <Image
              src="/images/foot2.png"
              alt="App Store"
              width={140}
              height={40}
            />
            <Image
              src="/images/foot3.jpg"
              alt="App Gallery"
              width={140}
              height={40}
            />
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/images/footlogo.jpg"
              alt="logo"
              width={200}
              height={40}
            />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-gray-400 text-center relative">
          <p>
            {t("footer.all_rights_reserved")}{" "}
            <span className="text-yellow-400">@ {t("aqar_com")}</span>
          </p>
        </div>
      </footer>

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
