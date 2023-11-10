import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DriverCard({ driverName, driverVehicleUrl, stateSearchBar }) {
  const [vehicle, setVehicle] = useState(undefined);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/captcha", {
      state: {
        destination: stateSearchBar.destination,
        passenger: stateSearchBar.passenger,
        Name: driverName,
        driverVehicleUrl: vehicle.name,
      },
    });
    // console.log(vehicle.name)
  };
  useEffect(() => {
    if (driverVehicleUrl) {
      axios.get(driverVehicleUrl).then((res) => {
        setVehicle(res.data);
      });
    }
  }, []);

  return (
    vehicle &&
    vehicle.passengers === stateSearchBar.passenger && (
      <div className="driver-card">
        <div className="driverImgDiv">
          <img
            src={`src/public/images/characters/${driverName}.jpg`}
            alt="Avatar"
            className="driverImg"
          />
        </div>
        <div className="info-container">
          <div className="drivername-favorite">
            <h2>{driverName}</h2>
            <div className="isFavorite"> &nbsp;</div>
          </div>

          <div className="info-vehicleImage-button">
            <div className="card-information">
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
            <div className="vehicleImage-button">
              <div className="vehicleImage-container">
                <img
                  src={`src/public/images/starship/${vehicle.name}.png`}
                  alt="kana"
                  className="starshipImg"
                />
              </div>
              <button type="button" onClick={handleClick}>
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

DriverCard.propTypes = {
  driverName: PropTypes.string.isRequired,
  driverVehicleUrl: PropTypes.shape.isRequired,
  stateSearchBar: PropTypes.string.isRequired,
  state: PropTypes.shape({ passenger: PropTypes.string.isRequired }).isRequired,
};

export default DriverCard;
