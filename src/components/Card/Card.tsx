import React from 'react';
import './card.css';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, footer }) => {
  return (
    <div className="card-container">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
