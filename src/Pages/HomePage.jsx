import React from "react";
import Hero from "../Components/Hero/Hero";
import TextArea from "../Components/TextArea/TextArea";
import Faq from "../Components/Faq/Faq";
import Shipping from "../Components/Shipping/Shipping";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TextArea />
      <Faq />
      <Shipping />
      <Footer />
    </div>
  );
};

export default HomePage;
