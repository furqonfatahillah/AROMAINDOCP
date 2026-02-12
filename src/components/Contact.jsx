import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="section-subtitle">Get a Quote or Request Sample</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 style={{ color: '#1a3e3f', marginBottom: '2rem' }}>Get in Touch</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Office</strong>
                <p>Jl. Industri No. 123, Jakarta 12345, Indonesia</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong>Phone</strong>
                <p>+62 21 5555 1234</p>
                <p>+62 812 3456 7890 (Sales)</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <p>sales@nilamessence.com</p>
                <p>export@nilamessence.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <strong>Business Hours</strong>
                <p>Monday - Friday: 08:00 - 17:00 WIB</p>
                <p>Saturday: 08:00 - 13:00 WIB</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ color: '#1a3e3f', marginBottom: '2rem' }}>Send Inquiry</h3>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;