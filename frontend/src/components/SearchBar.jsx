import { React } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";

/* recuperer depart, destination passangers + search bar */

function SearchBar({
  inputDestination,
  setInputDestination,
  inputPassenger,
  setInputPassenger,
  searchIcon,
}) {
  const navigate = useNavigate();

  const handleClickSearch = (e) => {
    e.preventDefault();
    navigate("/driver", {
      state: { destination: inputDestination, passenger: inputPassenger },
    });
  };

  return (
    <div className="searchbar-container">
      <div className="search-from">
        <BiSolidMap className="map-icon" />
        <p className="depart">Departure : ENDOR</p>
      </div>
      <form onSubmit={handleClickSearch}>
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
          <button type="submit" className="search-btn">
            <FiSearch className={searchIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  setInputDestination: PropTypes.func.isRequired,
  inputDestination: PropTypes.string.isRequired,
  inputPassenger: PropTypes.number.isRequired,
  setInputPassenger: PropTypes.func.isRequired,
  searchIcon: PropTypes.string.isRequired,
};

export default SearchBar;
