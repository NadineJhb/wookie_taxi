import "../style/_driver.scss";

export default function Driver() {
  return (
    <div className="card">
      <img
        src="src/public/images/characters/yoda.jpg"
        alt="Avatar"
        className="w-100"
      />
      <div className="info-container">
        <h2>Maître Yoda</h2>
        <p>Espèce: Inconnue</p>
        <p>Origine: Dagobah</p>
        <p>Véhicule: Snowspeeder bike</p>
        <p>Catégorie: Speeder</p>
        <p>Passagers: 1</p>
        <button type="button">Réserver</button>
      </div>
    </div>
  );
}
