import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaReact, FaDocker, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiTypescript, SiPrisma, SiTailwindcss, SiFlutter, SiFastapi, SiNextdotjs, SiSvelte, SiPython, SiFigma, SiN8N } from "react-icons/si"
import { FiMoreHorizontal } from "react-icons/fi"

const experiences = [
  {
    year: "2025 (March) - Present",
    role: "Full-Stack Developer",
    company: "Keitri Software Solutions",
    details:
      "Building scalable web & mobile apps using React, Flutter, and FastAPI.",
  },
  {
    year: "2024 - 2025",
    role: "Electronics Technician",
    company: "Zamony Ventures Corp",
    details:
      "Maintained automation systems and transitioned into software development.",
  },
]

const skills = [
  { name: "JavaScript", icon: <></> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Svelte", icon: <SiSvelte /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "n8n", icon: <SiN8N /> },
  { name: ".....", icon: <FiMoreHorizontal /> },


]

const ExperienceSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".timeline-item"),
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.25,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white py-20 px-6 relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.2),transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
          Experience
        </h2>

        {/* timeline */}
        <div className="relative border-l-2 border-purple-600/50 pl-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="timeline-item mb-12 relative group hover:scale-[1.02] transition-transform"
            >
              {/* timeline dot */}
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] border-2 border-white shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />

              {/* card */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-purple-600/30 shadow-lg">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}{" "}
                  <span className="text-purple-300">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-400">{exp.year}</span>
                <p className="mt-3 text-gray-300 leading-relaxed">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* skills grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-200">
            Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-xl bg-purple-800/20 text-purple-200 border border-purple-600/30 
                hover:bg-purple-700/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
