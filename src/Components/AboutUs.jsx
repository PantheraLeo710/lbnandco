import React from "react";
import { motion } from "framer-motion";
import leftJar from "../Images/about-us-left.webp";
import rightJar from "../Images/about-us-right.webp";

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
        <h2>
          WE ARE <span>Crumbella</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
          odio id felis consectetur tempus. Aliquam id metus at nibh tempor
          consequat. Sed nulla justo, tempor sed sodales sagittis, convallis
          vitae neque. Duis enim libero, semper sed ultrices ac, varius non
          velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio id felis consectetur tempus. Aliquam id metus at nibh tempor consequat. Sed nulla justo, tempor sed sodales sagittis, convallis vitae neque. Duis enim libero, semper sed ultrices ac, varius non velit. Integer convallis pharetra neque, et congue leo euismod id. Aliquam lobortis fringilla ante, nec tempor sem blandit eget. Praesent at quam nec erat pulvinar finibus sit amet at nunc.
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