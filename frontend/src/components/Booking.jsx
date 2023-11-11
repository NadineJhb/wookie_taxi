import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/_booking.scss";
import Logo from "./Logo";

function Booking() {
  const { state } = useLocation();
  console.warn(state.name);
  return (
    <>
      <Logo />
      <div className="booking-container">
        <div className="booking-title">
          <h2>Thank you for your booking !</h2>
        </div>
        <h3 className="booking-driver-text">
          Your Wookie Taxi with &nbsp;
          <h3 className="booking-drivername">{state.name}</h3>
          &nbsp; is confirmed.
        </h3>
        <div className="booking-images-infos">
          <img
            className="booking-driver-photo"
            src={`src/public/images/characters/${state.name}.jpg`}
            alt="booking-driver"
          />
          <div className="booking-infos">
            <div className="booking-planet-vehiclephoto">
              <div className="booking-depart-destination">
                <p>
                  <strong>Departure</strong> : Endor
                </p>
                <p>
                  <strong>Destination</strong> : {state.destination}
                </p>
              </div>
              <img
                className="booking-vehicle-photo"
                src={`src/public/images/starship/${state.driverVehicleUrl}.png`}
                alt="booking-vehicle"
              />
            </div>
            <div className="booking-passenger-vehicle">
              <div className="booking-passenger">
                <img
                  className="icon-passenger"
                  src="src/public/images/icons/stormtrooper_white.png"
                  alt="icon"
                />
                <p>
                  <strong>{state.passenger} passenger</strong>
                </p>
              </div>
              <div className="booking-vehicle">
                <img
                  className="icon-vehicle"
                  src="./src/public/images/icons/vehicle.png"
                  alt="icon"
                />
                <p>
                  <strong>Vehicle :</strong> {state.driverVehicleUrl}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-home">
          <button type="button" className="return-home">
            <NavLink to="/">Return to homepage</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

Booking.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    driverVehicleUrl: PropTypes.string.isRequired,
    passenger: PropTypes.number.isRequired,
  }).isRequired,
};

export default Booking;
