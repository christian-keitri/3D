import { lazy, Suspense } from "react"
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

// Lazy load components for better code splitting
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import ProgressBar from "./components/ProgressBar"
import SimpleChatbot from "./components/SimpleChatbot"

const AboutSection = lazy(() => import("./components/AboutSection"))
const CoreCompetencies = lazy(() => import("./components/CoreCompetencies"))
const ProjectsSection = lazy(() => import("./components/ProjectsSection"))
const ContactSection = lazy(() => import("./components/ContactSection"))
const Footer = lazy(() => import("./components/Footer"))
const ExperienceSection = lazy(() => import("./components/ExperienceSection"))
const Certificate = lazy(() => import("./components/Certificate"))

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

export default function App() {
  return (
    <>
      {/* Spline Background - Fixed position - Visible on all devices */}
      <div className="spline-background">
        <div className="absolute inset-0 w-full h-full">
          <Spline 
            className="absolute xl:left-[-20%] lg:left-[-15%] left-0 xl:top-[-10%] lg:top-0 top-[-20%] w-full h-full"
            scene="https://prod.spline.design/UqPdLeYjLQDNoJsN/scene.splinecode" 
          />
        </div>
        {/* Hire Me Button to cover watermark area */}
        <motion.button
          onClick={() => {
            // Dispatch custom event to open contact form
            window.dispatchEvent(new CustomEvent('openContactForm'));
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="spline-watermark-cover pointer-events-auto cursor-pointer"
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '100px', // Moved left to make room for chatbot
            zIndex: 1000,
          }}
        >
          <span className="text-white font-semibold">Hire Me</span>
        </motion.button>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <CustomCursor />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <CoreCompetencies />
          <ExperienceSection />
          <Certificate />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </Suspense>
        
        <ProgressBar />
      </div>

      {/* Chatbot - Outside content div to ensure visibility */}
      <SimpleChatbot />

    </>
  )
}


