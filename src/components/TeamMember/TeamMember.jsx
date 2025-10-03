import React from "react";
import { motion } from "framer-motion";
import "./TeamMember.css";
import memberImg from "../../assets/images/team-member.jpg"; // replace with actual image

const TeamMember = ({ name, role, img }) => {
  return (
    <motion.div
      className="team-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img src={img || memberImg} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </motion.div>
  );
};

export default TeamMember;
