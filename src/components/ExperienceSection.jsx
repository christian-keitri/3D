import { useRef, useEffect, useState, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaDocker, FaNodeJs, FaGitAlt, FaChevronDown, FaChevronUp, FaFileDownload } from "react-icons/fa";
import { SiTypescript, SiPrisma, SiTailwindcss, SiFlutter, SiFastapi, SiNextdotjs, SiSvelte, SiPython, SiFigma, SiN8N, SiJavascript } from "react-icons/si";
import { FiMoreHorizontal } from "react-icons/fi";

// Static data
const experiences = [
  {
    year: "2025 (March) - Present",
    role: "Full-Stack Developer",
    company: "Keitri Software Solutions",
    details: "Building scalable web & mobile apps using React, Flutter, and FastAPI.",
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
    details: "Maintained automation systems and transitioned into software development.",
    achievements: [
      "Maintained and optimized industrial automation systems with 99.9% uptime",
      "Automated manual processes using Python scripts, saving 15+ hours weekly",
      "Transitioned to software development, learning modern web technologies",
      "Collaborated with engineering team on system improvements and upgrades"
    ],
    technologies: ["Python", "Automation", "System Maintenance", "Electronics"],
    location: "On-site"
  }
];

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, proficiency: "Expert", years: "3+" },
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
  { name: "More...", icon: <FiMoreHorizontal />, proficiency: "", years: "" }
];

const ExperienceSection = memo(() => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const toggleCard = useCallback((index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline animation
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
        }
      }
    );

    // Skills animation
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.querySelectorAll(".skill-item"),
        { y: 50, opacity: 0, scale: 0.8, rotation: -10 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Title animation
    const title = sectionRef.current.querySelector("h2");
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
          }
        }
      );
    }
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-gradient-to-b from-black/70 via-[#0b0b0f]/70 to-black/70 backdrop-blur-sm text-white py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
          Experience
        </h2>
        <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm md:text-base max-w-2xl mx-auto">
          Click on any experience to view detailed achievements
        </p>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-600/50 pl-6 md:pl-8 lg:pl-10">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item mb-8 md:mb-12 relative group">
              {/* Dot */}
              <div className="absolute w-5 h-5 bg-purple-500 rounded-full -left-[11px] md:-left-[13px] border-2 border-white shadow-[0_0_15px_rgba(168,85,247,0.9)] group-hover:scale-150 group-hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300 z-10">
                <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75" />
              </div>

              {/* Card */}
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
                      {exp.role} <span className="text-purple-300">@ {exp.company}</span>
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-400">{exp.year}</span>
                      <span className="text-xs text-purple-400/70 bg-purple-900/30 px-2 py-1 rounded-full">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <button className="ml-4 text-purple-400 hover:text-purple-300 transition-colors">
                    {expandedCards[i] ? <FaChevronUp className="animate-bounce" /> : <FaChevronDown className="group-hover/card:animate-bounce" />}
                  </button>
                </div>
                
                <p className="mt-3 text-gray-300 leading-relaxed">{exp.details}</p>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCards[i] ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-purple-600/30 space-y-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-purple-500 rounded-full" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-2
                            before:content-['▸'] before:text-purple-400 before:font-bold before:mt-1">
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
                          <span key={idx} className="px-3 py-1.5 text-xs md:text-sm bg-purple-900/40 text-purple-200 rounded-full
                            border border-purple-600/30 hover:bg-purple-800/50 hover:border-purple-500/50
                            transition-all duration-200 transform hover:scale-105">
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
        <div className="mt-16 text-center">
          <a
            href="/Bob-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-xl shadow-lg
            hover:from-purple-500 hover:to-white-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transform hover:scale-105 transition-all duration-300
            border border-purple-400/30"
          >
            <FaFileDownload className="text-xl" />
            <span>View Full Resume</span>
          </a>
        </div>

        {/* Skills */}
        <div className="mt-12 md:mt-16 lg:mt-20" ref={skillsRef}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-purple-300 via-pink-300 to-purple-200 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <p className="text-center text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-xl mx-auto">
            Hover over skills to see proficiency level
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredSkill(i)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="skill-item relative w-full aspect-square rounded-2xl 
                bg-white/5 backdrop-blur-md text-purple-200 border border-purple-600/30 
                hover:bg-white/10 hover:border-purple-500/50
                hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
                flex flex-col items-center justify-center gap-3 cursor-pointer
                group/skill overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 
                  group-hover/skill:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                
                {/* Icon container */}
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center
                  bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl
                  group-hover/skill:from-purple-600/30 group-hover/skill:to-pink-600/30
                  transition-all duration-300">
                  <div className="text-2xl md:text-3xl lg:text-4xl transform 
                    group-hover/skill:rotate-12 group-hover/skill:scale-110 
                    transition-transform duration-300 text-purple-300 group-hover/skill:text-purple-200">
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <span className="text-xs sm:text-sm md:text-base font-semibold text-center px-2
                  text-purple-200 group-hover/skill:text-purple-100 transition-colors">
                  {skill.name}
                </span>

                {/* Tooltip */}
                {hoveredSkill === i && skill.proficiency && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2
                  bg-gradient-to-br from-purple-900/95 to-pink-900/95 backdrop-blur-md 
                  text-white text-xs px-4 py-2.5 rounded-lg
                  border border-purple-500/50 shadow-2xl z-50 whitespace-nowrap
                  animate-fadeIn">
                    <div className="font-bold text-purple-100">{skill.proficiency}</div>
                    {skill.years && <div className="text-purple-300 text-xs mt-0.5">{skill.years} years</div>}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full
                    w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent 
                    border-t-purple-900/95" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;

