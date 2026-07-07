import React from "react";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";

const educationData = [
  {
    id: "01",
    degree: "B.Tech in Computer Science & Engineering",
    school: "Ajay Binay Institute of Technology, Cuttack",
    year: "2023 - 2027",
    description:
      "Focused on Full Stack Development, Software Engineering, DBMS, Data Structures, Networking, Cloud Technologies, and Modern Web Applications.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Official_logo_of_Biju_Patanaik_University_of_Technology.png",
    gradient: "from-purple-500 via-pink-500 to-cyan-500",
  },

  {
    id: "02",
    degree: "Higher Secondary Education",
    school: "S.V.M Higher Secondary School, Jagatsinghpur",
    year: "2021 - 2023",
    description:
      "Completed Science stream with Physics, Chemistry, Mathematics, and Biology while building strong analytical and problem-solving skills.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.knN4Wg6YNbk1skU-EWH3kwHaEK?pid=Api&P=0&h=180",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden bg-black py-32 px-[8vw]"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 opacity-20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-700 opacity-20 blur-[160px] rounded-full"></div>

      {/* ANIMATED PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 rounded-full bg-purple-500"
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
        className="relative z-10 text-center mb-28"
      >
        <motion.h2
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="text-6xl md:text-8xl font-black
          bg-gradient-to-r from-purple-400
          via-pink-500 to-cyan-400
          bg-[length:300%]
          bg-clip-text text-transparent"
        >
          EDUCATION
        </motion.h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-9">
          My academic journey and continuous learning experience
          that shaped my technical expertise and innovative mindset.
        </p>
      </motion.div>

      {/* MAIN TIMELINE */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* CENTER LINE */}
        <div
          className="absolute left-1/2 top-0 hidden lg:block
          w-[4px] h-full
          bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500
          opacity-30 rounded-full"
        />

        <div className="flex flex-col gap-24">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -120 : 120,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className={`relative flex flex-col lg:flex-row items-center
                ${
                  isLeft
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -12,
                    rotateX: 6,
                    rotateY: 4,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative group w-full lg:w-[45%]"
                >
                  {/* GLOW */}
                  <div
                    className={`absolute -inset-[2px]
                    bg-gradient-to-r ${edu.gradient}
                    rounded-[36px] blur-lg opacity-40
                    group-hover:opacity-80 transition duration-700`}
                  />

                  {/* CARD BODY */}
                  <div
                    className="relative overflow-hidden
                    rounded-[36px]
                    border border-white/10
                    bg-white/5 backdrop-blur-2xl
                    p-10"
                  >
                    {/* BACKGROUND NUMBER */}
                    <div
                      className="absolute -top-10 -right-4
                      text-[160px] font-black
                      text-white/[0.03]"
                    >
                      {edu.id}
                    </div>

                    {/* TOP SECTION */}
                    <div className="flex items-start justify-between gap-6">
                      
                      {/* LOGO */}
                      <motion.div
                        whileHover={{
                          rotate: 12,
                          scale: 1.08,
                        }}
                        className={`w-24 h-24 rounded-3xl
                        bg-gradient-to-r ${edu.gradient}
                        p-[2px] shadow-2xl`}
                      >
                        <div
                          className="w-full h-full rounded-3xl
                          bg-white flex items-center justify-center"
                        >
                          <img
                            src={edu.image}
                            alt={edu.school}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                      </motion.div>

                      {/* YEAR */}
                      <div
                        className={`px-5 py-3 rounded-2xl
                        bg-gradient-to-r ${edu.gradient}
                        text-white font-bold text-sm
                        shadow-lg`}
                      >
                        {edu.year}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-10">
                      
                      {/* DEGREE */}
                      <h3
                        className="text-3xl md:text-4xl
                        font-black text-white
                        leading-tight"
                      >
                        {edu.degree}
                      </h3>

                      {/* SCHOOL */}
                      <div className="flex items-center gap-3 mt-5">
                        <FaUniversity className="text-cyan-400" />

                        <p className="text-gray-300 text-lg">
                          {edu.school}
                        </p>
                      </div>

                      {/* DIVIDER */}
                      <div
                        className={`mt-8 h-[2px] w-full
                        bg-gradient-to-r ${edu.gradient}
                        opacity-30 rounded-full`}
                      />

                      {/* DESCRIPTION */}
                      <p
                        className="mt-8 text-gray-400
                        leading-9 text-[16px]"
                      >
                        {edu.description}
                      </p>

                      {/* BOTTOM ICONS */}
                      <div className="flex gap-6 mt-10">
                        
                        <div
                          className="w-14 h-14 rounded-2xl
                          bg-white/5 border border-white/10
                          flex items-center justify-center
                          text-purple-400 text-xl"
                        >
                          <FaGraduationCap />
                        </div>

                        <div
                          className="w-14 h-14 rounded-2xl
                          bg-white/5 border border-white/10
                          flex items-center justify-center
                          text-cyan-400 text-xl"
                        >
                          <FaCalendarAlt />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CENTER DOT */}
                <div
                  className="hidden lg:flex absolute left-1/2
                  -translate-x-1/2 z-20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className={`w-8 h-8 rounded-full
                    bg-gradient-to-r ${edu.gradient}
                    shadow-[0_0_40px_rgba(168,85,247,0.9)]`}
                  />
                </div>

                {/* EMPTY SPACE */}
                <div className="hidden lg:block w-[10%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;