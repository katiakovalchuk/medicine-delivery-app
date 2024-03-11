import React, {useEffect, useState} from 'react';

import './shoppingcard.css';

const ShoppingCard = ({ medicine, setBasketList }) => {
  const { name, price } = medicine || {};
  const [count, setCount] = useState(1);

  useEffect(() => {
    setBasketList((prev) => prev.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          count,
        }
      }
      return item;
    }));
  }, [count]);

  return (
    <div className="shopping-card">
      <img src="/images/medicine.jpg" />
      <div className="shopping-card-data">
        <div className="shopping-card-title">{name}</div>
        <div>Price: {price * count}</div>
        <input type="number" min="0" max="20" value={count} onChange={(e) => setCount(e.target.value)} />
      </div>
    </div>
  );
};

export default ShoppingCard;
