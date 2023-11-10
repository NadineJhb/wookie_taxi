import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import DriverCard from "./DriverCard";
import Filters from "./Filters";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Driver() {
  const { state } = useLocation();
  const [people, setPeople] = useState([]);
  const array = [
    "https://swapi.dev/api/people",
    "https://swapi.dev/api/people/?page=2",
    "https://swapi.dev/api/people/?page=3",
    "https://swapi.dev/api/people/?page=4",
    "https://swapi.dev/api/people/?page=5",
    "https://swapi.dev/api/people/?page=6",
    "https://swapi.dev/api/people/?page=7",
    // "https://swapi.dev/api/people/?page=8",
    // "https://swapi.dev/api/people/?page=9",
  ];

  useEffect(() => {
    axios
      .all(array.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        const characters = [];
        for (let i = 0; i < data.length; i += 1) {
          for (let k = 0; k < 10; k += 1) {
            if (data[i].data.results[k].vehicles.length > 0) {
              characters.push(data[i].data.results[k]);
            }
          }
        }
        console.warn("characters : ", characters);

        const randomCharacters = [];
        for (let j = 0; j < 10; j += 1) {
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
  }, []);

  return (
    <div className="driver-page">
      <Logo />
      <div className="filter-search-cards">
        <div className="filterBlock">
          <Filters />
        </div>

        <div className="search-cards">
          <div>
            <SearchBar />
          </div>
          <div className="cards">
            {people.length === 0 ? (
              <div className="loader">
                <p className="loaderText">
                  Un peu de patience, nous consultons les chauffeurs
                  disponibles.
                </p>
                <div className="sabreLoader">
                  <img
                    src="src/public/images/wookie.gif"
                    alt="Loader"
                    className="loaderImg"
                  />
                </div>
              </div>
            ) : (
              people.map((driver) => {
                return (
                  <div>
                    <DriverCard
                      driverName={driver.name}
                      driverVehicleUrl={driver.vehicles[0]}
                      stateSearchBar={state}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
