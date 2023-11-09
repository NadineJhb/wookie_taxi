import "../style/_driver.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function DriversCard() {
  const [peoples, setPeoples] = useState([]);
  const array = [
    "https://swapi.dev/api/people",
    "https://swapi.dev/api/people/?page=2",
    // "https://swapi.dev/api/people/?page=3",
    // "https://swapi.dev/api/people/?page=4",
    // "https://swapi.dev/api/people/?page=5",
    // "https://swapi.dev/api/people/?page=6",
    // "https://swapi.dev/api/people/?page=7",
    // "https://swapi.dev/api/people/?page=8",
    // "https://swapi.dev/api/people/?page=9",
  ];

  useEffect(() => {
    axios
      .all(array.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        // console.log(data[1]);

        const characters = [];
        for (let i = 0; i < data.length; i += 1) {
          // console.log(data[i].data.results[0].name);
          for (let k = 0; k < 10; k += 1) {
            // console.log(data[i].data.results[k]);

            // console.log(randomDrivers);
            characters.push(data[i].data.results[k]);

            const randomCharacters = [];
            for (let j = 0; j < 15; j += 1) {
              const randomDrivers =
                characters[Math.floor(Math.random() * characters.length)];

              const verifName = randomDrivers.name;
              if (!randomCharacters.find(({ name }) => name === verifName)) {
                randomCharacters.push(randomDrivers);
              }

              setPeoples(randomCharacters);
              // console.log(characters)
              // console.log(peoples)
            }
          }
        }
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
        peoples.map((person) => {
          return (
            <div className="driver-card">
              <div className="driverIdBlock">
                <div className="driverImgDiv">
                  <img
                    src="src/public/images/characters/yoda.jpg"
                    alt="Avatar"
                    className="driverImg"
                  />
                </div>
                <div className="info-container">
                  <h2>{person.name}</h2>
                  <p>
                    <strong>Birth year :</strong> {person.birth_year}
                  </p>
                  <p>
                    <strong>Height :</strong> {person.height} cm
                  </p>
                  <p>
                    <strong>Gender :</strong> {person.gender}
                  </p>
                  <p>
                    <strong>Skin :</strong> {person.skin_color}
                  </p>
                  <p>
                    <strong>Eyes :</strong> {person.eye_color}
                  </p>
                </div>
              </div>
              <div className="right-side">
                <div className="isFavorite" />
                <img
                  src="src/public/images/starship/kana.png"
                  alt="kana"
                  className="starshipImg"
                />
                <button type="button">Réserver</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DriversCard;
