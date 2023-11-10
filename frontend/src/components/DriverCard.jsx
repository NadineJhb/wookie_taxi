import PropTypes, { arrayOf } from "prop-types";

function DriverCard({ driver, state }) {
  console.warn("driverCard here");

  return (
    driver.vehicles[0] &&
    driver.vehicles[0].passengers === state.passenger.toString() && (
      <div className="driver-card">
        <div className="driverIdBlock">
          <div className="driverImgDiv">
            <img
              src={`src/public/images/characters/${driver.name}.jpg`}
              alt="Avatar"
              className="driverImg"
            />
          </div>
          <div className="info-container">
            <h2>{driver.name}</h2>
            <p>
              <strong>Vehicle name</strong> {driver.vehicles.name}
            </p>
            <p>
              <strong>Max atmosphering speed :</strong>{" "}
              {driver.vehicles[0].max_atmosphering_speed} mph
            </p>
            <p>
              <strong>Passengers :</strong> {driver.vehicles[0].passengers}{" "}
              seats left
            </p>
            <p>
              <strong>Driver eye color:</strong> {driver.eye_color} eyes
            </p>
            <p>
              <strong>Crew :</strong> {driver.vehicles[0].crew} crew members on
              board
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="isFavorite">
            <img
              src={`src/public/images/starship/${driver.vehicles[0].name}.jpg`}
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
  state: PropTypes.func.isRequired,
};

export default DriverCard;
