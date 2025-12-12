import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
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
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  }

  return (
    <div
      id="Contact"
      className="bg-[#e3f1f6] py-16 flex flex-col items-center overflow-x-hidden"
    >
      <Toaster position="top-center" />

      <h1 data-aos="zoom-in" className="text-4xl font-bold mb-12">
        Contact Information
      </h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* جهة اليسار */}
        <div data-aos="fade-right" className="flex-1 space-y-10">
          <div className="flex items-center gap-5">
            <FiMail size={30} className="text-[#669089]" />
            <div>
              <h3 className="font-bold text-lg">Email Address</h3>
              <a href="mailto:Rowida@gmail.com" className="text-gray-700">
                Rowida@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FiPhone size={30} className="text-[#669089]" />
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <a href="tel:+201011371312" className="text-gray-700">
                +201011371312
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FiMapPin size={30} className="text-[#669089]" />
            <div>
              <h3 className="font-bold text-lg">Office Location</h3>
              <p className="text-gray-700">Zagazig, Egypt</p>
            </div>
          </div>
        </div>

        {/* جهة اليمين */}
        <form
          data-aos="fade-left"
          onSubmit={sendEmail}
          className="flex-1 space-y-7"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full md:w-1/2 p-3 border rounded-xl outline-[#669089]"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 p-3 border rounded-xl outline-[#669089]"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              name="Phone"
              type="number"
              placeholder="Mobile Number"
              className="w-full md:w-1/2 p-3 border rounded-xl outline-[#669089]"
            />
            <input
              name="title"
              type="text"
              placeholder="Subject"
              className="w-full md:w-1/2 p-3 border rounded-xl outline-[#669089]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message here"
            className="w-full h-36 p-3 border rounded-xl outline-[#669089]"
            required
          ></textarea>

          <button
            type="submit"
            className="cursor-pointer bg-[#669089] text-white py-3 px-6 rounded-xl hover:bg-[#557a74] transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
