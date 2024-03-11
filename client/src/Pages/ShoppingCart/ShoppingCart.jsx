import React, {useEffect, useState} from 'react';

import './shoppingCard.css';

const ShoppingCard = () => {

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
        <div className="shopping-items">Shopping data</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShoppingCard;
