import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Nilam Essence</h2>
        <p className="section-subtitle">Leading Producer of Premium Patchouli Oil</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>Established in 1998, Nilam Essence has grown to become Indonesia's premier producer of high-quality patchouli oil. Our journey began in the lush highlands of Aceh, where the finest patchouli plants thrive in ideal conditions.</p>
            <p>We work directly with over 1,000 local farmers, ensuring sustainable farming practices and fair trade principles. Our state-of-the-art distillation facilities combine traditional wisdom with modern technology to produce patchouli oil of exceptional purity.</p>
            
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Organic Certified</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Halal Certified</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>GMP Compliant</span>
              </div>
            </div>
          </div>
          
          <div style={{
            background: '#1a3e3f',
            padding: '2rem',
            borderRadius: '15px',
            color: 'white'
          }}>
            <h3 style={{ color: '#e8d5b5', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>"To provide the world with the purest patchouli oil while empowering local farming communities and preserving Indonesia's natural heritage."</p>
            <h3 style={{ color: '#e8d5b5', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ fontStyle: 'italic' }}>"To be the global benchmark for sustainable and premium quality patchouli oil production."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;