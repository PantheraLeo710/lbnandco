import React from "react";


const Footer=()=>{
    return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-title">Crumbella</h2>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit est quis odio fermentum, vel cursus ex elementum. Nunc dui
          enim, molestie sit amet erat interdum, imperdiet mattis nunc.
          Pellentesque scelerisque ut massa at cursus. Pellentesque vel bibendum
          ante, sit amet faucibus risus. Cras rutrum neque sed nisl hendrerit
          interdum. Nam id enim felis. Ut tempus purus nec dui vulputate, at
          consectetur magna elementum. Donec id neque felis.
        </p>
      </div>

      <div className="footer-bottom">
        <p className="footer-item">
          44, Prithviraj Road, Sector 19, Aurangzeb Road, Near Safdarjung Tomb,
          Delhi - 110011
        </p>
        <span className="divider">|</span>
        <a href="tel:+917317864081" className="footer-item link-item">
          +91 7317864081
        </a>
        <span className="divider">|</span>
        <a href="mailto:yourmail@email.com" className="footer-item link-item">
          yourmail@email.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;