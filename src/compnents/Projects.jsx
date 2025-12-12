import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-[#e3f1f6] py-8 w-full flex flex-col items-center gap-10"
    >
      {/* العنوان */}
      <h2
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="300"
        className="text-4xl text-center font-bold text-gray-800 mb-6"
      >
        Projects & Case Studies
      </h2>

      {/* الحاوية باستخدام grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl px-4 sm:px-0 w-full"
      >
        {/* مشروع 1 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="200"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className=" w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img1}
            alt="project 1"
          />
          <h1 className="font-bold text-lg mb-2">
            Early Intervention: Case <br /> of "Eyad"
          </h1>
          <p className="text-gray-700">
            Eyad initially struggled with memory, focus, and attention, impacting his reading and writing.
          </p>
        </div>

        {/* مشروع 2 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="250"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img6}
            alt="project 2"
          />
          <h1 className="font-bold text-lg mb-2">
            Speech Therapy: Progress <br /> of "Hams"
          </h1>
          <p className="text-gray-700">
            Hams initially struggled with speech, a lisp on /s/, and stuttering, affecting her academics.
          </p>
        </div>

        {/* مشروع 3 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="300"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img8}
            alt="project 3"
          />
          <h1 className="font-bold text-lg mb-2">
            Language Development: Case <br /> of "Dalida"
          </h1>
          <p className="text-gray-700">
            Dalida struggled to produce clear sounds but has started saying her first words and is showing steady progress.
          </p>
        </div>

        {/* مشروع 4 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="350"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img5}
            alt="project 4"
          />
          <h1 className="font-bold text-lg mb-2">
            Autism Therapy: Case <br /> of "Basant"
          </h1>
          <p className="text-gray-700">
            Basant showed early signs of autism, but with therapy, these signs faded and she is making great progress.
          </p>
        </div>

        {/* مشروع 5 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="400"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img8}
            alt="project 5"
          />
          <h1 className="font-bold text-lg mb-2">
            Cognitive Therapy: Case <br /> of "Abdel Rahman"
          </h1>
          <p className="text-gray-700">
            Abdel Rahman struggled with cognition, attention, and memory, and could not hold a pencil. Therapy helped him improve these skills.
          </p>
        </div>

        {/* مشروع 6 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="450"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img7}
            alt="project 6"
          />
          <h1 className="font-bold text-lg mb-2">
            Speech & Behavior: Case <br /> of "Ahmed"
          </h1>
          <p className="text-gray-700">
            Ahmed struggled to pronounce the (R) sound and showed negative behaviors. Therapy helped correct his speech and improve behavior.
          </p>
        </div>

        {/* مشروع 7 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img4}
            alt="project 7"
          />
          <h1 className="font-bold text-lg mb-2">
            Learning Support: Case <br /> of "Almi"
          </h1>
          <p className="text-gray-700">
            Almi struggled with perception, attention, memory, and academics. Therapy helped her improve core skills and academic performance.
          </p>
        </div>

        {/* مشروع 8 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          data-aos-delay="550"
          className="flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <img
            className="w-60 h-80 object-cover cursor-pointer rounded-2xl mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
            src={img3}
            alt="project 8"
          />
          <h1 className="font-bold text-lg mb-2">
            Speech Therapy: Case <br /> of "Ahmed"
          </h1>
          <p className="text-gray-700">
            Ahmed struggled to speak clearly and could say only one word. Therapy helped him form clear and understandable sentences.
          </p>
        </div>
      </div>
    </div>
  );
}
