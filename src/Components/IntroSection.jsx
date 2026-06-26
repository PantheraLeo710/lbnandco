import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <div className="white-wrapper" id="intro-section">
      <section style={{ maxWidth: "1000px", margin: "auto", padding: "2rem", textAlign: "center" }}>
        
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
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#444", lineHeight: "1.8" }}
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

        {/* --- THE NEW DESIGNER LOCATION BANNER --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "4px", // Wide spacing for luxury feel
            textTransform: "uppercase",
            color: "#1B263B"
          }}
        >
          <span>Kerala</span>
          <span style={{ color: "#A67C52" }}>•</span>
          <span>Maharashtra</span>
          <span style={{ color: "#A67C52" }}>•</span>
          <span>United Kingdom</span>
          <span style={{ color: "#A67C52" }}>•</span>
          <span>Oman</span>
        </motion.div>

      </section>
    </div>
  );
};

export default IntroSection;