import PropTypes, { arrayOf } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DriverCard({ driver, stateSearchBar, isFavorite }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(isFavorite);

  const handleClick1 = () => {
    setFavorite(!favorite);
  };

  const handleClick = () => {
    navigate("/captcha", {
      state: {
        destination: stateSearchBar.destination,
        passenger: stateSearchBar.passenger,
        Name: driver.name,
        driverVehicleUrl: driver.vehicles[0].name,
      },
    });
  };

  return (
    driver.vehicles.length > 0 &&
    driver.vehicles[0].passengers >= stateSearchBar.passenger.toString() && (
      <div className="driver-card">
        <div className="driverImgDiv">
          <img
            src={`src/public/images/characters/${driver.name}.jpg`}
            alt="Avatar"
            className="driverImg"
          />
        </div>
        <div className="info-container">
          <div className="drivername-favorite">
            <h2>{driver.name}</h2>
            {/* <div className="isFavorite"> &nbsp;</div> */}
            <button
              type="button"
              className={favorite ? "isFavorite" : "notFavorite"}
              onClick={handleClick1}
            >
              <p> </p>
            </button>
          </div>

          <div className="info-vehicleImage-button">
            <div className="card-information">
              <p>
                <strong>Vehicle :</strong> {driver.vehicles[0].name}
              </p>
              <p>
                <strong>Passengers :</strong> {driver.vehicles[0].passengers}{" "}
                seats left
              </p>
              <p>
                <strong>Max atmosphering speed :</strong>{" "}
                {driver.vehicles[0].max_atmosphering_speed} mph
              </p>
              <p>
                <strong>Crew :</strong> {driver.vehicles[0].crew} crew members
                on board
              </p>
              <p>
                <strong>Driver eye color:</strong> {driver.eye_color} eyes
              </p>

              <p>
                <strong>Size :</strong> {driver.height} cm
              </p>
            </div>
            <div className="vehicleImage-button">
              <div className="vehicleImage-container">
                <img
                  src={`src/public/images/starship/${driver.vehicles[0].name}.png`}
                  alt="kana"
                  className="starshipImg"
                />
              </div>
              <button type="button" onClick={handleClick}>
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

DriverCard.propTypes = {
  driver: PropTypes.shape({
    name: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    vehicles: arrayOf(
      PropTypes.shape({
        crew: PropTypes.number.isRequired,
        max_atmosphering_speed: PropTypes.number.isRequired,
        passenger: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  stateSearchBar: PropTypes.func.isRequired,
  isFavorite: PropTypes.string.isRequired,
};

export default DriverCard;
