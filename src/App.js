import React from 'react';

// Import semua component
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Certification from './components/Certification';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Certification />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;