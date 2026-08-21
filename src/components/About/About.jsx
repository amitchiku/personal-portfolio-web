import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-black px-[7vw] lg:px-[10vw] py-24 flex items-center"
    >
      {/* Animated Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        
        {/* Purple Gradient */}
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -80, 80, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 opacity-20 blur-[140px] rounded-full"
        />

        {/* Pink Gradient */}
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 80, -80, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600 opacity-20 blur-[140px] rounded-full"
        />

        {/* Floating Circles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: 0,
              opacity: 0.2,
            }}
            animate={{
              y: [-20, -120, -20],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
            }}
            className="absolute bg-purple-500 rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-20 w-full">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          {/* Small Intro */}
          <motion.p
            animate={{
              letterSpacing: ["2px", "5px", "2px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="uppercase text-purple-400 tracking-[4px] font-semibold mb-5"
          >
            Welcome To My Portfolio
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight"
          >
            Hi, I'm
          </motion.h1>

          {/* Name */}
          <motion.h2
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="text-6xl sm:text-7xl md:text-8xl font-black mt-3 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-[length:300%] bg-clip-text text-transparent"
          >
            Amit Nayak
          </motion.h2>

          {/* Typing Animation */}
          <div className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-white">I am a </span>

            <span className="text-purple-400">
              <TypeAnimation
                sequence={[
                  "Python Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Full Stack Engineer",
                  2000,
                  "React Specialist",
                  2000,
                  "Backend Developer",
                  2000,
                  "Creative Coder",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-gray-300 text-lg leading-9 mt-10 max-w-2xl"
          >
          Computer Science & Engineering student at Ajay Binay Institute of Technology, Cuttack, with strong expertise in MERN Stack, Django, Python, React, Node.js, and MongoDB. Passionate about building scalable, high-performance web applications and continuously learning modern software engineering, AI, and cloud technologies.

            <br />
            <br />
            I enjoy building modern, scalable web applications with intuitive user experiences and real-world functionality. My portfolio includes a Weather Trigger Campaign platform, Travel Booking Platform, Gaming Website, and E-commerce Application.

          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12 justify-center md:justify-start">
            
            {/* Resume Button */}
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 40px #a855f7",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1cTxFcdmD_putnS_WVAP3e9sgBRYRfOaZ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden px-10 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600"
            >
              DOWNLOAD CV
            </motion.a>

            {/* Contact */}
            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "#9333ea",
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-4 rounded-full border border-purple-500 text-white font-bold text-lg"
            >
              CONTACT ME
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-12 justify-center md:justify-start">
            
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.5,
                  rotate: 360,
                }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-full border border-purple-500 flex items-center justify-center text-white text-2xl cursor-pointer hover:bg-purple-600"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1200}
            gyroscope={true}
            className="relative"
          >
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-25px] border-2 border-dashed border-purple-500 rounded-full"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-50px] border border-pink-500 rounded-full"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-[100px] opacity-40 animate-pulse"></div>

            {/* Profile Image */}
            <motion.img
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              src="https://pbs.twimg.com/media/HJEkrRzaAAAePWP?format=jpg&name=small"
              alt="Amit Nayak"
              className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] rounded-full object-cover border-[6px] border-purple-500 shadow-[0_0_80px_rgba(168,85,247,0.8)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
