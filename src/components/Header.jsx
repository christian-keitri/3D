import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const Header = () => {
  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#horizontal-section" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];



  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      {/* main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo/name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-gray-600 font-bold text-xl mr-3">
            CJS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            BOB
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {navLinks.map((link, index) => (

            <motion.a
              key={link.name}
              href={link.href}

              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative text-gray-100 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"

            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          )
          )}
        </nav>

        {/* Right side: socials + hire me + mobile menu */}
        <div className="flex items-center">
          {/* Social icons - Desktop */}
          <div className="md:flex hidden items-center space-x-4">

            {[

              { Icon: FiGithub, link: "https://github.com/christian-keitri" },
              { Icon: FiTwitter, link: "https://x.com/CSalapate4959" },
              { Icon: FiLinkedin, link: "https://www.linkedin.com/in/christian-joshua-salapate-8596a1377/" },
              { Icon: FiFacebook, link: "https://www.facebook.com/christian.cj.768517/" },
              { Icon: FiInstagram, link: "https://www.instagram.com/christian1996cj05/" }
            ].map(
              ({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="text-gray-100 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  href={link}
                >
                  <Icon className="w-5 h-5" />
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
            className="hidden lg:block ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-4">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu}>
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/*Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.5
        }}

        className="md:hidden overflow-hidden bg-transparent dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <a onClick={toggleMenu} className="text-gray-300 font-medium py-2"
              key={item} href="#">
              {item}

            </a>
          ))}

        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/christian-keitri">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/christian-joshua-salapate-8596a1377/">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>

            <a href="https://x.com/CSalapate4959">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>

            <a href="https://www.facebook.com/christian.cj.768517/">
              <FiFacebook className="h-5 w-5 text-gray-300" />
            </a>

            <a href="https://www.instagram.com/christian1996cj05/">
              <FiInstagram className="h-5 w-5 text-gray-300" />
            </a>
          </div>

          <button onClick={() => {
            toggleMenu()
            openContactForm()
          }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">
            CONTACT ME
          </button>
        </div>
      </motion.div>

      {/*Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}

            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex item-center justify-center p-4">

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

              className="bg-transparent dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md max-h-[90vh] p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>

              {/*input forms */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700">
                  </input>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700">
                  </input>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    placeholder="How can we help you? "
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700">
                  </textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50">
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

export default Header;
