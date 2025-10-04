import React from "react";
import { motion } from "framer-motion";
import "./TeamMember.css";

const TeamMember = ({ name, role, img, bio }) => {
  return (
    <motion.div
      className="team-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      {bio && <p className="bio">{bio}</p>}
    </motion.div>
  );
};

export default TeamMember;

