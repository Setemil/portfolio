import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import vuwLogo from "../assets/vue.svg";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/CSS.png";
import jsLogo from "../assets/js.png";
import phpLogo from "../assets/web.png";
import sqlLogo from "../assets/mysql.png";
import gitLogo from "../assets/social.png";
import firebaseLogo from "../assets/firebase.svg";
import bootstrapLogo from "../assets/bootstrap.png";
import tailwindLogo from "../assets/tailwind.svg";
import MongoLogo from "../assets/mongo.svg";
import ExpressLogo from "../assets/Express.svg";
import nodeLogo from "../assets/node-js.png";

const Languages = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      name: "HTML",
      logo: htmlLogo,
      category: "Frontend",
      description: "Semantic markup and modern HTML5 features",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      logo: cssLogo,
      category: "Frontend",
      description: "Modern CSS3, animations, and responsive design",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      logo: jsLogo,
      category: "Frontend",
      description: "ES6+, DOM manipulation, and async programming",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Vue JS",
      logo: vuwLogo,
      category: "Frontend",
      description: "Progressive JavaScript Framework",
      color: "from-green-300 to-grey-500",
    },
    {
      name: "React",
      logo: reactLogo,
      category: "Frontend",
      description: "Component-based UI development and hooks",
      color: "from-cyan-400 to-blue-600",
    },
    {
      name: "PHP",
      logo: phpLogo,
      category: "Backend",
      description: "Server-side scripting and web development",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "MySQL",
      logo: sqlLogo,
      category: "Database",
      description: "Relational database design and optimization",
      color: "from-blue-600 to-indigo-700",
    },
    {
      name: "Git",
      logo: gitLogo,
      category: "Tools",
      description: "Version control and collaborative development",
      color: "from-orange-400 to-pink-500",
    },
    {
      name: "Firebase",
      logo: firebaseLogo,
      category: "Database",
      description: "Real-time database and authentication",
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Bootstrap",
      logo: bootstrapLogo,
      category: "Frontend",
      description: "Responsive design framework",
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "Tailwind CSS",
      logo: tailwindLogo,
      category: "Frontend",
      description: "Utility-first CSS framework",
      color: "from-teal-400 to-cyan-600",
    },
    {
      name: "Node.Js",
      logo: nodeLogo,
      category: "Backend",
      description: "Javascript Development Environment",
      color: "from-green-800 to-green-600",
    },
    {
      name: "Mongo DB",
      logo: MongoLogo,
      category: "Database",
      description: "Cloud Database",
      color: "from-green-400 to-teal-600",
    },
    {
      name: "Express JS",
      logo: ExpressLogo,
      category: "Backend",
      description: "Javascript Library for backend development",
      color: "from-gray-600 to-gray-400",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section
      id="languages"
      className="min-h-screen w-full px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-6">
              Tech Stack
            </h2>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the technologies and tools I use to bring ideas to life.
            Each technology represents countless hours of learning and building.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 text-gray-600 hover:bg-gray-700 border border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl ${tech.color}`}
                ></div>

                {/* Tech Logo */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Tech Name */}
                  <h3 className="text-white font-semibold text-center mb-2">
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <span
                    className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${tech.color} text-white font-medium`}
                  >
                    {tech.category}
                  </span>
                </div>

                {/* Hover Tooltip */}
                {hoveredTech === tech.name && (
                  <div className="absolute -top-14 md:left-1/2 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 opacity-0 animate-fadeIn">
                    {tech.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Technical Expertise
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              I possess a robust foundation in modern web technologies, from
              crafting responsive user interfaces with HTML, CSS, and JavaScript
              to building dynamic applications with React. My backend experience
              includes PHP for server-side development, while I leverage MySQL
              and Firebase for efficient data management. Git ensures seamless
              version control across all my projects.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Continuous Evolution
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Technology never stops evolving, and neither do I. I'm
                constantly learning new frameworks, exploring emerging
                technologies, and refining my craft to stay at the forefront of
                web development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Languages;
