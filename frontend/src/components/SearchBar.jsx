import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";

/* recuperer depart, destination passangers + search bar */
function SearchBar() {
  const navigate = useNavigate();
  return (
    <div className="title-searchbar-container">
      <h1>LE COVOIT' DE LA GALAXIE !</h1>
      <div className="searchbar-container">
        <div className="search-from">
          <BiSolidMap className="map-icon" /> Départ : ENDOR
        </div>

        <form action="">
          <input type="text" placeholder="Destination" className="search-to" />
          <input type="text" placeholder="1" className="search-number" />
          <button
            onClick={() => navigate("/driver")}
            type="submit"
            className="search-btn"
          >
            <FiSearch className="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
