import React from "react";
import {
  FiUsers,
  FiMessageCircle,
  FiVolume2,
  FiShield,
  FiActivity,
  FiBookOpen,
  FiHeart,
} from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const box =
    "bg-white rounded-xl p-6 w-full max-w-[320px] mx-auto text-center " +
    "shadow-xl transition duration-300 ease-in-out cursor-pointer " +
    "hover:-translate-y-2 hover:scale-105 hover:shadow-2xl custom-shadow";

  const iconClass = "mx-auto mb-3 text-blue-600 text-4xl icon-hover";

  const services = [
    { icon: <FiUsers className={iconClass} />, title: t("s1") },
    { icon: <HiOutlineMicrophone className={iconClass} />, title: t("s2") },
    { icon: <FiMessageCircle className={iconClass} />, title: t("s3") },
    { icon: <FiVolume2 className={iconClass} />, title: t("s4") },
    { icon: <FiShield className={iconClass} />, title: t("s5") },
    { icon: <FiActivity className={iconClass} />, title: t("s6") },
    { icon: <FiBookOpen className={iconClass} />, title: t("s7") },
    { icon: <FiHeart className={iconClass} />, title: t("s8") },
  ];

  return (
    <div id="Services" className="py-16 bg-[#f9f7f1] font-[Segoe UI]">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">{t("services_title")}</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={box}
            data-aos="fade-up"
            data-aos-delay={100 + idx * 100}
            style={{ flex: "1 1 calc(25% - 2rem)", minWidth: "220px" }}
          >
            {service.icon}
            <h3 className="text-lg font-bold text-gray-800 leading-relaxed">{service.title}</h3>
          </div>
        ))}
      </div>

      <style>{`
        .custom-shadow {
          box-shadow: 0 0 15px 0 rgba(102, 144, 137, 0.5);
        }
        .custom-shadow:hover {
          box-shadow: 0 0 25px 0 rgba(102, 144, 137, 0.8);
        }
        .icon-hover:hover {
          animation: pulse 1.5s infinite;
          color: #669089;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}