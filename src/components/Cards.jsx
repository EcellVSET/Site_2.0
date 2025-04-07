import React, { useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Cards = () => {
  const teamData = [
    {
      name: 'Akanksha Sharma',
      position: 'Vice President',
      image: './imgs/heads/Akanksha Sharma.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/akanksha-sharma-838214272/',
        github: 'https://github.com/Akankshas1102',
      },
    },
    {
      name: 'Suhani Singhal',
      position: 'President',
      image: './imgs/heads/Suhani Singhal.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/suhanisinghal274/',
        github: 'https://github.com/suhanisinghal274',
      },
    },
    // Add more team members as needed
  ];

  useEffect(() => {
    let xp = 0,
      yp = 0,
      xpDot = 0,
      ypDot = 0,
      mouseX = 0,
      mouseY = 0;

    const cursorFollower = document.querySelector('.cursorFollower');
    const cursorFollowerDot = document.querySelector('.cursorFollowerDot');

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interval1 = setInterval(() => {
      xp += (mouseX - xp) / 15;
      yp += (mouseY - yp) / 15;
      if (cursorFollower) {
        cursorFollower.style.left = xp + 'px';
        cursorFollower.style.top = yp + 'px';
      }
    }, 20);

    const interval2 = setInterval(() => {
      xpDot += (mouseX - xpDot) / 25;
      ypDot += (mouseY - ypDot) / 25;
      if (cursorFollowerDot) {
        cursorFollowerDot.style.left = xpDot + 'px';
        cursorFollowerDot.style.top = ypDot + 'px';
      }
    }, 20);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Cursor Effects */}
      <div className="cursorFollower fixed w-14 h-14 bg-black/30 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="cursorFollowerDot fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Card Layout */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-12">
        {teamData.map((member, i) => (
          <div
            key={i}
            className="relative w-72 h-[350px] bg-cover bg-center rounded-xl overflow-hidden group shadow-xl"
            style={{ backgroundImage: `url(${member.image})` }}
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
    </div>
  );
};

export default Cards;