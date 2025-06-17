import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SearchBar: React.FC = () => (
  <form className="text-base flex border border-gray-400 overflow-hidden w-70 2xl:w-101">
    <input
      type="text"
      placeholder="BUSCAR"
      className="px-2 py-1 2xl:py-5 2xl:text-lg 2xl:px-4 w-full outline-none font-semibold"
    />
    <button type="submit" className="px-2 text-xl 2xl:text-5xl"><IoIosArrowForward className="text-gray-600"/></button>
  </form>
);

export default SearchBar; 