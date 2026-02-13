import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="mb-4">
              <span
                style={{
                  backgroundColor: "#1a3e3f",
                  color: "#e8d5b5",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  display: "inline-block",
                }}
              >
                WELCOME TO
              </span>
            </div>

            {/* Logo / Company Name */}
            <div style={{ marginBottom: "25px" }}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  color: "#1a3e3f",
                  lineHeight: "1.2",
                  marginBottom: "5px",
                }}
              >
                PT CITRA
              </h1>
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  color: "#b68b40",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                AROMA INDO
              </h1>
              <div
                style={{
                  width: "100px",
                  height: "4px",
                  background: "linear-gradient(90deg, #b68b40, #e8d5b5)",
                  marginTop: "15px",
                  borderRadius: "2px",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#4a5568",
                marginBottom: "30px",
                lineHeight: "1.8",
                maxWidth: "90%",
              }}
            >
              Premium producer and distributor of high-quality patchouli oil for
              domestic and international.
            </p>

            <div className="d-flex gap-3 mb-4">
              <a
                href="#about"
                className="btn btn-primary rounded-pill px-5 py-3"
                style={{
                  backgroundColor: "#b68b40",
                  borderColor: "#b68b40",
                  fontWeight: "600",
                }}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="btn btn-outline-primary rounded-pill px-5 py-3"
                style={{
                  color: "#1a3e3f",
                  borderColor: "#1a3e3f",
                  fontWeight: "600",
                }}
              >
                Contact Us
              </a>
            </div>

            {/* Company Values */}
            <div className="d-flex gap-4 mt-4">
              <div>
                <span style={{ fontSize: "1.5rem", color: "#b68b40" }}>✓</span>
                <span
                  style={{
                    marginLeft: "8px",
                    color: "#1a3e3f",
                    fontWeight: "500",
                  }}
                >
                  Quality
                </span>
              </div>
              <div>
                <span style={{ fontSize: "1.5rem", color: "#b68b40" }}>✓</span>
                <span
                  style={{
                    marginLeft: "8px",
                    color: "#1a3e3f",
                    fontWeight: "500",
                  }}
                >
                  Sustainability
                </span>
              </div>
              <div>
                <span style={{ fontSize: "1.5rem", color: "#b68b40" }}>✓</span>
                <span
                  style={{
                    marginLeft: "8px",
                    color: "#1a3e3f",
                    fontWeight: "500",
                  }}
                >
                  Integrity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Logo / Brand Image */}
          <div className="col-lg-5 text-center" data-aos="fade-left">
            <div
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              {/* Logo Circle */}
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  background: "linear-gradient(145deg, #1a3e3f, #2a5556)",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 25px 40px rgba(26,62,63,0.3)",
                  border: "8px solid rgba(232,213,181,0.15)",
                  margin: "0 auto",
                }}
              >
                {/* Logo Icon */}
                <span
                  style={{
                    fontSize: "6rem",
                    color: "#e8d5b5",
                    marginBottom: "10px",
                  }}
                >
                  🌿
                </span>

                {/* Company Initials */}
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#e8d5b5",
                      letterSpacing: "3px",
                    }}
                  >
                    CAI
                  </span>
                </div>

                {/* Tagline */}
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#b68b40",
                    marginTop: "10px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Since 1998
                </span>
              </div>

              {/* Floating Badge 1 - Tahun Berdiri */}
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  right: "-10px",
                  backgroundColor: "white",
                  padding: "12px 20px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  borderLeft: "4px solid #b68b40",
                }}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <span style={{ fontWeight: "600", color: "#1a3e3f" }}>
                  25+ Years
                </span>
                <br />
                <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>
                  Experience
                </span>
              </div>

              {/* Floating Badge 2 - Lokasi */}
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "-10px",
                  backgroundColor: "white",
                  padding: "12px 20px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  borderLeft: "4px solid #b68b40",
                }}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <span style={{ fontWeight: "600", color: "#1a3e3f" }}>
                  🇮🇩 Indonesia
                </span>
                <br />
                <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>
                  Makassar
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <span
                style={{
                  backgroundColor: "#f8f9fa",
                  color: "#1a3e3f",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  border: "1px solid #edf2f7",
                }}
              >
                🌱 100% Natural
              </span>
              <span
                style={{
                  backgroundColor: "#f8f9fa",
                  color: "#1a3e3f",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  border: "1px solid #edf2f7",
                }}
              >
                🔬 Lab Tested
              </span>
              <span
                style={{
                  backgroundColor: "#f8f9fa",
                  color: "#1a3e3f",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  border: "1px solid #edf2f7",
                }}
              >
                📦 Export Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
