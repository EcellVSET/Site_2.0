import React, { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [randomOffsets, setRandomOffsets] = useState([]);
  const [imageRandomOffsets, setImageRandomOffsets] = useState([]);
  const heroRef = useRef(null);
  const animationRef = useRef(null);

  // Parallax Elements
  const parallaxElements = [
    {
      emoji: "💡",
      depth: 0.2,
      size: "text-5xl",
      initialX: "10%",
      initialY: "20%",
    },
    {
      emoji: "🚀",
      depth: 0.4,
      size: "text-6xl",
      initialX: "70%",
      initialY: "15%",
    },
    {
      emoji: "💼",
      depth: 0.3,
      size: "text-4xl",
      initialX: "25%",
      initialY: "65%",
    },
    {
      emoji: "📈",
      depth: 0.5,
      size: "text-7xl",
      initialX: "80%",
      initialY: "70%",
    },
    {
      emoji: "🤝",
      depth: 0.6,
      size: "text-5xl",
      initialX: "40%",
      initialY: "40%",
    },
    {
      emoji: "💰",
      depth: 0.3,
      size: "text-4xl",
      initialX: "15%",
      initialY: "85%",
    },
    {
      emoji: "🌐",
      depth: 0.2,
      size: "text-3xl",
      initialX: "85%",
      initialY: "40%",
    },
    {
      emoji: "🎓",
      depth: 0.5,
      size: "text-5xl",
      initialX: "60%",
      initialY: "30%",
    },
    {
      emoji: "📊",
      depth: 0.4,
      size: "text-6xl",
      initialX: "30%",
      initialY: "10%",
    },
    {
      emoji: "🔬",
      depth: 0.7,
      size: "text-7xl",
      initialX: "75%",
      initialY: "85%",
    },
    {
      emoji: "📝",
      depth: 0.2,
      size: "text-4xl",
      initialX: "5%",
      initialY: "50%",
    },
    {
      emoji: "🤖",
      depth: 0.5,
      size: "text-5xl",
      initialX: "90%",
      initialY: "20%",
    },
    {
      emoji: "🌟",
      depth: 0.3,
      size: "text-6xl",
      initialX: "20%",
      initialY: "10%",
    },
    {
      emoji: "📡",
      depth: 0.4,
      size: "text-5xl",
      initialX: "50%",
      initialY: "80%",
    },
    {
      emoji: "🔗",
      depth: 0.6,
      size: "text-4xl",
      initialX: "65%",
      initialY: "55%",
    },
    {
      emoji: "🏆",
      depth: 0.3,
      size: "text-7xl",
      initialX: "35%",
      initialY: "25%",
    },
    {
      emoji: "💡",
      depth: 0.2,
      size: "text-5xl",
      initialX: "85%",
      initialY: "65%",
    },
    {
      emoji: "🌍",
      depth: 0.5,
      size: "text-6xl",
      initialX: "15%",
      initialY: "70%",
    },
  ];

  const imageElements = [
    {
      src: "/placeholder.svg?height=200&width=200",
      depth: 0.3,
      initialX: "15%",
      initialY: "30%",
      size: 120,
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      depth: 0.5,
      initialX: "75%",
      initialY: "25%",
      size: 150,
    },
    {
      src: "/placeholder.svg?height=250&width=250",
      depth: 0.4,
      initialX: "60%",
      initialY: "60%",
      size: 100,
    },
    {
      src: "/placeholder.svg?height=180&width=180",
      depth: 0.2,
      initialX: "30%",
      initialY: "70%",
      size: 90,
    },
    {
      src: "/placeholder.svg?height=220&width=220",
      depth: 0.6,
      initialX: "80%",
      initialY: "80%",
      size: 110,
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      depth: 0.4,
      initialX: "40%",
      initialY: "20%",
      size: 100,
    },
  ];

  // Initialize random offsets
  useEffect(() => {
    setRandomOffsets(
      parallaxElements.map(() => ({
        x: 0,
        y: 0,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        amplitude: Math.random() * 10 + 5,
        phase: Math.random() * Math.PI * 2,
      }))
    );

    setImageRandomOffsets(
      imageElements.map(() => ({
        x: 0,
        y: 0,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        amplitude: Math.random() * 8 + 4,
        phase: Math.random() * Math.PI * 2,
      }))
    );
  }, []);

  // Update random movements
  useEffect(() => {
    let lastTime = 0;

    const updateRandomMovements = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      // Update emoji movements
      setRandomOffsets((prevOffsets) =>
        prevOffsets.map((offset) => {
          const newPhase = (offset.phase + deltaTime * 0.001) % (Math.PI * 2);
          return {
            ...offset,
            phase: newPhase,
            x: Math.sin(newPhase) * offset.amplitude,
            y: Math.cos(newPhase * 1.3) * offset.amplitude,
          };
        })
      );

      // Update image movements
      setImageRandomOffsets((prevOffsets) =>
        prevOffsets.map((offset) => {
          const newPhase = (offset.phase + deltaTime * 0.0005) % (Math.PI * 2);
          return {
            ...offset,
            phase: newPhase,
            x: Math.sin(newPhase) * offset.amplitude,
            y: Math.cos(newPhase * 1.5) * offset.amplitude,
          };
        })
      );

      animationRef.current = requestAnimationFrame(updateRandomMovements);
    };

    animationRef.current = requestAnimationFrame(updateRandomMovements);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const calculateParallax = (depth) => {
    const normalizedX = mousePosition.x / window.innerWidth - 0.5;
    const normalizedY = mousePosition.y / window.innerHeight - 0.5;
    const x = normalizedX * depth * 50;
    const y = normalizedY * depth * 50;
    const scrollY = scrollPosition * depth * 0.1;
    return { x, y, scrollY };
  };

  // Calculate knock effect
  const calculateKnockEffect = (
    elementX,
    elementY,
    knockRadius = 200,
    knockStrength = 100
  ) => {
    const posX = (Number.parseFloat(elementX) / 100) * window.innerWidth;
    const posY = (Number.parseFloat(elementY) / 100) * window.innerHeight;

    const dx = mousePosition.x - posX;
    const dy = mousePosition.y - posY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < knockRadius) {
      const force = ((knockRadius - distance) / knockRadius) * knockStrength;
      const dirX = dx / distance || 0;
      const dirY = dy / distance || 0;
      return {
        x: -dirX * force,
        y: -dirY * force,
      };
    }

    return { x: 0, y: 0 };
  };

  return (
    <div className="relative dark">
      <div
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15),transparent_70%)]"></div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

        {/* Typewriter Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="text-3xl md:text-7xl font-bold text-white tracking-wider">
            <span className="flex">
              <span>E</span>
              <Typewriter
                options={{
                  strings: ["ntrepreneurship"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay: 80,
                  deleteSpeed: 20,
                  pauseFor: 800,
                }}
              />
              <span>-CELL</span>
            </span>
          </div>
        </div>

        {/* Parallax Emoji Elements */}
        {parallaxElements.map((element, index) => {
          const { x, y, scrollY } = calculateParallax(element.depth);
          const knockEffect = calculateKnockEffect(
            element.initialX,
            element.initialY
          );
          const randomOffset = randomOffsets[index] || { x: 0, y: 0 };

          return (
            <div
              key={`emoji-${index}`}
              className={`absolute ${element.size} transition-all duration-300 ease-out opacity-30 blur-[1px] text-gray-500`}
              style={{
                left: element.initialX,
                top: element.initialY,
                transform: `translate(${
                  x + knockEffect.x + randomOffset.x
                }px, ${y - scrollY + knockEffect.y + randomOffset.y}px)`,
                zIndex: 0,
              }}
            >
              {element.emoji}
            </div>
          );
        })}

        {/* Parallax Image Elements */}
        {imageElements.map((image, index) => {
          const { x, y, scrollY } = calculateParallax(image.depth);
          const knockEffect = calculateKnockEffect(
            image.initialX,
            image.initialY,
            250,
            150
          );
          const randomOffset = imageRandomOffsets[index] || { x: 0, y: 0 };

          return (
            <div
              key={`image-${index}`}
              className="absolute rounded-full overflow-hidden transition-all duration-300 ease-out"
              style={{
                left: image.initialX,
                top: image.initialY,
                width: `${image.size}px`,
                height: `${image.size}px`,
                transform: `translate(${
                  x + knockEffect.x + randomOffset.x
                }px, ${y - scrollY + knockEffect.y + randomOffset.y}px)`,
                zIndex: 10,
                opacity: 0.7,
              }}
            >
              <img
                src={image.src}
                alt={`Parallax image ${index + 1}`}
                width={image.size}
                height={image.size}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

        {/* Mouse Cursor Effect */}
        <div
          className="fixed w-24 h-24 rounded-full pointer-events-none mix-blend-screen opacity-70 z-50"
          style={{
            background:
              "radial-gradient(circle, rgba(30,64,175,0.8) 0%, rgba(30,64,175,0.3) 50%, transparent 70%)",
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
