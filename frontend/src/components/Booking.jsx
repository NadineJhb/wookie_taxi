import "../style/_booking.scss";

function Booking() {
  return (
    <>
      <div className="booking-container">
        <h2>Merci pour votre réservation !</h2>
        <h3>Votre Wookie Taxi avec Dark Vador est confirmé.</h3>
      </div>
      <div>
        <p>Planète : Endor</p>
        <p>Planète : Tatooïne</p>
        <img
          src="./src/public/images/icons/stormtrooper_white.png"
          alt="icon"
        />
        <p>2 passagers</p>
        <img src="./src/public/images/icons/vehicle.png" alt="icon" />
        <p>Véhicule : Snowspeeder</p>
      </div>
      <div>
        <button type="button" className="return-home">
          Réserver
        </button>
      </div>
    </>
  );
}

export default Booking;
