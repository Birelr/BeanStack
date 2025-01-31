import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TextArea from "./Components/Textarea/TextArea";
import Faq from "./Components/Faq/Faq";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <TextArea />
      <Faq />
      <Shipping />
    </>
  );
}

export default App;
