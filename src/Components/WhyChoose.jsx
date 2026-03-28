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
    <section className="why-section" id='choose-us'>
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>TIMELY DELIVERY I</h3>
            <p>We take the time to prepare so you take your time to enjoy</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>INGREDIENT SUPPLY I</h3>
            <p>Both what we expect and offer are nothing short of authentic and quality ingredients</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>EVENT BOOKING I</h3>
            <p>Yes, we provide booking before hand to cater you our services </p>
          </motion.div>
        </div>

        <motion.img
          src={ChooseUsImg}
          alt="Why Crumbella"
          className="why-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="why-right">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I BEST QUALITY</h3>
            <p>Its for you to tell! </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I ONLINE BOOKING</h3>
            <p>Order with the touch of your fingers from the comfort of your phones or homes </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I FRESHLY MADE</h3>
            <p>Yes, Hot pastries and Cold desserts </p>
          </motion.div>
        </div>
      </div>
    </section>
      </div>
  )
}

export default WhyChoose;