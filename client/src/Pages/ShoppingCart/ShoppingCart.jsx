import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ShoppingCard from '../../Components/ShoppingCard';
import {ShoppingCartContext} from '../../context/shoppingCartContext';

import './shoppingCart.css';

const ShoppingCart = () => {
  const { medicinesList } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const [basketList, setBasketList] = useState(medicinesList.map((medicine) => ({...medicine, count: 1})));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(basketList.reduce((acc, medicine) => acc + Number(medicine?.price * medicine?.count), 0));
  }, [basketList]);

  return (
    <form className="shopping-cart">
      <div className="shopping-cart-data">
        <div className="shopping-contact">
          <label htmlFor="name">
            <div>Name:</div>
            <input
              id="name"
              type="text"
              required
            />
          </label>
          <label htmlFor="email">
            <div>Email:</div>
            <input
              id="email"
              type="email"
              required
            />
          </label>
          <label htmlFor="phone">
            <div>Phone:</div>
            <input
              id="phone"
              type="tel"
              required
            />
          </label>
          <label htmlFor="address">
            <div>Address:</div>
            <input
              id="address"
              type="text"
              required
            />
          </label>
        </div>
        <div className="shopping-items">
          {
            medicinesList?.map((medicine) => <ShoppingCard key={medicine.name} medicine={medicine} setBasketList={setBasketList} />)
          }
        </div>
      </div>
      <div className="shopping-cart-footer">
        <div>Total price: {totalPrice}</div>
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}>Submit</button>
      </div>
    </form>
  );
};

export default ShoppingCart;
