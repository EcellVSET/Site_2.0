import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import teamPic from "../assets/team_ecell.jpeg";

export const Aboutus = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <span className="animate-text font-outline-2 pb-6 md:pb-10 flex items-center justify-center bg-gradient-to-l from-gray-400 to-indigo-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black">
          About Us
        </span>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <img
                src={teamPic}
                alt="ED Cell Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-900/50 p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat border-l-4 border-blue-400 pl-4">
              Entrepreneurship Cell VIPS
            </h2>

            <div className="space-y-6 text-gray-200 font-montserrat">
              <p className="text-lg leading-relaxed">
                Welcome to the Entrepreneurship Cell (E Cell) of VIPS! We are a
                group of passionate individuals dedicated to promoting
                entrepreneurship and fostering innovation among students.
              </p>

              <p className="text-lg leading-relaxed">
                Our mission is to provide resources, mentorship, and networking
                opportunities to aspiring entrepreneurs. Whether you have a
                startup idea or are simply curious about entrepreneurship, E
                Cell VIPS is here to support you.
              </p>

              <p className="text-lg leading-relaxed">
                Feel free to explore our website and learn more about our
                initiatives, events, and team members.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                Connect With Us
              </h3>
              <Logos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Logos() {
  return (
    <div className="flex gap-6 text-white">
      <a
        href="https://www.linkedin.com/company/e-cell-vips-tc/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors duration-300"
      >
        <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300">
          <FaLinkedin className="text-2xl" />
        </div>
        <h1 className="text-sm">LinkedIn</h1>
      </a>

      <a
        href="https://www.instagram.com/ecell.vips/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 hover:text-pink-400 transition-colors duration-300"
      >
        <div className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-colors duration-300">
          <FaInstagram className="text-2xl" />
        </div>
        <h1 className="text-sm">Instagram</h1>
      </a>

      <a
        href="mailto:edcell@vips.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 hover:text-green-400 transition-colors duration-300"
      >
        <div className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-colors duration-300">
          <GrMailOption className="text-2xl" />
        </div>
        <h1 className="text-sm">Mail</h1>
      </a>
    </div>
  );
}
