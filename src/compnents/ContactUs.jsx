import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k7qsiij",
        "template_9u91ar4",
        e.target,
        "RCPj8hROqmMAzYbWt"
      )
      .then(
        () => {
          toast.success(t("msg_success"));
          e.target.reset();
        },
        (error) => {
          toast.error(t("msg_error"));
          console.error(error);
        }
      );
  }

  return (
    <div
      id="Contact"
      className="bg-[#e3f1f6] py-16 flex flex-col items-center overflow-x-hidden w-full"
    >
      <Toaster position="top-center" />

      {/* العنوان معدل ليكون في المنتصف دائماً */}
      <div className="w-full flex justify-center px-4">
        <h1 
          data-aos="zoom-in" 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t("contact_info_title")}
        </h1>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-12 px-6">
        
        {/* جهة اليسار: معلومات التواصل */}
        <div data-aos="fade-right" className="flex-1 space-y-10">
          <div className="flex items-center gap-5">
            <div className="bg-white p-3 rounded-full shadow-sm">
               <FiMail size={26} className="text-[#669089]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("email_addr")}</h3>
              <a href="mailto:Rowida@gmail.com" className="text-gray-700 hover:text-[#669089] transition-colors">
                Rowida@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-white p-3 rounded-full shadow-sm">
               <FiPhone size={26} className="text-[#669089]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("phone_label")}</h3>
              <a href="tel:+201011371312" className="text-gray-700 hover:text-[#669089] transition-colors">
                01011371312
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-white p-3 rounded-full shadow-sm">
               <FiMapPin size={26} className="text-[#669089]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("office_loc")}</h3>
              <p className="text-gray-700">{t("location_val")}</p>
            </div>
          </div>
        </div>

        {/* جهة اليمين: الفورم */}
        <form
          data-aos="fade-left"
          onSubmit={sendEmail}
          className="flex-1 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder={t("full_name")}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#669089] outline-none bg-white/50 backdrop-blur-sm transition-all"
              required
            />
            <input
              name="email"
              type="email"
              placeholder={t("email_placeholder")}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#669089] outline-none bg-white/50 backdrop-blur-sm transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="Phone"
              type="number"
              placeholder={t("mobile_num")}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#669089] outline-none bg-white/50 backdrop-blur-sm transition-all"
            />
            <input
              name="title"
              type="text"
              placeholder={t("subject")}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#669089] outline-none bg-white/50 backdrop-blur-sm transition-all"
            />
          </div>

          <textarea
            name="message"
            placeholder={t("message_placeholder")}
            className="w-full h-40 p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#669089] outline-none bg-white/50 backdrop-blur-sm transition-all resize-none"
            required
          ></textarea>

          <div className="flex justify-start">
            <button
              type="submit"
              className="cursor-pointer bg-[#669089] text-white font-bold py-4 px-10 rounded-2xl hover:bg-[#557a74] active:scale-95 transition-all shadow-lg shadow-[#669089]/20 w-full md:w-auto"
            >
              {t("send_btn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}