import "../style/_driver.scss";

export default function Driver() {
  return (
    <div className="card">
      <div className="driverImgDiv">
        <img
          src="src/public/images/characters/yoda.jpg"
          alt="Avatar"
          className="driverImg"
        />
      </div>
      <div className="info-container">
        <h2>Maître Yoda</h2>
        <p>
          <strong>Espèce :</strong> Inconnue
        </p>
        <p>
          <strong>Origine :</strong> Dagobah
        </p>
        <p>
          <strong>Véhicule :</strong> Snowspeeder bike
        </p>
        <p>
          <strong>Catégorie :</strong> Speeder
        </p>
        <p>
          <strong>Passagers :</strong> 1
        </p>
      </div>
      <div className="right-side">
        <div className="isFavorite" />
        <img
          src="src/public/images/starship/kana.png"
          alt="kana"
          className="starshipImg"
        />
        <button type="button">Réserver</button>
      </div>
    </div>
  );
}
