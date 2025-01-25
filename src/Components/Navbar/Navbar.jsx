import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="">
          <img src={Logo} alt="logo" className="Logo" />
        </a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar__menu ${isOpen ? "active" : ""}`}>
        <a href="#home">Anasayfa</a>
        <a href="#about">Kahveler</a>
        <a href="#about">Hakkımızda</a>
        <a href="#contact">İletişim</a>
      </div>
    </div>
  );
};

export default Navbar;
