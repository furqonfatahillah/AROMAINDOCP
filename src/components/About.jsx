import React from "react";

const About = () => {
  const visionPoints = [
    "To become a global market leader in the supply of high-quality, sustainable patchouli oil.",
    "Realizing an independent, competitive Indonesian patchouli oil industry that prospers the community.",
    "Towards the oil industry that produces derivatives from crude oil into several molecules such as MD, Patchouli, and earon free.",
    "Opening new units in various regions.",
  ];

  const missionPoints = [
    "Stakeholder: Ensuring the welfare of male and female employees.",
    "Empowering farmers: Establishing strong partnerships with local farmers to ensure a consistent supply of raw materials and improve their livelihoods.",
    "Ensuring Quality: Implementing strict production standards to produce patchouli oil with optimal Patchouli Alcohol (PA) content that is recognized in the international market.",
    "Sustainability: Ensuring environmentally friendly and sustainable production processes.",
    "Market Expansion: Expanding the export network to various key destination countries such as (India, China, Singapore, and Europe).",
  ];

  return (
    <section id="about" style={{ 
      padding: "100px 0", 
      backgroundColor: "#ffffff" 
    }}>
      <div className="container">
        {/* Section Header - Dirapikan */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h5 style={{ 
            color: "#b68b40", 
            fontSize: "1rem", 
            fontWeight: "600", 
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "15px"
          }}>
            About Company
          </h5>
          <h2 style={{
            color: "#1a3e3f",
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            PT Citra Aroma Indo
          </h2>
          <p style={{
            color: "#6c757d",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            fontStyle: "italic"
          }}>
            Leading Producer of Premium Patchouli Oil
          </p>
          <div style={{
            width: "60px",
            height: "3px",
            background: "#b68b40",
            margin: "25px auto 0",
            borderRadius: "2px"
          }} />
        </div>

        <div className="row g-5">
          {/* Left Column - Company Profile */}
          <div className="col-lg-6" data-aos="fade-right">
            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "45px",
              borderRadius: "24px",
              height: "100%",
              boxShadow: "0 5px 20px rgba(0,0,0,0.02)"
            }}>
              <h3 style={{
                color: "#1a3e3f",
                fontSize: "1.6rem",
                fontWeight: "600",
                marginBottom: "25px",
                position: "relative",
                paddingBottom: "15px"
              }}>
                Company Profile
                <span style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "50px",
                  height: "3px",
                  background: "#b68b40",
                  borderRadius: "2px"
                }} />
              </h3>
              
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "20px" 
              }}>
                <p style={{
                  color: "#4a5568",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                  margin: 0
                }}>
                  <span style={{ 
                    color: "#b68b40", 
                    fontWeight: "600", 
                    marginRight: "8px" 
                  }}>•</span>
                  PT. Citra Aroma Indo is a company engaged in the essential oil industry, 
                  with a primary focus on the production and distribution of high-quality 
                  patchouli oil. Our company is committed to providing natural essential oils 
                  processed under maintained production standards to meet the needs of both 
                  domestic and international markets.
                </p>
                
                <p style={{
                  color: "#4a5568",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                  margin: 0
                }}>
                  <span style={{ 
                    color: "#b68b40", 
                    fontWeight: "600", 
                    marginRight: "8px" 
                  }}>•</span>
                  Supported by selected raw materials from local farmers and a controlled 
                  distillation process, PT. Citra Aroma Indo produces patchouli oil with a 
                  strong, distinctive, and consistent aroma character. Our products are 
                  widely used as raw materials in the perfume, cosmetic, aromatherapy 
                  industries, as well as various other care products.
                </p>
                
                <p style={{
                  color: "#4a5568",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                  margin: 0,
                  backgroundColor: "rgba(182,139,64,0.05)",
                  padding: "20px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #b68b40"
                }}>
                  <span style={{ fontWeight: "600", color: "#1a3e3f" }}>Our Commitment:</span>{' '}
                  By prioritizing quality, sustainability, and customer trust, we continue 
                  to innovate in improving product quality and establishing mutually beneficial 
                  partnerships. We are committed to being a trusted partner in providing 
                  essential oils that meet industry standards and global market needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Vision & Mission */}
          <div className="col-lg-6" data-aos="fade-left">
            {/* Vision Card */}
            <div style={{
              backgroundColor: "#1a3e3f",
              padding: "35px",
              borderRadius: "24px",
              marginBottom: "25px",
              color: "white",
              boxShadow: "0 10px 30px rgba(26,62,63,0.1)"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "25px"
              }}>
                <span style={{
                  fontSize: "1.8rem",
                  color: "#e8d5b5"
                }}>🎯</span>
                <h3 style={{
                  color: "#e8d5b5",
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  margin: 0
                }}>
                  Our Vision
                </h3>
              </div>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              }}>
                {visionPoints.map((point, index) => (
                  <li key={index} style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                    color: "white",
                    lineHeight: "1.6",
                    fontSize: "0.95rem"
                  }}>
                    <span style={{ 
                      color: "#b68b40", 
                      fontSize: "1rem",
                      fontWeight: "bold",
                      minWidth: "20px"
                    }}>
                      {index + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Card */}
            <div style={{
              background: "linear-gradient(135deg, #b68b40 0%, #a07935 100%)",
              padding: "35px",
              borderRadius: "24px",
              color: "white",
              boxShadow: "0 10px 30px rgba(182,139,64,0.2)"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "25px"
              }}>
                <span style={{
                  fontSize: "1.8rem",
                  color: "white"
                }}>⚡</span>
                <h3 style={{
                  color: "white",
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  margin: 0
                }}>
                  Our Mission
                </h3>
              </div>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              }}>
                {missionPoints.map((point, index) => (
                  <li key={index} style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                    color: "white",
                    lineHeight: "1.6",
                    fontSize: "0.95rem"
                  }}>
                    <span style={{ 
                      color: "#1a3e3f", 
                      fontSize: "1rem",
                      fontWeight: "bold",
                      minWidth: "20px"
                    }}>
                      {index + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Stats Section - Optional */}
        {/* <div className="row mt-5 pt-4" data-aos="fade-up">
          <div className="col-12">
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              flexWrap: "wrap",
              padding: "30px",
              backgroundColor: "#f8f9fa",
              borderRadius: "16px"
            }}>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "#1a3e3f", fontSize: "1.8rem", fontWeight: "700", marginBottom: "5px" }}>25+</h4>
                <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>Years Experience</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "#1a3e3f", fontSize: "1.8rem", fontWeight: "700", marginBottom: "5px" }}>1000+</h4>
                <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>Local Farmers</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "#1a3e3f", fontSize: "1.8rem", fontWeight: "700", marginBottom: "5px" }}>98%</h4>
                <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>PA Content</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "#1a3e3f", fontSize: "1.8rem", fontWeight: "700", marginBottom: "5px" }}>15+</h4>
                <p style={{ color: "#6c757d", fontSize: "0.9rem", margin: 0 }}>Export Countries</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;