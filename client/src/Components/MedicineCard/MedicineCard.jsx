import React, {useState} from 'react';

import './medicinecard.css';

const MedicineCard = ({ medicine, onAddToCart }) => {
  const { name } = medicine || {};
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div className="medicine-card">
      <div><img src="/images/medicine.jpg" /></div>
      <div className="medicine-card-content">
        <div className="medicine-card-title">{name}</div>
        <button type="button" disabled={addedToCart} onClick={() => {
          onAddToCart(medicine);
          setAddedToCart(true);
        }}>{!addedToCart ? 'add to Cart' : 'added to Cart'}</button>
      </div>
    </div>
  );
};

export default MedicineCard;
