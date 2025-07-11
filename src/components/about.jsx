import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from '../assets/portrait.jpg'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphsRef = useRef([]);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef([]);
  const gradientBlobsRef = useRef([]);

  // Demo data since we don't have the actual assets
  const myPortrait = portrait;
  const cv = "#";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          ...paragraphsRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
      });

      gsap.set(particlesRef.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(gradientBlobsRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate gradient blobs first
      tl.to(gradientBlobsRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      })

        // Animate title with split text effect
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        )

        // Animate subtitle line
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            width: "5rem",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )

        // Animate paragraphs with stagger
        .to(
          paragraphsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
          },
          "-=0.3"
        )

        // Animate image with 3D effect
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )

        // Animate button
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )

        // Animate particles
        .to(
          particlesRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
          "-=0.3"
        );

      // Continuous animations
      gsap.to(gradientBlobsRef.current[0], {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(gradientBlobsRef.current[1], {
        rotation: -360,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Particle floating animations
      particlesRef.current.forEach((particle, index) => {
        gsap.to(particle, {
          y: -20,
          x: index % 2 === 0 ? 10 : -10,
          duration: 2 + index * 0.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        });
      });

      // Parallax effect for background elements
      gsap.to(gradientBlobsRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text highlight on hover
      const handleMouseEnter = () => {
        gsap.to(titleRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(titleRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      if (titleRef.current) {
        titleRef.current.addEventListener("mouseenter", handleMouseEnter);
        titleRef.current.addEventListener("mouseleave", handleMouseLeave);
      }

      // Cleanup function
      return () => {
        if (titleRef.current) {
          titleRef.current.removeEventListener("mouseenter", handleMouseEnter);
          titleRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-900 overflow-hidden"
      id="about"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      <div
        ref={(el) => (gradientBlobsRef.current[0] = el)}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      ></div>
      <div
        ref={(el) => (gradientBlobsRef.current[1] = el)}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      ></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight cursor-pointer"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Loye Oluwasetemi
                </span>
              </h2>

              <div
                ref={subtitleRef}
                className="w-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
              ></div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p
                ref={(el) => (paragraphsRef.current[0] = el)}
                className="text-xl"
              >
                Welcome to my digital space where creativity meets
                functionality.
              </p>
              <p ref={(el) => (paragraphsRef.current[1] = el)}>
                I'm a passionate developer who transforms ideas into elegant
                digital experiences. With a keen eye for design and a love for
                clean code, I craft solutions that not only work flawlessly but
                also inspire and engage users.
              </p>
              <p ref={(el) => (paragraphsRef.current[2] = el)}>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                ref={buttonRef}
                className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-500 font-semibold rounded-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300 hover:bg-purple-400/5 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
              >
                <a href={cv} target="_blank" rel="noopener noreferrer">
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
              <div
                ref={imageRef}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-3xl border border-gray-700/50 transform-gpu"
              >
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
              <div
                ref={(el) => (particlesRef.current[0] = el)}
                className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-full blur-sm"
              ></div>
              <div
                ref={(el) => (particlesRef.current[1] = el)}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div
        ref={(el) => (particlesRef.current[2] = el)}
        className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full"
      ></div>
      <div
        ref={(el) => (particlesRef.current[3] = el)}
        className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full"
      ></div>
      <div
        ref={(el) => (particlesRef.current[4] = el)}
        className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full"
      ></div>
    </section>
  );
};

export default About;
