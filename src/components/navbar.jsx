import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Code } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "languages", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#languages", id: "languages" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Animation */}
          <div className="flex-shrink-0 group">
            <a
              href="#home"
              className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Setemi
                </span>
                <span className="text-white font-light">.dev</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                      activeSection === item.id ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  ></span>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links with Enhanced Animations */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-700/50">
              <a
                href="https://github.com/Setemil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Github
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </a>
              <a
                href="https://linkedin.com/in/setemi-loye-234527353"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </a>
              <a
                href="mailto:setemiloye@gmail.com"
                className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Mail
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-gray-300 hover:text-white rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu with Enhanced Animation */}
      <div
        className={`md:hidden transition-all duration-500 ease-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-gray-900/98 backdrop-blur-xl border-t border-gray-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen
                    ? "slideInFromRight 0.4s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-purple-600 transition-all duration-300 ${
                      activeSection === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                  <span>{item.name}</span>
                </div>
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="pt-6 mt-6 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm mb-4 text-center">
                Connect with me
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://github.com/Setemil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Github
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/setemi-loye-234527353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-blue-400 bg-gray-800/50 hover:bg-blue-500/10 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
                <a
                  href="mailto:setemiloye@example.com"
                  className="p-3 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-green-500/10 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Mail
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
