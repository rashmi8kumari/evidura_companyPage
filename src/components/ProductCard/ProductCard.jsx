import React from "react";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = () => {
  const products = [
    {
      title: "Digital Evidence Chain of Custody",
      description: "Track and manage evidence securely from collection to court.",
    },
    {
      title: "Forensic Lab Integration",
      description: "Seamless collaboration with forensic labs and case workflows.",
    },
    {
      title: "Legal Tech Solutions",
      description: "Simplify legal processes with smart digital tools.",
    },
  ];

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <motion.div
            className="product-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;

