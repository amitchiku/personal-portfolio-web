import React, { useRef, useState } from "react";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_ig174yc",
        "template_sebtb38",
        form.current,
        "aTzZLjfnuzZ4o3UuE"
      )
      .then(
        () => {
          toast.success("Message Sent Successfully 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });

          form.current.reset();

          setLoading(false);
        },

        () => {
          toast.error("Failed To Send Message ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });

          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "amitchiku2006@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 8984678191",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Jagatsinghpur, Odisha, India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28 px-[8vw]"
    >
      <ToastContainer />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-700 opacity-20 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-20"
      >
        <h2
          className="text-5xl md:text-7xl font-black
          bg-gradient-to-r from-purple-400
          via-pink-500 to-cyan-400
          bg-clip-text text-transparent"
        >
          GET IN TOUCH🩵
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          Let’s build something amazing together. Feel free to
          contact me for collaborations, projects, or opportunities.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-4xl font-black text-white leading-tight">
              Let’s Talk About Your Next Project 🚀
            </h3>

            <p className="text-gray-400 mt-6 leading-8 text-lg">
              I’m always open to discussing new projects,
              creative ideas, freelance opportunities,
              or collaborations.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-5">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 10,
                  scale: 1.02,
                }}
                className="flex items-center gap-5
                rounded-3xl border border-white/10
                bg-white/5 backdrop-blur-xl
                p-5 shadow-lg"
              >
                <div
                  className="w-14 h-14 rounded-2xl
                  bg-gradient-to-r from-purple-500 to-cyan-400
                  flex items-center justify-center
                  text-white text-xl"
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden
          rounded-[32px]
          border border-white/10
          bg-white/5 backdrop-blur-2xl
          p-8 md:p-10
          shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          {/* Glow */}
          <div
            className="absolute inset-0
            bg-gradient-to-br
            from-purple-500/10
            via-cyan-500/10
            to-pink-500/10"
          />

          <div className="relative">
            <h3 className="text-3xl font-black text-white mb-8">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <InputField
                type="email"
                name="user_email"
                placeholder="Your Email"
              />

              <InputField
                type="text"
                name="user_name"
                placeholder="Your Name"
              />

              <InputField
                type="text"
                name="subject"
                placeholder="Subject"
              />

              <motion.textarea
                whileFocus={{
                  scale: 1.01,
                }}
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full rounded-2xl
                bg-[#0f172a]
                border border-white/10
                p-4 text-white
                outline-none focus:border-purple-500
                transition duration-300"
              />

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl
                bg-gradient-to-r
                from-purple-600 via-pink-500 to-cyan-500
                text-white font-bold text-lg
                shadow-[0_0_30px_rgba(168,85,247,0.5)]
                hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]
                transition-all duration-500"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InputField = ({
  type,
  name,
  placeholder,
}) => {
  return (
    <motion.input
      whileFocus={{
        scale: 1.01,
      }}
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-full rounded-2xl
      bg-[#0f172a]
      border border-white/10
      p-4 text-white
      outline-none focus:border-purple-500
      transition duration-300"
    />
  );
};

export default Contact;