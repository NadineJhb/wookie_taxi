import { React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";

/* recuperer depart, destination passangers + search bar */

function SearchBar({ inputDestination, setInputDestination }) {
  const [inputPassenger, setInputPassenger] = useState(0);
  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate("/driver", {
      state: { destination: inputDestination, passenger: inputPassenger },
    });
  };

  return (
    <div className="title-searchbar-container">
      <h1>LE COVOIT' DE LA GALAXIE !</h1>
      <div className="searchbar-container">
        <div className="search-from">
          <BiSolidMap className="map-icon" />
          <p className="depart">Départ : ENDOR</p>
        </div>

        <form action="">
          <input
            type="text"
            placeholder="Destination"
            className="search-to"
            value={inputDestination}
            onChange={(e) => setInputDestination(e.target.value)}
          />
          <input
            type="number"
            placeholder="1"
            className="search-passenger"
            value={inputPassenger}
            onChange={(e) => setInputPassenger(e.target.value)}
          />
          <div>
            <button
              onClick={handleClickSearch}
              type="submit"
              className="search-btn"
            >
              <FiSearch className="search-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setInputDestination: PropTypes.func.isRequired,
  inputDestination: PropTypes.string.isRequired,
};

export default SearchBar;
