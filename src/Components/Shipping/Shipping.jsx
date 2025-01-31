import React from "react";
import "./Shipping.css";
import Coffee1 from "../../assets/coffe-shop_12348292.png";
import Coffee2 from "../../assets/coffee_1046887.png";
import Coffee3 from "../../assets/man_10428594.png";

const Shipping = () => {
  return (
    <div className="shipping-card">
      <div className="shipping-card-content">
        <img src={Coffee1} alt="logo" className="Shipping" />
        <h3>Size En Yakın Kahve Noktaları</h3>
        <p>
          Lezzetli kahvenin adresini bulun! Size en yakın kahve dükkanlarını
          keşfedin ve favori içeceğinize kolayca ulaşın.
        </p>
      </div>
      <div className="shipping-card-content">
        <img src={Coffee2} alt="logo" className="Shipping" />
        <h3>Taze ve Lezzetli Kahve</h3>
        <p>
          Özenle seçilmiş kahve çekirdeklerinden hazırlanan taptaze kahveler ile
          gününüze enerji katın.
        </p>
      </div>
      <div className="shipping-card-content">
        <img src={Coffee3} alt="logo" className="Shipping" />
        <h3>Hızlı Kahve Teslimatı</h3>
        <p>
          Sevdiğiniz kahveyi kapınıza kadar getiriyoruz! Sıcak ve taze kahvenizi
          hızlı teslimat ile keyifle yudumlayın.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
