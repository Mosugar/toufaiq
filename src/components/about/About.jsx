import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    {
      number: "150+",
      label: "Projets réalisés",
      description: "Espaces transformés avec excellence"
    },
    {
      number: "8+",
      label: "Années d'expérience",
      description: "Au service de l'aménagement intérieur"
    },
    {
      number: "98%",
      label: "Clients satisfaits",
      description: "Témoignent de notre qualité"
    }
  ];

  // Design and construction tools for animated background
  const designTools = [
    {
      name: 'paintbrush',
      className: 'tool-paintbrush',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M20 10V8h-4V4h-2v4h-4V6H8v2H4v2h4v4H6v2h2v4h2v-4h4v2h2v-2h4v-2h-4v-4h2zm-6 4h-4v-4h4v4z"/>
        </svg>
      )
    },
    {
      name: 'palette',
      className: 'tool-palette',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 .83.15 1.65.44 2.4l-.19.19c-.78.78-.78 2.05 0 2.83.39.39.9.58 1.41.58s1.02-.19 1.41-.58l.19-.19c.75.29 1.57.44 2.4.44 4.97 0 9-4.03 9-9s-4.03-9-9-9zM8.5 8C9.33 8 10 8.67 10 9.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm7 0c.83 0 1.5.67 1.5 1.5S16.33 11 15.5 11 14 10.33 14 9.5 14.67 8 15.5 8zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      name: 'pencil',
      className: 'tool-pencil',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    },
    {
      name: 'compass',
      className: 'tool-compass',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10zm6-5l-5 5V7l5 5z"/>
        </svg>
      )
    },
    {
      name: 'rollerbrush',
      className: 'tool-rollerbrush',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M18 3H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 11V5h12v6H6zm5 2v8h2v-8h-2z"/>
        </svg>
      )
    },
    {
      name: 'triangle',
      className: 'tool-triangle',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M12 2L2 20h20L12 2zm0 3.99L18.99 18H5.01L12 5.99z"/>
        </svg>
      )
    },
    {
      name: 'protractor',
      className: 'tool-protractor',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C5.1 16.46 4 14.32 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.32-1.1 4.46-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10zm0 6l-4 4h8l-4-4z"/>
        </svg>
      )
    },
    {
      name: 'spraypaint',
      className: 'tool-spraypaint',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M18 9h-2V7c0-.55-.45-1-1-1h-2V4.5C13 3.67 12.33 3 11.5 3S10 3.67 10 4.5V6H8c-.55 0-1 .45-1 1v2H5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm-7 0V7h2v2h-2zm8-7h1v1h-1V2zm0 2h1v1h-1V4zm2-2h1v1h-1V2zm0 2h1v1h-1V4z"/>
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Taoufiq Laadidi",
      role: "Fondateur & Directeur",
      description: "Expert en aménagement intérieur avec plus de 8 ans d'expérience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="about" id="about">
      {/* Animated Design Tools Canvas Background */}
      <div className="about-canvas">
        {/* Blueprint Grid */}
        <div className="about-blueprint-grid"></div>
        
        {/* Main Background */}
        <div className="about-background"></div>
        
        {/* Large Background Text */}
        <div className="about-background-text">ABOUT</div>
        
        {/* Design Tools Elements */}
        <div className="design-elements">
          {designTools.map((tool, index) => (
            <div key={index} className={`design-tool ${tool.className}`}>
              {tool.svg}
            </div>
          ))}
        </div>
        
        {/* Floating Company Logos */}
        <div className="floating-logos">
          <div className="floating-logo logo-1">
            <img 
              src="https://res.cloudinary.com/dylpck2et/image/upload/v1752879878/Asset_1_cfkepa.svg" 
              alt="TL GLOBAL Logo"
            />
          </div>
          <div className="floating-logo logo-2">
            <img 
              src="https://res.cloudinary.com/dylpck2et/image/upload/v1752879878/Asset_1_cfkepa.svg" 
              alt="TL GLOBAL Logo"
            />
          </div>
          <div className="floating-logo logo-3">
            <img 
              src="https://res.cloudinary.com/dylpck2et/image/upload/v1752879878/Asset_1_cfkepa.svg" 
              alt="TL GLOBAL Logo"
            />
          </div>
        </div>
        
        {/* Paint Splashes */}
        <div className="paint-splashes">
          <div className="paint-splash splash-1"></div>
          <div className="paint-splash splash-2"></div>
          <div className="paint-splash splash-3"></div>
          <div className="paint-splash splash-4"></div>
        </div>
      </div>

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="about-badge">
              <div className="badge-dot"></div>
              <span>À propos de nous</span>
            </div>
            <h2 className="about-title">
              Créateurs d'espaces d'exception depuis 2016
            </h2>
            <p className="about-subtitle">
              Basés à Salé, nous transformons vos idées en réalités grâce à notre expertise 
              en aménagement intérieur et notre passion pour l'excellence.
            </p>
          </div>
          <div className="about-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="TL GLOBAL - Aménagement intérieur moderne"
              className="hero-img"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <div className="location-badge">
                  <svg className="location-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Basés à Salé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="about-story">
          <div className="story-content">
            <div className="story-text">
              <h3 className="story-title">Notre Histoire</h3>
              <div className="story-description">
                <p>
                  Fondée en 2016 à Salé, TL GLOBAL est née de la passion de Taoufiq Laadidi pour 
                  l'aménagement intérieur et son désir de créer des espaces qui reflètent 
                  véritablement la personnalité de ses clients.
                </p>
                <p>
                  Depuis nos débuts, nous avons développé une approche unique qui combine 
                  créativité, expertise technique et savoir-faire artisanal. Chaque projet 
                  est une nouvelle aventure où nous repoussons les limites du possible pour 
                  créer des espaces d'exception.
                </p>
                <p>
                  Aujourd'hui, avec plus de 150 projets réalisés et une équipe de professionnels 
                  passionnés, nous continuons à transformer les rêves de nos clients en réalités 
                  tangibles, un espace à la fois.
                </p>
              </div>
            </div>
            <div className="story-image">
              <div className="image-stack">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Design intérieur moderne"
                  className="stack-img primary"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Aménagement sur mesure"
                  className="stack-img secondary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location & Map Section */}
        <div className="about-location">
          <div className="location-content">
            <div className="location-info">
              <h3 className="location-title">Notre Bureau</h3>
              <div className="location-details">
                <div className="location-item">
                  <svg className="location-detail-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <h4>Adresse</h4>
                    <p>Salé, Rabat-Salé-Kénitra<br/>Maroc</p>
                  </div>
                </div>
                
                <div className="location-item">
                  <svg className="location-detail-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+212 6 17 86 90 01</p>
                  </div>
                </div>
                
                <div className="location-item">
                  <svg className="location-detail-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <h4>Email</h4>
                    <p>contact@tlglobal.ma</p>
                  </div>
                </div>
                
                <div className="location-item">
                  <svg className="location-detail-icon" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <h4>Horaires</h4>
                    <p>Lun - Ven: 9h00 - 18h00<br/>Sam: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="location-map">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/search?sca_esv=6ae216d7b0896bf7&hl=fr&gl=fr&output=search&kgmid=%2Fg%2F11m5kjnsv8&q=STE%20TL%20GLOBAL&shndl=30&shem=lcuae%2Clsptb2%2Csdl1p%2Cuaasie&source=sh%2Fx%2Floc%2Funi%2Fm1%2F3&kgs=ed0e1df4f6a36ecf"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TL GLOBAL Location"
                ></iframe>
                <div className="map-overlay">
                  <div className="map-badge">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>TL GLOBAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="about-team">
          <div className="team-header">
            <h3 className="team-title">Notre Équipe</h3>
            <p className="team-subtitle">
              Des professionnels passionnés à votre service
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="https://wa.me/212617869001" className="social-link" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                        </svg>
                      </a>
                      <a href="mailto:contact@tlglobal.ma" className="social-link">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="about-cta">
          <div className="cta-content">
            <h3 className="cta-title">Prêt à transformer votre espace ?</h3>
            <p className="cta-description">
              Rencontrons-nous pour discuter de votre projet et créer ensemble l'espace de vos rêves.
            </p>
            <div className="cta-actions">
              <a href="#contact" className="cta-btn primary">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Planifier une consultation
              </a>
              <a href="https://wa.me/212617869001" className="cta-btn secondary" target="_blank" rel="noopener noreferrer">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;