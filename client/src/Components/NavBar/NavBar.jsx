import React from 'react';
import {Link, NavLink} from "react-router-dom";

import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/shopping-cart">Shopping Cart</NavLink>
    </div>
  );
};

export default NavBar;
