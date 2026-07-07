import React, { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  IoChatbubbleEllipses,
  IoClose,
  IoPaperPlane,
} from "react-icons/io5";

import { RiRobot2Fill } from "react-icons/ri";

import {
  FaUser,
  FaGithub,
  FaReact,
  FaPython,
} from "react-icons/fa";

let userName = null;
let lastTopic = null;

const withName = (text) =>
  userName
    ? text.replace("{name}", `, ${userName}`)
    : text.replace("{name}", "");

const getReply = (input) => {
  const msg = input.toLowerCase().trim();

  // NAME DETECTION
  const nameMatch = input.match(
    /(?:my name(?:\s+is)?|call me|i(?:'m| am) (?:called|named)|i go by)\s+([A-Za-z]{2,})/i
  );

  if (nameMatch) {
    userName =
      nameMatch[1].charAt(0).toUpperCase() +
      nameMatch[1].slice(1);

    return {
      text: `Nice to meet you, ${userName}! 🚀

I'm Amit's AI Portfolio Assistant.

I can help you explore:
• Skills & Technologies
• Projects & Live Demos
• Experience & Education
• Resume & Contact Information

What would you like to know today?`,
      links: [],
    };
  }

  // GREETING
  if (
    /(hi|hello|hey|hola|good morning|good evening|good afternoon)/i.test(
      msg
    )
  ) {
    return {
      text: `Hello${withName("{name}")}! 👋

Welcome to Amit Nayak's interactive portfolio assistant.

Ask me anything about:
• Projects
• Skills
• Education
• Experience
• Resume
• Contact Information`,
      links: [],
    };
  }

  // ABOUT
  if (
    /(about|who is amit|introduce|amit nayak)/i.test(
      msg
    )
  ) {
    return {
      text: `👨‍💻 Amit Nayak is a passionate Full Stack Developer and Computer Science Engineering student.

🚀 Core Expertise:
• Python & Django
• React & Tailwind CSS
• Node.js & Express
• Full Stack Development

💡 He focuses on building modern, scalable, and visually stunning web applications.`,
      links: [],
    };
  }

  // SKILLS
  if (
    /(skills|tech stack|technology|framework|tools)/i.test(
      msg
    )
  ) {
    lastTopic = "skills";

    return {
      text: `🛠️ Amit's Technical Skills

Frontend:
⚛️ React
🎨 Tailwind CSS
📄 HTML5 & CSS3
🟨 JavaScript

Backend:
🐍 Django
🟢 Node.js
⚡ Express.js

Database:
🗄️ MySQL
🍃 MongoDB

Tools:
🔧 Git & GitHub
🚀 Vercel & Netlify
📮 Postman`,
      links: [],
    };
  }

  // PROJECTS
  if (
    /(project|portfolio|work|built)/i.test(msg)
  ) {
    lastTopic = "projects";

    return {
      text: `🚀 Featured Projects

🌍 Travel Booking Platform
🎮 Gaming Web Platform
📚 Book Management CRUD App
🛒 E-commerce Platform
🤖 AI Chatbot
🏥 AI-Sass Dashboard

You can ask about any specific project for details + live demo links.`,
      links: [
        {
          label: "GitHub Profile",
          url: "https://github.com/amitchiku",
        },
      ],
    };
  }

  // EDUCATION
  if (
    /(education|college|study|degree|abit|btech)/i.test(
      msg
    )
  ) {
    return {
      text: `🎓 Education

🏫 B.Tech in Computer Science & Engineering
Ajay Binay Institute of Technology (ABIT), Cuttack
2023 – 2027

📚 Focus Areas:
• Full Stack Development
• Software Engineering
• DBMS
• Cloud Computing
• Modern Web Technologies`,
      links: [],
    };
  }

  // CONTACT
  if (
    /(contact|hire|reach|freelance|job|internship)/i.test(
      msg
    )
  ) {
    return {
      text: `📬 Amit is open to opportunities and collaborations.

Feel free to connect through:
• GitHub
• LinkedIn
• Portfolio Contact Form`,
      links: [
        {
          label: "GitHub",
          url: "https://github.com/amitchiku",
        },
      ],
    };
  }

  // RESUME
  if (/(resume|cv)/i.test(msg)) {
    return {
      text: `📄 You can download Amit's professional resume here.`,
      links: [
        {
          label: "Download Resume",
          url: "https://drive.google.com/file/d/1BjPZ0WATfRWhIw8QjOLFDAU-30rxaJ9E/view",
        },
      ],
    };
  }

  // THANKS
  if (/(thanks|thank you|thx)/i.test(msg)) {
    return {
      text: `You're welcome${withName("{name}")}! 😊

Feel free to explore more about Amit's portfolio anytime.`,
      links: [],
    };
  }

  // BYE
  if (/(bye|goodbye|see you)/i.test(msg)) {
    return {
      text: `Goodbye${withName("{name}")}! 👋

Thanks for visiting Amit's portfolio.
Have an amazing day 🚀`,
      links: [],
    };
  }

  // DEFAULT
  return {
    text: `🤔 I couldn't fully understand that${withName("{name}")}.

Try asking about:
• Skills
• Projects
• Education
• Resume
• Contact`,
    links: [],
  };
};

// TYPING
const TypingIndicator = () => (
  <div className="flex items-end gap-3">
    <div
      className="w-8 h-8 rounded-2xl
      bg-gradient-to-r from-purple-500 to-cyan-400
      flex items-center justify-center"
    >
      <RiRobot2Fill className="text-white" />
    </div>

    <div
      className="px-5 py-4 rounded-3xl
      bg-white/5 backdrop-blur-xl
      border border-white/10
      flex gap-2"
    >
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></span>
      <span
        className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></span>
      <span
        className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></span>
    </div>
  </div>
);

// MESSAGE
const Message = ({ msg }) => {
  const isUser = msg.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`flex gap-3 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {!isUser && (
        <div
          className="w-9 h-9 rounded-2xl
          bg-gradient-to-r from-purple-500 to-cyan-400
          flex items-center justify-center shrink-0"
        >
          <RiRobot2Fill className="text-white" />
        </div>
      )}

      <div className="max-w-[78%] space-y-3">
        <div
          className={`px-5 py-4 rounded-[24px]
          text-sm leading-7 whitespace-pre-line
          ${
            isUser
              ? "text-white"
              : "text-gray-200 bg-white/5 border border-white/10 backdrop-blur-xl"
          }`}
          style={
            isUser
              ? {
                  background:
                    "linear-gradient(135deg,#9333ea,#ec4899,#06b6d4)",
                }
              : {}
          }
        >
          {msg.content.text}
        </div>

        {msg.content.links &&
          msg.content.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {msg.content.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full
                  text-xs border border-purple-500/30
                  bg-purple-500/10 text-purple-300
                  hover:bg-purple-500 hover:text-white
                  transition-all duration-300"
                >
                  🔗 {link.label}
                </a>
              ))}
            </div>
          )}
      </div>

      {isUser && (
        <div
          className="w-9 h-9 rounded-2xl
          bg-white/10 border border-white/10
          flex items-center justify-center shrink-0"
        >
          <FaUser className="text-white" />
        </div>
      )}
    </motion.div>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: {
        text: `Hello! 👋

I'm Amit's AI Portfolio Assistant 🚀

Ask me anything about:
• Projects
• Skills
• Experience
• Resume
• Education`,
        links: [],
      },
    },
  ]);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] =
    useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const userInput = (
      text ?? input
    ).trim();

    if (!userInput || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: {
          text: userInput,
          links: [],
        },
      },
    ]);

    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const reply = getReply(userInput);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);

      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    "About",
    "Projects",
    "Skills",
    "Education",
    "Resume",
    "Contact",
  ];

  return (
    <>
      {/* CHAT BUTTON */}
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() =>
          setIsOpen((o) => !o)
        }
        className="fixed bottom-8 right-8 z-50
        w-16 h-16 rounded-3xl
        flex items-center justify-center
        border border-white/10
        shadow-[0_0_40px_rgba(168,85,247,0.5)]
        backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(135deg,#9333ea,#ec4899,#06b6d4)",
        }}
      >
        {isOpen ? (
          <IoClose
            size={28}
            className="text-white"
          />
        ) : (
          <IoChatbubbleEllipses
            size={28}
            className="text-white"
          />
        )}
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            transition={{
              duration: 0.4,
            }}
            className="fixed bottom-28 right-6 z-50
            w-[360px] sm:w-[420px]
            h-[650px]
            rounded-[36px]
            overflow-hidden
            border border-white/10
            shadow-[0_0_80px_rgba(168,85,247,0.3)]
            backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,8,20,0.98), rgba(15,0,24,0.98))",
            }}
          >
            {/* GLOW */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-700 opacity-20 blur-[120px] rounded-full"></div>

            {/* HEADER */}
            <div
              className="relative z-10 flex items-center gap-4
              px-5 py-5 border-b border-white/10"
            >
              <div
                className="w-12 h-12 rounded-2xl
                bg-gradient-to-r from-purple-500 to-cyan-400
                flex items-center justify-center"
              >
                <RiRobot2Fill className="text-white text-xl" />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">
                  Amit AI Assistant
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

                  <span className="text-xs text-emerald-400">
                    {isTyping
                      ? "Typing..."
                      : "Online"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  userName = null;
                  lastTopic = null;

                  setMessages([
                    {
                      role: "assistant",
                      content: {
                        text: "Chat cleared successfully 🚀",
                        links: [],
                      },
                    },
                  ]);
                }}
                className="text-xs text-gray-400 hover:text-white transition"
              >
                Clear
              </button>
            </div>

            {/* MESSAGES */}
            <div
              className="relative z-10 flex-1 overflow-y-auto
              px-5 py-5 space-y-5 h-[470px]"
            >
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}

              {isTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* SUGGESTIONS */}
            <div className="relative z-10 px-5 flex flex-wrap gap-2 pb-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() =>
                    sendMessage(s)
                  }
                  className="px-4 py-2 rounded-full
                  text-xs text-purple-300
                  border border-purple-500/20
                  bg-purple-500/10
                  hover:bg-purple-500
                  hover:text-white
                  transition-all duration-300"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* INPUT */}
            <div
              className="relative z-10 px-5 py-4
              border-t border-white/10
              flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask about Amit..."
                className="flex-1 px-5 py-3
                rounded-2xl
                bg-white/5 backdrop-blur-xl
                text-white text-sm
                border border-white/10
                focus:outline-none
                focus:border-purple-500
                placeholder-gray-500"
              />

              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 12,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  sendMessage()
                }
                className="w-12 h-12 rounded-2xl
                flex items-center justify-center
                shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                style={{
                  background:
                    "linear-gradient(135deg,#9333ea,#ec4899,#06b6d4)",
                }}
              >
                <IoPaperPlane className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;