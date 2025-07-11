import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Github, Linkedin, Mail, MapPin, Code, Sparkles } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const greetingRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const locationRef = useRef(null);
  const sparklesRef = useRef(null);
  const backgroundRef = useRef(null);

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Web Designer",
    "Problem Solver",
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          nameRef.current,
          greetingRef.current,
          roleRef.current,
          descriptionRef.current,
          buttonsRef.current,
          locationRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Create master timeline
      const masterTl = gsap.timeline();

      // Sparkles floating animation
      gsap.to(sparklesRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Background gradient animation
      gsap.to(backgroundRef.current, {
        backgroundColor: "#1f2937", // Start with this color
        duration: 0.1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { duration: 4, ease: "power1.inOut" },
      });

      tl.to(backgroundRef.current, { backgroundColor: "#111827" })
        .to(backgroundRef.current, { backgroundColor: "#0f172a" })
        .to(backgroundRef.current, { backgroundColor: "#1f2937" });

      // Main entrance animation sequence
      masterTl
        .to(greetingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          nameRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          roleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          locationRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Name text reveal animation
      gsap.fromTo(
        nameRef.current,
        {
          backgroundPosition: "0% 50%",
        },
        {
          backgroundPosition: "100% 50%",
          duration: 3,
          ease: "none",
          repeat: -1,
          yoyo: true,
        }
      );

      // Floating animation for the entire hero content
      gsap.to(".hero-content", {
        y: -5,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    setIsVisible(true);
    return () => ctx.revert();
  }, []);

  // Enhanced button hover animations
  useEffect(() => {
    const buttons = buttonsRef.current?.querySelectorAll("button");

    buttons?.forEach((button) => {
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });

        // Add glow effect
        gsap.to(button, {
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(button, {
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  // Enhanced typing animation with GSAP
  useEffect(() => {
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
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);

      // Add a subtle scale animation when changing roles
      gsap.fromTo(
        roleRef.current,
        { scale: 0.95 },
        { scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, currentRole]);

  // Magnetic effect for buttons
  const handleMouseMove = (e, buttonRef) => {
    const rect = buttonRef.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef, {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (buttonRef) => {
    gsap.to(buttonRef, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0"
        style={{ backgroundColor: "#1f2937" }}
      />

      <div className="hero-content relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <br />
        <br />

        {/* Main Content */}
        <div className="space-y-6">
          <br />

          {/* Greeting */}
          <div
            ref={greetingRef}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles
              ref={sparklesRef}
              className="w-6 h-6 text-yellow-400 mr-2"
            />
            <span className="text-gray-300 text-lg font-medium tracking-wide">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1
            ref={nameRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(45deg, #ffffff, #60a5fa, #a855f7, #ffffff)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Setemi Loye
          </h1>

          {/* Role with typing effect */}
          <div
            ref={roleRef}
            className="mb-8 h-16 flex items-center justify-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <span className="text-gray-400">I'm a </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500">
                {typedText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Passionate about creating exceptional digital experiences through
            clean code, innovative design, and cutting-edge technologies. Let's
            build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection("projects")}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center">
                View My Work
                <Code className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="group border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:bg-white/5"
            >
              <span className="flex items-center">
                Get In Touch
                <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Location */}
          <div
            ref={locationRef}
            className="flex items-center justify-center text-gray-400 mb-12"
          >
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
