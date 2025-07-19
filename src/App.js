import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* Gradient Transition */}
      <div className="section-transition"></div>
      
      <Services />
      
      {/* Placeholder sections for future content */}
      <section id="projects" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>Nos Projets</h2>
        <p>Galerie de projets à venir...</p>
      </section>
      
      <section id="about" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f8f9fa' }}>
        <h2>À propos</h2>
        <p>Présentation de l'entreprise à venir...</p>
      </section>
      
      <section id="contact" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>Contact</h2>
        <p>Formulaire de contact à venir...</p>
      </section>
      <Footer />
    </div>
  );
}

export default App;