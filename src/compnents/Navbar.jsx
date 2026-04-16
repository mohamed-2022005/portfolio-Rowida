import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#Services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonial", href: "#Testimonial" },
    { name: "Contact Us", href: "#Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 bg-[#f8f9fa]">
      
      {/* Navbar الأساسي */}
      <nav className="mx-auto max-w-5xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm rounded-2xl px-6 py-3 transition-all duration-300">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#669089] rounded-lg flex items-center justify-center text-white font-bold">R</div>
            <h1 className="font-rowida font-bold text-xl text-gray-800 tracking-tight">
              Rowida<span className="text-[#669089]">Reda</span>
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-gray-50/50 p-1 rounded-xl border border-gray-100">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-[#669089] hover:bg-white rounded-lg transition-all duration-200">
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => setShowMenu(true)} className="lg:hidden p-2 text-[#669089]">
            <FiMenu size={26} />
          </button>
        </div>
      </nav>

      {/* Overlay - خليته أغمق شوية عشان يبرز المنيو */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-[4px] lg:hidden transition-opacity duration-500 z-[60] ${showMenu ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setShowMenu(false)} 
      />
      
      {/* Side Menu - التصميم الجديد "Floating Card" */}
      <div className={`fixed top-4 right-4 bottom-4 w-[260px] bg-white/90 backdrop-blur-2xl lg:hidden transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[70] p-8 shadow-2xl rounded-3xl flex flex-col border border-white/20 ${showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        
        {/* زرار الإغلاق - خليته شيك في الزاوية */}
        <div className="flex justify-end">
          <button 
            onClick={() => setShowMenu(false)}
            className="p-3 bg-gray-100/50 rounded-2xl text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Links - محاذاتها في النص وشكلها أهدى */}
        <nav className="flex flex-col gap-4 mt-12 items-center">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className="w-full text-center py-3 text-lg font-bold text-gray-700 hover:text-[#669089] hover:bg-[#669089]/5 rounded-xl transition-all"
              style={{ transitionDelay: `${showMenu ? i * 40 : 0}ms` }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Footer التحتاني شيك وهادي */}
        <div className="mt-auto pt-6 text-center">
           <p className="text-[10px] font-black text-[#669089]/60 uppercase tracking-[0.2em]">
             © 2026 ROWIDA REDA
           </p>
        </div>
      </div>
    </header>
  );
}