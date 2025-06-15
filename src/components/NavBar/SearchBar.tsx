import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SearchBar: React.FC = () => (
  <form className="text-base flex border border-gray-400 overflow-hidden w-70 ">
    <input
      type="text"
      placeholder="BUSCAR"
      className="px-2 py-1 w-full outline-none font-semibold"
    />
    <button type="submit" className="px-2 text-xl"><IoIosArrowForward /></button>
  </form>
);

export default SearchBar; 