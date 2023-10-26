import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";

/* recuperer depart, destination passangers + search bar */
function SearchBar() {
  return (
    <div className="container">
      <div className="search-from">
        <BiSolidMap /> Départ : ENDOR
      </div>

      <form action="">
        <input type="text" placeholder="Destination" className="two" />
        <input type="text" placeholder="1" className="three" />
        <button type="submit" className="iconbtn">
          <div className="icondiv">
            <FiSearch className="icon" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
