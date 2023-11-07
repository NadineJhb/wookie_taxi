import "../style/_driver.scss";
import axios from "axios";
import { useState } from "react";

/* Code suivant pour faire un fltrage
import { useLocation } from "react-router-dom";

export default function Driver() {
  const { state } = useLocation();
  return (
    <div>
      {console.log(
        `DriverPage🚗destination: ${state.destination} passenger: ${state.passenger}`
      )}
      <h1>{location.destination}</h1>
    </div>
  );
} */

export default function Driver() {
  const [people, setPeople] = useState([]);

  axios.get("https://swapi.dev/api/people").then((res) => {
    setPeople(res.data.results);
  });

  return people.map((person) => {
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
  });
}
