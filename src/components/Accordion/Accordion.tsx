import React, { useEffect, useRef, useState } from 'react';
import './accordion.css';
import Card from '../Card/Card';

interface AccordionItem {
  title: string;
  cardTitle: string;
  cardContent: string;
}


interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="accordion-button"
            onClick={() => toggle(index)}
          >
            <span>{item.title}</span>
            <span className={`icon ${openIndex ? 'icon-open' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              <Card title={item.cardTitle} description={item.cardContent} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
