import React from 'react';
import {Link} from "react-router-dom";

import './navbar.css';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Shop</Link>
      <Link to="/shopping-cart">Shopping Cart</Link>
    </div>
  );
};

export default NavBar;
