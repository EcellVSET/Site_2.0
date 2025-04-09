import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Cards = ({ teamData }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-4">
      {teamData.map((member, i) => (
        <div
          key={i}
          className="relative w-72 h-[350px] bg-cover bg-center rounded-xl overflow-hidden group shadow-xl"
          style={{ backgroundImage: `url(${member.image})` }}
          data-category={member.category} // Add as data attribute for potential CSS targeting
        >
          {/* Hover effect */}
          <span className="absolute w-[750px] h-[200px] bg-white opacity-90 z-10 top-[175%] left-[-78%] transition-all duration-300 ease-in-out group-hover:top-[60%]"></span>
          <span className="absolute w-[750px] h-[200px] bg-[#0f0803] z-20 top-[175%] left-[-78%] transition-all duration-300 ease-in-out group-hover:top-[60%] group-hover:translate-y-2"></span>

          {/* Text Content */}
          <h1 className="absolute top-2/3 left-[-100%] text-white text-lg font-semibold z-30 transition-all duration-700 group-hover:left-[8%]">
            {member.name}
          </h1>
          <p className="absolute top-[73%] left-[-145%] text-white text-base z-30 transition-all duration-700 group-hover:left-[8%]">
            {member.position}
          </p>

          {/* Social Icons */}
          <ul className="absolute top-[88%] left-6 z-40 flex gap-3">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl transform translate-y-[100px] transition-all duration-300 group-hover:translate-y-0"
              >
                <FaLinkedin />
              </a>
            )}
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl transform translate-y-[100px] transition-all duration-500 group-hover:translate-y-0"
              >
                <FaGithub />
              </a>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cards;