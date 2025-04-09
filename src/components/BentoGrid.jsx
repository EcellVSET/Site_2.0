import React from "react";

// Events data remains the same
const events = [
  {
    id: 1,
    title: "Startup Summit 2024",
    description:
      "Annual conference bringing together entrepreneurs, investors, and industry leaders to share insights and explore new opportunities in the tech ecosystem.",
    date: "June 15-17, 2024",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Pitch Perfect",
    description:
      "A pitch competition where startups present their business ideas to a panel of judges for feedback, mentorship, and potential investment.",
    date: "August 8, 2024",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Innovation Workshop",
    description:
      "Hands-on workshop focusing on design thinking and rapid prototyping techniques to solve complex business challenges.",
    date: "September 22, 2024",
    image:
      "https://images.unsplash.com/photo-1529119513321-989c9af2abe0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Venture Capital Forum",
    description:
      "Exclusive networking event connecting promising startups with venture capitalists and angel investors seeking new investment opportunities.",
    date: "October 5, 2024",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Entrepreneurship Bootcamp",
    description:
      "Intensive training program designed to equip aspiring entrepreneurs with essential skills, strategies, and networking opportunities.",
    date: "November 12, 2024",
    image:
      "https://images.unsplash.com/photo-1661956602153-23384936295f?q=80&w=2070&auto=format&fit=crop",
  },
];

const BentroEvents = () => {
  return (
    <>
      <div className="pt-16 md:pt-20 pb-6 md:pb-10 text-white flex justify-center">
        <span className="animate-text font-outline-2 pb-6 md:pb-10 flex items-center justify-center bg-gradient-to-l from-gray-400 to-indigo-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black">
          Events
        </span>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Mobile view: Single column */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {events.map((event) => (
            <div key={event.id} className="h-[350px]">
              {renderEvent(event)}
            </div>
          ))}
        </div>

        {/* Tablet view: Two columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 auto-rows-[minmax(320px,auto)]">
          <div className="col-span-2">{renderEvent(events[0])}</div>
          <div className="col-span-1">{renderEvent(events[1])}</div>
          <div className="col-span-1">{renderEvent(events[2])}</div>
          <div className="col-span-1">{renderEvent(events[3])}</div>
          <div className="col-span-1">{renderEvent(events[4])}</div>
        </div>

        {/* Desktop view: Original bento grid layout */}
        <div className="hidden lg:grid grid-cols-6 gap-6 auto-rows-[minmax(400px,auto)]">
          {/* First row: Two tiles spanning 3 columns each */}
          <div className="col-span-3 row-span-1">{renderEvent(events[0])}</div>
          <div className="col-span-3 row-span-1">{renderEvent(events[1])}</div>

          {/* Second row: three tiles each spanning 2 columns */}
          <div className="col-span-2 row-span-1">{renderEvent(events[2])}</div>
          <div className="col-span-2 row-span-1">{renderEvent(events[3])}</div>
          <div className="col-span-2 row-span-1">{renderEvent(events[4])}</div>
        </div>
      </div>
    </>
  );

  // Render method for events
  function renderEvent(event) {
    return (
      <div
        key={event.id}
        className={`
          relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl border border-black/5 dark:border-white/5
          transition-all duration-500 ease-out hover:shadow-lg hover:scale-[1.02] group
          h-full w-full
        `}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-4 xs:p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/5 to-black/30 dark:from-transparent dark:via-black/30 dark:to-black/60">
          <div className="flex justify-between items-start">
            <span className="text-xs sm:text-sm font-medium px-2 py-1 bg-black/10 dark:bg-white/10 rounded-full backdrop-blur-sm text-black dark:text-white">
              {event.date}
            </span>
          </div>

          <div className="mt-auto space-y-2 sm:space-y-4">
            <h3
              className={`
                font-bold transition-transform duration-300 hover:scale-105 origin-bottom-left
                text-xl xs:text-2xl sm:text-3xl lg:text-4xl
                bg-gradient-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent
              `}
            >
              {event.title}
            </h3>

            <p className="text-xs xs:text-sm sm:text-base text-black/70 dark:text-white/70 line-clamp-3 
              md:opacity-0 md:translate-y-4 transition-all duration-300 
              md:group-hover:opacity-100 md:group-hover:translate-y-0">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default BentroEvents;