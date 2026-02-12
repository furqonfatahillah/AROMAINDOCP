import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Laurent",
      position: "Purchasing Manager, LVMH France",
      content:
        "Nilam Essence has been our trusted supplier for over a decade. Their patchouli oil consistently meets our strict quality requirements for luxury perfumes.",
      avatar: "ML",
    },
    {
      name: "David Chen",
      position: "R&D Director, Shanghai Cosmetics",
      content:
        "The organic certification and consistent quality of their patchouli oil have helped us develop successful natural product lines. Excellent partnership.",
      avatar: "DC",
    },
    {
      name: "Sarah Williams",
      position: "Founder, AromaWellness",
      content:
        "Finally found a supplier who delivers exactly what they promise. The therapeutic grade patchouli oil has amazing aroma and purity.",
      avatar: "SW",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Trusted by Industry Leaders</h2>
        <p className="section-subtitle">What Our Global Partners Say</p>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">"{testimonial.content}"</div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
