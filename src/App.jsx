import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"
import ThankYou from "./components/ThankYou" // make sure you import this

export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <CustomCursor />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
              <Footer />
              <ProgressBar />
            </>
          }
        />

        {/* Thank You Page */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}
