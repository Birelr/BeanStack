import React, { useState } from "react";
import "./Faq.css";

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        <span className="accordion-question">{question}</span>
      </div>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

const faqData = [
  {
    question: "Kampanyalarınızdan nasıl haberdar olabilirim?",
    answer:
      "Instagram hesabımızı takip edebilir veya bültenimize üye olarak kampanyalardan haberdar olabilirsiniz.",
  },
  {
    question: "Tüm siparişlerde kargo ücretsiz mi?",
    answer: "Belirli bir tutarın üzerindeki siparişlerde kargo ücretsizdir.",
  },
  {
    question: "Siparişim ne kadar sürede elime ulaşır?",
    answer: "Genellikle 2-3 iş günü içerisinde siparişiniz kargoya verilir.",
  },
];

export default function Faq() {
  return (
    <div className="faq-container">
      <h2 className="faq-Header">Sıkça Sorulan Sorular</h2>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
