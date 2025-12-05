import { useRef, useEffect, memo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutSection = memo(() => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Intro text animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Stars - Simplified animation for performance
    starsRef.current.forEach((star, index) => {
      // Only simple opacity animation
      gsap.to(star, {
        opacity: "+=0.2",
        duration: 2 + Math.random() * 2,
        yoyo: true,
        repeat: -1,
        delay: index * 0.5,
        ease: "sine.inOut",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
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
      id="about"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm"
    >
      {/* Stars - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
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

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 h-full flex flex-col items-center justify-center relative z-10 py-12 md:py-16">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg mb-8 md:mb-12"
        >
          About Me
        </h1>

        <div
          ref={introRef}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 lg:gap-16"
        >
          <div className="w-full md:w-1/2 lg:max-w-xl text-purple-200 tracking-wide leading-relaxed flex flex-col justify-center">
            <p className="text-lg md:text-2xl font-semibold mb-4">
              👋 Hi, I'm <span className="text-purple-400">Christian</span>
            </p>
            <ul className="space-y-3 text-sm md:text-lg">
              <li>⚡ Electronics Technician → Full-Stack Developer</li>
              <li>🤖 Passion for automation & scalable systems</li>
              <li>📱 Experienced in building web & mobile apps</li>
              <li>🚀 Love blending engineering precision with creativity</li>
            </ul>

            {/* CTA */}
            <button
              onClick={() => window.open("https://www.facebook.com/christian.cj.768517", "_blank")}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-xl shadow-lg
            hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transform hover:scale-105 transition-all duration-300
            border border-purple-400/30">

              Let’s Connect ✨
            </button>
          </div>

          {/* Profile Image */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full blur-2xl opacity-40"></div>
              <img
                className="relative lg:h-[28rem] md:h-[20rem] h-[16rem] w-auto object-contain"
                src="images/person.png"
                alt="profile-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})



AboutSection.displayName = 'AboutSection'

export default AboutSection


