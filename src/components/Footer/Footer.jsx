import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  // Smooth Scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/amitchiku",
      color: "hover:text-purple-400",
    },

    {
      icon: <FaTwitter />,
      link: "https://x.com/AmitNay81643954",
      color: "hover:text-sky-400",
    },

    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/amit-nayak-0a9165238/",
      color: "hover:text-cyan-400",
    },

    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/__amit__chiku__19/",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-white pt-24 pb-10 px-[8vw]">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-700 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-700 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Top Gradient Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-14"></div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-wide">
            <span className="text-purple-500">&lt;</span>

            <span className="bg-gradient-to-r from-white via-gray-300 to-cyan-300 bg-clip-text text-transparent">
              Amit Nayak
            </span>

            <span className="text-purple-500">/&gt;</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Passionate Full Stack Developer focused on building
            futuristic, scalable, and visually stunning digital experiences.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-wrap justify-center gap-8 mt-14"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.id)}
              className="relative text-gray-300 hover:text-white transition duration-300 text-lg font-medium group"
            >
              {item.name}

              {/* Hover Underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-8 mt-14"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.25,
                rotate: 10,
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className={`w-14 h-14 rounded-full border border-white/10
              bg-white/5 backdrop-blur-lg
              flex items-center justify-center
              text-2xl text-gray-300
              shadow-lg hover:shadow-purple-500/30
              transition-all duration-300 ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-16"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          <p className="text-center text-gray-500 text-sm md:text-base tracking-wide">
            © 2026 Amit Nayak — Designed & Developed with 🩵 by chiku
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;