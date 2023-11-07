import axios from "axios";
import { useState, useEffect } from "react";
import DriverCard from "./DriverCard";

/* Code suivant pour faire un fltrage 
import { useLocation } from "react-router-dom";

 export default function Driver() {
  const { state } = useLocation();
 return (
    <div>
      {console.log(`DriverPage🚗destination: ${state.destination} passenger: ${state.passenger}`) }
      <h1>{location.destination}</h1>
    </div>
  );
} 
*/
export default function Driver() {
  const [peoples, setPeoples] = useState([]);
  const array = [
    "https://swapi.dev/api/people",
    "https://swapi.dev/api/people/?page=2",
    //  "https://swapi.dev/api/people/?page=3",
    //  "https://swapi.dev/api/people/?page=4",
    //  "https://swapi.dev/api/people/?page=5",
    //  "https://swapi.dev/api/people/?page=6",
    //  "https://swapi.dev/api/people/?page=7",
    //  "https://swapi.dev/api/people/?page=8",
    //  "https://swapi.dev/api/people/?page=9",
  ];

  useEffect(() => {
    axios
      .all(array.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        const characters = [];
        for (let i = 0; i < data.length; i += 1) {
          // console.log(data[i].data.results[0].name);
          for (let k = 0; k < 10; k += 1) {
            // console.log(data[i].data.results[k]);

            // console.log(randomDrivers);
            if (data[i].data.results[k].vehicles.length > 0) {
              characters.push(data[i].data.results[k]);
            }
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
        setPeoples(randomCharacters);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {peoples.length === 0 ? (
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
        peoples.map((driver) => {
          return (
            <DriverCard
              driverName={driver.name}
              birthYear={driver.birth_year}
              height={driver.height}
              gender={driver.gender}
              skinColor={driver.skin_color}
              eyeColor={driver.eye_color}
              driverVehicleUrl={driver.vehicles[0]}
            />
          );
        })
      )}
    </div>
  );
}
