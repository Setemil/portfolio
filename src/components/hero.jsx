import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Code, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Web Designer",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);

    let typingTimeout;
    const currentRoleText = roles[currentRole];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      typingTimeout = setTimeout(() => {
        setTypedText((prev) => currentRoleText.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentRoleText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, currentRole]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <br />
        <br />
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <br />
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
            <span className="text-gray-300 text-lg font-medium tracking-wide">
              Hello, I'm
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Setemi Loye
          </h1>
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <span className="text-gray-400">I'm a </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500">
                {typedText}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through
            clean code, innovative design, and cutting-edge technologies. Let's
            build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center">
                View My Work
                <Code className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/5"
            >
              <span className="flex items-center text-gray-600">
                Get In Touch
                <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center text-gray-400 mb-12">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
