import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CertificateSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const starsRef = useRef([]);

  const certificates = [
    "/images/certificate.png",
    "/images/RWD.png",
    "/images/A2.png",
    "/images/COE.png",
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

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

    // Carousel animation - infinite seamless loop
    const carousel = carouselRef.current;
    if (carousel) {
      // Wait for DOM to be fully rendered
      const initAnimation = () => {
        // Calculate the width of one set of items (half the total width since we duplicate)
        const totalWidth = carousel.scrollWidth;
        const halfWidth = totalWidth / 2;
        
        if (halfWidth > 0) {
          // Create infinite seamless loop
          // Animate to negative half width, then repeat (which resets to 0)
          gsap.to(carousel, {
            x: -halfWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
            immediateRender: false,
          });
        }
      };
      
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(initAnimation);
    }
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el);
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black via-[#1a093b] to-[#9a74cf50] flex flex-col items-center justify-center"
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
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent"
        >
          Certifications
        </h2>

        {/* Carousel Container */}
        <div className="w-full max-w-7xl mx-auto overflow-hidden">
          <div
            ref={carouselRef}
            className="flex flex-row flex-nowrap gap-6 md:gap-8 w-max"
          >
            {/* First set of items */}
            {certificates.map((src, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-72 flex flex-col items-center"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-400 rounded-xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={src}
                  alt={`Certificate ${i + 1}`}
                  className="relative w-full rounded-lg border-4 border-purple-500 shadow-lg"
                />
              </div>
            ))}

            {/* Video certificate */}
            <div className="flex-shrink-0 relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-72 flex flex-col items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-400 rounded-xl blur-2xl opacity-30 animate-pulse"></div>
              <video
                src="/video/10 Team Designs Milestone Certificate.mp4"
                className="relative w-full rounded-lg border-4 border-pink-500 shadow-lg"
                autoPlay
                muted
                loop
                controls
              />
            </div>

            {/* Duplicated set for seamless loop */}
            {certificates.map((src, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-72 flex flex-col items-center"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-400 rounded-xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={src}
                  alt={`Certificate ${i + 1}`}
                  className="relative w-full rounded-lg border-4 border-purple-500 shadow-lg"
                />
              </div>
            ))}

            {/* Video certificate duplicate */}
            <div className="flex-shrink-0 relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-72 flex flex-col items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-400 rounded-xl blur-2xl opacity-30 animate-pulse"></div>
              <video
                src="/video/10 Team Designs Milestone Certificate.mp4"
                className="relative w-full rounded-lg border-4 border-pink-500 shadow-lg"
                autoPlay
                muted
                loop
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;


