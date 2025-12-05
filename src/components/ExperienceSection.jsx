import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaReact, FaDocker, FaNodeJs, FaGitAlt, FaChevronDown, FaChevronUp, FaFileDownload } from "react-icons/fa"
import { SiTypescript, SiPrisma, SiTailwindcss, SiFlutter, SiFastapi, SiNextdotjs, SiSvelte, SiPython, SiFigma, SiN8N } from "react-icons/si"
import { FiMoreHorizontal } from "react-icons/fi"

const experiences = [
  {
    year: "2025 (March) - Present",
    role: "Full-Stack Developer",
    company: "Keitri Software Solutions",
    details:
      "Building scalable web & mobile apps using React, Flutter, and FastAPI.",
    achievements: [
      "Developed and deployed 5+ production applications serving 1000+ users",
      "Reduced API response time by 40% through optimization and caching strategies",
      "Led mobile app development using Flutter, achieving 4.8+ app store rating",
      "Implemented CI/CD pipelines with Docker, reducing deployment time by 60%",
      "Collaborated with cross-functional teams to deliver features on time"
    ],
    technologies: ["React", "Flutter", "FastAPI", "TypeScript", "Prisma", "Docker", "PostgreSQL", "TailwindCSS"],
    location: "Remote"
  },
  {
    year: "2024 - 2025",
    role: "Electronics Technician",
    company: "Zamony Ventures Corp",
    details:
      "Maintained automation systems and transitioned into software development.",
    achievements: [
      "Maintained and optimized industrial automation systems with 99.9% uptime",
      "Automated manual processes using Python scripts, saving 15+ hours weekly",
      "Transitioned to software development, learning modern web technologies",
      "Collaborated with engineering team on system improvements and upgrades"
    ],
    technologies: ["Python", "Automation", "System Maintenance", "Electronics"],
    location: "On-site"
  },
]

const skills = [
  { name: "JavaScript", icon: <></>, proficiency: "Expert", years: "3+" },
  { name: "TypeScript", icon: <SiTypescript />, proficiency: "Advanced", years: "2+" },
  { name: "React", icon: <FaReact />, proficiency: "Expert", years: "3+" },
  { name: "Flutter", icon: <SiFlutter />, proficiency: "Advanced", years: "1+" },
  { name: "FastAPI", icon: <SiFastapi />, proficiency: "Advanced", years: "1+" },
  { name: "Node.js", icon: <FaNodeJs />, proficiency: "Advanced", years: "2+" },
  { name: "Prisma", icon: <SiPrisma />, proficiency: "Intermediate", years: "1+" },
  { name: "Docker", icon: <FaDocker />, proficiency: "Advanced", years: "1+" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, proficiency: "Expert", years: "3+" },
  { name: "Git", icon: <FaGitAlt />, proficiency: "Expert", years: "3+" },
  { name: "Svelte", icon: <SiSvelte />, proficiency: "Intermediate", years: "1+" },
  { name: "Next.js", icon: <SiNextdotjs />, proficiency: "Advanced", years: "2+" },
  { name: "Python", icon: <SiPython />, proficiency: "Advanced", years: "2+" },
  { name: "Figma", icon: <SiFigma />, proficiency: "Intermediate", years: "1+" },
  { name: "n8n", icon: <SiN8N />, proficiency: "Intermediate", years: "1+" },
  { name: "More...", icon: <FiMoreHorizontal />, proficiency: "", years: "" },
]

const ExperienceSection = () => {
  const sectionRef = useRef(null)
  const [expandedCards, setExpandedCards] = useState({})
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const skillsRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Timeline items animation
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".timeline-item"),
      { y: 100, opacity: 0, filter: "blur(10px)", scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        stagger: 0.25,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )

    // Skills animation - Simple fade in, no complex animations
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.querySelectorAll(".skill-item"),
        { 
          opacity: 0, 
          scale: 0.5
        },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.03,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        }
      )
    }

    // Title animation
    const title = sectionRef.current.querySelector("h2")
    if (title) {
      gsap.fromTo(
        title,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm text-white py-12 md:py-16 px-6 md:px-8 relative overflow-hidden"
    >

      <div className="max-w-5xl mx-auto relative z-10 py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
          Experience
        </h2>
        <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm md:text-base">
          Click on any experience to view detailed achievements
        </p>

        {/* timeline */}
        <div className="relative border-l-2 border-purple-600/50 pl-6 md:pl-8 mb-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="timeline-item mb-8 md:mb-12 relative group"
            >
              {/* timeline dot with pulse animation */}
              <div className="absolute w-5 h-5 bg-purple-500 rounded-full -left-[11px] md:-left-[13px] border-2 border-white shadow-[0_0_15px_rgba(168,85,247,0.9)] group-hover:scale-150 group-hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300 z-10">
                <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75" />
              </div>

              {/* card with 3D hover effect */}
              <div 
                onClick={() => toggleCard(i)}
                className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl border border-purple-600/30 shadow-lg
                hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                transition-all duration-300 cursor-pointer
                transform hover:scale-[1.02] hover:-translate-y-1
                group/card"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover/card:text-purple-200 transition-colors">
                      {exp.role}{" "}
                      <span className="text-purple-300">@ {exp.company}</span>
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-400">{exp.year}</span>
                      <span className="text-xs text-purple-400/70 bg-purple-900/30 px-2 py-1 rounded-full">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <button className="ml-4 text-purple-400 hover:text-purple-300 transition-colors">
                    {expandedCards[i] ? (
                      <FaChevronUp className="animate-bounce" />
                    ) : (
                      <FaChevronDown className="group-hover/card:animate-bounce" />
                    )}
                  </button>
                </div>
                
                <p className="mt-3 text-gray-300 leading-relaxed">{exp.details}</p>

                {/* Expandable content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCards[i] ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-purple-600/30 space-y-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-purple-500 rounded-full" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li 
                            key={idx}
                            className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-2
                            before:content-['▸'] before:text-purple-400 before:font-bold before:mt-1"
                          >
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-purple-500 rounded-full" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-4">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-xs md:text-sm bg-purple-900/40 text-purple-200 rounded-full
                            border border-purple-600/30 hover:bg-purple-800/50 hover:border-purple-500/50
                            transition-all duration-200 transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <a
            href="/Bob-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-xl shadow-lg
            hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transform hover:scale-105 transition-all duration-300
            border border-purple-400/30"
          >
            <FaFileDownload className="text-xl" />
            <span>View Full Resume</span>
          </a>
        </div>

        {/* Skills Solar System */}
        <div className="mt-12 md:mt-16" ref={skillsRef}>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm">
            Hover over skills to see proficiency level
          </p>
          
          {/* Solar System Container */}
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] flex items-center justify-center overflow-visible">
            {/* Central Sun/Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-purple-500/30 
                backdrop-blur-md border-2 border-purple-400/50 flex items-center justify-center
                shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Skills
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbital Rings - Visible orbits - Increased spacing with 4 orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              {/* Orbit 1 - Inner */}
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] rounded-full border-2 border-purple-500/20" />
              {/* Orbit 2 - Middle Inner */}
              <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] rounded-full border-2 border-purple-500/20" />
              {/* Orbit 3 - Middle Outer */}
              <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[640px] md:h-[640px] rounded-full border-2 border-purple-500/20" />
              {/* Orbit 4 - Outer */}
              <div className="absolute w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] md:w-[800px] md:h-[800px] rounded-full border-2 border-purple-500/20" />
            </div>

            {/* Orbiting Skills - Distributed across 4 orbits for better spacing */}
            <div className="absolute inset-0">
              {skills.map((skill, i) => {
                // Distribute skills across 4 orbits to reduce crowding
                const orbitIndex = i % 4 // 0, 1, 2, or 3
                const skillsPerOrbit = Math.ceil(skills.length / 4)
                const positionInOrbit = Math.floor(i / 4)
                
                // Calculate responsive radius for each orbit - increased spacing
                let baseRadius
                if (windowWidth < 640) {
                  baseRadius = [100, 150, 200, 250] // Mobile - 4 orbits
                } else if (windowWidth < 768) {
                  baseRadius = [130, 190, 250, 310] // Tablet - 4 orbits
                } else {
                  baseRadius = [160, 240, 320, 400] // Desktop - 4 orbits
                }
                
                const radius = baseRadius[orbitIndex]
                
                // Calculate angle - offset each orbit slightly and space skills evenly
                const angleOffset = orbitIndex * 20 // More rotation per orbit for better spacing
                const angleStep = 360 / skillsPerOrbit
                const angle = (positionInOrbit * angleStep + angleOffset) % 360
                
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredSkill(i)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="skill-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full
                    bg-purple-800/30 backdrop-blur-sm text-purple-200 border-2 border-purple-600/40 
                    hover:bg-purple-700/50 hover:border-purple-500/60
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
                    transition-all duration-300
                    flex flex-col items-center justify-center gap-0.5 cursor-pointer
                    group/skill z-20"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="text-sm sm:text-base md:text-lg transform group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-center leading-tight px-0.5">{skill.name}</span>
                    
                    {/* Tooltip */}
                    {hoveredSkill === i && skill.proficiency && (
                      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2
                      bg-purple-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg
                      border border-purple-500/50 shadow-xl z-30 whitespace-nowrap
                      animate-fadeIn">
                        <div className="font-semibold">{skill.proficiency}</div>
                        {skill.years && <div className="text-purple-300">{skill.years} years</div>}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full
                        w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-900/95" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection