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
        WHY <span>Crumbella?</span>
      </motion.h2>

      <div className="why-content">
        <div className="why-left">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>FAST DELIVERED I</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>INGREDIENT SUPPLY I</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>EVENT BOOKING I</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. </p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I ONLINE BOOKING</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3>I FRESHLY MADE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. </p>
          </motion.div>
        </div>
      </div>
    </section>
      </div>
  )
}

export default WhyChoose;