import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const nav = "hover:border-b-3 border-b-[#669089] transition duration-250";

  // دالة لإغلاق القائمة عند الضغط على رابط
  const handleLinkClick = () => setShowMenu(false);

  return (
    <div className="container flex justify-between items-center mx-auto py-5 px-6 relative">

      {/* logo */}
      <div>
        <h1 className="font-rowida font-bold text-2xl text-[#669089]">Rowida Reda</h1>
      </div>

      {/* Navbar for large screens */}
      <nav className="hidden lg:flex gap-4 font-bold">
        <a className="text-[#669089] border-b-3 border-b-[#669089]" href="#">
          Home
        </a>
        <a className={nav} href="#about">
          About Me
        </a>
        <a className={nav} href="#Services">
          Services
        </a>
        <a className={nav} href="#projects">
          Projects
        </a>
        <a className={nav} href="#Testimonial">
          Testimonial
        </a>
        <a className={nav} href="#Contact">
          Contact Us
        </a>
      </nav>

      {/* Hamburger icon for mobile */}
      <FiAlignRight
        className="text-2xl block lg:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Overlay خلفية معتمة لما القائمة مفتوحة */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0  z-10"
            onClick={() => setShowMenu(false)}
          ></div>

          <nav className="fixed top-0 left-0 right-0 bg-white shadow-md flex flex-col items-center py-4 gap-4 font-bold lg:hidden z-20">
            <a
              className="text-[#669089] border-b-3 border-b-[#669089]"
              href="#"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a className={nav} href="#about" onClick={handleLinkClick}>
              About Me
            </a>
            <a className={nav} href="#Services" onClick={handleLinkClick}>
              Services
            </a>
            <a className={nav} href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
            <a className={nav} href="#Testimonial" onClick={handleLinkClick}>
              Testimonial
            </a>
            <a className={nav} href="#Contact" onClick={handleLinkClick}>
              Contact Us
            </a>

            
          </nav>

        </>
      )}
    </div>
  );
}
