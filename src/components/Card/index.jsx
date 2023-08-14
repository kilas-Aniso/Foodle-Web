import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './card.css';


const Card = ({ title, rating, price, imageUrl }) => {
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="circular-image" />
        </div>
        <h2>{title}</h2>
        <div className="rating">
          {Array.from({ length: rating }, (_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="star" />
          ))}
        </div>
        <div className="price">
          <p>${price}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
