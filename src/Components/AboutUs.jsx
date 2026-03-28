import React from "react";
import { motion } from "framer-motion";
import leftJar from "../Images/about-us-left.webp";
import rightJar from "../Images/about-us-right.webp";
import lbnLogo from "../Images/lbn-logo.png";

const AboutUs=()=>{
    return(
        <section className="weare-section" id='about-us'>
      <motion.img
        src={leftJar}
        alt="We are crumbella left"
        className="weare-img left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="weare-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          WE ARE 
          <img 
            src={lbnLogo} 
            alt="LBN & Co." 
            style={{ height: "45px", width: "auto", objectFit: "contain" }} 
          />
        </h2>
        <p>
          Our qualified and authentic chefs bring you into the the world
          of sweetness. We are dedicated in providing you with the best craftsmanship 
          along with the genuine taste our pastries and desserts bring.
        </p>
        <p>
          We began our journey last year. Be part of our journey in the coming years...
        </p>
      </motion.div>

      <motion.img
        src={rightJar}
        alt="We are Crumbella right"
        className="weare-img right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
    )
}

export default AboutUs;