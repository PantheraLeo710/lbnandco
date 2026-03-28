import React from "react";
import lbnLogo from "../Images/lbn-logo.png"; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1B263B", color: "#F5EBE0", padding: "4rem 2rem 1rem 2rem", borderTop: "2px solid #A67C52" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "30px" }}>
        
        {/* Column 1: Logo & Mission */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <img src={lbnLogo} alt="LBN & Co." style={{ height: "60px", width: "auto", marginBottom: "20px" }} />
          <p style={{ fontFamily: "'Paprika', cursive", fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}>
            The dessert you deserve. Bringing traditional Egyptian sweets and heritage baking from Calicut to Mumbai.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", color: "#A67C52", marginBottom: "20px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'Paprika', cursive", fontSize: "14px", lineHeight: "2" }}>
            <li><a href="#intro-section" style={{ color: "#F5EBE0", textDecoration: "none" }}>Our Story</a></li>
            <li><a href="#products" style={{ color: "#F5EBE0", textDecoration: "none" }}>Featured Bakes</a></li>
            <li><a href="#menu" style={{ color: "#F5EBE0", textDecoration: "none" }}>Full Menu</a></li>
            <li><a href="#contact" style={{ color: "#F5EBE0", textDecoration: "none" }}>Franchise Info</a></li>
          </ul>
        </div>

        {/* Column 3: Hours & Locations */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", color: "#A67C52", marginBottom: "20px" }}>Visit Us</h4>
          <div style={{ fontFamily: "'Paprika', cursive", fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}>
            <p style={{ margin: "0 0 10px 0" }}><strong>Mumbai:</strong> Mira Road East</p>
            <p style={{ margin: "0 0 10px 0" }}><strong>Kerala:</strong> Calicut Flagship</p>
            <p style={{ margin: "0 0 5px 0", color: "#A67C52" }}><strong>Evening Shifts:</strong></p>
            <p style={{ margin: 0 }}>3:00 PM - 1:00 AM</p>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "3rem", paddingTop: "1.5rem", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#888" }}>
        © 2026 LBN & Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;