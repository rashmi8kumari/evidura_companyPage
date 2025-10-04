import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import "../styles/About.css"; // Import the About page CSS

const About = () => {
  return (
    <div>
      {/* Hero/About Section */}
      <AboutSection />

      {/* Additional About Content */}
      <section className="about-page">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Trust:</strong> Ensuring integrity and security of every piece of evidence.</li>
          <li><strong>Transparency:</strong> Clear, auditable processes for all stakeholders.</li>
          <li><strong>Innovation:</strong> Continuous improvement and adoption of the latest technologies.</li>
          <li><strong>Collaboration:</strong> Working closely with law enforcement, legal professionals, and institutions to solve real-world challenges.</li>
          <li><strong>Excellence:</strong> Delivering reliable, high-quality solutions that make a tangible difference in the justice system.</li>
        </ul>

        <h3>Why Choose Evidura?</h3>
        <p>
          With Evidura, organizations can:
        </p>
        <ul>
          <li>Streamline the entire evidence lifecycle from collection to courtroom presentation.</li>
          <li>Reduce human error and improve operational efficiency.</li>
          <li>Ensure compliance with industry best practices and legal standards.</li>
          <li>Maintain secure, centralized access to digital evidence for authorized personnel.</li>
        </ul>

        <h3>Our Commitment</h3>
        <p>
          At Evidura, we are committed to building a future where justice is faster, more accurate, and fully supported by technology. 
          Every solution we develop is guided by our core principles, ensuring that our clients can rely on us to protect the integrity of digital evidence.
        </p>
      </section>
    </div>
  );
};

export default About;



