import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { memo, useMemo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const Footer = memo(() => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);

  const socialLinks = useMemo(() => [
    { Icon: FiGithub, href: "https://github.com/christian-keitri", label: "GitHub", color: "hover:text-purple-400" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/christian-joshua-salapate-8596a1377", label: "LinkedIn", color: "hover:text-purple-400" },
    { Icon: FiTwitter, href: "https://x.com/CSalapate4959", label: "Twitter", color: "hover:text-cyan-400" },
    { Icon: FiInstagram, href: "https://www.instagram.com/christian1996cj05", label: "Instagram", color: "hover:text-white-400" },
    { Icon: FiFacebook, href: "https://www.facebook.com/christian.cj.768517", label: "Facebook", color: "hover:text-purple-500" },
  ], []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-b from-black via-violet-900/20 to-black backdrop-blur-sm text-white py-20 px-6 mt-40 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex-1">
            <motion.a 
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent mb-4">
                BoB
              </h2>
            </motion.a>
            <p className="text-purple-200/80 text-lg max-w-md">
              Building fast, reliable results with precision and purpose.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex-1 lg:text-right">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-200 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div ref={socialRef} className="flex lg:justify-end gap-4">
              {socialLinks.map(({ Icon, href, label, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    relative p-3 rounded-xl
                    bg-gradient-to-br from-purple-600/20 to-pink-600/20
                    backdrop-blur-sm border border-purple-500/30
                    text-purple-200 ${color}
                    transition-all duration-300
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                    hover:border-purple-400/50
                    group
                  `}
                >
                  <Icon className="w-6 h-6" />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-300 blur-sm -z-10" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-violet-900/20 to-black px-4 text-purple-300/50">
              ✨
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-purple-200/60 text-sm md:text-base">
            © 2025 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">BoB</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-purple-200/60 hover:text-purple-300 text-sm transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;




