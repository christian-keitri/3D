import { useRef, useEffect, useMemo, memo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CertificateSection = memo(() => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const starsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = useMemo(() => [
    { type: "image", src: "/images/certificate.png", alt: "Certificate 1" },
    { type: "image", src: "/images/RWD.png", alt: "Responsive Web Design Certificate" },
    { type: "image", src: "/images/A2.png", alt: "Certificate A2" },
    { type: "image", src: "/images/COE.png", alt: "Certificate of Excellence" },
    { type: "video", src: "/video/10 Team Designs Milestone Certificate.mp4", alt: "Team Designs Milestone Certificate" },
  ], []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    if (titleRef.current) {
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
      );
    }

    // Stars animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      gsap.to(star, {
        x: `${direction * (80 + index * 10)}`,
        y: `${direction * -40 - index * 5}`,
        rotation: direction * 360,
        ease: "none",
        repeat: -1,
        yoyo: true,
        duration: 5 + Math.random() * 5,
      });
      gsap.to(star, {
        scale: 1.4,
        opacity: "+=0.3",
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        delay: index * 0.3,
        ease: "sine.inOut",
      });
    });

    // Gentle glow breathing animation
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.05,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  // Card animation on index change
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power3.out" }
      );
    }
    // Reset glow animation on card change
    if (glowRef.current) {
      gsap.killTweensOf(glowRef.current);
      gsap.set(glowRef.current, { opacity: 0.4, scale: 1 });
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.05,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, [currentIndex]);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const currentCertificate = certificates[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black/70 via-[#1a093b]/70 to-[#9a74cf50]/70 backdrop-blur-sm flex flex-col items-center justify-center py-12 md:py-16"
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
              background:
                "radial-gradient(circle, white 0%, rgba(255,255,255,0) 70%)",
              opacity: 0.3 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 drop-shadow-lg text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent"
        >
          Certifications
        </h2>

        {/* Single Card Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
              rounded-full
              bg-gradient-to-r from-purple-600 to-pink-600
              backdrop-blur-sm
              border-2 border-purple-400/50
              flex items-center justify-center
              text-white
              shadow-[0_0_20px_rgba(168,85,247,0.5)]
              hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
              transition-all duration-300
              group
            "
            aria-label="Previous certificate"
          >
            <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
              rounded-full
              bg-gradient-to-r from-purple-600 to-pink-600
              backdrop-blur-sm
              border-2 border-purple-400/50
              flex items-center justify-center
              text-white
              shadow-[0_0_20px_rgba(168,85,247,0.5)]
              hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
              transition-all duration-300
              group
            "
            aria-label="Next certificate"
          >
            <FiChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" />
          </motion.button>

          {/* Certificate Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              ref={cardRef}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full max-w-3xl mx-auto px-4 md:px-0"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 flex flex-col items-center w-full">
                {/* Glow effect */}
                <div 
                  ref={glowRef}
                  className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 rounded-2xl blur-2xl opacity-40"
                ></div>
                
                {/* Certificate Content */}
                <div className="relative w-full rounded-xl overflow-hidden border-4 border-purple-500/50 shadow-xl">
                  {currentCertificate.type === "image" ? (
                    <img
                      src={currentCertificate.src}
                      alt={currentCertificate.alt}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <video
                      src={currentCertificate.src}
                      className="w-full h-auto"
                      autoPlay
                      muted
                      loop
                      controls
                    />
                  )}
                </div>

                {/* Certificate Info */}
                <div className="mt-6 text-center">
                  <p className="text-purple-200 text-sm md:text-base font-medium">
                    {currentCertificate.alt}
                  </p>
                  <p className="text-purple-300/60 text-xs md:text-sm mt-2">
                    {currentIndex + 1} of {certificates.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    : "w-2 h-2 bg-purple-400/30 hover:bg-purple-400/50"
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});



CertificateSection.displayName = 'CertificateSection';

export default CertificateSection;



