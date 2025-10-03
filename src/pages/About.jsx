import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";

const About = () => {
  return (
    <div>
      <AboutSection />
      <section style={{ padding: "4rem 3rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Our Mission & Vision</h2>
        <p>
          At Evidura, our mission is to empower justice with technology. Our
          vision is a world where digital evidence is managed transparently,
          securely, and efficiently.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>Trust</li>
          <li>Security</li>
          <li>Transparency</li>
          <li>Innovation</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
