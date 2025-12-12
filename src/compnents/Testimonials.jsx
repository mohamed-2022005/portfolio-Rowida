import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/review1.jpg"; // 1
import img2 from "../assets/review2.jpg"; // 2
import img3 from "../assets/review3.jpg"; // 3
import img4 from "../assets/review4.jpg"; // 4
import img5 from "../assets/review5.jpg"; // 5
import img6 from "../assets/review6.jpg"; // 6
import img7 from "../assets/review7.jpg"; // 7
import img8 from "../assets/review8.jpg"; // 8

const cardStyle = `
  relative
  bg-white
  rounded-xl
  overflow-hidden
  shadow-lg 
  shadow-gray-300/40
  cursor-pointer
  transition-all
  duration-300
  hover:shadow-xl hover:shadow-gray-400/50
  flex
  flex-col
  mb-6
  w-full        /* عرض كامل على الموبايل */
  sm:w-[48%]    /* نصين في الصف للشاشات الصغيرة */
  md:w-[48%]    /* نفس نصين في التابلت */
  lg:w-[48%]    /* نصين في الديسكتوب */
`;

const rows = [
  [
    { image: img7, name: "Mamet Malek" },
    { image: img1, name: "Om Mohamed" },
    { image: img3, name: "Mohamed Abdallah" },
    { image: img2, name: "Om Mostafa" },
  ],
  [
    { image: img4, name: "Hams Hammad" },
    { image: img6, name: "Shahd Ehab" },
  ],
  [
    { image: img5, name: "Kenzy" },
    { image: img8, name: "Seif" },
  ],
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="bg-[#f9f7f1] w-full py-10">
        <div id="Testimonial" className="max-w-6xl mx-auto px-4 min-h-screen">
          <h1
            data-aos="zoom-in"
            className="w-full text-center text-4xl font-bold mb-12 relative"
          >
            Testimonials
          </h1>

          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-between gap-4 mb-10"
              data-aos="fade-up"
              data-aos-delay={rowIndex * 200}
            >
              {row.map((item, i) => (
                <div key={i} className={cardStyle}>
                  <div className="w-full overflow-hidden aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain transition-transform duration-500 relative top-[2px] rounded-lg"
                    />
                  </div>
                  <div className="p-3 flex justify-center items-center">
                    <h2
                      className="text-gray-900 text-xl font-extrabold font-serif text-center"
                      style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.15)" }}
                    >
                      {item.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
