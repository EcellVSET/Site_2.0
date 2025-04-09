import React, { useEffect } from "react";
import Cards from "../components/cards";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const membersData = [
  // Faculty Heads
  {
    name: "Dr. Jane Smith",
    position: "Faculty Advisor",
    category: "Faculty Heads",
    image: "./imgs/faculty/jane-smith.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/janesmith/",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Prof. John Doe",
    position: "Faculty Coordinator",
    category: "Faculty Heads",
    image: "./imgs/faculty/john-doe.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/johndoe/",
      github: "https://github.com/johndoe",
    },
  },
  
  // Club Authorities
  {
    name: "Suhani Singhal",
    position: "President",
    category: "Authorities",
    image: "./imgs/heads/Suhani Singhal.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/suhanisinghal274/",
      github: "https://github.com/suhanisinghal274",
    },
  },
  {
    name: "Akanksha Sharma",
    position: "Vice President",
    category: "Authorities",
    image: "./imgs/heads/Akanksha Sharma (2).jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/akanksha-sharma-838214272/",
      github: "https://github.com/Akankshas1102",
    },
  },
  {
    name: "Ujjwal Sharma",
    position: "Secretary",
    category: "Authorities",
    image: "./imgs/heads/Ujjwal Sharma.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ujjwalsharma/",
      github: "https://github.com/UjjwalSharma01",
    },
  },
  
  // Department Heads
  {
    name: "Lakshay Jain",
    position: "Head of Marketing",
    category: "Heads",
    image: "./imgs/members/Lakshay Jain.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/lakshayjain/",
      github: "https://github.com/Kartik14th",
    },
  },
  {
    name: "Rahul Kumar",
    position: "Technical Head",
    category: "Heads",
    image: "./imgs/heads/rahul-kumar.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/rahulkumar/",
      github: "https://github.com/rahulkumar",
    },
  },
  {
    name: "Priya Verma",
    position: "Design Head",
    category: "Heads",
    image: "./imgs/heads/priya-verma.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/priyaverma/",
      github: "https://github.com/priyaverma",
    },
  },
  
  // Regular Members
  {
    name: "Amit Singh",
    position: "Web Developer",
    category: "Members",
    image: "./imgs/members/amit-singh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/amitsingh/",
      github: "https://github.com/amitsingh",
    },
  },
  {
    name: "Neha Gupta",
    position: "UI/UX Designer",
    category: "Members",
    image: "./imgs/members/neha-gupta.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/nehagupta/",
      github: "https://github.com/nehagupta",
    },
  },
  // Add more members as needed...
];

export default function MembersPage() {
  // Organize members by category
  const groupedMembers = membersData.reduce((acc, member) => {
    const category = member.category || "Others";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(member);
    return acc;
  }, {});

  // Define the display order of categories
  const categoryOrder = ["Faculty Heads", "Authorities", "Heads", "Members", "Others"];
  
  // Sort the grouped members object by the predefined order
  const sortedCategories = Object.keys(groupedMembers).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  // Cursor follower effect
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
    <>
      {/* Cursor Effects */}
      <div className="cursorFollower fixed w-14 h-14 bg-black/30 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="cursorFollowerDot fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-6">
            MEMBERS
          </h1>
          <div className="h-1 w-32 bg-blue-500/70 rounded-full mb-12"></div>
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDA3NEQzIi8+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgZmlsbD0iIzAwNzREMyIvPjwvZz48L3N2Zz4=')]"></div>
          </div>
        </div>
      </section>

      {/* Members Grid organized by categories */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {sortedCategories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl text-white font-bold mb-8 relative">
              {category}
              <div className="h-1 w-24 bg-blue-500/70 rounded-full mt-2"></div>
            </h2>
            
            {/* Using the Cards component for each category */}
            <Cards teamData={groupedMembers[category]} />
          </div>
        ))}
      </div>
    </>
  );
}