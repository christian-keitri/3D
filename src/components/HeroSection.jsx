import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HeroSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Removed floating and breathing animations for better performance

    // Stars animation - Simplified for performance
    starsRef.current.forEach((star, index) => {
      // Only simple opacity animation, no complex movement
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
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el)
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="pt-20 md:pt-24 h-screen bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm flex items-center justify-center lg:px-24 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Stars Background - Reduced for performance */}
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

      {/* Content Section - Centered and adjusted */}
      <div className="z-40 w-full max-w-4xl mx-auto relative flex flex-col items-center justify-center text-center">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-bold z-10 mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg leading-tight"
        >
          Build Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8"
        >
          Full-Stack Developer specializing in scalable web & mobile applications. I transform complex requirements into elegant solutions, delivering production-ready code that drives business results—on time, every time.
        </motion.p>

        {/* Profile Image */}
        <div className="relative mt-8 md:mt-12">
          {/* Glow effects */}
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-2xl opacity-40"></div>
          
          {/* Image Container */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-2xl
            overflow-hidden
            z-10">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="/images/person.png"
              alt="Full-Stack Developer"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Minimal Bubble Buttons - Below image */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="flex flex-row items-center justify-center gap-3 mt-6 z-20"
        >
          {/* View My Work Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-purple-600/90 to-pink-600/90
            text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-md
            hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
            transition-all duration-300
            border border-white/30
            whitespace-nowrap"
          >
            <span>View Work</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
          
          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-pink-600/90 to-purple-600/90
            text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-md
            hover:from-pink-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]
            transition-all duration-300
            border border-white/30
            whitespace-nowrap"
          >
            <span>Hire Me</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

    </section>
  )
}

export default HeroSection

