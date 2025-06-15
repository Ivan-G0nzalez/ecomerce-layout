import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const CartIcon: React.FC = () => (
  <div className="flex font-libre items-center space-x-1 cursor-pointer">
    <span role="img" aria-label="cart"><MdOutlineShoppingBag /></span>
    <span>CARRITO 0</span>
  </div>
);

export default CartIcon; 