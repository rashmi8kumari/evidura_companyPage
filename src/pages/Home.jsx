import React from "react";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import ProductCard from "../components/ProductCard/ProductCard";
import TeamMember from "../components/TeamMember/TeamMember";
import ContactForm from "../components/ContactForm/ContactForm";
import memberImg1 from "../assets/images/team1.jpg";
import memberImg2 from "../assets/images/team2.jpg";
import memberImg3 from "../assets/images/team3.jpg";
import memberImg4 from "../assets/images/team4.jpg";

const Home = () => {
  const team = [
    { name: "Rashmi Kumari", role: "CEO & Founder", img: memberImg1 },
    { name: "Shagufta Kadri", role: "CTO & Co-Founder", img: memberImg2 },
    { name: "Parikshit Vyas", role: "Product Manager", img: memberImg3},
    { name: "Shivam Chourasiya", role: "Advisory", img: memberImg4},

  ];

  return (
    <div>
      <Hero />
      <AboutSection />
      <ProductCard />
      <section className="team-section" style={{ padding: "6rem 3rem", textAlign: "center" }}>
        <h2>Our Team</h2>
        <div className="team-container" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
          {team.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} img={member.img} />
          ))}
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default Home;


