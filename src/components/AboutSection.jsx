import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutSection = () => {
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

    // Stars floating + twinkling
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 0.5 + Math.random() * 0.5

      // Floating
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
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black via-[#1a093b] to-[#9a74cf50]"
    >
      {/* Stars */}
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

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center relative z-10">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-lg"
        >
          About Me
        </h1>

        <div
          ref={introRef}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-xl text-purple-200 tracking-wide leading-relaxed">
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
              className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 hover:scale-105 transition transform">
              Let’s Connect ✨
            </button>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img
              className="relative lg:h-[28rem] md:h-[20rem] h-[16rem] rounded-full border-4 border-purple-500 shadow-lg"
              src="images/person.png"
              alt="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
