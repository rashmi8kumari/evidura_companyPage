import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "India's New Criminal Laws Emphasize Technology and Forensics",
      date: "July 2024",
      description: "The Indian government introduces three new criminal laws focusing on integrating technology and forensic science throughout all stages of the justice process, aiming to modernize the system and enhance transparency.",
      link: "https://economictimes.indiatimes.com/news/india/new-criminal-laws-hinge-on-technology-and-forensic-throughout-all-stages/articleshow/111412388.cms",
      image: "https://economictimes.indiatimes.com/thumb/msid-111412388,width-600,height-400,quality-80,overlay-etgovernment/photo.jpg"
    },
    {
      title: "Union Government to Establish 7 New CFSLs to Strengthen Forensic Infrastructure",
      date: "June 2025",
      description: "Union Home Minister Amit Shah announces plans to set up seven new Central Forensic Science Laboratories (CFSLs) across India, aiming to bolster the evidence-based criminal justice system.",
      link: "https://economictimes.indiatimes.com/news/india/amit-shah-unveils-plan-for-7-cfsls-9-new-nfsus/articleshow/121555089.cms",
      image: "https://economictimes.indiatimes.com/thumb/msid-121555089,width-600,height-400,quality-80,overlay-etgovernment/photo.jpg"
    },
    {
      title: "Forensic Justice: Mandates for Forensic Inspection of Heinous Crimes",
      date: "July 2024",
      description: "The Bhartya Nagarik Suraksha Sanhita (BNSS) mandates compulsory forensic inspection of heinous crime scenes, emphasizing scientific rigor and evidence probity in the Indian justice system.",
      link: "https://government.economictimes.indiatimes.com/blog/forensic-justice-bhartya-nagarik-surksha-sanhita-mandates-forensic-inspection-of-heinous-crimes/111549041",
      image: "https://economictimes.indiatimes.com/thumb/msid-111549041,width-600,height-400,quality-80,overlay-etgovernment/photo.jpg"
    },
    {
      title: "Conviction Rate to Rise by 40% with New Laws and AI Use, Says Amit Shah",
      date: "April 2025",
      description: "Union Home Minister Amit Shah highlights the potential of new laws and AI integration to boost the conviction rate by 40% within a decade, aiming to modernize the criminal justice system.",
      link: "https://economictimes.indiatimes.com/news/india/conviction-rate-to-rise-by-40-with-new-laws-and-ai-use-says-amit-shah-at-forensic-science-summit/121555089.cms",
      image: "https://economictimes.indiatimes.com/thumb/msid-121555089,width-600,height-400,quality-80,overlay-etgovernment/photo.jpg"
    },
    {
      title: "Govt's Big Push for Forensic Infrastructure Enhancement",
      date: "June 2024",
      description: "The Indian government approves a financial outlay of Rs. 2254.43 crore for the establishment of new forensic labs and enhancement of existing infrastructure, aiming to strengthen forensic capabilities.",
      link: "https://economictimes.indiatimes.com/news/india/govts-big-push-for-forensic-infrastructure-enhancement-with-financial-outlay-at-rs-2254-cr/121555089.cms",
      image: "https://economictimes.indiatimes.com/thumb/msid-121555089,width-600,height-400,quality-80,overlay-etgovernment/photo.jpg"
    }
  ];

  return (
    <div style={{ padding: "6rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Blog & News</h2>
      <p>Stay updated with the latest developments, insights, and press releases from Evidura.</p>

      <div style={{ marginTop: "3rem" }}>
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{
              padding: "2rem",
              borderBottom: "1px solid #ccc",
              marginBottom: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              backgroundColor: "#fff"
            }}
          >
            <h3 style={{ marginBottom: "0.5rem", color: "#1c3d5a" }}>{post.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1rem" }}>{post.date}</p>
            <p style={{ marginBottom: "1rem", color: "#333" }}>{post.description}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#ff7a59",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={e => e.target.style.backgroundColor = "#ff5722"}
                onMouseLeave={e => e.target.style.backgroundColor = "#ff7a59"}
              >
                Read More
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;


