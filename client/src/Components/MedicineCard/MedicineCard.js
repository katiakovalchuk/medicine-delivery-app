import React from 'react';

import './medicinecard.css';

const MedicineCard = ({ medicine, onAddToCart }) => {
  // console.log('medicine', medicine);

  return (
    <div className="medicine-card">
      <div><img src="/images/medicine.jpg" /></div>
      <div className="medicine-card-content">
        <div className="medicine-card-title">{medicine}</div>
        <button type="button" onClick={() => onAddToCart(medicine)}>add to Cart</button>
      </div>
    </div>
  );
};

export default MedicineCard;
