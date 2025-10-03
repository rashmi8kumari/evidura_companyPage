import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AboutSection.css";
import aboutImg from "../../assets/images/about-hero.jpg";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-section">
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Evidura</h2>
        <p>
          Evidura – Where Technology Meets Justice. We simplify digital evidence management for law enforcement and legal professionals, ensuring integrity, transparency, and efficiency at every step.
        </p>

        {/* Expandable content */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="extra-text"
            >
              {/* Story */}
              <h3>Our Story</h3>
              <p>
                Evidura was founded when our team recognized the growing challenges in handling digital evidence in law enforcement and legal proceedings. Traditional methods were often slow, error-prone, and lacked transparency. Driven by a passion for justice and technology, we set out to build a platform that streamlines evidence collection, tracking, and management.
              </p>

              {/* Mission */}
              <h3>Our Mission</h3>
              <p>
                To empower law enforcement agencies, forensic labs, and legal professionals with secure, efficient, and transparent digital solutions for evidence management. We aim to simplify complex workflows, reduce human errors, and uphold the integrity of justice at every step.
              </p>

              {/* Vision */}
              <h3>Our Vision</h3>
              <p>
                To be the global standard for digital evidence management, where technology enables faster, safer, and more accountable legal processes. We strive to create a future where every piece of digital evidence is secure, traceable, and reliable, ensuring justice is served with confidence.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="learn-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      </motion.div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={aboutImg} alt="About Evidura" />
      </motion.div>
    </section>
  );
};

export default AboutSection;




