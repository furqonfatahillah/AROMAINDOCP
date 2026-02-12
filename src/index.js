import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';        // File CSS default
import './App.css';          // File CSS kita
import App from './App';
// import reportWebVitals from './reportWebVitals';

// IMPORT AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// INIT AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
  delay: 100
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();