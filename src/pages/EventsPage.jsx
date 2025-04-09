import React, { useState, useEffect } from 'react';
// import { motion } from 'react-motion';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const EventsPage = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  
  const events = [
    {
      id: 1,
      title: "Innovation Mela",
      description: "Had a wonderful experience with the CIENA SPACES an initiative by the NASSCOM FOUNDATION. Join us in congratulating this talented entrepreneur and stay tuned for more updates on their innovative solutions for mental wellness!💯💯",
      date: "14th March 2023",
      image: "/imgs/events/innovationmela.png"
    },
    {
      id: 2,
      title: "PITCH.itUP @VIPS",
      description: "We at E&D Cell, value your creative ideas and hence, are welcoming you and your idea to be presented in front of our esteemed judge panel and gain expert advice.",
      date: "27th April 2023",
      image: "/imgs/events/pitchitup.png"
    },
    {
      id: 3,
      title: "IGNITE SIG",
      description: "Unveiling the Magic of SIGs: Ever wondered what SIGs are all about? SIGs, or Students Interest Groups, are like portals to a world where passion meets purpose. Organized by the E-Cell of VIPS-TC.",
      date: "20th February 2024",
      image: "/imgs/events/ignitesig.png"
    },
    {
      id: 4,
      title: "IDEATHON",
      description: "🕵️‍♂️ Dive into the mystery of innovation at IDEATHON by Ciena Spaces, NASSCOM Foundation, and ECELL! 🚀",
      date: "6th March 2024",
      image: "/imgs/events/ideathon.png"
    }
  ];

  // Animation for cards when they appear
  const useInView = (options) => {
    const [ref, setRef] = useState(null);
    const [isInView, setInView] = useState(false);

    useEffect(() => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting);
      }, options);
      
      observer.observe(ref);
      
      return () => {
        observer.disconnect();
      };
    }, [ref, options]);

    return [setRef, isInView];
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation would go here */}
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-6">
            EVENTS
          </h1>
          <div className="h-1 w-32 bg-blue-500/70 rounded-full mb-12"></div>
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDA3NEQzIi8+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgZmlsbD0iIzAwNzREMyIvPjwvZz48L3N2Zz4=')]"></div>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="relative px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {events.map((event, index) => {
              const [ref, isInView] = useInView({ threshold: 0.2 });
              
              return (
                <div 
                  key={event.id}
                  ref={ref}
                  className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                >
                  <div 
                    className={`group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-gray-900 to-black p-1 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 ${activeEvent === event.id ? 'scale-105' : ''}`}
                    onMouseEnter={() => setActiveEvent(event.id)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex flex-col md:flex-row overflow-hidden rounded-xl">
                      {/* Image Section - Responsive */}
                      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${event.image || "/api/placeholder/600/400"})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between relative z-10">
                        <div>
                          <div className="flex items-center mb-3">
                            <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-300 text-sm">{event.date}</span>
                          </div>
                          
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                            {event.title}
                          </h2>
                          
                          <p className="text-gray-300 mb-6 line-clamp-3 md:line-clamp-none">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;