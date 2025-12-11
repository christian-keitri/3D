import { useRef, useEffect, memo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt,
  FaMobile,
  FaDatabase,
  FaCode,
  FaSync,
  FaServer
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiFlutter, 
  SiFastapi, 
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPython,
  SiJavascript,
  SiSvelte,
  SiFigma,
  SiN8N,
  SiTestinglibrary,
  SiDotnet,
  SiAmazonwebservices
} from 'react-icons/si'

const CoreCompetencies = memo(() => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  // Skill icon mapping
  const skillIcons = {
    "JavaScript": <SiJavascript className="text-lg" />,
    "React": <FaReact className="text-lg" />,
    "TypeScript": <SiTypescript className="text-lg" />,
    "Next.js": <SiNextdotjs className="text-lg" />,
    "Svelte": <SiSvelte className="text-lg" />,
    "TailwindCSS": <SiTailwindcss className="text-lg" />,
    "GSAP": <FaCode className="text-lg" />,
    "FastAPI": <SiFastapi className="text-lg" />,
    "Node.js": <FaNodeJs className="text-lg" />,
    "Python": <SiPython className="text-lg" />,
    "Prisma": <SiPrisma className="text-lg" />,
    "REST APIs": <FaServer className="text-lg" />,
    "Database Design": <FaDatabase className="text-lg" />,
    ".NET": <SiDotnet className="text-lg" />,
    "C#": <SiDotnet className="text-lg" />,
    "Entity Framework": <SiDotnet className="text-lg" />,
    "Flutter": <SiFlutter className="text-lg" />,
    "Cross-platform": <FaMobile className="text-lg" />,
    "Mobile UI/UX": <FaMobile className="text-lg" />,
    "Docker": <FaDocker className="text-lg" />,
    "CI/CD": <FaSync className="text-lg" />,
    "Git": <FaGitAlt className="text-lg" />,
    "Figma": <SiFigma className="text-lg" />,
    "n8n": <SiN8N className="text-lg" />,
    "Testing": <SiTestinglibrary className="text-lg" />,
    "AWS": <SiAmazonwebservices className="text-lg" />,
  }

  const competencies = [
    {
      category: "Frontend Development",
      icon: <FaReact className="text-4xl" />,
      skills: ["JavaScript", "React", "TypeScript", "Next.js", "Svelte", "TailwindCSS", "GSAP"],
      description: "Building responsive, performant user interfaces",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend Development",
      icon: <FaNodeJs className="text-4xl" />,
      skills: ["FastAPI", "Node.js", "Python", ".NET", "C#", "Entity Framework", "Prisma", "REST APIs", "Database Design"],
      description: "Scalable server-side solutions and APIs",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile Development",
      icon: <FaMobile className="text-4xl" />,
      skills: ["Flutter", "Cross-platform", "Mobile UI/UX"],
      description: "Native-quality mobile applications",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "DevOps & Tools",
      icon: <FaDocker className="text-4xl" />,
      skills: ["Docker", "AWS", "CI/CD", "Git", "Figma", "n8n", "Testing"],
      description: "Streamlined deployment and development workflows",
      color: "from-orange-500 to-red-500"
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Cards animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll(".competency-card"),
        { 
          y: 80, 
          opacity: 0, 
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current || trigger.vars.trigger === cardsRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      id="competencies"
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
            Core Competencies
          </h2>
          <p className="text-purple-200/80 text-lg md:text-xl max-w-2xl mx-auto">
            Technologies and skills I bring to every project
          </p>
        </div>

        {/* Competencies Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {competencies.map((comp, index) => (
            <motion.div
              key={index}
              className="competency-card group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-600/30 
                hover:bg-white/10 hover:border-purple-500/50 
                hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${comp.color} rounded-2xl opacity-0 
                  group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />

                {/* Icon */}
                <div className={`mb-4 inline-flex p-4 rounded-xl bg-gradient-to-r ${comp.color} 
                  text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {comp.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {comp.category}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-4">
                  {comp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {comp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs md:text-sm bg-purple-900/40 text-purple-200 rounded-full
                        border border-purple-600/30 group-hover:bg-purple-800/50 
                        group-hover:border-purple-500/50 transition-all duration-200
                        hover:scale-105 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                    >
                      {skillIcons[skill] && (
                        <span className="flex-shrink-0">
                          {skillIcons[skill]}
                        </span>
                      )}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-purple-200/80 text-lg mb-6">
            Looking for a developer with these skills?
          </p>
          <motion.button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-xl shadow-lg
            hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transition-all duration-300
            border border-purple-400/30"
          >
            Let's Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
})

CoreCompetencies.displayName = 'CoreCompetencies'

export default CoreCompetencies

