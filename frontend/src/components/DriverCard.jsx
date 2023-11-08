import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

function DriverCard({ driverName, driverVehicleUrl }) {
  const [vehicle, setVehicle] = useState(undefined);

  useEffect(() => {
    if (driverVehicleUrl) {
      axios.get(driverVehicleUrl).then((res) => {
        setVehicle(res.data);
      });
    }
  }, []);

  return (
    vehicle && (
      <div className="driver-card">
        <div className="driverIdBlock">
          <div className="driverImgDiv">
            <img
              src={`src/public/images/characters/${driverName}.jpg`}
              alt="Avatar"
              className="driverImg"
            />
          </div>
          <div className="info-container">
            <h2>{driverName}</h2>
            <p>
              <strong>Vehicle name</strong> {vehicle.name}
            </p>
            <p>
              <strong>Vehicle model :</strong> {vehicle.model}
            </p>
            <p>
              <strong>Passengers :</strong> {vehicle.passengers}
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="isFavorite">
            <img
              src="src/public/images/starship/kana.png"
              alt="kana"
              className="starshipImg"
            />
            <button type="button">Réserver</button>
          </div>
        </div>
      </div>
    )
  );
}

DriverCard.propTypes = {
  driverName: PropTypes.string.isRequired,
  driverVehicleUrl: PropTypes.shape.isRequired,
};

export default DriverCard;
