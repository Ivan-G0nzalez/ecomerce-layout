import React from "react";
import { Link } from "react-router-dom";

const menuItems = ["HOMBRE", "MUJER", "BLOG", "HISTORIA", "TIENDAS"];

const NavMenu: React.FC = () => (
  <nav>
    <ul className="flex space-x-19 text-xs font-libre font-semibold text-gray-700 2xl:text-2xl">
      {menuItems.map((item) => (
        <li key={item} className="hover:text-black cursor-pointer">
          <Link to='categorias'>{item}</Link></li>
      ))}
    </ul>
  </nav>
);

export default NavMenu; 