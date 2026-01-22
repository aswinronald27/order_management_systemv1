import React from 'react';
import "./Cards.css";

const Cards = ({ pdtname, size, orderId, image, assignedTo, onCardClick }) => {
  return (
    <div className="order-card" onClick={() => onCardClick(orderId)}>

      <div className="order-header">
        <p><strong>{pdtname}</strong></p>
        <p>Order ID: {orderId}</p>
      </div>

      <div className="order-tab">
        {size}
      </div>
       {assignedTo && (
        <p className="assigned-text">
          <strong>Assigned To:</strong> {assignedTo}
        </p>
      )}
      <div className="order-image">
        {image && (
          <img 
            src={image} 
            alt="Order Preview" 
            className="order-img"
          />
        )}
      </div>

    </div>
  );
};

export default Cards;
