import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  // === YOUR MENU ITEMS ===
  // Just edit the text inside the quotes to update your menu!
  const menuItems = [
    { name: "LBN Skewer", desc: "Fluffy pancakes, sweet strawberries, ripe bananas, and decadent chocolates." },
    { name: "Strawberry Bliss", desc: "Strawberry Kunafa Chocolate dessert blending East meets West." },
    { name: "LBN DBC", desc: "Velvety chocolate and smooth ice cream come together in a chocolate lover's dream." },
    { name: "LBN Cheese Blast", desc: "Creamy cheese, crunchy pistachio kunafa, and rich chocolate sauce." },
    { name: "Loaded Waffle", desc: "Crunchy waffles, creamy ice cream, sweet bananas and rich chocolate sauce." },
    { name: "Le Salankatia", desc: "A rich and creamy dessert infused with Middle East flavors." },
    { name: "LBN Koshary", desc: "A comforting traditional sweet treat featuring sticky rice cooked in milk." },
    { name: "That Mango Thing", desc: "Sweet mangoes with the creaminess of cheese and the richness of white chocolate." },
    { name: "LBN Dream Boat", desc: "Pancakes topped with fresh strawberries, marshmallows, and chocolate shavings." },
    { name: "Biscoff Sensation", desc: "A creamy baked cheesecake with an airy, mousse-like texture." },
    { name: "Tender Loving Care TLC", desc: "Tender coconut paired with creamy white chocolate and a hint of tangy cream cheese." },
    { name: "Sita Luxe", desc: "Experience the tropical twist of our Sitaphal White Chocolate Cream Cheese dessert." },
    { name: "Rafaello Royale", desc: "Crunchy coconut, creamy cheese, and sweet white chocolate." }
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
                
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#666", margin: 0, lineHeight: "1.5" }}>
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