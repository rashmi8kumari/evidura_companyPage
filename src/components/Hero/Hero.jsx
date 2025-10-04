import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const handleRequestDemo = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScnDK4n9O3l4u8DFM4quVrB2_gH8ZoU1AToJZQsL626GkLtUw/viewform?usp=header",
      "_blank"
    );
  };

  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Where Technology Meets Justice
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Evidura simplifies digital evidence management for law enforcement and legal professionals.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="cta-btn"
        onClick={handleRequestDemo}
      >
        Request Demo
      </motion.button>
    </section>
  );
};

export default Hero;




