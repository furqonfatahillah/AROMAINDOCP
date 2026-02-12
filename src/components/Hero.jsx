import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Premium Patchouli Oil From Indonesia</h2>
            <p>100% Pure & Natural • Sustainably Sourced • ISO Certified</p>
            <a href="#contact" className="cta-button">Get Sample</a>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Export Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Purity Level</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #b68b40, #e8d5b5)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1a3e3f',
              fontSize: '8rem',
              fontWeight: 'bold',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
              🌿
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;