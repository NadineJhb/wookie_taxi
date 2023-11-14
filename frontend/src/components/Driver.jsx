import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import DriverCard from "./DriverCard";
import Filters from "./Filters";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Driver() {
  const { state } = useLocation();
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState(people);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
    axios
      .get("https://netflix-clone-back.onrender.com/characters")
      .then((data) => {
        const characters = [];
        for (let i = 0; i < data.data.length; i += 1) {
          if (data.data[i].vehicles.length > 0) {
            characters.push(data.data[i]);
          }
        }

        const randomCharacters = [];
        for (let j = 0; j < 20; j += 1) {
          const randomDrivers =
            characters[Math.floor(Math.random() * characters.length)];

          const verifName = randomDrivers.name;
          if (!randomCharacters.find(({ name }) => name === verifName)) {
            randomCharacters.push(randomDrivers);
          } else {
            j -= 1;
          }
          console.warn("random: ", randomCharacters);
        }
        setPeople(randomCharacters);
      })
      .catch((err) => console.error(err));
  }, [state]);

  const [destinationDriverpage, setDestinationDriverpage] = useState(
    state.destination
  );
  const [passengerDriverpage, setPassengerDriverpage] = useState(
    state.passenger
  );

  return (
    <div className="driver-page">
      <Logo />
      <div className="filter-search-cards">
        <div className="filterBlock">
          <Filters setFilteredPeople={setFilteredPeople} people={people} />
        </div>

        <div className="search-cards">
          <div>
            <SearchBar
              inputDestination={destinationDriverpage}
              setInputDestination={setDestinationDriverpage}
              inputPassenger={passengerDriverpage}
              setInputPassenger={setPassengerDriverpage}
            />
          </div>
          <div className="cards">
            {people.length === 0 ? (
              <div className="loader">
                <p className="loaderText">Checking for avalable drivers...</p>
                <div className="sabreLoader">
                  <img
                    src="src/public/images/wookie.gif"
                    alt="Loader"
                    className="loaderImg"
                  />
                </div>
              </div>
            ) : (
              filteredPeople.map((driver) => {
                return (
                  <DriverCard
                    driver={driver}
                    driverVehicleUrl={driver.vehicles[0]}
                    stateSearchBar={state}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
