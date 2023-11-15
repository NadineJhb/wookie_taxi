import PropTypes, { arrayOf } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DriverCard({ driver, stateSearchBar, checkFavorite }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

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
    driver.vehicles[0].passengers >= stateSearchBar.passenger.toString() &&
    !(checkFavorite === true && favorite === false) && (
      <div className="driver-card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={`src/public/images/characters/${driver.name}.jpg`}
                alt="Avatar"
                className="driverImg"
              />
            </div>
            <div className="flip-card-back">
              <h1>{driver.name}</h1>
              <p>{driver.homeworld}</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="drivername-favorite">
            <h2>{driver.name}</h2>
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
                <strong>Homeworld:</strong> {driver.homeworld}
              </p>
              <p>
                <strong>Vehicle :</strong> {driver.vehicles[0].name}{" "}
              </p>
              <p>
                <strong>Passengers :</strong> {driver.vehicles[0].passengers}{" "}
                seats left
              </p>
              <p>
                <strong>Max speed :</strong>{" "}
                {driver.vehicles[0].max_atmosphering_speed} mph
              </p>
              <p>
                <strong>Crew members on board:</strong>{" "}
                {driver.vehicles[0].crew}
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
              <button type="button" className="book" onClick={handleClick}>
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
    homeworld: PropTypes.string.isRequired,
    vehicles: arrayOf(
      PropTypes.shape({
        crew: PropTypes.number.isRequired,
        max_atmosphering_speed: PropTypes.number.isRequired,
        passenger: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  stateSearchBar: PropTypes.func.isRequired,
  checkFavorite: PropTypes.func.isRequired,
};

export default DriverCard;
