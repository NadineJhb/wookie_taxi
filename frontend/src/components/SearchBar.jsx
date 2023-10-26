import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";

/* recuperer depart, destination passangers + search bar */
function SearchBar() {
  return (
    <div className="container">
      <div className="search-from">
        <BiSolidMap className="map-icon" /> Départ : ENDOR
      </div>

      <form action="">
        <input type="text" placeholder="Destination" className="search-to" />
        <input type="text" placeholder="1" className="search-number" />
        <button type="submit" className="search-btn">
          <div>
            <FiSearch className="search-icon" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
