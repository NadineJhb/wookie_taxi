import PropTypes from "prop-types";

function DriverCard({
  driverName,
  birthYear,
  height,
  gender,
  skinColor,
  eyeColor,
}) {
  return (
    <div className="card">
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
            <strong>Birth year :</strong> {birthYear}
          </p>
          <p>
            <strong>Height :</strong> {height}cm
          </p>
          <p>
            <strong>Gender :</strong> {gender}
          </p>
          <p>
            <strong>Skin :</strong> {skinColor}
          </p>
          <p>
            <strong>Eyes :</strong> {eyeColor}
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="isFavorite">
          <img
            src="src/public/images/starship/kana.png"
            alt="kana"
            className="starshipImg"
          />
          <button type="button">Réserver</button>
        </div>
      </div>
    </div>
  );
}

DriverCard.propTypes = {
  driverName: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  skinColor: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
};

export default DriverCard;
