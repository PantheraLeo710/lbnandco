import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  // === YOUR MENU ITEMS ===
  // Just edit the text inside the quotes to update your menu!
  const menuItems = [
    { name: "Midnight Mocha Cake", price: "₹150", desc: "Rich espresso-infused chocolate sponge, baked fresh daily." },
    { name: "Caramel Sea Salt Brownie", price: "₹120", desc: "Fudgy dark chocolate center with a crisp, sweet top." },
    { name: "Classic Butter Croissant", price: "₹90", desc: "Flaky, golden, and buttery. Perfect for the evening break." },
    { name: "Hazelnut Truffle Slice", price: "₹180", desc: "Premium hazelnut ganache layered with soft vanilla sponge." },
    { name: "Choco-Chip Cookie", price: "₹60", desc: "Warm, gooey, and packed with dark chocolate chunks." },
    { name: "Vanilla Bean Cupcake", price: "₹80", desc: "Light vanilla sponge topped with our signature buttercream." }
  ];

  // === ANIMATION SETTINGS ===
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="white-wrapper" id="menu">
      <section className="menu-section" style={{ maxWidth: "1200px", margin: "auto", padding: "5rem 2rem" }}>
        
        {/* Title Section */}
        <motion.h2
          className="menu-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          OUR <span style={{ fontFamily: "'Dancing Script', cursive", color: "#A67C52", textTransform: "none" }}>Menu</span>
        </motion.h2>

        {/* Menu Grid Layout */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "30px" 
        }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }} // Smooth lift effect on hover
              style={{
                padding: "25px",
                border: "1px solid #eaeaea",
                borderRadius: "12px",
                backgroundColor: "#fff",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.03)",
                transition: "box-shadow 0.3s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "20px", margin: 0, color: "#1B263B" }}>
                  {item.name}
                </h3>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold", color: "#A67C52", fontSize: "18px" }}>
                  {item.price}
                </span>
              </div>
              <p style={{ fontFamily: "'Paprika', cursive", fontSize: "14px", color: "#666", margin: 0, lineHeight: "1.5" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Menu;