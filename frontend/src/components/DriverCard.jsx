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
      },
    });
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
              src={`src/public/images/starship/${vehicle.name}.jpg`}
              alt="kana"
              className="starshipImg"
            />
            <button type="button" onClick={handleClick}>
              Réserver
            </button>
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
