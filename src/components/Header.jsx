import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useMemo, memo } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import emailjs from "emailjs-com";

const Header = () => {
  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  //State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = useCallback(() => setContactFormOpen(true), [])
  const closeContactForm = useCallback(() => setContactFormOpen(false), [])

  const sendEmail = useCallback((e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nwv16v8",
      "template_zsuxar9",
      e.target,
      "8VpWUYdLwH0cTIYJd"
    ).then(
      (result) => {
        console.log("Message Sent!", result.text);
        e.target.reset();
        setContactFormOpen(false);
        alert("☑️ Message sent successfully!");
      },
      (error) => {
        console.log("Error:", error.text);
        alert("❌ Failed to send message. Please try again.");
      }
    );
  }, [])

  const navLinks = useMemo(() => [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ], []);

  const socialLinks = useMemo(() => [
    { Icon: FiGithub, link: "https://github.com/christian-keitri" },
    { Icon: FiTwitter, link: "https://x.com/CSalapate4959" },
    { Icon: FiLinkedin, link: "https://www.linkedin.com/in/christian-joshua-salapate-8596a1377/" },
    { Icon: FiFacebook, link: "https://www.facebook.com/christian.cj.768517/" },
    { Icon: FiInstagram, link: "https://www.instagram.com/christian1996cj05/" }
  ], []);



  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-violet-900/20 to-transparent backdrop-blur-md border-b border-purple-500/20"></div>
      
      {/* main container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo/name */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center group"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl mr-3 shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300">
            CJS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent">
            BoB
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-6">
          {navLinks.map((link, index) => {
            const handleDesktopClick = (e) => {
              e.preventDefault();
              const targetId = link.href.replace('#', '');
              const element = document.getElementById(targetId);
              
              if (element) {
                // Calculate offset for fixed header
                const headerHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              } else {
                // Fallback: try direct scroll
                window.location.href = link.href;
              }
            };
            
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleDesktopClick}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                whileHover={{ y: -2 }}
                className="relative text-purple-200 hover:text-purple-300 font-medium transition-colors duration-300 group px-3 py-2 cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            );
          })}
        </nav>

        {/* Right side: socials + hire me + mobile menu */}
        <div className="flex items-center gap-4">
          {/* Social icons - Desktop */}
          <div className="md:flex hidden items-center space-x-3">
            {socialLinks.map(
              ({ Icon, link }, i) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 text-purple-200 hover:text-purple-300 transition-all duration-300 group"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${Icon.name} profile`}
                >
                  <Icon className="w-4 h-4" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
                </motion.a>
              )
            )}
          </div>

          {/* Hire Me Button (Desktop only) */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transition-all duration-300
            border border-purple-400/30"
          >
            Hire Me
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }} 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-purple-200 hover:text-purple-300 hover:bg-white/5 transition-all duration-300 z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/*Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="md:hidden overflow-hidden bg-gradient-to-b from-black/95 via-violet-900/30 to-black/95 backdrop-blur-md border-t border-purple-500/20 shadow-lg px-4 py-5 space-y-5 relative z-40"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const handleClick = (e) => {
                  e.preventDefault();
                  toggleMenu();
                  
                  // Wait for menu to close, then scroll
                  setTimeout(() => {
                    const targetId = link.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    
                    if (element) {
                      // Calculate offset for fixed header
                      const headerHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    } else {
                      // Fallback: try direct scroll
                      window.location.href = link.href;
                    }
                  }, 300);
                };
                
                return (
                  <a 
                    onClick={handleClick}
                    className="text-purple-200 font-medium py-3 px-4 rounded-lg hover:text-purple-300 hover:bg-white/10 active:bg-white/15 transition-all duration-300 cursor-pointer"
                    key={link.name} 
                    href={link.href}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
            
            <div className="pt-4 border-t border-purple-500/20">
              <div className="flex space-x-3 mb-4">
                {socialLinks.map(({ Icon, link }) => (
                  <a 
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu();
                    }}
                    className="p-2 rounded-lg bg-white/5 border border-purple-500/20 hover:border-purple-400/50 text-purple-200 hover:text-purple-300 transition-all duration-300 active:scale-95"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                  setTimeout(() => {
                    openContactForm();
                  }, 300);
                }}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
                text-white font-semibold rounded-xl shadow-lg
                hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                transform hover:scale-105 active:scale-95 transition-all duration-300
                border border-purple-400/30"
              >
                CONTACT ME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}

            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8
              }}

              className="bg-gradient-to-b from-black/90 via-violet-900/30 to-black/90 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-md max-h-[90vh] p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <button 
                  onClick={closeContactForm}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FiX className="w-5 h-5 text-purple-200 hover:text-purple-300" />
                </button>
              </div>
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/5 text-purple-100 placeholder-purple-300/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/5 text-purple-100 placeholder-purple-300/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/5 text-purple-100 placeholder-purple-300/50 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                 className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold rounded-xl shadow-lg
            hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transform hover:scale-105 transition-all duration-300
            border border-purple-400/30"

                >
                  Send Message
                </motion.button>
              </form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default memo(Header);
