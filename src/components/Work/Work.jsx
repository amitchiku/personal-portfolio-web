import React from "react";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Travel Booking",

    description:
      "Modern travel booking platform with destination exploration, booking system, and responsive UI.",

    tech: [
      "React",
      "Django",
      "MySQL",
      "Tailwind",
    ],

    image:
      "https://res.cloudinary.com/dezmqduah/image/upload/v1779697629/Screenshot_2026-05-25_135651_zopetq.png",

    live:
      "https://travell-booking-web.vercel.app",

    github:
      "https://github.com/amitchiku/travell-booking-web",
  },

  {
    title: "Gaming Platform",

    description:
      "Interactive gaming web platform integrating real-time gaming APIs and immersive UI design.",

    tech: [
      "Django",
      "React",
      "REST API",
      "Tailwind",
    ],

    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://gaming-website-lad.vercel.app/",

    github:
      "https://github.com/amitchiku/gaming-website",
  },
  {
    title: "Personal portfolio website",

    description:
      "Modern portfolio website showcasing projects, skills, and experience with an interactive UI.",
  
      tech:[
        "React",
        "Tailwind Css",
        "Framer Motion",
        
      ],
      image:
      "https://res.cloudinary.com/dezmqduah/image/upload/v1779697317/Screenshot_2026-05-25_135140_de1v3d.png",

      Live:
      "",
      github:
      "https://github.com/amitchiku/personal-portfolio-web",

  },

  {
    title: "Weather-triggered-web",

    description:
      "Weather-triggered campaign web application for Nimbu Fresh, integrating real-time weather data and dynamic content delivery.",

    tech: [
      "Node",
      "Express",
      "MongoAtlas",
      "tailwind"
    ],

    image:
      "https://res.cloudinary.com/dezmqduah/image/upload/v1785226592/Screenshot_2026-07-28_134255_wu0wnt.png",

    live:
      "https://nimbu-fresh-weather-triggered-campa.vercel.app/",

    github:
      "https://github.com/amitchiku/Nimbu-Fresh-Weather-triggered-campaign",
  },
  {
    title: "E-commerce Website",

    description:
    "it is a modern e-commerce website with a focus on user experience and seamless shopping functionality.",

    tech:[
      "mongoDB",
      "Express",
      "React",
      "Node.js",

    ],
    image:
    "https://res.cloudinary.com/dezmqduah/image/upload/v1779707220/Screenshot_2026-05-25_163642_i08jqy.png",

    live:
    "https://mern-shop-abxs.onrender.com/",

    github:
    "https://github.com/amitchiku/ecommerce-website",
  },
  {
    title: "AI Saas Dashboard",

    description:
    "AI-powered SaaS dashboard with real-time analytics and modern data visualization.",

    tech:[
      "React",
      "Tailwind Css",
      "framer motion",
    ],
    image:
    "https://res.cloudinary.com/dezmqduah/image/upload/v1779714600/Screenshot_2026-05-25_183841_ircme6.png",

    live:
    "https://saasdashboard-rho.vercel.app",

    github:
    "https://github.com/amitchiku/AI-Saas-Dashboard"
  }
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-black py-28 px-[8vw]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-700/20 blur-[140px] rounded-full" />

      {/* HEADING */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 text-center mb-20"
      >
        <p
          className="uppercase tracking-[0.3em]
          text-purple-400 font-semibold"
        >
          My Projects
        </p>

        <h2
          className="mt-5 text-5xl md:text-7xl
          font-black text-white"
        >
          Featured
          <span
            className="bg-gradient-to-r
            from-purple-400 via-pink-500 to-cyan-400
            bg-clip-text text-transparent"
          >
            {" "}
            Work
          </span>
        </h2>

        <p
          className="mt-6 max-w-2xl mx-auto
          text-gray-400 text-lg leading-8"
        >
          A collection of modern full-stack
          applications crafted with premium UI,
          performance, and scalable architecture.
        </p>
      </motion.div>

      {/* GRID */}
      <div
        className="relative z-10
        grid md:grid-cols-2 xl:grid-cols-3
        gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
            className="group relative"
          >
            {/* GLOW */}
            <div
              className="absolute -inset-[1px]
              rounded-[32px]
              bg-gradient-to-r
              from-purple-500/40
              via-pink-500/20
              to-cyan-500/40
              opacity-0 group-hover:opacity-100
              blur-lg transition duration-700"
            />

            {/* CARD */}
            <div
              className="relative overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-white/5 backdrop-blur-2xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px]
                  object-cover transition duration-700
                  group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                {/* TITLE */}
                <h3
                  className="text-2xl font-black
                  text-white"
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="mt-4 text-gray-400
                  leading-7 text-sm"
                >
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full
                      bg-white/5 border border-white/10
                      text-gray-300 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-2xl
                    bg-white text-black
                    font-semibold text-sm
                    flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </motion.a>

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-2xl
                    border border-white/10
                    bg-white/5 backdrop-blur-xl
                    text-white font-semibold text-sm
                    flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
