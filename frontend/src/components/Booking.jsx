import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/_booking.scss";
import Logo from "./Logo";

function Booking() {
  const { state } = useLocation();
  return (
    <>
      <Logo />
      <div className="booking-container">
        <div className="booking-title">
          <h2>Merci pour votre réservation !</h2>
        </div>
        <h3 className="booking-driver-text">
          Votre Wookie Taxi avec &nbsp;
          <h3 className="booking-drivername">{state.name}</h3>
          &nbsp; est confirmé.
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
                <p>Départ : Endor</p>
                <p>Destination : {state.destination}</p>
              </div>
              <img
                className="booking-vehicle-photo"
                src="src/public/images/starship/dod.png"
                alt="booking-vehicle"
              />
            </div>
            <div className="booking-passenger-vehicle">
              <div className="booking-passenger">
                <img
                  className="icon-passenger"
                  src="./src/public/images/icons/stormtrooper_white.png"
                  alt="icon"
                />
                <p>{state.passenger}</p>
              </div>
              <div className="booking-vehicle">
                <img
                  className="icon-vehicle"
                  src="./src/public/images/icons/vehicle.png"
                  alt="icon"
                />
                <p>Véhicule : {state.driverVehicleUrl}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-home">
          <button type="button" className="return-home">
            <NavLink to="/">Revenir à l'accueil</NavLink>
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
