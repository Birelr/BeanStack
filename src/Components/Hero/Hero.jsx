import React from "react";
import "./Hero.css";
import CoffeVideo from "../../Assets/0126.mp4";

const Hero = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        src={CoffeVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-content">
        <h1>Bir Fincanla Başlayan Yolculuk</h1>
        <button className="hero-btn">Lezzetleri Keşfet</button>
      </div>
    </div>
  );
};

export default Hero;
