import React from "react";

const Blog = () => {
  const posts = [
    { title: "Evidura launches new dashboard", date: "Sept 2025" },
    { title: "How to manage digital evidence securely", date: "Aug 2025" },
    { title: "The future of forensic technology", date: "July 2025" },
  ];

  return (
    <div style={{ padding: "6rem 3rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Blog & News</h2>
      <p>Latest updates, press releases, and articles from Evidura.</p>
      <div style={{ marginTop: "2rem" }}>
        {posts.map((post, index) => (
          <div key={index} style={{ padding: "1.5rem", borderBottom: "1px solid #ccc" }}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <button style={{ padding: "0.5rem 1rem", borderRadius: "5px", border: "none", backgroundColor: "#1c3d5a", color: "#fff", cursor: "pointer" }}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
