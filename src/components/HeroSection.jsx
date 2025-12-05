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
      className="h-screen bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm flex items-center justify-center lg:px-24 px-6 md:px-10 relative overflow-hidden"
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold z-10 mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg leading-tight"
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
          I build fast, production-grade websites and web apps with precision and purpose. Every line of code reflects clean architecture, clear communication, and a relentless drive to deliver—on time, every time.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="mt-4 md:mt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-xl shadow-lg
            hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transition-all duration-300
            border border-purple-400/30"
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

    </section>
  )
}

export default HeroSection

