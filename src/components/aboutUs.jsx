import { FaInstagram, FaLinkedin } from "react-icons/fa6"
import { GrMailOption } from "react-icons/gr"
import teamPic from "../assets/team_ecell.jpeg"

export const Aboutus = () => {
    return <div>
      <div className="flex flex-row max-w-max mx-auto p-5 bg-black shadow-md">
        <img src={teamPic} alt="ED Cell Team" width="960px" height="600px" />
        <div className="p-4 flex flex-col items-center">
          <div className="text-white font-montserrat text-[30px] mb-5">About Us</div>
          <p className="text-white font-montserrat text-[20px] leading-[1.6] mb-4">Welcome to the Entrepreneurship Cell (E Cell) of VIPS! We are a group of passionate individuals dedicated to promoting entrepreneurship and fostering innovation among students.</p>
          <p className="text-white font-montserrat text-[20px] leading-[1.6] mb-4">Our mission is to provide resources, mentorship, and networking opportunities to aspiring entrepreneurs. Whether you have a startup idea or are simply curious about entrepreneurship, E Cell VIPS is here to support you.</p>
          <p className="text-white font-montserrat text-[20px] leading-[1.6] mb-4">Feel free to explore our website and learn more about our initiatives, events, and team members.</p>
          <p className="text-white font-montserrat text-[20px] leading-[1.6] mb-4">Contact us at:</p>
            <Logos />
        </div>
      </div>
    </div>
}

function Logos(){
    return <div className="flex gap-5 mt-5 text-white">
    <a
      href="https://www.linkedin.com/company/e-cell-vips-tc/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <FaLinkedin className="md:text-3xl text-2xl" />
      <h1 className="text-sm">LinkedIn</h1>
    </a>
    <a
      href="https://www.instagram.com/ecell.vips/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <FaInstagram className="md:text-3xl text-2xl" />
      <h1 className="text-sm">Instagram</h1>
    </a>
    <a
      href="mailto:edcell@vips.edu"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <GrMailOption className="md:text-3xl text-2xl" />
      <h1 className="text-sm">Mail</h1>
    </a>
  </div>
}