import React from 'react';
import './LandingPage.scss';

// --- КОНФИГУРАЦИЯ КОНТЕНТА (Меняй всё здесь) ---
const CONFIG = {
  navLinks: ['Home', 'Service', 'Shop', 'Company', 'Contacts'],
  hero: {
    title: "TURN THE COLOR TO THE MAXIMUM",
    description: "We offer a wide range of services from partial painting to complete restoration of the body.",
    mainCarImage: "https://cdn.perxis.ru/originals/d2mns68beucc73fdc6hg/original", // Вставь ссылку на машину
  },
  services: [
    { id: 1, title: 'FULL CAR PAINTING', url: 'https://5.imimg.com/data5/SELLER/Default/2023/3/296058141/WE/VY/WX/112298022/tvs-full-body-painting-services.png' },
    { id: 2, title: 'DETAILED CAR PAINTING', url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e' },
    { id: 3, title: 'PAINTING OF CALIPERS', url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3' },
    { id: 4, title: 'PAINTING OF WHEELS', url: 'https://images.unsplash.com/photo-1552650272-b8a34e21bc4b' },
    { id: 5, title: 'LOCAL CAR PAINTING', url: 'https://storage.googleapis.com/content-assistant-images-persistent/20260314-021451-30cf79a2d880d84a-28e865ee-91fa-4e16-9114-5439f2755877.webp' },
  ],
  promoText: "LEAVE A REQUEST FOR A FREE CONSULTATION"
};

const LandingPage = () => {
  return (
    <div className="max-color-site">
      {/* HEADER */}
      <header className="navbar">
        <div className="logo">MAX COLOR</div>
        <nav className="nav-menu">
          {CONFIG.navLinks.map(link => <a key={link} href={`#${link}`}>{link}</a>)}
        </nav>
        <button className="callback-btn-top">Callback</button>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-info">
          <h1 className="title-glow">{CONFIG.hero.title}</h1>
          <p>{CONFIG.hero.description}</p>
          <button className="btn-main">Callback</button>
        </div>
        
        <div className="hero-visual">
          <div className="glow-effect"></div>
          <img src={CONFIG.hero.mainCarImage} alt="Car" className="car-img" />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <h2 className="section-title">TYPES OF CAR PAINTING</h2>
        <div className="grid-container">
          {CONFIG.services.map((item) => (
            <div key={item.id} className="card">
              <div className="card-content">
                <h3>{item.title}</h3>
                <span className="learn-more">Learn more</span>
              </div>
              <div className="card-img-box">
                <img src={item.url} alt={item.title} /></div>
            </div>
          ))}
          
          <div className="card promo-blue">
            <h3>{CONFIG.promoText}</h3>
            <button className="btn-white">Callback</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;