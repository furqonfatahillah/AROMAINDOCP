import React from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: "🧴",
      title: "Aromatherapy",
      description:
        "Calming and grounding properties ideal for relaxation and meditation",
    },
    {
      icon: "💄",
      title: "Cosmetics",
      description: "Natural fixative for perfumes and skincare products",
    },
    {
      icon: "🧪",
      title: "Pharmaceutical",
      description: "Anti-inflammatory and antimicrobial properties",
    },
    {
      icon: "🏭",
      title: "Industrial",
      description:
        "Fragrance fixative for soaps, detergents, and air fresheners",
    },
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2>Benefits & Applications</h2>
        <p className="section-subtitle">
          Versatile Natural Oil for Multiple Industries
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
