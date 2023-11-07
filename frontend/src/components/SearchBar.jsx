import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";
import { NavLink } from "react-router-dom";

/* recuperer depart, destination passangers + search bar */
function SearchBar() {
  const [destination, setDestination] = useState("");
  const handleChange = (event) => {
    setDestination(event.target.value);
    console.error(event.target.value);
  };
  const handleClick = () => {
    if (destination !== "Naboo") {
      // <NavLink to="/" />;
      alert("Cette planète n'est pas desservie par la compagnie");
    }
  };
  return (
    <div className="container">
      <div className="search-from">
        <BiSolidMap className="map-icon" /> Départ : ENDOR
      </div>

      <form action="">
        <input
          type="text"
          placeholder="Destination"
          className="search-to"
          onChange={handleChange}
          value={destination}
        />
        <input type="text" placeholder="1" className="search-number" />
        <button type="submit" className="search-btn" onClick={handleClick}>
          <div>
            {/* <FiSearch className="search-icon" /> */}
            <NavLink to="/drivers">
              <img
                src="src/public/images/search.svg"
                alt="rootDriversPage"
                className="search"
              />
            </NavLink>
          </div>
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
