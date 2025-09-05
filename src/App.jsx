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
import ExperienceSection from "./components/ExperienceSection"


export default function App() {

  useEffect(() => {
    //Register Scroll Trigger plugin
    gsap.registerPlugin(ScrollTrigger)

    //REfresh Scroll Trigger when the page is fully loaded
    ScrollTrigger.refresh()

    //Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />

      <ContactSection />
      <Footer />
      <ProgressBar />

    </>
  )
}