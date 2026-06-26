import React from "react";
import { motion } from "framer-motion";

// === IMAGE IMPORTS ===
import product2 from "../Images/about-us-left.webp"; 
import product4 from "../Images/tender-care-small.jpg"; 
import product6 from "../Images/mango-thing-small.jpg"; 

const Products = () => {
  // === YOUR FEATURED CATEGORIES ===
  const productList = [
    { id: 1, name: "That Mango Thing", subtitle: "An intense chocolate indulgence layered to perfection... Rich, warm and irresistibly satisfying", img: product6 },
    { id: 2, name: "Rafaello Royale", subtitle: "A rich soft layers with perfect balance of textures... Creamy, crunchy and deeply satisfying.", img: product4 },
    { id: 3, name: "Tender Loving Care", subtitle: "A soft delicate indulgengence with a smooth tropical touch... Light, creamy and beautifully comforting", img: product2 },
  ];

  // === ANIMATION SETTINGS ===
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="white-wrapper" id="products">
      <section style={{ maxWidth: "1200px", margin: "auto", padding: "2rem", textAlign: "center" }}>
        
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontSize: "36px", 
            fontWeight: "800", 
            color: "#1B263B", // Midnight Blue 
            marginBottom: "3rem" 
          }}
        >
          LUXE <span style={{ fontFamily: "'Dancing Script', cursive", color: "#A67C52", fontWeight: "normal", textTransform: "none" }}>Edition</span>
        </motion.h2>

        {/* Products Grid Layout */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "40px" 
        }}>
          {productList.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }} // Smooth upward float on the whole card
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                cursor: "pointer",
                border: "1px solid #f0f0f0"
              }}
            >
              {/* Image Container with Hover Zoom */}
              <div style={{ height: "250px", width: "100%", overflow: "hidden" }}>
                <motion.img 
                  src={product.img} 
                  alt={product.name} 
                  whileHover={{ scale: 1.05 }} // Gentle zoom on just the image
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              
              {/* Text Container */}
              <div style={{ padding: "25px 20px" }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", margin: "0 0 10px 0", color: "#1B263B" }}>
                  {product.name}
                </h3>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#666", margin: 0 }}>
                  {product.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Products;