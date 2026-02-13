import React from "react";

const Certification = () => {
  const certifications = [
    { icon: "📜", title: "ISO 9001:2015", desc: "Quality Management System" },
    { icon: "🌱", title: "Organic", desc: "EU & USDA Certified" },
    { icon: "☪️", title: "Halal", desc: "MUI Certified" },
    { icon: "🔬", title: "GMP", desc: "Good Manufacturing Practice" },
    { icon: "🌿", title: "Eco-Friendly", desc: "Sustainable Production" },
    { icon: "🏭", title: "SNI", desc: "Indonesian National Standard" },
  ];

  return (
    <section
      id="certification"
      style={{ padding: "80px 0", backgroundColor: "white" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2
            style={{
              color: "#1a3e3f",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Certifications
          </h2>
          <p style={{ color: "#6c757d", fontSize: "1.2rem" }}>
            International Standards & Quality Assurance
          </p>
        </div>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div
              className="col-lg-2 col-md-4 col-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "30px 20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a3e3f";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.querySelector("h4").style.color = "#e8d5b5";
                  e.currentTarget.querySelector("p").style.color = "#e8d5b5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.querySelector("h4").style.color = "#1a3e3f";
                  e.currentTarget.querySelector("p").style.color = "#6c757d";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                  {cert.icon}
                </div>
                <h4
                  style={{
                    color: "#1a3e3f",
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  {cert.title}
                </h4>
                <p
                  style={{
                    color: "#6c757d",
                    fontSize: "0.8rem",
                    marginBottom: 0,
                  }}
                >
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
