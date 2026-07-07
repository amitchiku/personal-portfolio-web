import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-[7vw] py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer select-none"
          onClick={() => handleMenuItemClick("about")}
        >
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            <span className="text-purple-500">&lt;</span>

            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Amit
            </span>

            <span className="text-purple-500">/</span>

            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Chiku
            </span>

            <span className="text-purple-500">&gt;</span>
          </h1>
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`text-[17px] font-medium transition-all duration-300
                ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>

              {/* Active Underline */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-5">
          <motion.a
            whileHover={{
              scale: 1.2,
              rotate: 8,
            }}
            href="https://github.com/amitchiku"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.2,
              rotate: -8,
            }}
            href="https://www.linkedin.com/in/amit-nayak-0a9165238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? (
              <FiX size={30} className="text-purple-400" />
            ) : (
              <FiMenu size={30} className="text-purple-400" />
            )}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-5 mb-5 rounded-3xl
            bg-black/70 backdrop-blur-2xl
            border border-white/10
            shadow-[0_0_40px_rgba(168,85,247,0.3)]"
          >
            <ul className="flex flex-col items-center py-8 gap-8">
              {menuItems.map((item) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={item.id}
                >
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`text-lg font-medium transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}

              {/* MOBILE SOCIALS */}
              <div className="flex gap-6 pt-3">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/amitchiku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400"
                >
                  <FaGithub size={26} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/amit-nayak-0a9165238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  <FaLinkedin size={26} />
                </motion.a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;