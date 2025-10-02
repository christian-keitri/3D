import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CertificateSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
    );

    // Stars floating + twinkling
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      // Floating
      gsap.to(star, {
        x: `${direction * (80 + index * 10)}`,
        y: `${direction * -40 - index * 5}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });

      // Twinkling
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el);
  };

  return (
    <section
      id="certificate"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black via-[#1a093b] to-[#9a74cf50] flex items-center justify-center"
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
      <div className="relative z-10 flex flex-col items-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg text-center"
        >
          Certifications
        </h2>

        {/* Certificates Row */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Certificate Card - Image */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-80 md:w-96 flex flex-col items-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-400 rounded-xl blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/images/certificate.png"
              alt="Certificate"
              className="relative w-full rounded-lg border-4 border-purple-500 shadow-lg"
            />
          </div>

          {/* Certificate Card - Video */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-80 md:w-96 flex flex-col items-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-400 rounded-xl blur-2xl opacity-30 animate-pulse"></div>
            <video
              src="/video/10 Team Designs Milestone Certificate.mp4"
              className="relative w-full rounded-lg border-4 border-pink-500 shadow-lg"
              autoPlay
              muted
              loop={false}
              controls
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default CertificateSection;
