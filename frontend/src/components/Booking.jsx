import "../style/_booking.scss";
import Logo from "./Logo";

function Booking() {
  return (
    <>
      <Logo />
      <div className="booking-container">
        <div className="booking-title">
          <h2>Merci pour votre réservation !</h2>
        </div>
        <h3 className="booking-driver-text">
          Votre Wookie Taxi avec &nbsp;
          <h3 className="booking-drivername">Dark Vador</h3>
          &nbsp; est confirmé.
        </h3>
        <div className="booking-images-infos">
          <img
            className="booking-driver-photo"
            src="src/public/images/characters/yoda.jpg"
            alt="booking-driver"
          />
          <div className="booking-infos">
            <div className="booking-planet-vehiclephoto">
              <div className="booking-depart-destination">
                <p>Départ : Endor</p>
                <p>Destination : Tatooïne</p>
              </div>
              <img
                className="booking-vehicle-photo"
                src="src/public/images/starship/Snowspeeder.webp"
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
                <p>2 passagers</p>
              </div>
              <div className="booking-vehicle">
                <img
                  className="icon-vehicle"
                  src="./src/public/images/icons/vehicle.png"
                  alt="icon"
                />
                <p>Véhicule : Snowspeeder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-home">
          <button type="button" className="return-home">
            Revenir à l'accueil
          </button>
        </div>
      </div>
    </>
  );
}

export default Booking;
