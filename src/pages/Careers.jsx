import React from "react";
import "../styles/Careers.css";  // 👈 CSS import

const Careers = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScJdLSQayFIBK_H3NRIcitMoTGSb7D9494VBemmccTuUjfVMQ/viewform?usp=header"; // apna Google Form link daalna

  const jobs = [
    { title: "Frontend Developer Intern", location: "Remote", type: "Internship" },
    { title: "Backend Developer Intern", location: "Remote", type: "Internship" },
    { title: "Full Stack Developer Intern", location: "Remote", type: "Internship" },
    { title: "UI/UX Designer Intern", location: "Remote", type: "Internship" },
    { title: "Digital Marketing Intern", location: "Remote", type: "Internship" },
    { title: "Data Analyst Intern", location: "Remote", type: "Internship" },
    { title: "Cybersecurity Intern", location: "Remote", type: "Internship" },
    { title: "AI/ML Research Intern", location: "Remote", type: "Internship" },
    { title: "Content Writer Intern", location: "Remote", type: "Internship" },
    { title: "HR Executive", location: "Remote", type: "Full-time" },
    { title: "Business Executive", location: "Remote", type: "Full-time" },
  ];

  return (
    <div className="careers-container">
      <h2 className="careers-title">Careers at Evidura</h2>
      <p className="careers-subtitle">
        Join our team and help us revolutionize digital evidence management.
      </p>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location} | {job.type}</p>
            <button 
              className="apply-btn"
              onClick={() => window.open(formLink, "_blank")}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;




