import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Office Address",
      details: [
        "Komp. Pergudangan Natura Estate,",
        "Jl. Kw Pergudangan Dan Industri Parangloe, No. C8, Bira.",
        "Kec. Tamalanrea, Kota Makassar,",
        "Sulawesi Selatan, 90224",
      ],
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: [
        {
          text: "+62 821 9359 4444",
          wa: "6282193594444",
          label: "Founder & Director",
        },
      ],
    },
    {
      icon: "✉️",
      title: "Email",
      details: [
        {
          text: "pt.citraromaindo@gmail.com",
          email: "pt.citraromaindo@gmail.com",
          label: "Response within 24h",
        },
      ],
    },
    {
      icon: "⏰",
      title: "Business Hours",
      details: [
        "Monday - Friday: 08:00 - 17:00",
        "Saturday: 08:00 - 13:00",
        "Sunday: Closed",
      ],
    },
  ];

  const socialMedia = [
    {
      icon: "📘",
      name: "LinkedIn",
      color: "#0077b5",
      url: "https://linkedin.com/company/citraaromaindo",
    },
    {
      icon: "📷",
      name: "Instagram",
      color: "#e4405f",
      url: "https://instagram.com/citraaromaindo",
    },
    {
      icon: "🐦",
      name: "Twitter",
      color: "#1da1f2",
      url: "https://twitter.com/citraaromaindo",
    },
    {
      icon: "📱",
      name: "WhatsApp",
      color: "#25D366",
      url: "https://wa.me/6281234567890",
    },
  ];

  const handleWhatsAppClick = (phoneNumber) => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(182,139,64,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(26,62,63,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h5
            style={{
              color: "#b68b40",
              fontSize: "1rem",
              fontWeight: "600",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Contact Us
          </h5>
          <h2
            style={{
              color: "#1a3e3f",
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Get In Touch With Us
          </h2>
          <p
            style={{
              color: "#6c757d",
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Have questions about our products or need a sample? Reach out to us
            through the contact information below.
          </p>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#b68b40",
              margin: "25px auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Contact Information - 4 Kolom dengan tinggi konsisten */}
        <div className="row g-4 mb-5">
          {contactInfo.map((item, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                style={{
                  backgroundColor: index % 2 === 0 ? "#1a3e3f" : "#b68b40",
                  padding: "35px 25px",
                  borderRadius: "20px",
                  height: "280px",
                  color: "white",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,0.1)";
                }}
              >
                {/* Icon dan Title */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "15px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "15px",
                      color: index % 2 === 0 ? "#e8d5b5" : "#1a3e3f",
                      minHeight: "40px",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Konten */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {item.details.map((detail, i) => {
                    // Untuk Phone Number - bisa klik ke WhatsApp
                    if (
                      item.title === "Phone Number" &&
                      typeof detail === "object"
                    ) {
                      return (
                        <div key={i} style={{ textAlign: "center" }}>
                          <div
                            onClick={() => handleWhatsAppClick(detail.text)}
                            style={{
                              color: "white",
                              fontSize: "1.2rem",
                              fontWeight: "600",
                              textDecoration: "none",
                              display: "inline-block",
                              marginBottom: "10px",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                              padding: "5px 15px",
                              borderRadius: "30px",
                              backgroundColor: "rgba(255,255,255,0.1)",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#25D366";
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor =
                                "rgba(255,255,255,0.1)";
                              e.target.style.transform = "scale(1)";
                            }}
                          >
                            <span style={{ marginRight: "8px" }}>📱</span>
                            {detail.text}
                          </div>
                          <span
                            style={{
                              fontSize: "0.8rem",
                              opacity: 0.7,
                              display: "block",
                            }}
                          >
                            {detail.label} • Klik untuk WA
                          </span>
                        </div>
                      );
                    }

                    // Untuk Email - bisa klik ke email client
                    else if (
                      item.title === "Email" &&
                      typeof detail === "object"
                    ) {
                      return (
                        <div key={i} style={{ textAlign: "center" }}>
                          <a
                            href={`mailto:${detail.email}?subject=Inquiry from Website&body=Hello PT Citra Aroma Indo,%0D%0A%0D%0AI am interested in your products. Please provide more information.%0D%0A%0D%0AThank you.`}
                            style={{
                              color: "white",
                              fontSize: "1rem",
                              fontWeight: "500",
                              textDecoration: "none",
                              display: "inline-block",
                              marginBottom: "10px",
                              transition: "all 0.3s ease",
                              padding: "5px 15px",
                              borderRadius: "30px",
                              backgroundColor: "rgba(255,255,255,0.1)",
                              wordBreak: "break-all",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor =
                                index % 2 === 0 ? "#b68b40" : "#1a3e3f";
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor =
                                "rgba(255,255,255,0.1)";
                              e.target.style.transform = "scale(1)";
                            }}
                          >
                            <span style={{ marginRight: "8px" }}>✉️</span>
                            {detail.email}
                          </a>
                          <span
                            style={{
                              fontSize: "0.8rem",
                              opacity: 0.7,
                              display: "block",
                            }}
                          >
                            {detail.label} • Klik untuk email
                          </span>
                        </div>
                      );
                    }

                    // Untuk Address dan Business Hours (string biasa)
                    else {
                      return (
                        <p
                          key={i}
                          style={{
                            marginBottom:
                              i === item.details.length - 1 ? 0 : "8px",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                            opacity: 0.9,
                            textAlign: "center",
                          }}
                        >
                          {typeof detail === "string" ? detail : detail.text}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="row" data-aos="fade-up">
          <div className="col-12">
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "24px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                border: "1px solid #edf2f7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "25px",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>📍</span>
                <div>
                  <h4
                    style={{
                      color: "#1a3e3f",
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    Our Location
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "0.95rem",
                      margin: "5px 0 0",
                    }}
                  >
                    Komp. Pergudangan Natura Industrial Estate
                  </p>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0374855624664!2d119.48059139678956!3d-5.097641699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd98d0fe596b%3A0xea238b61c9717d95!2sKomp.%20Pergudangan%20Natura%20Industrial%20Estate%20No.%20A1!5e0!3m2!1sen!2sid!4v1770997691039!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Address Detail */}
              <div
                style={{
                  marginTop: "25px",
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  borderLeft: "4px solid #b68b40",
                }}
              >
                <p
                  style={{
                    color: "#1a3e3f",
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    margin: 0,
                    fontWeight: "500",
                  }}
                >
                  <strong style={{ color: "#b68b40" }}>
                    PT Citra Aroma Indo
                  </strong>
                  <br />
                  Komp. Pergudangan Natura Estate
                  <br />
                  Jl. Kw Pergudangan Dan Industri Parangloe, No. C8, Bira
                  <br />
                  Tamalanrea District, Makassar City <br />
                  South Sulawesi, 90224 <br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        {/* <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div style={{ textAlign: "center" }}>
              <h4
                style={{
                  color: "#1a3e3f",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "25px",
                }}
              >
                Connect With Us
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                      textDecoration: "none",
                      color: "#1a3e3f",
                      transition: "all 0.3s ease",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                      e.currentTarget.style.color = "#1a3e3f";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div
              style={{
                background: "linear-gradient(135deg, #1a3e3f 0%, #2a5556 100%)",
                padding: "40px",
                borderRadius: "20px",
                textAlign: "center",
                color: "white",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#e8d5b5",
                }}
              >
                Need a Sample or Price List?
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "25px",
                  opacity: 0.9,
                }}
              >
                Contact us directly via email or WhatsApp for quick response.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="mailto:info@citraaromaindo.com?subject=Inquiry from Website&body=Hello PT Citra Aroma Indo,%0D%0A%0D%0AI am interested in your products. Please provide more information.%0D%0A%0D%0AThank you."
                  style={{
                    backgroundColor: "#b68b40",
                    color: "white",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
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
                >
                  Email Us
                </a>
                <a
                  href="https://wa.me/6281234567890?text=Hello%20PT%20Citra%20Aroma%20Indo%2C%0A%0AI%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    border: "2px solid white",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#1a3e3f";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "white";
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
