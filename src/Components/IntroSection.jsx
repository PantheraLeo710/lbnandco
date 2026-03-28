import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <div className="white-wrapper" id="intro-section">
      <section style={{ maxWidth: "1000px", margin: "auto", padding: "5rem 2rem", textAlign: "center" }}>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "36px", color: "#1B263B", marginBottom: "2rem" }}
        >
          OUR <span style={{ fontFamily: "'Dancing Script', cursive", color: "#A67C52", fontWeight: "normal", textTransform: "none" }}>Story</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Paprika', cursive", fontSize: "16px", color: "#444", lineHeight: "1.8" }}
        >
          <p style={{ marginBottom: "20px" }}>
            Born in the vibrant streets of Calicut in 2025, LBN & Co. began with a singular vision: to honor the rich, time-tested traditions of dessert-making. We draw our inspiration from the intricate layers of history, bringing authentic, honey-soaked Egyptian sweets and classic heritage recipes to your table. 
          </p>
          <p style={{ marginBottom: "20px" }}>
            Every pastry we craft is made with a dedication to the kind of timeless, meticulous design found in historical architecture and traditional artistry. We believe a dessert shop should feel welcoming, a place where deep roots meet youthful energy.
          </p>
          <p>
            <strong>This week, we are thrilled to begin a new chapter.</strong> We are officially opening the doors to our second home in Mira Road, Mumbai, ready to share our passion for authentic, traditional sweetness with a brand new neighborhood.
          </p>
        </motion.div>

      </section>
    </div>
  );
};

export default IntroSection;