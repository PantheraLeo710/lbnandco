import React, { useState } from "react";
import { motion } from "framer-motion";
import heroCookie from "../Images/hero-cookie.webp";
import lbnLogo from "../Images/lbn-logo.png"; 

const HeaderHero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // This stops the web address from changing!
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false); // Closes the sidebar after clicking
  };

  return (
    <>
      {/* === Fixed Top Section (Logo + Button) === */}
      <div className="top-bg">
        <div className="top-section">
          
          {/* Restored Transparent Logo */}
          {/* Restored Transparent Logo (Now with Framer Motion Scale) */}
          <motion.img
            src={lbnLogo}
            alt="LBN & Co."
            className="logo"
            initial={{ opacity: 0, y: -30, scale: 1.5 }} /* Added scale here */
            animate={{ opacity: 1, y: 0, scale: 1.5 }}   /* Added scale here */
            transition={{ duration: 0.8 }}
            style={{ 
              height: "45px", 
              width: "auto", 
              objectFit: "contain",
              transformOrigin: "left center" /* Still ensures it zooms outward to the right */
            }}
          />

          {/* Upgraded Professional SVG Button */}
          <motion.button
            className="menu-btn"
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#A67C52" }}
          >
            {sidebarOpen ? (
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </motion.button>

        </div>
      </div>

      {/* === Hero Section === */}
      <div className="white-wrapper">
      <div className="hero-container">
        {/* === Bottom Section (Text + Image) === */}
        <motion.div
          className="bottom-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          id='intro-section'
        >
          <div className="left-section">
            
            {/* 1. Warm Cursive Accent */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "32px",
                color: "#A67C52", // Brand Caramel Brown
                margin: "0 0 -15px 0", // This pulls the main title closer to it
                fontWeight: "600"
              }}
            >
              Indulge in
            </motion.p>

            {/* 2. Clean, Premium Main Title */}
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ 
                fontFamily: "'Libre Baskerville', serif", 
                fontWeight: "300", 
                fontStyle: "normal", 
                textTransform: "none", 
                letterSpacing: "-0.5px", 
                color: "#1B263B",
                lineHeight: "1.0",
                fontSize: "65px"
              }}
            >
              Sweet Perfection
            </motion.h1>

            {/* 3. Refined, Spaced-Out Subtitle */}
            <motion.h2
              className="subtitle"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400", /* Softened the weight so it isn't shouting */
                fontSize: "16px", /* Shrunk it to look more like a premium tagline */
                letterSpacing: "4px", /* Wide letter spacing looks very high-end */
                textTransform: "uppercase",
                color: "#666",
                marginTop: "15px",
                marginBottom: "25px"
              }}
            >
              CRAFTED FOR THE CONNOISSEUR
            </motion.h2>

            {/* 4. Description Paragraph */}
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "15px",
                color: "#555",
                lineHeight: "1.6",
                maxWidth: "90%"
              }}
            >
              Step into a world of premium pastries and authentic Middle Eastern sweetness. Treat yourself with the best desserts you deserve.We craft exquisite moments that linger long after the last bite.
            </motion.p>
            
          </div>

          <motion.div
            className="right-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <img
              src={heroCookie}
              alt="Cookies can make the whole world better"
              className="hero-cookie-img"
            />
          </motion.div>
        </motion.div>

        {/* === Sidebar === */}
        <motion.aside
          className="sidebar"
          initial={{ x: "-100%" }}
          animate={{ x: sidebarOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <div className="sidebar-content">
            <motion.img
          src={lbnLogo}
          alt="LBN & Co."
          className="logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
        />
            <ul className="sidebar-links">
              <li>
                <a href="#!" onClick={(e) => scrollToSection(e, 'intro-section')}>Introduction</a>
              </li>
              <li>
                <a href="#!" onClick={(e) => scrollToSection(e, 'about-us')}>About Us</a>
              </li>
              <li>
                <a href="#!" onClick={(e) => scrollToSection(e, 'choose-us')}>Why Choose Us</a>
              </li>
              <li>
                <a href="#!" onClick={(e) => scrollToSection(e, 'products')}>Products</a>
              </li>
              <li>
                <a href="#!" onClick={(e) => scrollToSection(e, 'menu')}>Menu</a>
              </li>
              <li>
                <a href="#!" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
              </li>
            </ul>
            <div className="sidebar-footer">
              <a href="tel:+917736660688" className="footer-item link-item">
                +91 7736660688
              </a>
              <a href="mailto:yourmail@email.com" className="footer-item link-item">
                lbnco2025@gmail.com
              </a>
            </div>
          </div>
        </motion.aside>

        {/* === Overlay === */}
        {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      </div>
      </div>
    </>
  );
};

export default HeaderHero;
