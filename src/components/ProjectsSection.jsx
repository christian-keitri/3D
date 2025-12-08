import { useRef, useEffect, useState, useMemo, memo } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SlShareAlt } from "react-icons/sl"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const ProjectsSection = memo(() => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const projectsRef = useRef(null)
  const starsRef = useRef([])
  const [hoveredProject, setHoveredProject] = useState(null)

  //Project images Data - memoized to prevent recreation on re-renders
  const projectImages = useMemo(() => [
    {
      id: 1,
      title: "Food Delivery App",
      imageSrc: "/images/project-5.png",
      link: "https://drive.google.com/uc?export=download&id=1nFwYyyWKRlbpIr0fPDoBVOs0e8nrNvWY",
      description: "A full-featured food delivery application with real-time tracking",
      tech: ["React", "Node.js", "MongoDB"],
      impact: "Real-time order tracking system",
      challenge: "Built scalable backend handling 1000+ concurrent orders"
    },
    {
      id: 2,
      title: "My PORTFOLIO",
      imageSrc: "/images/project-1.png",
      link: "https://storied-taiyaki-06f63f.netlify.app",
      description: "Modern portfolio website showcasing my projects and skills",
      tech: ["React", "GSAP", "TailwindCSS"],
      impact: "Showcasing professional work with 3D animations",
      challenge: "Optimized performance with lazy loading and code splitting"
    },
    {
      id: 3,
      title: "Think Board",
      imageSrc: "/images/project-2.png",
      link: "https://think-board-ene0.onrender.com/home",
      description: "Collaborative whiteboard application for team brainstorming",
      tech: ["React", "WebSocket", "Canvas API"],
      impact: "Real-time collaboration for remote teams",
      challenge: "Implemented WebSocket for seamless multi-user experience"
    },
    {
      id: 4,
      title: "Bob Ai Summarizer",
      imageSrc: "/images/project-3.png",
      link: "https://bob-ai-summarizer.vercel.app",
      description: "AI-powered text summarization tool using advanced NLP",
      tech: ["Next.js", "OpenAI", "TypeScript"],
      impact: "Efficient content processing with AI integration",
      challenge: "Optimized API calls and response handling for better UX"
    },
    {
      id: 5,
      title: "Netflix Clone",
      imageSrc: "/images/project-4.png",
      link: "https://netflix-clone-1-cgyh.onrender.com/",
      description: "Full-stack Netflix clone with video streaming capabilities",
      tech: ["React", "Firebase", "TMDB API"],
      impact: "Feature-rich streaming platform with user authentication",
      challenge: "Integrated Firebase for secure authentication and data management"
    },
  ], [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    )

    // Projects cards animation
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.querySelectorAll(".project-card"),
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.9,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      )
    }

    // Stars floating animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 0.5 + Math.random() * 0.5

      gsap.to(star, {
        x: `${direction * (80 + index * 10)}`,
        y: `${direction * -40 - index * 5}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      })

      // Twinkling
      gsap.to(star, {
        scale: 1.4,
        opacity: "+=0.3",
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        delay: index * 0.3,
        ease: "sine.inOut",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current || trigger.vars.trigger === projectsRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: "radial-gradient(circle, white 0%, rgba(255,255,255,0) 70%)",
              opacity: 0.3 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
        {/* Section title */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg"
          >
            Featured Projects
          </h2>
          <p className="text-purple-200/80 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center"
        >
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="project-card group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl border border-purple-600/30 
                  hover:bg-white/10 hover:border-purple-500/50 
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                  transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2
                  overflow-hidden cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 
                    group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />

                  {/* Image container */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      src={project.imageSrc}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {project.title}
                      </h3>
                      <FiExternalLink className="text-purple-400 text-xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    </div>

                    <p className="text-gray-300 text-sm md:text-base mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Impact & Challenge */}
                    {project.impact && (
                      <div className="mb-3 space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 text-xs mt-0.5">✓</span>
                          <p className="text-xs text-purple-200/80 leading-relaxed">
                            <span className="font-semibold text-purple-300">Impact:</span> {project.impact}
                          </p>
                        </div>
                        {project.challenge && (
                          <div className="flex items-start gap-2">
                            <span className="text-pink-400 text-xs mt-0.5">⚡</span>
                            <p className="text-xs text-purple-200/80 leading-relaxed">
                              <span className="font-semibold text-pink-300">Challenge:</span> {project.challenge}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-purple-900/40 text-purple-200 rounded-full
                            border border-purple-600/30 group-hover:bg-purple-800/50 
                            group-hover:border-purple-500/50 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View project button */}
                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium">View Project</span>
                      <SlShareAlt className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 
                    rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})



ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection

