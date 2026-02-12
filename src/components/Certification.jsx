import React from 'react';

const Certification = () => {
  const certifications = [
    { icon: "📜", title: "ISO 9001:2015", desc: "Quality Management" },
    { icon: "🌱", title: "Organic", desc: "EU & USDA Certified" },
    { icon: "☪️", title: "Halal", desc: "MUI Certified" },
    { icon: "🔬", title: "GMP", desc: "Good Manufacturing Practice" },
    { icon: "🌿", title: "Eco-Friendly", desc: "Sustainable Production" },
    { icon: "🏭", title: "SNI", desc: "Indonesian National Standard" }
  ];

  return (
    <section id="certification" className="certification">
      <div className="container">
        <h2>Certifications</h2>
        <p className="section-subtitle">International Standards & Quality Assurance</p>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
              <div className="cert-icon">{cert.icon}</div>
              <h4>{cert.title}</h4>
              <p style={{ color: '#e8d5b5', fontSize: '0.9rem' }}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;