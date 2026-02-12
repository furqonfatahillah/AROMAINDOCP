import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NilamEssence</h3>
            <p>Premium Patchouli Oil Producer</p>
            <p style={{ marginTop: '1rem' }}>Quality • Sustainability • Integrity</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="#about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</a></p>
            <p><a href="#products" style={{ color: '#ccc', textDecoration: 'none' }}>Products</a></p>
            <p><a href="#benefits" style={{ color: '#ccc', textDecoration: 'none' }}>Benefits</a></p>
            <p><a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Our Products</h3>
            <p>Premium Patchouli Oil</p>
            <p>Industrial Grade</p>
            <p>Organic Certified</p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Nilam Essence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;