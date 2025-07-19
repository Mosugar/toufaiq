import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      iconPath: "M3 21V3h18v18H3zm2-2h14V5H5v14zm2-10h10v8H7v-8zm2 2v4h6v-4H9z",
      title: "Aménagements intérieurs",
      description: "Conception et réalisation d'espaces intérieurs sur mesure, optimisant chaque mètre carré selon vos besoins et votre style de vie.",
      features: [
        "Plans d'aménagement 3D",
        "Optimisation des espaces",
        "Conseils en décoration",
        "Suivi de chantier"
      ]
    },
    {
      id: 2,
      iconPath: "M22.61 19l-2.12-2.12c-.78-.78-.78-2.05 0-2.83l2.12-2.12c.78-.78.78-2.05 0-2.83l-2.12-2.12c-.78-.78-.78-2.05 0-2.83L22.61 5c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L17.66 4.29c-.78.78-2.05.78-2.83 0L12.71 2.17c-.78-.78-2.05-.78-2.83 0L7.76 4.29c-.78.78-2.05.78-2.83 0L2.81 2.17c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83L2.1 7.12c.78.78.78 2.05 0 2.83L0 12.07c-.78.78-.78 2.05 0 2.83l2.1 2.12c.78.78.78 2.05 0 2.83L0 21.97c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.12-2.12c.78-.78 2.05-.78 2.83 0l2.12 2.12c.78.78 2.05.78 2.83 0l2.12-2.12c.78-.78 2.05-.78 2.83 0l2.12 2.12c.78.78 2.05.78 2.83 0 .78-.78.78-2.05 0-2.83z",
      title: "Rénovation complète",
      description: "Transformation totale de vos espaces avec une approche globale, de la démolition à la finition, pour un résultat harmonieux.",
      features: [
        "Démolition et gros œuvre",
        "Électricité et plomberie",
        "Isolation et cloisons",
        "Coordination des corps de métier"
      ]
    },
    {
      id: 3,
      iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      title: "Finitions soignées",
      description: "Attention particulière aux détails avec des finitions haut de gamme qui font la différence dans la qualité finale de votre projet.",
      features: [
        "Revêtements de sol premium",
        "Peintures et enduits décoratifs",
        "Menuiseries sur mesure",
        "Éclairage d'ambiance"
      ]
    },
    {
      id: 4,
      iconPath: "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM6 10h12v1H6v-1zm0 2h12v1H6v-1zm0 2h12v1H6v-1z",
      title: "Mobilier sur mesure",
      description: "Création de mobilier unique adapté à vos espaces et besoins spécifiques, alliant fonctionnalité et esthétique.",
      features: [
        "Design personnalisé",
        "Fabrication artisanale",
        "Matériaux nobles",
        "Installation professionnelle"
      ]
    },
    {
      id: 5,
      iconPath: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h14v10H5V7zm2 2v6h10V9H7z",
      title: "Design & Conception",
      description: "Étude complète de votre projet avec plans techniques, rendus 3D et conseils d'experts pour concrétiser votre vision.",
      features: [
        "Étude de faisabilité",
        "Plans techniques détaillés",
        "Rendus 3D photoréalistes",
        "Conseil en aménagement"
      ]
    },
    {
      id: 6,
      iconPath: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14zm-7-7h6v2h-6v-2zm0 3h6v2h-6v-2z",
      title: "Gestion de projet",
      description: "Coordination complète de votre projet, respect des délais et du budget, pour une réalisation sans stress de votre côté.",
      features: [
        "Planning détaillé",
        "Coordination des artisans",
        "Suivi qualité",
        "Respect des délais"
      ]
    }
  ];

  // Construction tools for animated background
  const constructionTools = [
    { name: 'hammer', symbol: '🔨', className: 'tool-hammer' },
    { name: 'wrench', symbol: '🔧', className: 'tool-wrench' },
    { name: 'drill', symbol: '🔧', className: 'tool-drill' },
    { name: 'ruler', symbol: '📏', className: 'tool-ruler' },
    { name: 'saw', symbol: '🪚', className: 'tool-saw' },
    { name: 'level', symbol: '📐', className: 'tool-level' }
  ];

  return (
    <section className="services" id="services">
      {/* Animated Construction Canvas Background */}
      <div className="services-canvas">
        {/* Blueprint Grid */}
        <div className="blueprint-grid"></div>
        
        {/* Main Background */}
        <div className="services-background"></div>
        
        {/* Large Background Text */}
        <div className="services-background-text">SERVICES</div>
        
        {/* Construction Elements */}
        <div className="construction-elements">
          {constructionTools.map((tool, index) => (
            <div key={index} className={`construction-tool ${tool.className}`}>
              {tool.symbol}
            </div>
          ))}
        </div>
        
        {/* Floating Particles */}
        <div className="construction-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-badge">
            <div className="badge-dot"></div>
            <span>Nos Expertises</span>
          </div>
          <h2 className="services-title">
            Des solutions complètes pour tous vos projets
          </h2>
          <p className="services-subtitle">
            Nous combinons créativité, expertise technique et savoir-faire artisanal 
            pour transformer vos espaces en lieux d'exception.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={service.iconPath} fill="currentColor"/>
                </svg>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.description}
                </p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-footer">
                <button className="service-btn">
                  <span>Découvrir</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Transformons ensemble votre vision en réalité</h3>
            <p className="cta-description">
              Contactez notre équipe d'experts pour un accompagnement personnalisé
            </p>
            <div className="cta-actions">
              <button className="cta-btn primary">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Devis gratuit</span>
              </button>
              <button className="cta-btn secondary">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Nous contacter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;