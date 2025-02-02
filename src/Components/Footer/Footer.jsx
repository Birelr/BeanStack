import React from "react";
import "./Footer.css";
import Logo2 from "../../assets/Logo2.png";
import Instagram from "../../assets/instagram.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer-content">
        <img src={Logo2} alt="logo" className="logo2" />
        <div className="footer-cards">
          <h2>Destek & Politikalar</h2>
          <a href="#">İade ve Geri Ödeme Politikası</a>
          <a href="#">Hakkımızda</a>
          <a href="#">Bize Ulaşın</a>
        </div>
        <div className="footer-cards">
          <h2>Bizi Takip Edin</h2>
          <a href="https://www.instagram.com/birel.r/">
            <img src={Instagram} alt="logo" className="instagram" />
          </a>
        </div>
      </div>
      <div className="footer-cards2">
        <h4>© 2025 Rojhat Birel.</h4>
        <h4>
          This Website Designed By{""}
          <a href="https://www.rojhatbirel.com">Rojhat Birel</a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
