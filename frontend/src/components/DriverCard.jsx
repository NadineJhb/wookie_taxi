import PropTypes, { arrayOf } from "prop-types";
import { useNavigate } from "react-router-dom";

function DriverCard({ driver, stateSearchBar }) {
  console.warn(driver);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/captcha", {
      state: {
        destination: stateSearchBar.destination,
        passenger: stateSearchBar.passenger,
        Name: driver.name,
      },
    });
  };

  return (
    driver.vehicles.length > 0 &&
    driver.vehicles[0].passengers === stateSearchBar.passenger.toString() && (
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
            <div className="isFavorite"> &nbsp;</div>
          </div>

          <button type="button" onClick={handleClick}>
            Réserver
          </button>
          <div className="info-vehicleImage-button">
            <div className="card-information">
              <p>
                <strong>Passengers :</strong> {driver.vehicles[0].passengers}{" "}
                seats left
              </p>
              <p>
                <strong>Max atmosphering speed :</strong>{" "}
                {driver.vehicles[0].max_atmosphering_speed} mph
              </p>
              <p>
                <strong>Driver eye color:</strong> {driver.eye_color} eyes
              </p>
              <p>
                <strong>Crew :</strong> {driver.vehicles[0].crew} crew members
                on board
              </p>
            </div>
            <div className="vehicleImage-button">
              <img
                src={`src/public/images/starship/${driver.vehicles[0].name}.png`}
                alt="kana"
                className="starshipImg"
              />
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
    vehicles: arrayOf(
      PropTypes.shape({
        crew: PropTypes.number.isRequired,
        max_atmosphering_speed: PropTypes.number.isRequired,
        passenger: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  stateSearchBar: PropTypes.func.isRequired,
};

export default DriverCard;
