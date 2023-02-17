import './Card.css';
import React from 'react';

const Card = (logements) => {
  return (
    <div className="card">
      <img src={logements.cover} alt={`Logement dont le titre est ${logements.title}`} />
      <p>{logements.title}</p>
    </div>
  );
}

export default Card;