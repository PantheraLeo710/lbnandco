import React from "react";
import { motion } from "framer-motion";
import ChooseUsImg from "../Images/why-choose.webp";

const WhyChoose=()=>{
    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return(
      <div className="white-wrapper">
    <section className="why-section" id='choose-us' style={{ padding: "2rem 0" }}>
      <motion.h2
        className="why-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        WHY <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "normal" }}>LBN & Co.?</span>
      </motion.h2>

      <div className="why-content">
        <div className="why-left">
          
          {/* Replaced Timely Delivery */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>HERITAGE RECIPES I</h3>
            <p>Honoring time-tested traditions with authentic Egyptian sweets and classic pastry techniques.</p>
          </motion.div>

          {/* Polished Ingredient Supply */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>AUTHENTIC INGREDIENTS I</h3>
            <p>We source only the finest, purest ingredients to ensure every bite is nothing short of perfection.</p>
          </motion.div>

          {/* Replaced Event Booking */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>ARTISANAL CRAFT I</h3>
            <p>Meticulously handcrafted desserts made with passion, precision, and an eye for detail.</p>
          </motion.div>
        </div>

        <motion.img
          src={ChooseUsImg}
          alt="Why lbnandco"
          className="why-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="why-right">
          
          {/* Polished Best Quality */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I UNCOMPROMISING QUALITY</h3>
            <p>It is for you to tell! We let the richness and taste of our desserts speak for themselves.</p>
          </motion.div>

          {/* Replaced Online Booking */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I EXCLUSIVE FLAVORS</h3>
            <p>Experience unique blends, from authentic Middle Eastern Kunafa to rich European chocolates.</p>
          </motion.div>

          {/* Kept Freshly Made */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I FRESHLY MADE</h3>
            <p>Yes, hot pastries and cold desserts, prepared fresh daily to guarantee the perfect texture.</p>
          </motion.div>
        </div>
      </div>
    </section>
      </div>
  )
}

export default WhyChoose;