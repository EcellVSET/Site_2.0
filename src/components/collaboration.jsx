import React, { useState, useEffect } from "react";

// First set of logos (industry partners)
import Travell from "../assets/Travel.jpeg";
import ciena from "../assets/ciena-logo.png";
import finlatics from "../assets/finlatics-logo.png";
import lazer from "../assets/lazer-crazer-logo.png";

// Second set of logos (educational & institutional partners)
import nasscom from "../assets/nasscom-logo.png";
import thinkstreet from "../assets/thinkstreet.png";
import skillCircle from "../assets/skill-circle-logo.webp";
import topOnePercent from "../assets/top-one-percent-logo.webp";

const Collaboration = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Industry partners - first row
  const industryPartners = [
    { src: Travell, alt: "Travel Partner" },
    { src: ciena, alt: "Ciena" },
    { src: finlatics, alt: "Finlatics" },
    { src: lazer, alt: "Lazer Crazer" },
  ];

  // Educational & institutional partners - second row
  const institutionalPartners = [
    { src: nasscom, alt: "NASSCOM" },
    { src: thinkstreet, alt: "Think Street" },
    { src: skillCircle, alt: "Skill Circle" },
    { src: topOnePercent, alt: "Top One Percent" },
  ];

  // Detect when component is in viewport to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById("collaboration-section");
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div id="collaboration-section" className="py-16 md:py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="animate-text font-outline-2 inline-block bg-gradient-to-l from-gray-400 to-indigo-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Collaborations
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Working with leading industry & educational partners to fuel entrepreneurial growth
          </p>
        </div>

        {/* Logo Carousels Container */}
        <div className="space-y-12">
          {/* First Row: Industry Partners */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div className="overflow-hidden">
              <h3 className="text-indigo-300 text-lg font-medium mb-4 text-center">Industry Partners</h3>
              <div className={`flex space-x-8 sm:space-x-12 md:space-x-16 ${isVisible ? 'animate-scroll-right hover:pause-animation' : ''}`}>
                {/* Duplicate logos for infinite scrolling effect */}
                {[...industryPartners, ...industryPartners, ...industryPartners].map((logo, index) => (
                  <div
                    key={`industry-${index}`}
                    className="flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 sm:p-4 hover:from-indigo-900 hover:to-purple-900 transition-all duration-300 border border-gray-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                  >
                    <div className="bg-white bg-opacity-5 rounded-lg w-32 sm:w-40 md:w-48 h-16 sm:h-20 flex items-center justify-center p-3 backdrop-blur-sm group-hover:bg-opacity-10 transition-all duration-300">
                      <img
                        loading="lazy"
                        src={logo.src}
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                        alt={logo.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row: Educational & Institutional Partners */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div className="overflow-hidden">
              <h3 className="text-indigo-300 text-lg font-medium mb-4 text-center">Educational & Institutional Partners</h3>
              <div className={`flex space-x-8 sm:space-x-12 md:space-x-16 ${isVisible ? 'animate-scroll-left hover:pause-animation' : ''}`}>
                {/* Duplicate logos for infinite scrolling effect */}
                {[...institutionalPartners, ...institutionalPartners, ...institutionalPartners].map((logo, index) => (
                  <div
                    key={`edu-${index}`}
                    className="flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 sm:p-4 hover:from-purple-900 hover:to-indigo-900 transition-all duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 group"
                  >
                    <div className="bg-white bg-opacity-5 rounded-lg w-32 sm:w-40 md:w-48 h-16 sm:h-20 flex items-center justify-center p-3 backdrop-blur-sm group-hover:bg-opacity-10 transition-all duration-300">
                      <img
                        loading="lazy"
                        src={logo.src}
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                        alt={logo.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;