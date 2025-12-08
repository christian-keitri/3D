import { useRef, useEffect, memo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi'

const ContactSection = memo(() => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Fade in animation for title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Fade in animation for content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.contact-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black/90 via-[#1a093b]/90 to-black/90 backdrop-blur-sm relative py-16 md:py-20 lg:py-24 px-6 md:px-8 pb-0"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent"
          >
            Ready to Build Your Next Success Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-200/80 max-w-2xl mx-auto"
          >
            I'm actively seeking opportunities to bring value to forward-thinking teams. Let's discuss how I can contribute to your company's growth and innovation.
          </motion.p>
        </div>

        {/* Contact Content */}
        <div ref={contentRef} className="space-y-8">
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-item bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What I Bring to Your Team</h3>
            <div className="grid md:grid-cols-2 gap-6 text-purple-200">
              <div className="space-y-2 bg-white/5 rounded-lg p-4 border border-purple-600/20">
                <p className="font-semibold text-purple-300 flex items-center gap-2">
                  <span className="text-xl">🚀</span> Fast Delivery
                </p>
                <p className="text-sm text-purple-200/80">Production-ready code delivered on time, every time. 100% on-time delivery record.</p>
              </div>
              <div className="space-y-2 bg-white/5 rounded-lg p-4 border border-purple-600/20">
                <p className="font-semibold text-purple-300 flex items-center gap-2">
                  <span className="text-xl">💡</span> Problem Solver
                </p>
                <p className="text-sm text-purple-200/80">Clean architecture and scalable solutions. Reduced API response time by 40% in recent projects.</p>
              </div>
              <div className="space-y-2 bg-white/5 rounded-lg p-4 border border-purple-600/20">
                <p className="font-semibold text-purple-300 flex items-center gap-2">
                  <span className="text-xl">🤝</span> Team Player
                </p>
                <p className="text-sm text-purple-200/80">Clear communication and collaborative mindset. Experience working with cross-functional teams.</p>
              </div>
              <div className="space-y-2 bg-white/5 rounded-lg p-4 border border-purple-600/20">
                <p className="font-semibold text-purple-300 flex items-center gap-2">
                  <span className="text-xl">📈</span> Results Driven
                </p>
                <p className="text-sm text-purple-200/80">Focus on impact and measurable outcomes. Built apps serving 1000+ active users.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-item grid md:grid-cols-2 gap-6"
          >
            {/* Email */}
            <a
              href="mailto:christian.salapate@example.com"
              className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-600/30 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiMail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-300 mb-1">Email</p>
                <p className="text-white font-medium">Let's discuss opportunities</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/christian-joshua-salapate-8596a1377/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-600/30 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiLinkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-300 mb-1">LinkedIn</p>
                <p className="text-white font-medium">Connect professionally</p>
              </div>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-item flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/Bob-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
              text-white font-semibold rounded-xl shadow-lg
              hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
              transform hover:scale-105 transition-all duration-300
              border border-purple-400/30 w-full sm:w-auto justify-center"
            >
              <FiFileText className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            <a
              href="https://github.com/christian-keitri"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md
              text-white font-semibold rounded-xl shadow-lg
              hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
              transform hover:scale-105 transition-all duration-300
              border border-purple-600/30 w-full sm:w-auto justify-center"
            >
              <FiGithub className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="contact-item text-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-600/30"
          >
            <p className="text-purple-200/90 text-lg md:text-xl font-medium mb-2">
              Currently Available for New Opportunities
            </p>
            <p className="text-purple-200/70 text-base">
              Open to full-time positions, contract work, and exciting freelance projects. Let's discuss how I can contribute to your team's success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = 'ContactSection'

export default ContactSection



