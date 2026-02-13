import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [{ label: "Premium Patchouli Oil", href: "#products" }];

  const contactInfo = [
    {
      icon: "📍",
      info: "Makassar, Indonesia",
      link: null,
    },
    {
      icon: "📞",
      info: "+62 821 9359 4444",
      link: "https://wa.me/6282193594444?text=Hello%20PT%20Citra%20Aroma%20Indo%2C%20I%20have%20an%20inquiry%20about%20your%20products.",
    },
    {
      icon: "✉️",
      info: "pt.citraromaindo@gmail.com",
      link: "mailto:pt.citraromaindo@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20PT%20Citra%20Aroma%20Indo%2C%0D%0A%0D%0AI%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information.%0D%0A%0D%0AThank%20you.",
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#0f2a2b",
        color: "#ffffff",
        padding: "60px 0 20px",
        position: "relative",
        borderTop: "5px solid #b68b40",
      }}
    >
      {/* Decorative Top Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "linear-gradient(90deg, #b68b40, #e8d5b5, #b68b40)",
        }}
      />

      <div className="container">
        {/* Main Footer Content - 2 Columns */}
        <div className="row g-5">
          {/* Column 1: Company Info */}
          <div className="col-lg-6 col-md-6" data-aos="fade-up">
            <div>
              <h3
                style={{
                  color: "#e8d5b5",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                }}
              >
                PT CITRA AROMA INDO
              </h3>

              <p
                style={{
                  color: "#e8d5b5",
                  fontSize: "1rem",
                  marginBottom: "15px",
                  fontStyle: "italic",
                }}
              >
                Premium Patchouli Oil Producer
              </p>

              <p
                style={{
                  color: "#adb5bd",
                  lineHeight: "1.8",
                  marginBottom: "25px",
                  maxWidth: "90%",
                }}
              >
                Producing and distributing high-quality patchouli oil for global
                industries. Committed to quality, sustainability, and customer
                trust.
              </p>

              {/* Contact Info with Clickable Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {contactInfo.map((item, index) => (
                  <div key={index}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.icon === "📞" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          backgroundColor: "rgba(255,255,255,0.05)",
                          padding: "10px 18px",
                          borderRadius: "30px",
                          fontSize: "0.95rem",
                          color: "#e8d5b5",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            item.icon === "📞" ? "#25D366" : "#b68b40";
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.borderColor = "transparent";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255,255,255,0.05)";
                          e.currentTarget.style.color = "#e8d5b5";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.1)";
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                        <span>{item.info}</span>
                        {item.icon === "📞" && (
                          <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>
                            ↗
                          </span>
                        )}
                      </a>
                    ) : (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          backgroundColor: "rgba(255,255,255,0.05)",
                          padding: "10px 18px",
                          borderRadius: "30px",
                          fontSize: "0.95rem",
                          color: "#e8d5b5",
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                        <span>{item.info}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div style={{ marginTop: "30px" }}>
                <h4
                  style={{
                    color: "#e8d5b5",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  Business Hours
                </h4>
                <div
                  style={{
                    color: "#adb5bd",
                    fontSize: "0.95rem",
                    lineHeight: "1.8",
                  }}
                >
                  <p style={{ margin: 0 }}>Monday - Friday: 08:00 - 17:00</p>
                  <p style={{ margin: 0 }}>Saturday: 08:00 - 13:00</p>
                  <p style={{ margin: 0 }}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Products */}
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row">
              {/* Quick Links */}
              <div className="col-6">
                <h4
                  style={{
                    color: "#e8d5b5",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "25px",
                    position: "relative",
                    paddingBottom: "10px",
                  }}
                >
                  Quick Links
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "2px",
                      backgroundColor: "#b68b40",
                    }}
                  />
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      style={{
                        color: "#ced4da",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        display: "inline-block",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#b68b40";
                        e.target.style.transform = "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#ced4da";
                        e.target.style.transform = "translateX(0)";
                      }}
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div className="col-6">
                <h4
                  style={{
                    color: "#e8d5b5",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "25px",
                    position: "relative",
                    paddingBottom: "10px",
                  }}
                >
                  Our Product
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "2px",
                      backgroundColor: "#b68b40",
                    }}
                  />
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.href}
                      style={{
                        color: "#ced4da",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        display: "inline-block",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#b68b40")}
                      onMouseLeave={(e) => (e.target.style.color = "#ced4da")}
                    >
                      • {product.label}
                    </a>
                  ))}
                </div>

                {/* Company Values */}
                <div style={{ marginTop: "35px" }}>
                  <h4
                    style={{
                      color: "#e8d5b5",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "15px",
                    }}
                  >
                    Our Values
                  </h4>
                  <div style={{ color: "#adb5bd", fontSize: "0.95rem" }}>
                    <p style={{ margin: "5px 0" }}>✓ Quality</p>
                    <p style={{ margin: "5px 0" }}>✓ Sustainability</p>
                    <p style={{ margin: "5px 0" }}>✓ Integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "50px",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <p style={{ color: "#adb5bd", margin: 0, fontSize: "0.9rem" }}>
            © {currentYear} PT Citra Aroma Indo. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "25px" }}>
            <a
              href="#"
              style={{
                color: "#adb5bd",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#b68b40")}
              onMouseLeave={(e) => (e.target.style.color = "#adb5bd")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#adb5bd",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#b68b40")}
              onMouseLeave={(e) => (e.target.style.color = "#adb5bd")}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <a
          href="#home"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            backgroundColor: "#b68b40",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            textDecoration: "none",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            zIndex: 1000,
            opacity: 0.8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1a3e3f";
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#b68b40";
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
