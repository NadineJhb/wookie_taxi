import "../style/_driver.scss";
import axios from "axios";
import { useState } from "react";
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
  const [people, setPeople] = useState([]);

  axios.get("https://swapi.dev/api/people/?page=3").then((res) => {
    setPeople(res.data.results);
  });

  return people.map((driver) => {
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
  });
}
