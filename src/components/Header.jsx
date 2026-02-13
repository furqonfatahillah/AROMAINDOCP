import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    // { href: "#certification", label: "Certification" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-dark"
      style={{
        backgroundColor: "#1a3e3f",
        padding: "5px 0",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        borderBottom: "3px solid #b68b40",
      }}
    >
      <div className="container">
        {/* Logo Image + Nama PT 1 Baris */}
        <a className="navbar-brand" href="#home">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Logo Image */}
            <img
              src="/logo512.png " // Ganti dengan path logo Anda
              alt="Logo PT Citra Aroma Indo"
              height="40"
              style={{
                objectFit: "contain",
              }}
            />
            
            {/* Nama PT 1 Baris */}
            <span
              style={{
                color: "#e8d5b5",
                fontSize: "1.3rem",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              PT CITRA <span style={{ color: "#b68b40" }}>AROMA INDO</span>
            </span>
          </div>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          style={{
            borderColor: "#e8d5b5",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={link.href}
                  style={{
                    color: "white",
                    margin: "0 8px",
                    padding: "8px 16px",
                    fontWeight: "500",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#b68b40";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                  }}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* CTA Button */}
            <li className="nav-item">
              <a
                href="#contact"
                className="btn"
                style={{
                  backgroundColor: "#b68b40",
                  color: "white",
                  padding: "8px 25px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  marginLeft: "10px",
                  border: "2px solid #b68b40",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#b68b40";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#b68b40";
                  e.target.style.color = "white";
                }}
                onClick={() => setIsNavOpen(false)}
              >
                Request Sample
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;