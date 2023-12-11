import React, { useState, useEffect } from "react";
import backgroundImage from "../img/herobackground.jpg";
import spacer2 from "../img/spacer2.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypingAnimation from "./TypingAnimation";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos > 0;

      setShowNav(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
        className="relative flex flex-col items-center justify-center p-10 overflow-hidden"
      >
        <TypingAnimation />
        <div className="scroll-prompt hover:cursor-pointer">
          <a href="#about">
            <div className="scroll-prompt-shape"></div>
          </a>
        </div>
        <div className="absolute top-0 right-0 flex p-10 text-text">
          <motion.a
            whileHover={{
              scale: 1.3,
            }}
            href="https://github.com/joelwilson005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mx-4 text-3xl text-white" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.3,
            }}
            href="https://www.linkedin.com/in/joel-wilson-50a168222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mx-4 text-3xl text-white" />
          </motion.a>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 w-full first-spacer"
          style={{ backgroundImage: `url(${spacer2})` }}
        ></div>
      </div>
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 z-10 flex w-full p-4 text-text bg-background"
          >
            <motion.a
              whileHover={{
                scale: 1.3,
              }}
              href="https://github.com/joelwilson005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mx-4 text-3xl text-white" />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.3,
              }}
              href="https://www.linkedin.com/in/joel-wilson-50a168222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mx-4 text-3xl text-white" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;