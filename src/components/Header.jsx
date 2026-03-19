import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="bakery-header">
      <nav className="nav-container">
        {/* Левая часть меню */}
        <ul className="nav-group">
          <li><a href="#home">HOME</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#cakes">CAKES</a></li>
        </ul>

        {/* Центральный логотип */}
        <div className="logo-wrapper">
          <div className="logo-circle">
            <img src="https://i.etsystatic.com/41602006/r/il/db2482/5892362861/il_fullxfull.5892362861_adm3.jpg" alt="Bakery Logo" />
          </div>
        </div>

        {/* Правая часть меню */}
        <ul className="nav-group">
          <li><a href="#pastries">PASTRIES</a></li>
          <li><a href="#offers">SPECIAL OFFERS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;