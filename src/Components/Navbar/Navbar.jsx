import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      // Menu açıksa ve tıklanan alan navRef içerisinde değilse menüyü kapat
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Mousedown veya click event'i dinlemek için.
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="navbar" ref={navRef}>
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
        <a href="/">Anasayfa</a>
        <a href="/coffees">Kahveler</a>
        <a href="/about">Hakkımızda</a>
        <a href="/contact">İletişim</a>
      </div>
    </div>
  );
};

export default Navbar;
