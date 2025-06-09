import React from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import portfolioPic from "../assets/portfolio.png";
import deskPic from "../assets/desk.png";
import careerPic from "../assets/career.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tech-Career Guidance Platform",
      description:
        "A full-stack guidance solution built with HTML, javaScript, and PHP. Features include user authentication, admin dashboard and Individual course roadmap display",
      image: careerPic,
      technologies: ["HTML", "CSS", "PHP", "JavaScript"],
      githubUrl: "https://github.com/Setemil/Tech-Career-Guidance-site",
      date: "2025",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills with smooth animations and interactive elements.",
      image: portfolioPic,
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/Setemil/portfolio",
      date: "2024",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current conditions, forecasts, and weather maps with location-based services.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/username/weather",
      date: "2023",
    },
    {
      id: 4,
      title: "Class Management App",
      description:
        "A collaborative class management application with real-time updates, drag-and-drop functionality, and class management capabilities.",
      image: deskPic,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/username/taskapp",
      liveUrl: "https://taskapp-demo.com",
      date: "2024",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 min-h-screen" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web
            development, from full-stack applications to interactive user
            interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Date */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
