function Filters() {
  return (
    <div>
      <div className="container-filters">
        <h1> Filtrer par</h1>
        <div className="container-species">
          <h2>Species</h2>
          <p>Humanoïde</p>
          <p>Droïde</p>
          <p>Wookie</p>
          <p>Sith</p>
          <p>Unknowed</p>
        </div>
        <div className="container-starship">
          <h2>Starship</h2>

          <p>SnowSpeeder</p>

          <p>Light Freighter</p>

          <p>Assault Starfighter</p>

          <p>Medium transport</p>
        </div>
        <div className="Favorite">
          <h3>Favorite</h3>
        </div>
      </div>
    </div>
  );
}

export default Filters;
