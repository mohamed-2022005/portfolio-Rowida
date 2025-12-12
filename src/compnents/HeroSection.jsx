import { FaInstagram, FaSquareFacebook, FaTiktok } from "react-icons/fa6";
import bg from "../assets/background.png";
import me from "../assets/rowida.jpg";

export default function HeroSection() {
    return (
        <div
            id="about"
            className="w-full h-[720px] bg-cover bg-no-repeat flex"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container flex flex-col md:flex-row justify-evenly items-center mx-auto gap-10 md:gap-20">

                {/* side left */}
                <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-12 max-w-lg">

                    {/* الأيقونات */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-delay="500"
                        className="flex flex-row md:flex-col gap-6"
                    >

                        {[
                            {
                                icon: FaSquareFacebook,
                                link: "https://www.facebook.com/share/1B7KzWtAJw/"
                            },
                            {
                                icon: FaTiktok,
                                link: "https://www.tiktok.com/@speechtherapybyrowida?_r=1&_t=ZS-9272cT0zPFA"
                            },
                            {
                                icon: FaInstagram,
                                link: "https://www.instagram.com/speech_therapy_byrowida?igsh=MTZjdnZjdGl1ZGVheQ=="
                            },
                        ].map((item, i) => {

                            const IconComp = item.icon;

                            return (
                                <a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconComp
                                        className="
                                            text-[#6f34fe] text-3xl cursor-pointer
                                            hover:drop-shadow-[0_0_15px_rgba(111,52,254,1)]
                                            hover:scale-105
                                            transition-shadow transition-transform duration-500
                                        "
                                    />
                                </a>
                            );
                        })}
                    </div>

                    {/* texts */}
                    <div data-aos="fade-right" className="flex flex-col gap-3 max-w-md text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'am Rowida</h1>
                        <h4 className="text-2xl md:text-3xl text-[#6f34fe] font-bold">Social Worker</h4>
                        <p className="text-[14px] md:text-[15px] ">
                            High-level experience in social services and community support,
                            <br />
                            providing impactful and meaningful help to individuals and families.
                        </p>

                        <a
                            href="cv.pdf"
                            download="cv.pdf"
                            className="
                                text-center
                                w-40 md:w-50
                                cursor-pointer
                                mt-5
                                bg-gradient-to-b from-[#8d49fd] via-[#7f56f3] to-[#5691f3]
                                text-white
                                font-medium
                                text-[15px]
                                rounded-[25px]
                                px-6 py-3
                                shadow-lg
                                shadow-indigo-500/50
                                hover:shadow-indigo-700/70
                                transition
                                transform
                                hover:scale-105
                                duration-300
                                relative
                                overflow-hidden
                                mx-auto md:mx-0
                              "
                        >
                            Download Cv
                            <span
                                className="
                                    absolute
                                    top-[-3px]
                                    left-1/2
                                    w-24
                                    h-1.5
                                    bg-[#e9d1ff]
                                    opacity-60
                                    blur-md
                                    rounded-full
                                    -translate-x-1/2
                                    pointer-events-none
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-80
                                "
                            />
                        </a>
                    </div>
                </div>

                {/* side right */}
                <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-delay="200">
                    <img
                        className="cursor-pointer w-80 md:w-120 border border-blue-500 rounded-3xl shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 transition-transform duration-300"
                        src={me}
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
}
