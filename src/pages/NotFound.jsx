import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "6rem 3rem" }}>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ padding: "0.5rem 1rem", backgroundColor: "#ff7a59", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
