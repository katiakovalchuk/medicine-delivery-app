import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../context/shoppingCartContext';

import './medicinecard.css';

const MedicineCard = ({ medicine, onAddToCart }) => {
  const { name } = medicine || {};
  const { medicinesList } = useContext(ShoppingCartContext);
  const addedToCart = medicinesList.map((medicine) => medicine?.name).includes(name);

  return (
    <div className="medicine-card">
      <div><img src="/images/medicine.jpg" /></div>
      <div className="medicine-card-content">
        <div className="medicine-card-title">{name}</div>
        <button type="button" disabled={addedToCart} onClick={() => onAddToCart(medicine)}>{!addedToCart ? 'add to Cart' : 'added to Cart'}</button>
      </div>
    </div>
  );
};

export default MedicineCard;
