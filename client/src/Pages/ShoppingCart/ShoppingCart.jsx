import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import ShoppingCard from '../../Components/ShoppingCard';
import {UserContext} from '../../context/userContext';
import {ShoppingCartContext} from '../../context/shoppingCartContext';

import './shoppingCart.css';

const ShoppingCart = () => {
  const {userData, setUserData} = useContext(UserContext);
  const {medicinesList, setMedicinesList} = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  // const [order, setOrder] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  // });

  useEffect(() => {
    setTotalPrice(medicinesList.reduce((acc, medicine) => acc + Number(medicine?.price * (medicine?.count || 1)), 0));
  }, [medicinesList]);

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/create-order",
        {...userData, medicines: medicinesList}
      );
      setMedicinesList([]);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
    ;
  }

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
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({...prev, name: e.target.value}))}
            />
          </label>
          <label htmlFor="email">
            <div>Email:</div>
            <input
              id="email"
              type="email"
              required
              value={userData.email}
              onChange={(e) => setUserData((prev) => ({...prev, email: e.target.value}))}
            />
          </label>
          <label htmlFor="phone">
            <div>Phone:</div>
            <input
              id="phone"
              type="tel"
              required
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({...prev, phone: e.target.value}))}
            />
          </label>
          <label htmlFor="address">
            <div>Address:</div>
            <input
              id="address"
              type="text"
              required
              value={userData.address}
              onChange={(e) => setUserData((prev) => ({...prev, address: e.target.value}))}
            />
          </label>
        </div>
        <div className="shopping-items">
          {medicinesList.length !== 0 ?
            medicinesList?.map((medicine) => <ShoppingCard key={medicine.name} medicine={medicine}/>) :
            <div>Shopping Cart is empty. Please, choose medicines first</div>
          }
        </div>
      </div>
      <div className="shopping-cart-footer">
        <div>Total price: {totalPrice}</div>
        <button type="submit"
                disabled={!userData.name || !userData.email || !userData.address || !userData.phone || medicinesList.length === 0}
                onClick={handleCreateOrder}>Submit
        </button>
      </div>
    </form>
  );
};

export default ShoppingCart;
