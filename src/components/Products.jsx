import React from 'react';

const Products = () => {
  const products = [
    {
      name: "Premium Patchouli Oil",
      code: "NP-01",
      purity: "98%",
      price: "$45/L",
      moq: "100L",
      description: "Highest grade patchouli oil for luxury perfumes and cosmetics",
      features: ["Dark amber color", "Rich earthy scent", "Long-lasting fixative"]
    },
    {
      name: "Industrial Grade",
      code: "NP-02",
      purity: "95%",
      price: "$32/L",
      moq: "500L",
      description: "Perfect for industrial applications and mass production",
      features: ["Consistent quality", "Competitive pricing", "Bulk packaging"]
    },
    {
      name: "Organic Patchouli",
      code: "NP-03",
      purity: "97%",
      price: "$52/L",
      moq: "50L",
      description: "USDA Organic certified for natural product manufacturers",
      features: ["Certified organic", "Eco-friendly", "Premium quality"]
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Products</h2>
        <p className="section-subtitle">Premium Quality Patchouli Oil for Various Industries</p>
        
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <span style={{ fontSize: '4rem' }}>🌿</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>{product.description}</p>
                <div className="product-price">{product.price}</div>
                <ul className="product-specs">
                  <li>✓ Code: {product.code}</li>
                  <li>✓ Purity: {product.purity}</li>
                  <li>✓ MOQ: {product.moq}</li>
                  {product.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="cta-button" style={{ width: '100%', textAlign: 'center' }}>
                  Inquiry Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;