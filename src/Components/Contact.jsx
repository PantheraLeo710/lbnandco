import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="white-wrapper" id="contact">
      <section style={{ maxWidth: "1200px", margin: "auto", padding: "5rem 2rem" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>
          
          {/* Left Side: Contact & Franchise */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: "1", minWidth: "300px" }}
          >
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px", color: "#1B263B", marginBottom: "20px" }}>
              Get in <span style={{ fontFamily: "'Dancing Script', cursive", color: "#A67C52", textTransform: "none" }}>Touch</span>
            </h2>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "#555", marginBottom: "30px", lineHeight: "1.6" }}>
              Whether you want to place a custom order, ask about our traditional Egyptian specialties, or just say hello, we are here for you.
            </p>
            
            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ fontFamily: "'Poppins', sans-serif", color: "#A67C52", margin: "0 0 8px 0" }}>Partner With Us</h4>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#444", marginBottom: "15px" }}>
                Want to bring LBN & Co. to your city? Fill out our franchise application form to get started.
              </p>
              
              {/* React Router Button to the new page */}
              <a 
                href="#/franchise" 
                style={{ 
                  display: "inline-block", backgroundColor: "#A67C52", color: "#FFF", 
                  padding: "10px 24px", borderRadius: "6px", textDecoration: "none", 
                  fontFamily: "'Poppins', sans-serif", fontSize: "14px", transition: "background 0.3s" 
                }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = "#1B263B"} 
                onMouseLeave={(e) => e.target.style.backgroundColor = "#A67C52"}
              >
                Franchise Application →
              </a>
            </div>

            {/* Clickable Phone & Email */}
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px", color: "#1B263B" }}>
              <p style={{ margin: "0 0 10px 0" }}>
                <strong>Phone:</strong>{' '}
                <a 
                  href="tel:+917736660688" 
                  style={{ color: "#1B263B", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "#A67C52"}
                  onMouseLeave={(e) => e.target.style.color = "#1B263B"}
                >
                  +91 77366 60688
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:lbnco2025@gmail.com?subject=Franchise Inquiry From Website- LBN & Co.&body=Hi LBN & Co. Team,%0D%0A%0D%0AI would like to..." 
                  style={{ color: "#1B263B", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "#A67C52"}
                  onMouseLeave={(e) => e.target.style.color = "#1B263B"}
                >
                  lbnco2025@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Side: Google Map & Locations */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: "1", minWidth: "300px" }}
          >
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "24px", color: "#1B263B", marginBottom: "15px" }}>
              Our Locations
            </h3>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#555", marginBottom: "15px" }}>
              <strong>Mumbai:</strong> Mira Road East, Mumbai, Maharashtra <br/>
              <strong>Kerala:</strong> Calicut (Flagship Store)
            </p>
            
            {/* Google Map Embed */}
            <div style={{ width: "100%", height: "250px", backgroundColor: "#eaeaea", borderRadius: "10px", overflow: "hidden" }}>
              <iframe 
                title="LBN & Co Mira Road Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1!2d72.85!3d19.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE2JzQ4LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;