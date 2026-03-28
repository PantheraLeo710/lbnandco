import React, { useState } from "react";
import { motion } from "framer-motion";
import heroCookie from "../Images/hero-cookie.webp";
import lbnLogo from "../Images/lbn-logo.png"; 

const HeaderHero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* === Fixed Top Section (Logo + Button) === */}
      <div className="top-bg">
      <div className="top-section">
        <motion.img
          src={lbnLogo}
          alt="LBN & Co."
          className="logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
        />

        <motion.button
          className="menu-btn"
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {sidebarOpen ? "✕" : "☰"}
        </motion.button>
      </div></div>

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
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: "normal", textTransform: "none" }}
            >
              Desserts...
            </motion.h1>

            <motion.h2
              className="subtitle"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              CAN MAKE YOUR WHOLE WORLD BETTER !!
            </motion.h2>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Treat yourself with the best desserts you deserve. This is the 
              place of premium Desserts & Pastries. Authentic, just like you.
              Taste the magic we have to offer...
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
              <li><a href="#menu" onClick={toggleSidebar}>Menu</a></li>
              <li><a href="#intro-section" onClick={toggleSidebar}>Introduction</a></li>
              <li><a href="#about-us" onClick={toggleSidebar}>About Us</a></li>
              <li><a href="#choose-us" onClick={toggleSidebar}>Why Choose Us</a></li>
              <li><a href="#products" onClick={toggleSidebar}>Products</a></li>
            </ul>
            <div className="sidebar-footer">
              <a href="tel:+917317864081" className="footer-item link-item">
                +91 7317864081
              </a>
              <a href="mailto:yourmail@email.com" className="footer-item link-item">
                yourmail@email.com
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
