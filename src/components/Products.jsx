import React from "react";

const Products = () => {
  const product = {
    name: "Minyak Nilam (Patchouli Oil)",
    description:
      "Patchouli oil is a high-quality natural essential oil extracted from the leaves of the patchouli plant through a distillation process. It has a distinctive warm, earthy, exotic, and long-lasting aroma.",
    keunggulan: [
      "100% natural patchouli oil",
      "Strong, distinctive, and long-lasting aroma",
      "Suitable for perfumes, aromatherapy, cosmetics, and soap",
      "Stable quality with the characteristic color and viscosity of patchouli",
      "Without the mix of harmful chemicals",
    ],
    kegunaan: [
      "Basic ingredients of perfume and fragrances",
      "Aromatherapy for relaxation",
      "A mix of skincare and body care products",
      "Cosmetic and pharmaceutical industry materials",
    ],
  };

  const industryTags = [
    "Parfume",
    "Cosmetics",
    "Aromatherapy",
    "Personal Care",
  ];

  return (
    <section
      id="products"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
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
            Our Product
          </h5>
          <h2
            style={{
              color: "#1a3e3f",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Premium Patchouli Oil
          </h2>
          <p
            style={{
              color: "#6c757d",
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            One main product, the best quality from Indonesia
          </p>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#b68b40",
              margin: "20px auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Product Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "30px",
                padding: "50px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.05)",
              }}
              data-aos="fade-up"
            >
              <div className="row align-items-center g-5">
                {/* Left Column - Image */}
                <div className="col-md-5 text-center">
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                    data-aos="fade-right"
                  >
                    {/* Main Image */}
                    <div
                      style={{
                        width: "350px",
                        height: "350px",
                        background: "linear-gradient(145deg, #1a3e3f, #2a5556)",
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 20px 30px rgba(26,62,63,0.3)",
                        border: "6px solid rgba(232,213,181,0.1)",
                        margin: "0 auto",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="Product.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Floating Badge - Hanya 1 badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "-15px",
                        backgroundColor: "white",
                        padding: "10px 20px",
                        borderRadius: "12px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                        borderLeft: "4px solid #b68b40",
                      }}
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1a3e3f",
                          fontSize: "0.9rem",
                        }}
                      >
                        100% Natural
                      </span>
                    </div>
                  </div>

                  {/* Industry Tags */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      flexWrap: "wrap",
                      marginTop: "30px",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {industryTags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: "white",
                          color: "#1a3e3f",
                          padding: "8px 18px",
                          borderRadius: "50px",
                          fontSize: "0.85rem",
                          fontWeight: "500",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                          border: "1px solid #edf2f7",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Description */}
                <div className="col-md-7" data-aos="fade-left">
                  <h3
                    style={{
                      color: "#1a3e3f",
                      fontSize: "2rem",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "#4a5568",
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      marginBottom: "30px",
                    }}
                  >
                    {product.description}
                  </p>

                  <div className="row g-4">
                    {/* Keunggulan */}
                    <div className="col-sm-6">
                      <h4
                        style={{
                          color: "#b68b40",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          marginBottom: "20px",
                          position: "relative",
                          paddingBottom: "10px",
                        }}
                      >
                        Keunggulan
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "40px",
                            height: "2px",
                            background: "#b68b40",
                          }}
                        />
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {product.keunggulan.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: "12px",
                              display: "flex",
                              gap: "10px",
                              alignItems: "flex-start",
                            }}
                          >
                            <span
                              style={{
                                color: "#b68b40",
                                fontSize: "1rem",
                                minWidth: "20px",
                              }}
                            >
                              ✓
                            </span>
                            <span
                              style={{ color: "#2c3e50", fontSize: "0.95rem" }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kegunaan */}
                    <div className="col-sm-6">
                      <h4
                        style={{
                          color: "#b68b40",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          marginBottom: "20px",
                          position: "relative",
                          paddingBottom: "10px",
                        }}
                      >
                        Kegunaan
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "40px",
                            height: "2px",
                            background: "#b68b40",
                          }}
                        />
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {product.kegunaan.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: "12px",
                              display: "flex",
                              gap: "10px",
                              alignItems: "flex-start",
                            }}
                          >
                            <span
                              style={{
                                color: "#b68b40",
                                fontSize: "1rem",
                                minWidth: "20px",
                              }}
                            >
                              •
                            </span>
                            <span
                              style={{ color: "#2c3e50", fontSize: "0.95rem" }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div style={{ marginTop: "35px" }}>
                    <a
                      href="#contact"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#b68b40",
                        color: "white",
                        padding: "14px 40px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "1rem",
                        letterSpacing: "1px",
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
                      Request Sample
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
                flexWrap: "wrap",
                padding: "30px",
                backgroundColor: "#f8f9fa",
                borderRadius: "20px",
                marginTop: "30px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2rem", color: "#b68b40" }}>🌱</span>
                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#1a3e3f",
                    fontWeight: "600",
                  }}
                >
                  100% Natural
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2rem", color: "#b68b40" }}>🔬</span>
                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#1a3e3f",
                    fontWeight: "600",
                  }}
                >
                  Lab Tested
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2rem", color: "#b68b40" }}>🏭</span>
                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#1a3e3f",
                    fontWeight: "600",
                  }}
                >
                  Premium Quality
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2rem", color: "#b68b40" }}>📦</span>
                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#1a3e3f",
                    fontWeight: "600",
                  }}
                >
                  Ready Stock
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
