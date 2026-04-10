import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FranchisePage = () => {
  const navigate = useNavigate();
  
  // Stores all the user's answers, including the new checkboxes
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    ownedBusiness: "",
    beenFranchise: "",
    ownSpace: "",
    spaceDescription: "",
    certify: false,
    promotions: false
  });

  // Smart handler that figures out if it's a text box or a checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  // The Magic Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Franchise Application - ${formData.name}`);
    
    // Formatting the email body neatly into sections
    const bodyText = `Hello LBN & Co. Team,

I am submitting a franchise application. Here are my details:

--- GENERAL INFORMATION ---
Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}
State: ${formData.state}

--- BUSINESS / WORK EXPERIENCE ---
Owned a business previously?: ${formData.ownedBusiness}
Been a franchisee previously?: ${formData.beenFranchise}

--- LOCATION INFORMATION ---
Owns an existing commercial space?: ${formData.ownSpace}
Shop Location Details: ${formData.spaceDescription || "N/A"}

--- CONSENT ---
Information Certified True: ${formData.certify ? "Yes" : "No"}
Subscribed to Promos: ${formData.promotions ? "Yes" : "No"}

Looking forward to discussing this opportunity!`;

    const body = encodeURIComponent(bodyText);
    
    // Pops open their email app with all data
    window.location.href = `mailto:lbnco2025@gmail.com?subject=${subject}&body=${body}`;
  };

  // Shared Styles
  const inputStyle = {
    width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #ccc",
    fontFamily: "'Poppins', sans-serif", fontSize: "14px", outline: "none", boxSizing: "border-box",
    backgroundColor: "#fff"
  };

  const sectionHeaderStyle = {
    fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#A67C52", 
    marginTop: "20px", marginBottom: "10px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px"
  };

  const checkboxLabelStyle = {
    fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#555", 
    lineHeight: "1.5", cursor: "pointer", display: "flex", gap: "10px", alignItems: "flex-start"
  };

  return (
    <div className="white-wrapper" style={{ minHeight: "80vh", padding: "120px 20px 50px 20px", backgroundColor: "#f9f9f9" }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ maxWidth: "700px", margin: "auto", backgroundColor: "#fff", padding: "40px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #eaeaea" }}
      >
        <button onClick={() => navigate("/")} style={{ background: "none", border: "none", color: "#A67C52", cursor: "pointer", fontFamily: "'Poppins', sans-serif", fontSize: "14px", marginBottom: "20px", padding: 0 }}>
          ← Back to Home
        </button>
        
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px", color: "#1B263B", marginBottom: "10px" }}>
          Franchise <span style={{ fontFamily: "'Dancing Script', cursive", color: "#A67C52", textTransform: "none" }}>Application</span>
        </h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#666", marginBottom: "30px", lineHeight: "1.6" }}>
          Please complete the sections below. Clicking submit will draft an email to our team with your application details.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* --- GENERAL INFORMATION --- */}
          <h3 style={sectionHeaderStyle}>General Information</h3>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} style={inputStyle} />
          <input type="text" name="city" placeholder="City" required onChange={handleChange} style={inputStyle} />
          
          <select name="state" required onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="" disabled selected>Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Delhi">Delhi</option>
            <option value="Other">Other</option>
          </select>

          {/* --- BUSINESS / WORK EXPERIENCE --- */}
          <h3 style={sectionHeaderStyle}>Business / Work Experience</h3>
          <select name="ownedBusiness" required onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="" disabled selected>Have You Ever Owned A Business?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <select name="beenFranchise" required onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="" disabled selected>Have You Ever Been A Franchisee?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* --- LOCATION INFORMATION --- */}
          <h3 style={sectionHeaderStyle}>Location Information</h3>
          <select name="ownSpace" required onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="" disabled selected>Do you own an existing commercial space?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <textarea 
            name="spaceDescription" 
            placeholder="IF “Yes” Describe The Shop Location (e.g., Corner Shop, Facing Main Road, Square Footage...)" 
            rows="3" 
            onChange={handleChange} 
            style={{ ...inputStyle, resize: "vertical" }}
          ></textarea>

          {/* --- AGREEMENTS & CHECKBOXES --- */}
          <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f4f6f8", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
            
            <label style={{ ...checkboxLabelStyle, marginBottom: "15px" }}>
              <input type="checkbox" name="certify" required onChange={handleChange} style={{ marginTop: "3px", transform: "scale(1.2)", accentColor: "#A67C52" }} />
              <span>By submitting this form, I certify that the information furnished in this <strong>LBN & Co.</strong> franchise request for consideration is true and correct. *</span>
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="promotions" onChange={handleChange} style={{ marginTop: "3px", transform: "scale(1.2)", accentColor: "#A67C52" }} />
              <span>I agree to receive promotions and newsletters related to LBN & Co.</span>
            </label>

          </div>
          
          {/* SUBMIT BUTTON */}
          <button type="submit" style={{ backgroundColor: "#1B263B", color: "#F5EBE0", padding: "16px", border: "none", borderRadius: "8px", fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "background 0.3s", marginTop: "20px" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#A67C52"} onMouseLeave={(e) => e.target.style.backgroundColor = "#1B263B"}>
            Draft My Application
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default FranchisePage;