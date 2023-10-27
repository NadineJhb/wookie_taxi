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
          <div className="container-starship">
            <h2>Starship</h2>
            <p>SnowSpeeder</p>
            <p>Light Freighter</p>
            <p>Assault Starfighter</p>
            <p>Medium transport</p>
            <div className="favorite">
              <h2>Favorite</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
