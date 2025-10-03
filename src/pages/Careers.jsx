import React from "react";

const Careers = () => {
  const jobs = [
    { title: "Frontend Developer", location: "Remote", type: "Full-time" },
    { title: "Backend Developer", location: "Remote", type: "Full-time" },
    { title: "Product Manager", location: "Remote", type: "Full-time" },
  ];

  return (
    <div style={{ padding: "6rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Careers at Evidura</h2>
      <p>Join our team and help us revolutionize digital evidence management.</p>
      <div style={{ marginTop: "2rem" }}>
        {jobs.map((job, index) => (
          <div key={index} style={{ padding: "1.5rem", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "1rem" }}>
            <h3>{job.title}</h3>
            <p>{job.location} | {job.type}</p>
            <button style={{ marginTop: "0.5rem", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", backgroundColor: "#ff7a59", color: "#fff", cursor: "pointer" }}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
