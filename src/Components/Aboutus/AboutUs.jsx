import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus"></div>
      <div className="aboutus-content">
        <h1 className="aboutus-title">Hakkımızda</h1>
        <p className="aboutus-text">
          Beanstack, üçüncü nesil kahve anlayışını taptaze dokunuşlarla İzmir’e
          taşıyan bir kahve markasıdır. Her yudumda özenle seçilmiş
          çekirdeklerin, doğru demleme teknikleriyle buluştuğu bir deneyim
          sunmayı amaçlıyoruz. İzmir’in sıcak ve samimi ruhunu, kahve kültürüyle
          harmanlayarak; sadece bir içecek değil, aynı zamanda bir yaşam tarzı
          sunuyoruz. Beanstack olarak, sürdürülebilir tarım uygulamalarıyla
          yetiştirilmiş, tek orijinli kahve çekirdeklerini, modern ve minimal
          bir tasarım anlayışıyla buluşturuyoruz. Her fincan kahvede şeffaflık,
          kalite ve sadelikten ödün vermeden; kahveye dair keşfetmeye açık
          herkesi bu deneyimin bir parçası olmaya davet ediyoruz.
        </p>
      </div>
      <div className="aboutus-country">
        <div className="aboutus-country-image">
          <img className="beanstack4" src="/src/assets/beanstack4.png" />
        </div>
        <div className="aboutus-country-text">
          <h1>Kahvelerimiz</h1>
          <p>
            Kahvelerimizi, kahvesiyle dünyaca ün kazanmış ülkelerden özenle
            seçiyoruz. Etiyopya’dan Guatemala’ya, Kolombiya’dan Kenya’ya,
            Brezilya’dan Endonezya’ya kadar uzanan bir lezzet yolculuğuna
            çıkıyoruz. Her bir çekirdeğin hikâyesi var ve biz o hikâyeleri,
            İzmir’deki kendi kavurma merkezimizde taze taze hayata geçiriyoruz.
            Beanstack’te kahve hep taze olur. Zincir markaların aylarca raflarda
            bekleyen kahveleri yerine, biz her zaman yeni kavrulmuş, aroması
            yerinde kahveler sunmayı tercih ediyoruz. Çünkü bizce iyi kahve,
            taze kahvedir. Üretici çiftçilerle doğrudan iletişim kuruyor, yerel
            üreticileri destekliyoruz. Kavurma profillerimizi kendi uzman
            ekibimizle birlikte sürekli güncelliyor, her fincanda en iyi
            deneyimi yaşatmaya çalışıyoruz. Kahveyi sadece içilecek bir içecek
            değil, paylaşılacak bir an olarak görüyoruz. Bu yüzden her fincanın
            özel olmasına özen gösteriyoruz. Beanstack’te içtiğiniz kahve,
            uzaklardan gelen bir öykünün taze ve samimi hali.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
