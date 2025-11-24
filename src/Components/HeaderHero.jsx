import React, { useState } from "react";
import { motion } from "framer-motion";
import heroCookie from "../Images/hero-cookie.webp";

const HeaderHero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* === Fixed Top Section (Logo + Button) === */}
      <div className="top-bg">
      <div className="top-section">
        <motion.h2
          className="logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crumbella
        </motion.h2>

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
            >
              COOKIES !!
            </motion.h1>

            <motion.h2
              className="subtitle"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              CAN MAKE THE WHOLE WORLD BETTER
            </motion.h2>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum odio id felis consectetur tempus. Aliquam id metus at nibh
              tempor consequat. Sed nulla justo, tempor sed sodales sagittis,
              convallis vitae neque. Duis enim libero, semper sed ultrices ac,
              varius non velit. Integer convallis pharetra neque et congue leo
              euismod id.
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
            <h2 className="sidebar-logo">Crumbella</h2>
            <ul className="sidebar-links">
               <li><a href="/#" onClick={toggleSidebar}>Introduction</a></li>
              <li><a href="/#" onClick={toggleSidebar}>About Us</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Why Choose Us</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Meet the Baker</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Menu</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Testimonials</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Upcoming Events</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Qualities</a></li>
              <li><a href="/#" onClick={toggleSidebar}>Blogs</a></li>
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
