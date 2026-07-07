import React from "react";

import { motion } from "framer-motion";

import {
  SiPython,
  SiC,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiDjango,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiCanva,
  SiVercel,
  SiRender,
} from "react-icons/si";

import {
  FaJava,
  FaDatabase,
  FaFigma,
  FaCss3Alt,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend Development",
    color: "from-pink-500 to-purple-500",
    data: [
      { name: "HTML", icon: <SiHtml5 />, level: "95%" },
      { name: "CSS", icon: <FaCss3Alt />, level: "92%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "90%" },
      { name: "React", icon: <SiReact />, level: "88%" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: "93%" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: "85%" },
    ],
  },

  {
    title: "Backend Development",
    color: "from-cyan-500 to-blue-500",
    data: [
      { name: "Node.js", icon: <SiNodedotjs />, level: "82%" },
      { name: "Express", icon: <SiExpress />, level: "80%" },
      { name: "Django", icon: <SiDjango />, level: "88%" },
      { name: "MySQL", icon: <SiMysql />, level: "84%" },
      { name: "MongoDB", icon: <SiMongodb />, level: "80%" },
      { name: "SQLite", icon: <FaDatabase />, level: "75%" },
    ],
  },

  {
    title: "Programming Languages",
    color: "from-purple-500 to-cyan-500",
    data: [
      { name: "Python", icon: <SiPython />, level: "90%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "88%" },
      { name: "Java", icon: <FaJava />, level: "72%" },
      { name: "C", icon: <SiC />, level: "70%" },
    ],
  },

  {
    title: "Tools & Platforms",
    color: "from-orange-500 to-pink-500",
    data: [
      { name: "Git", icon: <SiGit />, level: "90%" },
      { name: "GitHub", icon: <SiGithub />, level: "92%" },
      { name: "VS Code", icon: <VscVscode />, level: "95%" },
      { name: "Postman", icon: <SiPostman />, level: "84%" },
      { name: "Vercel", icon: <SiVercel />, level: "86%" },
      { name: "Render", icon: <SiRender />, level: "82%" },
      { name: "Canva", icon: <SiCanva />, level: "80%" },
      { name: "Figma", icon: <FaFigma />, level: "75%" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-28 px-[8vw]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-700 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-700 opacity-20 blur-[140px] rounded-full"></div>

      {/* FLOATING PARTICLES */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-24"
      >
        <h2
          className="text-5xl md:text-7xl font-black
          bg-gradient-to-r from-purple-400
          via-pink-500 to-cyan-400
          bg-clip-text text-transparent"
        >
          SKILLS
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          Technologies and tools I use to build scalable,
          modern, and high-performance applications.
        </p>
      </motion.div>

      {/* SKILL GRID */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
            }}
            className="group relative overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/5 backdrop-blur-2xl
            p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          >
            {/* HOVER GRADIENT */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100
              transition duration-700
              bg-gradient-to-br ${category.color}/10`}
            />

            {/* TITLE */}
            <div className="relative mb-10">
              <h3
                className={`text-3xl font-black
                bg-gradient-to-r ${category.color}
                bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div
                className={`mt-3 w-24 h-1 rounded-full
                bg-gradient-to-r ${category.color}`}
              />
            </div>

            {/* SKILLS */}
            <div className="space-y-6">
              {category.data.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                    x: 5,
                  }}
                  className="relative"
                >
                  {/* TOP */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      
                      {/* ICON */}
                      <div
                        className={`w-14 h-14 rounded-2xl
                        bg-gradient-to-r ${category.color}
                        flex items-center justify-center
                        text-2xl text-white shadow-lg`}
                      >
                        {skill.icon}
                      </div>

                      {/* NAME */}
                      <span className="text-white text-lg font-semibold">
                        {skill.name}
                      </span>
                    </div>

                    {/* PERCENT */}
                    <span className="text-gray-400 font-bold">
                      {skill.level}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                      }}
                      className={`h-full rounded-full
                      bg-gradient-to-r ${category.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LARGE BG TEXT */}
            <div
              className="absolute -bottom-6 -right-2
              text-[90px] font-black
              text-white/[0.03]
              select-none"
            >
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;