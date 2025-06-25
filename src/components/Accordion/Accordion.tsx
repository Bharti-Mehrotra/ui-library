import React, { useState } from 'react';
import './accordion.css';
import Card from '../Card/Card';


export enum AccordionType {
  Single = 'single',
  Multiple = 'multiple',
}

export enum AccordionSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface AccordionItem {
  title: string;
  cardTitle: string;
  cardContent: string;
}
export interface AccordionProps {
  type?: AccordionType;
  size?: AccordionSize;
  items?: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({
  type = AccordionType.Single,
  size = AccordionSize.Medium,
  items,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  //  const toggle = (index: number) => {
  //   setOpenIndexes(openIndexes === index ? null : index);
  // };


  const toggle = (index: number) => {
    if (type === AccordionType.Single) {
      setOpenIndexes(openIndexes[0] === index ? [] : [index]);
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };


  return (
    <div className={`accordion accordion-${size}`}>
      {items?.map((item, index) => {
        // const isOpen = openIndexes === index;
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index} className="accordion-item">
            <button
              onClick={() => toggle(index)}
              className="accordion-header accordion-button"
            >
              <span>{item.title}</span>
              <span className="accordion-icon">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
              {isOpen && (<div className="accordion-card">
                {item.cardContent}
              </div>
              )}
            </div>
          </div>
        );
      }
      )}
    </div>
  );
};

export default Accordion;
