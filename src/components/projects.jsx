import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Calendar } from "lucide-react";
import career from "../assets/career.png";
import portfolio from "../assets/portfolio.png";
import desk from "../assets/desk.png";
import votr from "../assets/VOTR.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsGridRef = useRef(null);
  const ctaRef = useRef(null);

  // Sample project data (replace with your actual data)
  const projects = [
    {
      id: 1,
      title: "Tech-Career Guidance Platform",
      description:
        "A full-stack guidance solution built with HTML, javaScript, and PHP. Features include user authentication, admin dashboard and Individual course roadmap display",
      image: career,
      technologies: ["HTML", "CSS", "PHP", "JavaScript"],
      githubUrl: "https://github.com/Setemil/Tech-Career-Guidance-site",
      date: "2025",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills with smooth animations and interactive elements.",
      image: portfolio,
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/Setemil/portfolio",
      date: "2024",
    },
    {
      id: 3,
      title: "Desk.io",
      description:
        "A collaborative class management application with real-time updates, drag-and-drop functionality, and class management capabilities.",
      image: desk,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/setemil/desk.io",
      liveUrl: "https://taskapp-demo.com",
      date: "2024",
    },
    {
      id: 4,
      title: "VOTR",
      description:
        "Votr is a dynamic platform that lets users effortlessly create and share interactive polls, surveys, and quizzes to gather feedback, test knowledge, or spark engagement — all in one place.",
      image: votr,
      technologies: ["React", "MongoDB", "Tailwind CSS", "Express JS"],
      githubUrl: "https://github.com/setemil/VOTR.io",
      liveUrl: "https://taskapp-demo.com",
      date: "2025",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(
        ".projects-header",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Project cards staggered animation
      gsap.fromTo(
        ".project-card",
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotateY: 15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: {
            amount: 0.6,
            from: "start",
          },
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        ".projects-cta",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Technology tags staggered animation
      gsap.fromTo(
        ".tech-tag",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: {
            amount: 0.3,
            from: "start",
          },
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Add hover animations for individual cards
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const image = card.querySelector(".project-image");
      const overlay = card.querySelector(".project-overlay");
      const buttons = card.querySelectorAll(".project-button");

      // Mouse enter animation
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -20,
          scale: 1.05,
          rotateY: 5,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(image, {
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
        });

        gsap.to(buttons, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        });
      };

      // Mouse leave animation
      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });

        gsap.to(buttons, {
          y: 10,
          opacity: 0.8,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 bg-gray-900 min-h-screen"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="projects-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text ">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web
            development, from full-stack applications to interactive user
            interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 cursor-pointer perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0"></div>
              </div>

              {/* Project Content */}
              <div className="project-content p-6">
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
                      className="tech-tag px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="project-button flex items-center justify-center flex-1 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200 text-sm font-medium transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="project-button flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200 text-sm font-medium transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="projects-cta text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200 font-medium transform hover:scale-105 hover:shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
