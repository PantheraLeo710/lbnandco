import React from "react";
import lbnLogo from "../Images/lbn-logo.png"; 

const Footer = () => {
  // === Smooth Scroll Function to fix the broken links ===
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#1B263B", color: "#F5EBE0", padding: "1.5rem 2rem 0.5rem 2rem", borderTop: "2px solid #A67C52" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
        
        {/* Column 1: Logo, Mission & Socials */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <img src={lbnLogo} alt="LBN & Co." style={{ height: "35px", width: "auto", marginBottom: "10px" }} />
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: "300", lineHeight: "1.5", color: "#D0D6DF", marginBottom: "12px", maxWidth: "90%" }}>
            The dessert you deserve. Bringing traditional Egyptian sweets and heritage baking from Calicut to Mumbai.
          </p>
          
          {/* Instagram Icon */}
          <div style={{ display: "flex", gap: "10px" }}>
            <a 
              href="https://www.instagram.com/lbnandco/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#A67C52", display: "inline-block", transition: "transform 0.3s ease, color 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFF";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#A67C52";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={{ flex: "1", minWidth: "150px" }}>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", color: "#A67C52", margin: "0 0 12px 0" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: "300", lineHeight: "2" }}>
            <li><a href="#!" onClick={(e) => scrollToSection(e, 'intro-section')} style={{ color: "#D0D6DF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#FFF"} onMouseLeave={(e) => e.target.style.color = "#D0D6DF"}>Our Story</a></li>
            <li><a href="#!" onClick={(e) => scrollToSection(e, 'products')} style={{ color: "#D0D6DF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#FFF"} onMouseLeave={(e) => e.target.style.color = "#D0D6DF"}>Featured Bakes</a></li>
            <li><a href="#!" onClick={(e) => scrollToSection(e, 'menu')} style={{ color: "#D0D6DF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#FFF"} onMouseLeave={(e) => e.target.style.color = "#D0D6DF"}>Full Menu</a></li>
            <li><a href="#!" onClick={(e) => scrollToSection(e, 'contact')} style={{ color: "#D0D6DF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#FFF"} onMouseLeave={(e) => e.target.style.color = "#D0D6DF"}>Franchise Info</a></li>
          </ul>
        </div>

        {/* Column 3: Hours & Locations */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", color: "#A67C52", margin: "0 0 12px 0" }}>Visit Us</h4>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: "300", lineHeight: "1.6", color: "#D0D6DF" }}>
            <p style={{ margin: "0 0 4px 0" }}><strong style={{ fontWeight: "500", color: "#FFF" }}>Mumbai:</strong> Mira Road East</p>
            <p style={{ margin: "0 0 10px 0" }}><strong style={{ fontWeight: "500", color: "#FFF" }}>Kerala:</strong> Calicut Flagship</p>
            <p style={{ margin: "0 0 2px 0", color: "#A67C52", fontWeight: "500" }}>Open Hours:</p>
            <p style={{ margin: 0 }}>1:00 PM - 1:00 AM</p>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "1rem", paddingTop: "0.8rem", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "10px", fontWeight: "300", color: "#666" }}>
        © 2026 Jigar Rane All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;