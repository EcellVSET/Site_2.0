import Travell from "../assets/Travel.jpeg";
import ciena from "../assets/ciena-logo.png";
import finlatics from "../assets/finlatics-logo.png";
import lazer from "../assets/lazer-crazer-logo.png";
import nasscom from "../assets/nasscom-logo.png";
import thinkstreet from "../assets/thinkstreet.png";
import skillCircle from "../assets/skill-circle-logo.webp";
import topOnePercent from "../assets/top-one-percent-logo.webp";

const Colaboraton = () => {
  const logos = [
    Travell, ciena, finlatics, lazer, nasscom, 
    thinkstreet, skillCircle, topOnePercent
  ];

  return (
    <div>
      <div className="pt-20 pb-10 text-white flex justify-center">
        <span className="animate-text font-outline-2 pb-10 flex items-center justify-center bg-gradient-to-l from-gray-700 to-indigo-600 bg-clip-text text-transparent text-6xl font-black">
          Skills
        </span>
      </div>
      <div className="flex overflow-hidden space-x-16 group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {[1, 2].map((_, index) => (
          <div 
            key={index}
            className="flex space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden={index === 1 ? "true" : "false"}
          >
            {logos.map((logo, logoIndex) => (
              <div 
                key={`${index}-${logoIndex}`} 
                className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center"
              >
                <img 
                  loading="lazy" 
                  src={logo} 
                  className="max-w-none h-20 w-auto object-contain" 
                  alt={`Logo ${logoIndex + 1}`} 
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colaboraton;