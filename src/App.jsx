import React, { useEffect } from "react";
import Navbar from "./compnents/Navbar";
import HeroSection from "./compnents/HeroSection";
import Services from "./compnents/Services";
import Projects from "./compnents/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonials from "./compnents/Testimonials";
import ContactUs from "./compnents/ContactUs";


export default function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,  // مدة الأنيميشن
      once: false,      // يشتغل مرة واحدة بس
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
         <Projects />
        <Testimonials/>
        <ContactUs/>
    </div>
  );
}



