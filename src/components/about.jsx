import myPortrait from "../assets/portrait.jpg";
import cv from "../assets/Setemi_CV.pdf";
import React from "react";

const About = () => {
  return (
    <section
      className="relative min-h-screen bg-gray-900 overflow-hidden"
      id="about"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Loye Oluwasetemi
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-xl">
                Welcome to my digital space where creativity meets
                functionality.
              </p>
              <p>
                I'm a passionate developer who transforms ideas into elegant
                digital experiences. With a keen eye for design and a love for
                clean code, I craft solutions that not only work flawlessly but
                also inspire and engage users.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-500 font-semibold rounded-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300 hover:bg-purple-400/5">
                <a href={cv} target="_blank">
                  Download CV
                </a>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Animated border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-3xl border border-gray-700/50">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={myPortrait}
                    alt="Setemi Loye"
                    className="w-full max-w-sm h-auto object-cover transition-all duration-500 hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-full blur-sm animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
    </section>
  );
};

export default About;
