import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DriverCard from "./DriverCard";
import Filters from "./Filters";

// Code suivant pour faire un fltrage //

export default function Driver() {
  const { state } = useLocation();
  //*   return (
  //     <div>
  //       {console.log(
  //         `DriverPage🚗destination: ${state.destination} passenger: ${state.passenger}`
  //       )}
  //       <h1>{location.destination}</h1>
  //     </div>
  //   );
  // }*/

  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState(people);

  useEffect(() => {
    axios
      .get("https://netflix-clone-back.onrender.com/characters")
      .then((data) => {
        const characters = [];
        for (let i = 0; i < data.data.length; i += 1) {
          if (data.data[i].vehicles.length > 0) {
            characters.push(data.data[i]);
            console.warn(data.data[i]);
          }
        }
        console.warn("characters : ", characters);

        const randomCharacters = [];
        for (let j = 0; j < 5; j += 1) {
          const randomDrivers =
            characters[Math.floor(Math.random() * characters.length)];

          const verifName = randomDrivers.name;
          if (!randomCharacters.find(({ name }) => name === verifName)) {
            randomCharacters.push(randomDrivers);
          } else {
            j -= 1;
          }
        }
        setPeople(randomCharacters);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="driver-page">
      {" "}
      <div className="filterBlock">
        <Filters setFilteredPeople={setFilteredPeople} people={people} />
      </div>
      {people.length === 0 ? (
        <div className="loader">
          <p className="loaderText">
            Un peu de patience, nous consultons les chauffeurs disponibles.
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
        filteredPeople.map((driver) => {
          return (
            <div key={driver.name} className={driver.name}>
              <DriverCard driver={driver} state={state} />
            </div>
          );
        })
      )}
    </div>
  );
}
