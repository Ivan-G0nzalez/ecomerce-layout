import React from "react";

const menuItems = ["HOMBRE", "MUJER", "BLOG", "HISTORIA", "TIENDAS"];

const NavMenu: React.FC = () => (
  <nav>
    <ul className="flex space-x-12 text-xs font-libre font-semibold text-gray-700">
      {menuItems.map((item) => (
        <li key={item} className="hover:text-black cursor-pointer">{item}</li>
      ))}
    </ul>
  </nav>
);

export default NavMenu; 