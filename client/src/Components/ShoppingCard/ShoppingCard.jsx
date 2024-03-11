import React, { useContext } from 'react';

import {ShoppingCartContext} from '../../context/shoppingCartContext';

import './shoppingcard.css';

const ShoppingCard = ({ medicine }) => {
  const { medicinesList, setMedicinesList } = useContext(ShoppingCartContext);
  const { name, price } = medicine || {};
  const count = medicinesList?.filter((item) => item.name === name)[0]?.count || 1;

  return (
    <div className="shopping-card">
      <img src="/images/medicine.jpg" />
      <div className="shopping-card-data">
        <div className="shopping-card-title">{name}</div>
        <div>Price: {price * count}</div>
        <input type="number" min="0" max="20" value={count} onChange={(e) => {
          setMedicinesList((prev) => prev.map((item) => {
            if (item.name === name) {
              return {
                ...item,
                count: e.target.value,
              }
            }
            return item;
          }))
        }} />
      </div>
    </div>
  );
};

export default ShoppingCard;
