import { useRef, useEffect, memo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GitHubStats from "./GitHubStats"

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
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm"
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
          className="w-full max-w-6xl"
        >
          {/* GitHub Stats Display */}
          <GitHubStats username="christian-keitri" />
        </div>
      </div>
    </section>
  )
})



AboutSection.displayName = 'AboutSection'

export default AboutSection


