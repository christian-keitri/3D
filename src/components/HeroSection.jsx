import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Spline from '@splinetool/react-spline'

const HeroSection = () => {
  const sectionRef = useRef(null)
  const splineContainerRef = useRef(null)
  const glowRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Floating animation for the Spline container
    if (splineContainerRef.current) {
      gsap.to(splineContainerRef.current, {
        y: -20,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      })
    }

    // Gentle breathing glow effect
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.5,
        scale: 1.05,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      })
    }

    // Stars animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      gsap.to(star, {
        x: `${direction * (80 + index * 10)}`,
        y: `${direction * -40 - index * 5}`,
        rotation: direction * 360,
        ease: "none",
        repeat: -1,
        yoyo: true,
        duration: 5 + Math.random() * 5,
      })
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
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el)
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm flex xl:flex-row flex-col-reverse items-center justify-center xl:justify-between lg:px-24 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Stars Background */}
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

      {/* Left Section - Text Content */}
      <div className="z-40 xl:mb-0 mb-8 xl:w-1/2 w-full max-w-2xl xl:max-w-none relative flex flex-col justify-center">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold z-10 mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg leading-tight"
        >
          Build Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 max-w-2xl leading-relaxed mb-6 md:mb-8"
        >
          I build fast, production-grade websites and web apps with precision and purpose. Every line of code reflects clean architecture, clear communication, and a relentless drive to deliver—on time, every time.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 2.3,
            duration: 1.5,
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

      {/* Right Section - Spline 3D Object */}
      <div
        ref={splineContainerRef}
        className="relative xl:w-1/2 lg:w-1/2 w-full h-[400px] md:h-[500px] xl:h-full flex items-center justify-center z-30 xl:block hidden"
      >
        {/* Glow effect behind Spline */}
        <div
          ref={glowRef}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 
          rounded-full blur-3xl opacity-40"
          style={{
            width: '80%',
            height: '80%',
            left: '10%',
            top: '10%'
          }}
        />

        {/* Decorative circles with breathing animation */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />

        {/* Spline 3D Object */}
        <div className="relative w-full h-full">
          <Spline
            className="absolute xl:right-0 lg:right-0 right-0 xl:top-1/2 lg:top-1/2 top-1/2
            xl:-translate-y-1/2 lg:-translate-y-1/2 -translate-y-1/2
            w-full h-full max-w-2xl max-h-2xl"
            scene="https://prod.spline.design/UqPdLeYjLQDNoJsN/scene.splinecode"
          />

          {/* Decorative overlay to cover watermark */}
          <motion.div 
            className="absolute bottom-4 right-4 w-48 h-16 z-50 pointer-events-none
            bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-purple-600/90
            backdrop-blur-md rounded-full
            flex items-center justify-center
            shadow-[0_8px_32px_rgba(168,85,247,0.5)]
            border border-purple-400/30
            overflow-hidden"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative z-10 text-2xl">✨</div>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile: simplified version */}
      <div className="hidden xl:hidden lg:hidden w-full h-64 flex items-center justify-center relative z-30 mt-8">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-2xl" />
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/UqPdLeYjLQDNoJsN/scene.splinecode"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

