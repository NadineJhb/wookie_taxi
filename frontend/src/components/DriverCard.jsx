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
    parseInt(driver.vehicles[0].passengers, 10) >=
      parseInt(stateSearchBar.passenger, 10) &&
    !(checkFavorite === true && favorite === false) && (
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
                Book your ride
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
    height: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    vehicles: arrayOf(
      PropTypes.shape({
        crew: PropTypes.string.isRequired,
        max_atmosphering_speed: PropTypes.string.isRequired,
        passenger: PropTypes.string,
      })
    ),
  }).isRequired,
  stateSearchBar: PropTypes.shape({
    destination: PropTypes.string,
    passenger: PropTypes.string,
  }).isRequired,
  checkFavorite: PropTypes.bool.isRequired,
};

export default DriverCard;
